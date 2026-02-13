import { NextRequest, NextResponse } from 'next/server'

const BREVO_API_KEY = process.env.BREVO_API_KEY
const BREVO_LIST_ID = parseInt(process.env.BREVO_LIST_ID || '5') // Suburban Shadows list

export async function POST(request: NextRequest) {
  try {
    const { email, source } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email required' },
        { status: 400 }
      )
    }

    if (!BREVO_API_KEY) {
      console.error('BREVO_API_KEY not configured')
      return NextResponse.json(
        { error: 'Newsletter service not configured' },
        { status: 500 }
      )
    }

    // Add contact to Brevo
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        email,
        listIds: [BREVO_LIST_ID],
        attributes: {
          SOURCE: source || 'suburban-shadows',
          SIGNUP_DATE: new Date().toISOString(),
        },
        updateEnabled: true,
      }),
    })

    if (response.ok || response.status === 204) {
      return NextResponse.json({
        success: true,
        message: 'Welcome to Suburban Shadows! Check your inbox.',
      })
    }

    const errorData = await response.json().catch(() => ({}))
    
    // Handle "already exists" as success
    if (errorData.code === 'duplicate_parameter') {
      return NextResponse.json({
        success: true,
        message: "You're already subscribed!",
      })
    }

    console.error('Brevo API error:', errorData)
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    )

  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json(
      { error: 'Server error. Please try again.' },
      { status: 500 }
    )
  }
}
