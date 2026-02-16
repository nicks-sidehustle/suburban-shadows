import { NextRequest, NextResponse } from 'next/server'

const BREVO_API_KEY = process.env.BREVO_API_KEY
const BREVO_LIST_ID = parseInt(process.env.BREVO_LIST_ID || '14') // Suburban Shadows list
const WELCOME_TEMPLATE_ID = 2 // Suburban Shadows - Welcome template

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
    const contactResponse = await fetch('https://api.brevo.com/v3/contacts', {
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

    const contactData = await contactResponse.json().catch(() => ({}))
    
    // Check if already subscribed
    const isAlreadySubscribed = contactData.code === 'duplicate_parameter'
    
    if (!contactResponse.ok && !isAlreadySubscribed) {
      console.error('Brevo contact API error:', contactData)
      return NextResponse.json(
        { error: 'Failed to subscribe. Please try again.' },
        { status: 500 }
      )
    }

    // Send welcome email (only for new subscribers)
    if (!isAlreadySubscribed) {
      try {
        await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
            'api-key': BREVO_API_KEY,
          },
          body: JSON.stringify({
            templateId: WELCOME_TEMPLATE_ID,
            to: [{ email }],
            params: {
              EMAIL: email,
            },
          }),
        })
      } catch (emailError) {
        // Log but don't fail the subscription if welcome email fails
        console.error('Welcome email error:', emailError)
      }
    }

    return NextResponse.json({
      success: true,
      message: isAlreadySubscribed 
        ? "You're already subscribed!" 
        : 'Welcome to Suburban Shadows! Check your inbox.',
    })

  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json(
      { error: 'Server error. Please try again.' },
      { status: 500 }
    )
  }
}
