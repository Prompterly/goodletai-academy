import { getLessons } from '../../../lib/sanity'
import LessonList from './LessonList'

export const metadata = {
  title: 'AI Ethics, Safety & Responsible Use — Free Course | Goodlet AI Academy',
  description: 'Understand the ethical implications of AI. Learn to build and use AI responsibly. Free 2-week course.',
  openGraph: {
    title: 'AI Ethics, Safety & Responsible Use — Free Course | Goodlet AI Academy',
    description: 'Free 2-week course. AI bias, privacy, governance, and responsible AI practice. No coding required.',
    url: 'https://www.goodletaiacademy.com/courses/ai-ethics-safety',
    type: 'website',
  },
}

export default async function AIEthicsSafetyPage() {
  const lessons = await getLessons('ai-ethics-safety-and-responsible-use')

  const weeks = lessons.reduce((acc, lesson) => {
    const week = lesson.weekNumber
    if (!acc[week]) acc[week] = []
    acc[week].push(lesson)
    return acc
  }, {})

  const weekTitles = {
    1: 'Understanding AI Ethics',
    2: 'Responsible Practice'
  }

  return (
    <div style={{ minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>

      {/* Navigation */}
      <nav style={{
        background: 'white',
        padding: '20px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/goodlet-ai-logo.png" alt="Goodlet AI Academy" style={{ height: '50px', width: 'auto' }} />
        </a>
        <div style={{ display: 'flex', gap: '30px' }}>
          <a href="/" style={{ color: '#333', textDecoration: 'none' }}>Home</a>
          <a href="/courses" style={{ color: '#6366f1', textDecoration: 'none', fontWeight: 'bold' }}>Courses</a>
          <a href="/jobs" style={{ color: '#333', textDecoration: 'none' }}>Jobs</a>
          <a href="/about" style={{ color: '#333', textDecoration: 'none' }}>About</a>
        </div>
      </nav>

      {/* Hero */}
      <header style={{
        background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🛡️</div>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px', fontWeight: 'bold' }}>
          AI Ethics, Safety & Responsible Use
        </h1>
        <p style={{ fontSize: '1.3rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 30px' }}>
          Understand the ethical implications of AI. Learn to build and use AI systems responsibly.
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            '📊 All Levels',
            '⏱️ 2 Weeks',
            `📚 ${lessons.length} Lessons`,
            '✅ Free'
          ].map((badge, i) => (
            <span key={i} style={{
              background: 'rgba(255,255,255,0.2)',
              padding: '8px 20px',
              borderRadius: '20px',
              fontSize: '0.95rem'
            }}>
              {badge}
            </span>
          ))}
        </div>
      </header>

      {/* Progress Link */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px 20px 0' }}>
        <a
          href="/courses/ai-ethics-safety/progress"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'white',
            padding: '20px 25px',
            borderRadius: '12px',
            textDecoration: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            border: '1px solid #e2e8f0',
            transition: 'all 0.2s'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ fontSize: '1.5rem' }}>📊</span>
            <div>
              <p style={{ margin: 0, fontWeight: 'bold', color: '#1a202c', fontSize: '1rem' }}>
                Your Progress Dashboard
              </p>
              <p style={{ margin: 0, color: '#718096', fontSize: '0.85rem' }}>
                Track completed lessons and earned badges
              </p>
            </div>
          </div>
          <span style={{ color: '#6366f1', fontWeight: 'bold', fontSize: '1.2rem' }}>→</span>
        </a>
      </div>

      {/* Lessons by Week */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 20px' }}>
        {Object.keys(weeks).length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px', color: '#718096' }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📚</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Lessons Coming Soon</h3>
            <p>We are loading lessons right now. Check back shortly!</p>
          </div>
        ) : (
          <LessonList weeks={weeks} weekTitles={weekTitles} />
        )}
      </section>

      {/* Footer */}
      <footer style={{
        background: '#1a202c',
        color: 'white',
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        <p style={{ color: '#a0aec0' }}>© 2025 Goodlet AI Academy. All rights reserved.</p>
      </footer>
    </div>
  )
}
