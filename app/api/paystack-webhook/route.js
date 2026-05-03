import { NextResponse } from 'next/server'
import crypto from 'crypto'
import { createClient } from 'next-sanity'

const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
})

export async function POST(request) {
  const body = await request.text()
  const signature = request.headers.get('x-paystack-signature')

  const hash = crypto
    .createHmac('sha512', process.env.PAYSTACK_SECRET_KEY)
    .update(body)
    .digest('hex')

  if (hash !== signature) {
    console.error('Paystack webhook: invalid signature')
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
  }

  const event = JSON.parse(body)

  if (event.event === 'charge.success') {
    const { email, amount, reference, metadata } = event.data

    const planField = metadata?.custom_fields?.find(f => f.variable_name === 'plan')?.value || ''
    const isBundle = planField === 'All Courses Bundle'
    const course = isBundle ? 'all-access-bundle' : planField

    try {
      // Write enrollment to Sanity
      await writeClient.create({
        _type: 'enrollment',
        email: email.toLowerCase().trim(),
        course,
        plan: isBundle ? 'bundle' : 'single',
        amountGHS: amount / 100,
        reference,
        paidAt: new Date().toISOString(),
      })
    } catch (err) {
      console.error('Sanity write error:', err)
    }

    try {
      // Tag the learner in Brevo with enrollment details
      await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'api-key': process.env.BREVO_API_KEY,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email: email.toLowerCase().trim(),
          listIds: [5],
          updateEnabled: true,
          attributes: {
            ENROLLED: 'true',
            ENROLLED_COURSE: course,
            PAYMENT_REF: reference,
            ENROLLED_AT: new Date().toISOString(),
          },
        }),
      })
    } catch (err) {
      console.error('Brevo update error:', err)
    }
  }

  return NextResponse.json({ received: true })
}
