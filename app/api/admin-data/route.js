import { NextResponse } from 'next/server'
import { createClient } from 'next-sanity'
import { rateLimit } from '@/app/lib/rateLimit'

// Use a dedicated read-only token (SANITY_READ_TOKEN) if available.
// Falls back to no token — same as /api/access/check.
// Never use the write token for read-only operations.
const readClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  token: process.env.SANITY_READ_TOKEN,
  useCdn: false,
})

export async function POST(request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown'
  if (!rateLimit(ip, 5, 60_000)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  const { password } = await request.json()

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Fetch enrollments from Sanity
  const enrollments = await readClient.fetch(
    `*[_type == "enrollment"] | order(paidAt desc) {
      _id, email, course, plan, amountGHS, reference, paidAt
    }`
  )

  // Fetch Brevo list stats
  let brevoStats = { totalContacts: 0 }
  try {
    const brevoRes = await fetch('https://api.brevo.com/v3/contacts/lists/5', {
      headers: {
        'api-key': process.env.BREVO_API_KEY,
        'Accept': 'application/json',
      },
    })
    const brevoData = await brevoRes.json()
    brevoStats.totalContacts = brevoData.totalBlacklisted !== undefined
      ? (brevoData.totalSubscribers || 0)
      : 0
  } catch (err) {
    console.error('Brevo stats error:', err)
  }

  // Aggregate by course
  const byCourse = enrollments.reduce((acc, e) => {
    const key = e.course || 'unknown'
    if (!acc[key]) acc[key] = { count: 0, revenue: 0 }
    acc[key].count++
    acc[key].revenue += e.amountGHS || 0
    return acc
  }, {})

  const totalRevenue = enrollments.reduce((sum, e) => sum + (e.amountGHS || 0), 0)

  return NextResponse.json({
    enrollments,
    byCourse,
    totalRevenue,
    totalEnrollments: enrollments.length,
    emailListSize: brevoStats.totalContacts,
  })
}
