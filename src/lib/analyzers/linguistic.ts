// Linguistic pattern analysis for hallucination detection

export interface LinguisticFlag {
  text: string
  startOffset: number
  endOffset: number
  type: 'hedging' | 'weasel' | 'overconfidence' | 'temporal'
  severity: 'low' | 'medium' | 'high'
  explanation: string
}

export interface LinguisticResult {
  hedgingDensity: number
  flags: LinguisticFlag[]
  weaselWordCount: number
  overconfidenceMarkers: number
  temporalClaims: number
  overallTone: 'assertive' | 'mixed' | 'hedged'
}

// Hedging phrases that often signal uncertainty (or hallucination)
const HEDGING_PATTERNS = {
  high: [
    "it's worth noting that",
    "it's important to note",
    "as of my last update",
    "as of my knowledge cutoff",
    "as of my training",
    "i believe",
    "if i recall correctly",
    "to the best of my knowledge",
    "i think",
    "i'm not entirely sure",
    "i may be wrong",
    "from what i understand",
    "based on my understanding",
  ],
  medium: [
    "typically",
    "usually",
    "often",
    "likely",
    "probably",
    "in most cases",
    "it appears that",
    "seemingly",
    "may or may not",
    "could potentially",
    "generally speaking",
    "in general",
    "for the most part",
  ],
  low: [
    "perhaps",
    "possibly",
    "might",
    "could",
    "some argue",
    "there are those who",
    "it seems",
    "apparently",
  ],
}

// Weasel words that add fake authority
const WEASEL_PATTERNS = [
  "studies show",
  "research indicates",
  "experts say",
  "scientists believe",
  "according to experts",
  "many people think",
  "it is widely known",
  "it is commonly believed",
  "some sources suggest",
  "reports indicate",
  "data suggests",
  "evidence shows",
]

// Overconfidence markers (confident language about uncertain things)
const OVERCONFIDENCE_PATTERNS = [
  "definitely",
  "certainly",
  "absolutely",
  "without a doubt",
  "there is no question",
  "it is clear that",
  "obviously",
  "clearly",
  "undoubtedly",
  "unquestionably",
]

// Temporal claims that may be outdated
const TEMPORAL_PATTERNS = [
  "currently",
  "as of now",
  "at present",
  "the latest",
  "recently",
  "the newest",
  "the most recent",
  "today",
  "this year",
  /\b20[0-9]{2}\b/, // Year references
  /version \d+\.\d+/i, // Version numbers
]

function findPatternMatches(
  text: string, 
  patterns: (string | RegExp)[], 
  type: LinguisticFlag['type'],
  severity: LinguisticFlag['severity'],
  explanationTemplate: string
): LinguisticFlag[] {
  const flags: LinguisticFlag[] = []
  const lowerText = text.toLowerCase()
  
  for (const pattern of patterns) {
    if (pattern instanceof RegExp) {
      const matches = text.matchAll(new RegExp(pattern, 'gi'))
      for (const match of matches) {
        if (match.index !== undefined) {
          flags.push({
            text: match[0],
            startOffset: match.index,
            endOffset: match.index + match[0].length,
            type,
            severity,
            explanation: explanationTemplate.replace('{match}', match[0]),
          })
        }
      }
    } else {
      let searchFrom = 0
      while (true) {
        const index = lowerText.indexOf(pattern.toLowerCase(), searchFrom)
        if (index === -1) break
        
        flags.push({
          text: text.substring(index, index + pattern.length),
          startOffset: index,
          endOffset: index + pattern.length,
          type,
          severity,
          explanation: explanationTemplate.replace('{match}', pattern),
        })
        searchFrom = index + 1
      }
    }
  }
  
  return flags
}

export function analyzeLinguisticPatterns(text: string): LinguisticResult {
  const flags: LinguisticFlag[] = []
  
  // Find hedging patterns
  flags.push(...findPatternMatches(
    text, 
    HEDGING_PATTERNS.high, 
    'hedging', 
    'high',
    'Strong hedging phrase "{match}" suggests uncertainty about the claim'
  ))
  flags.push(...findPatternMatches(
    text, 
    HEDGING_PATTERNS.medium, 
    'hedging', 
    'medium',
    'Hedging word "{match}" indicates the AI may be uncertain'
  ))
  flags.push(...findPatternMatches(
    text, 
    HEDGING_PATTERNS.low, 
    'hedging', 
    'low',
    'Mild hedging with "{match}"'
  ))
  
  // Find weasel words
  const weaselFlags = findPatternMatches(
    text,
    WEASEL_PATTERNS,
    'weasel',
    'medium',
    '"{match}" is a vague authority claim — ask for specific sources'
  )
  flags.push(...weaselFlags)
  
  // Find overconfidence markers
  const overconfidenceFlags = findPatternMatches(
    text,
    OVERCONFIDENCE_PATTERNS,
    'overconfidence',
    'medium',
    'Overconfident language "{match}" — verify the underlying claim'
  )
  flags.push(...overconfidenceFlags)
  
  // Find temporal claims
  const temporalFlags = findPatternMatches(
    text,
    TEMPORAL_PATTERNS,
    'temporal',
    'low',
    'Time-sensitive claim "{match}" may be outdated'
  )
  flags.push(...temporalFlags)
  
  // Calculate metrics
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0)
  const hedgingFlags = flags.filter(f => f.type === 'hedging')
  const hedgingDensity = sentences.length > 0 
    ? hedgingFlags.length / sentences.length 
    : 0
  
  // Determine overall tone
  let overallTone: 'assertive' | 'mixed' | 'hedged' = 'assertive'
  if (hedgingDensity > 0.3) {
    overallTone = 'hedged'
  } else if (hedgingDensity > 0.1 || flags.length > 5) {
    overallTone = 'mixed'
  }
  
  return {
    hedgingDensity,
    flags,
    weaselWordCount: weaselFlags.length,
    overconfidenceMarkers: overconfidenceFlags.length,
    temporalClaims: temporalFlags.length,
    overallTone,
  }
}
