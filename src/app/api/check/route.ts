import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { analyzeLinguisticPatterns, LinguisticFlag } from '@/lib/analyzers/linguistic'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

interface CheckResult {
  trustScore: number
  summary: string
  flags: Array<{
    text: string
    startOffset: number
    endOffset: number
    type: string
    severity: 'low' | 'medium' | 'high'
    explanation: string
    category: string
  }>
  categoryScores: {
    factualAccuracy: number
    linguisticConfidence: number
    temporalCurrency: number
    overallCoherence: number
  }
  modelDetected: string | null
  processingTimeMs: number
}

// Rate limiting (simple in-memory for now)
const rateLimit = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT = 5 // checks per day for free tier
const RATE_WINDOW = 24 * 60 * 60 * 1000 // 24 hours

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = rateLimit.get(ip)
  
  if (!record || now > record.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_WINDOW })
    return true
  }
  
  if (record.count >= RATE_LIMIT) {
    return false
  }
  
  record.count++
  return true
}

export async function POST(req: NextRequest) {
  const startTime = Date.now()
  
  try {
    // Get client IP for rate limiting
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 
               req.headers.get('x-real-ip') || 
               'unknown'
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Free tier allows 5 checks per day.' },
        { status: 429 }
      )
    }
    
    const { text, context } = await req.json()
    
    // Validate input
    if (!text || typeof text !== 'string') {
      return NextResponse.json(
        { error: 'Text is required' },
        { status: 400 }
      )
    }
    
    if (text.length < 50) {
      return NextResponse.json(
        { error: 'Text must be at least 50 characters' },
        { status: 400 }
      )
    }
    
    if (text.length > 50000) {
      return NextResponse.json(
        { error: 'Text must be under 50,000 characters' },
        { status: 400 }
      )
    }
    
    // Run linguistic analysis
    const linguisticResult = analyzeLinguisticPatterns(text)
    
    // Run Claude meta-analysis
    const claudeAnalysis = await runClaudeAnalysis(text, linguisticResult, context)
    
    // Compute final score
    const result = computeFinalResult(text, linguisticResult, claudeAnalysis, startTime)
    
    return NextResponse.json(result)
    
  } catch (error) {
    console.error('Check error:', error)
    return NextResponse.json(
      { error: 'Analysis failed. Please try again.' },
      { status: 500 }
    )
  }
}

async function runClaudeAnalysis(
  text: string, 
  linguisticResult: ReturnType<typeof analyzeLinguisticPatterns>,
  context?: string
): Promise<{
  trustScore: number
  summary: string
  additionalFlags: Array<{
    text: string
    explanation: string
    category: string
    severity: 'low' | 'medium' | 'high'
  }>
  modelDetected: string | null
  factualConcerns: string[]
}> {
  const systemPrompt = `You are a hallucination detection expert. Analyze AI-generated text for signs of fabrication, hallucination, or unreliable information.

Your job:
1. Identify claims that seem fabricated or unverifiable
2. Flag specific facts, statistics, or citations that may be invented
3. Detect which AI model likely generated the text
4. Assess overall trustworthiness

Be calibrated: 80-100 = highly trustworthy, 50-79 = some concerns, 30-49 = significant issues, 0-29 = major fabrication detected.

Respond with JSON only (no markdown):
{
  "trustScore": <0-100>,
  "summary": "<1-2 sentence assessment>",
  "additionalFlags": [
    {
      "text": "<exact quote from text>",
      "explanation": "<why this is flagged>",
      "category": "fabricated_fact|unverifiable|citation_concern|outdated|knowledge_bleed",
      "severity": "low|medium|high"
    }
  ],
  "modelDetected": "<gpt-4|claude|gemini|llama|unknown|null>",
  "factualConcerns": ["<list of specific claims that need verification>"]
}`

  const userPrompt = `Analyze this AI-generated text for hallucinations:

${context ? `Context (what was asked): ${context}\n\n` : ''}TEXT TO ANALYZE:
"""
${text.substring(0, 15000)}
"""

LINGUISTIC ANALYSIS RESULTS:
- Hedging density: ${(linguisticResult.hedgingDensity * 100).toFixed(1)}%
- Weasel words found: ${linguisticResult.weaselWordCount}
- Overconfidence markers: ${linguisticResult.overconfidenceMarkers}
- Temporal claims: ${linguisticResult.temporalClaims}
- Overall tone: ${linguisticResult.overallTone}

Provide your hallucination analysis as JSON.`

  try {
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 2000,
      messages: [
        { role: 'user', content: userPrompt }
      ],
      system: systemPrompt,
    })
    
    const content = response.content[0]
    if (content.type !== 'text') {
      throw new Error('Unexpected response type')
    }
    
    // Parse JSON from response
    const jsonMatch = content.text.match(/\{[\s\S]*\}/)
    if (!jsonMatch) {
      throw new Error('No JSON in response')
    }
    
    return JSON.parse(jsonMatch[0])
    
  } catch (error) {
    console.error('Claude analysis error:', error)
    // Return fallback analysis
    return {
      trustScore: 50,
      summary: 'Unable to complete deep analysis. Score based on linguistic patterns only.',
      additionalFlags: [],
      modelDetected: null,
      factualConcerns: [],
    }
  }
}

function computeFinalResult(
  text: string,
  linguisticResult: ReturnType<typeof analyzeLinguisticPatterns>,
  claudeAnalysis: Awaited<ReturnType<typeof runClaudeAnalysis>>,
  startTime: number
): CheckResult {
  // Combine flags
  const allFlags = [
    ...linguisticResult.flags.map(f => ({
      ...f,
      category: f.type,
    })),
    ...claudeAnalysis.additionalFlags.map(f => {
      // Find position in text
      const index = text.toLowerCase().indexOf(f.text.toLowerCase().substring(0, 50))
      return {
        text: f.text,
        startOffset: index >= 0 ? index : 0,
        endOffset: index >= 0 ? index + f.text.length : f.text.length,
        type: 'factual',
        severity: f.severity,
        explanation: f.explanation,
        category: f.category,
      }
    }),
  ]
  
  // Sort flags by position
  allFlags.sort((a, b) => a.startOffset - b.startOffset)
  
  // Compute category scores
  const linguisticScore = Math.max(0, 100 - (linguisticResult.hedgingDensity * 100) - (linguisticResult.weaselWordCount * 5))
  const temporalScore = Math.max(0, 100 - (linguisticResult.temporalClaims * 10))
  
  const categoryScores = {
    factualAccuracy: claudeAnalysis.trustScore,
    linguisticConfidence: Math.round(linguisticScore),
    temporalCurrency: Math.round(temporalScore),
    overallCoherence: Math.round((claudeAnalysis.trustScore + linguisticScore) / 2),
  }
  
  // Final weighted score
  const trustScore = Math.round(
    claudeAnalysis.trustScore * 0.5 +
    linguisticScore * 0.3 +
    temporalScore * 0.2
  )
  
  return {
    trustScore: Math.min(100, Math.max(0, trustScore)),
    summary: claudeAnalysis.summary,
    flags: allFlags,
    categoryScores,
    modelDetected: claudeAnalysis.modelDetected,
    processingTimeMs: Date.now() - startTime,
  }
}
