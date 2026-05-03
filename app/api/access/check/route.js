import { NextResponse } from 'next/server'
import { createClient } from 'next-sanity'

const COURSE_NAMES = {
  'ai-automation': 'AI Automation Specialist',
  'ai-career': 'AI Career Builder',
  'ai-marketers': 'AI for Marketers & Strategists',
  'ai-writers': 'AI for Writers & Content Creators',
  'ai-researchers': 'AI for Researchers & Analysts',
  'ai-agents': 'Building AI Agents & Assistants',
}

const readClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: false,
})

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const email = searchParams.get('email')?.toLowerCase().trim()
  const courseType = searchParams.get('courseType')

  if (!email || !courseType) {
    return NextResponse.json({ hasAccess: false })
  }

  const courseName = COURSE_NAMES[courseType]
  if (!courseName) {
    return NextResponse.json({ hasAccess: false })
  }

  try {
    const count = await readClient.fetch(
      `count(*[_type == "enrollment" && email == $email && (course == "all-access-bundle" || course == $courseName)])`,
      { email, courseName }
    )
    return NextResponse.json({ hasAccess: count > 0 })
  } catch (err) {
    console.error('Access check error:', err)
    return NextResponse.json({ hasAccess: false }, { status: 500 })
  }
}
