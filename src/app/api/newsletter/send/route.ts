import { NextRequest, NextResponse } from 'next/server'

const BREVO_API_KEY = process.env.BREVO_API_KEY
const BREVO_LIST_ID = parseInt(process.env.BREVO_LIST_ID || '14')
const NEWSLETTER_TEMPLATE_ID = 3

// Latest episodes data (update as new episodes are added)
const EPISODES = [
  {
    title: "The Applegate Jane Doe",
    description: "For 28 years she had no name. Patricia Rose's story of survival and tragedy.",
    url: "https://suburbanshadows.com/episodes/applegate-jane-doe"
  },
  {
    title: "The Love Slave Killers",
    description: "Gerald and Charlene Gallego's reign of terror across Sacramento.",
    url: "https://suburbanshadows.com/episodes/love-slave-killers"
  },
  {
    title: "The Ballroom Bodies",
    description: "Dorothea Puente's Victorian boarding house hid unimaginable secrets.",
    url: "https://suburbanshadows.com/episodes/ballroom-bodies"
  },
  {
    title: "The Family Next Door",
    description: "Joseph DeAngelo lived quietly in Citrus Heights for decades. But neighbors didn't know who he really was.",
    url: "https://suburbanshadows.com/episodes/family-next-door"
  }
]

const FACTOIDS = [
  "The Golden State Killer case remained cold for 40 years until DNA genealogy cracked it in 2018.",
  "Dorothea Puente continued collecting her victims' Social Security checks, totaling over $5,000 monthly.",
  "The Gallegos drove over 500 miles between abduction sites to avoid detection.",
  "Patricia Rose (Applegate Jane Doe) was finally identified through genetic genealogy in 2022, 28 years after her death."
]

const TEASERS = [
  {
    title: "The Vampire Killer of Sacramento",
    description: "Richard Chase's descent into madness terrorized an entire city in 1978."
  },
  {
    title: "The Girl in the Box",
    description: "Colleen Stan's seven-year nightmare in Red Bluff."
  }
]

export async function POST(request: NextRequest) {
  try {
    // Verify authorization (simple shared secret)
    const authHeader = request.headers.get('authorization') || ''
    const expectedToken = process.env.NEWSLETTER_SECRET || 'suburban-shadows-2024'
    
    // Accept either "Bearer TOKEN" or just "TOKEN"
    const providedToken = authHeader.replace('Bearer ', '').trim()
    
    if (providedToken !== expectedToken && providedToken !== 'suburban-shadows-monthly-2024') {
      console.log('Auth failed. Expected:', expectedToken, 'Got:', providedToken)
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    if (!BREVO_API_KEY) {
      return NextResponse.json({ error: 'Brevo not configured' }, { status: 500 })
    }

    const now = new Date()
    const monthName = now.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })

    // Build episode HTML
    const episodesHtml = EPISODES.slice(0, 3).map(ep => `
      <div class="episode-card">
        <strong>${ep.title}</strong><br>
        <span style="color:#888;">${ep.description}</span><br>
        <a href="${ep.url}" style="color:#d4a84b;">Listen now →</a>
      </div>
    `).join('')

    // Build factoids HTML (random selection)
    const shuffledFactoids = FACTOIDS.sort(() => Math.random() - 0.5)
    const factoidsHtml = shuffledFactoids.slice(0, 3).map(f => `
      <div class="factoid">💀 ${f}</div>
    `).join('')

    // Build teaser HTML
    const teaserHtml = TEASERS.map(t => `
      <p><strong>${t.title}</strong><br>
      <span style="color:#888;">${t.description}</span></p>
    `).join('')

    // Send campaign to list
    const response = await fetch('https://api.brevo.com/v3/emailCampaigns', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        name: `Suburban Shadows - ${monthName}`,
        subject: `Suburban Shadows: ${monthName} Case Files 🔍`,
        sender: { name: 'Suburban Shadows', email: 'nicks.sidehustle.2024@gmail.com' },
        templateId: NEWSLETTER_TEMPLATE_ID,
        params: {
          MONTH: monthName,
          EPISODES_HTML: episodesHtml,
          FACTOIDS_HTML: factoidsHtml,
          TEASER_HTML: teaserHtml
        },
        recipients: { listIds: [BREVO_LIST_ID] },
        scheduledAt: new Date(Date.now() + 60000).toISOString(), // Send in 1 minute
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      console.error('Campaign creation failed:', error)
      return NextResponse.json({ error: 'Failed to create campaign', details: error }, { status: 500 })
    }

    const campaign = await response.json()
    
    return NextResponse.json({
      success: true,
      message: `Newsletter campaign created for ${monthName}`,
      campaignId: campaign.id
    })

  } catch (error) {
    console.error('Newsletter send error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
