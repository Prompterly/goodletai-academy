import { createClient } from 'next-sanity'
import CertificateView from './CertificateView'

const readClient = createClient({
  projectId:  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset:    process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn:     false,
})

export async function generateMetadata({ params }) {
  const { id } = await params
  const cert = await readClient.fetch(
    `*[_type == "certificate" && certificateId == $id && isValid == true][0]{ name, courseName }`,
    { id }
  )
  if (!cert) return { title: 'Certificate Not Found — Goodlet AI Academy' }
  return {
    title: `${cert.name}'s Certificate — ${cert.courseName} | Goodlet AI Academy`,
    description: `Verified certificate of completion for ${cert.name} — ${cert.courseName}.`,
  }
}

export default async function CertificatePage({ params }) {
  const { id } = await params

  const cert = await readClient.fetch(
    `*[_type == "certificate" && certificateId == $id && isValid == true][0]{
      name, courseName, courseType, completedAt, certificateId
    }`,
    { id }
  )

  return <CertificateView cert={cert} />
}
