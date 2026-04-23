import { getLesson, getLessons } from '../../../../lib/sanity'
import LessonSteps from './LessonSteps'
import AccessGate from '../../../components/AccessGate'

export async function generateStaticParams() {
  const lessons = await getLessons('ai-for-writers-and-content-creators')
  return lessons.map((lesson) => ({ slug: lesson.slug.current }))
}

export default async function LessonPage({ params }) {
  const { slug } = await params
  const lesson = await getLesson(slug)

  if (!lesson) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 20px' }}>
        <div style={{ fontSize: '3rem', marginBottom: '20px' }}>😕</div>
        <h1 style={{ color: '#1a202c' }}>Lesson Not Found</h1>
        <a href="/courses/ai-writers-creators" style={{ color: '#10b981' }}>← Back to AI Writers</a>
      </div>
    )
  }

  return (
    <AccessGate lesson={lesson} courseType="ai-writers">
      <LessonSteps lesson={lesson} />
    </AccessGate>
  )
}
