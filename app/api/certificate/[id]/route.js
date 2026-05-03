import { NextResponse } from 'next/server'
import { createClient } from 'next-sanity'

const readClient = createClient({
  projectId:  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset:    process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn:     false,
})

export async function GET(request, { params }) {
  const { id } = await params

  const cert = await readClient.fetch(
    `*[_type == "certificate" && certificateId == $id && isValid == true][0]{
      name, courseName, courseType, completedAt, certificateId
    }`,
    { id }
  )

  if (!cert) {
    return NextResponse.json({ error: 'Certificate not found' }, { status: 404 })
  }

  return NextResponse.json(cert)
}
