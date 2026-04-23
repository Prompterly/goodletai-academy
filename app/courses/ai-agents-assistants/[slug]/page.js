import { getLesson, getLessons } from '../../../../lib/sanity'
import LessonSteps from './LessonSteps'
import AccessGate from '../../../components/AccessGate'

export const revalidate = 0
export const dynamicParams = true

export async function generateStaticParams() {
  const lessons = await getLessons('building-ai-agents-and-assistants')
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
        <a href="/courses/ai-agents-assistants" style={{ color: '#f97316' }}>← Back to AI Agents</a>
      </div>
    )
  }

  return (
    <AccessGate lesson={lesson} courseType="ai-agents">
      <LessonSteps lesson={lesson} />
    </AccessGate>
  )
}
