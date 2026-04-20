import { NextResponse } from 'next/server'

export async function POST(request) {
  const { email } = await request.json()

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Valid email is required' }, { status: 400 })
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': process.env.BREVO_API_KEY
      },
      body: JSON.stringify({
        email,
        listIds: [5],
        updateEnabled: true
      })
    })

    // 201 = created, 204 = already exists (both are fine)
    if (response.status === 201 || response.status === 204) {
      return NextResponse.json({ success: true })
    }

    const data = await response.json()
    return NextResponse.json({ error: data.message || 'Failed to subscribe' }, { status: 400 })
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
