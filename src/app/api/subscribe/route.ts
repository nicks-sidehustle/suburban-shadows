import { NextRequest, NextResponse } from 'next/server'

const BREVO_API_KEY = process.env.BREVO_API_KEY
const BREVO_LIST_ID = parseInt(process.env.BREVO_LIST_ID || '9')

export async function POST(req: NextRequest) {
  try {
    const { email, source } = await req.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email required' },
        { status: 400 }
      )
    }

    if (!BREVO_API_KEY) {
      console.error('BREVO_API_KEY not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Create/update contact with double opt-in
    const response = await fetch('https://api.brevo.com/v3/contacts/doubleOptinConfirmation', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        email,
        includeListIds: [BREVO_LIST_ID],
        templateId: 1, // Brevo's default DOI template
        redirectionUrl: 'https://hallucination.nation/welcome',
        attributes: {
          SOURCE: source || 'homepage',
          SIGNUP_DATE: new Date().toISOString().split('T')[0],
        },
      }),
    })

    // Success - DOI email will be sent
    if (response.status === 201 || response.status === 204 || response.status === 200) {
      return NextResponse.json({ 
        success: true, 
        message: '🎉 Check your inbox to confirm!' 
      })
    }

    // Handle already subscribed
    if (response.status === 400) {
      const data = await response.json().catch(() => ({}))
      if (data.code === 'duplicate_parameter' || data.message?.includes('already')) {
        return NextResponse.json({ 
          success: true, 
          message: "You're already on the list! 🤖" 
        })
      }
    }

    // Fallback to direct add (if DOI not configured in Brevo)
    const fallbackResponse = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        email,
        listIds: [BREVO_LIST_ID],
        attributes: {
          SOURCE: source || 'homepage',
          SIGNUP_DATE: new Date().toISOString().split('T')[0],
        },
        updateEnabled: true,
      }),
    })

    if (fallbackResponse.status === 201 || fallbackResponse.status === 204) {
      return NextResponse.json({ 
        success: true, 
        message: "You're in! Welcome to the chaos 🎭" 
      })
    }

    // Handle already exists in fallback
    if (fallbackResponse.status === 400) {
      const data = await fallbackResponse.json().catch(() => ({}))
      if (data.code === 'duplicate_parameter') {
        return NextResponse.json({ 
          success: true, 
          message: "Already subscribed! Check spam? 📬" 
        })
      }
    }

    const errorData = await fallbackResponse.json().catch(() => ({}))
    console.error('Brevo error:', fallbackResponse.status, errorData)
    
    return NextResponse.json(
      { error: 'Failed to subscribe. Try again?' },
      { status: 500 }
    )
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json(
      { error: 'Oops! Something broke. Please try again.' },
      { status: 500 }
    )
  }
}
