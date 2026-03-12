 import { createClient } from 'next-sanity'
import { PortableText as PortableTextComponent } from '@portabletext/react'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: true,
})

export async function getLessons(courseSlug) {
  return client.fetch(
    `*[_type == "lesson" && course->slug.current == $courseSlug] 
    | order(weekNumber asc, lessonNumber asc){
      _id,
      title,
      slug,
      weekNumber,
      lessonNumber,
      duration
    }`,
    { courseSlug }
  )
}

export async function getLesson(lessonSlug) {
  return client.fetch(
    `*[_type == "lesson" && slug.current == $lessonSlug][0]{
      _id,
      title,
      slug,
      weekNumber,
      lessonNumber,
      duration,
      intro,
      body,
      example,
      exercise,
      summary,
      "course": course->{title, slug}
    }`,
    { lessonSlug }
  )
}

export const PortableText = PortableTextComponent
