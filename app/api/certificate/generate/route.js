import { NextResponse } from 'next/server'
import { createClient } from 'next-sanity'
import { rateLimit } from '@/app/lib/rateLimit'

const COURSE_FULL_NAMES = {
  'ai-automation':  'AI Automation Specialist',
  'ai-career':      'AI Career Builder',
  'ai-marketers':   'AI for Marketers & Strategists',
  'ai-writers':     'AI for Writers & Content Creators',
  'ai-researchers': 'AI for Researchers & Analysts',
  'ai-agents':      'Building AI Agents & Assistants',
  'ai-foundations': 'AI Foundations',
  'ai-ethics':      'AI Ethics & Safety',
}

const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  token:     process.env.SANITY_WRITE_TOKEN,
  useCdn:    false,
})

function generateCertId() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  const seg = (n) => Array.from({ length: n }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
  return `GL-${seg(4)}-${seg(4)}`
}

export async function POST(request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown'
  if (!rateLimit(ip, 10, 60_000)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  let body
  try { body = await request.json() } catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }) }

  const { email, name, courseType } = body
  if (!email || !name || !courseType) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const courseName = COURSE_FULL_NAMES[courseType]
  if (!courseName) {
    return NextResponse.json({ error: 'Invalid course type' }, { status: 400 })
  }

  const cleanEmail = email.toLowerCase().trim()
  const cleanName  = name.trim().slice(0, 100)

  // Return existing cert if already generated
  const existing = await writeClient.fetch(
    `*[_type == "certificate" && email == $email && courseType == $courseType][0]{ certificateId }`,
    { email: cleanEmail, courseType }
  )
  if (existing?.certificateId) {
    return NextResponse.json({ certificateId: existing.certificateId })
  }

  const certificateId = generateCertId()

  await writeClient.create({
    _type:         'certificate',
    certificateId,
    email:         cleanEmail,
    name:          cleanName,
    courseType,
    courseName,
    completedAt:   new Date().toISOString(),
    isValid:       true,
  })

  return NextResponse.json({ certificateId })
}
