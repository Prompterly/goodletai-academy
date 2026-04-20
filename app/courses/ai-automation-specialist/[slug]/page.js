import { getLesson, getLessons } from '../../../../lib/sanity'
import LessonSteps from './LessonSteps'
import AccessGate from '../../../components/AccessGate'

export async function generateStaticParams() {
  const lessons = await getLessons('ai-automation-specialist')
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
        <a href="/courses/ai-automation-specialist" style={{ color: '#10a37f' }}>← Back to AI Automation Specialist</a>
      </div>
    )
  }

  return (
    <AccessGate lesson={lesson} courseType="ai-automation">
      <LessonSteps lesson={lesson} />
    </AccessGate>
  )
}
