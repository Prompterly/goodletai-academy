import { NextResponse } from 'next/server'

const BREVO_LIST_ID = 5 // "Website Signups" list

export async function POST(request) {
  try {
    const { email, source, lesson } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    // Add contact to Brevo — triggers the welcome automation sequence
    const brevoRes = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': process.env.BREVO_API_KEY,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        email: email.toLowerCase().trim(),
        listIds: [BREVO_LIST_ID],
        updateEnabled: true,
        attributes: {
          SOURCE: source || 'website',
          LESSON: lesson || '',
        }
      }),
    })

    // 201 = new contact created, 204 = existing contact updated
    if (brevoRes.status === 201 || brevoRes.status === 204) {
      return NextResponse.json({ success: true })
    }

    const brevoData = await brevoRes.json()

    // Already in list — still a success from the user's perspective
    if (brevoData?.code === 'duplicate_parameter') {
      return NextResponse.json({ success: true })
    }

    console.error('Brevo error:', brevoData)
    return NextResponse.json({ error: 'Brevo error' }, { status: 500 })

  } catch (err) {
    console.error('Subscribe route error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
