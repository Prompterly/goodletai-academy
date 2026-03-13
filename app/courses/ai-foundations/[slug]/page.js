import { getLesson, getLessons } from '../../../../lib/sanity'
import LessonSteps from './LessonSteps'

export async function generateStaticParams() {
  const lessons = await getLessons('ai-foundations')
  return lessons.map((lesson) => ({
    slug: lesson.slug.current,
  }))
}

export default async function LessonPage({ params }) {
  const { slug } = await params
  const lesson = await getLesson(slug)

  if (!lesson) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 20px' }}>
        <div style={{ fontSize: '3rem', marginBottom: '20px' }}>😕</div>
        <h1 style={{ color: '#1a202c' }}>Lesson Not Found</h1>
        <a href="/courses/ai-foundations" style={{ color: '#667eea' }}>
          ← Back to AI Foundations
        </a>
      </div>
    )
  }

  return <LessonSteps lesson={lesson} />
}