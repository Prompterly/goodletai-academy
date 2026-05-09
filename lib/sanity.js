import { createClient } from 'next-sanity'
import { PortableText as PortableTextComponent } from '@portabletext/react'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: false,
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
      totalDuration,
      hasMilestone,
      milestone,
      "stepCount": count(steps)
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
      totalDuration,
      steps,
      hasMilestone,
      milestone,
      "course": course->{title, slug},
      "maxLessonNumber": *[_type == "lesson" && course._ref == ^.course._ref] | order(lessonNumber desc)[0].lessonNumber,
      "nextLesson": *[_type == "lesson" && course._ref == ^.course._ref && lessonNumber == ^.lessonNumber + 1] | order(lessonNumber asc)[0]{ "slug": slug.current }
    }`,
    { lessonSlug }
  )
}

export const PortableText = PortableTextComponent