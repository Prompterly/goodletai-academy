import { getLessons } from '../../../lib/sanity'
import LessonList from './LessonList'

export default async function AIMarketersPage() {
  const lessons = await getLessons('ai-for-marketers-and-strategists')

  const weeks = lessons.reduce((acc, lesson) => {
    const week = lesson.weekNumber
    if (!acc[week]) acc[week] = []
    acc[week].push(lesson)
    return acc
  }, {})

  const weekTitles = {
    1: 'AI-Powered Market Intelligence',
    2: 'AI-Powered Content Creation',
    3: 'Campaigns & Measurement'
  }

  return (
    <div style={{ minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <nav style={{
        background: 'white', padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        position: 'sticky', top: 0, zIndex: 100
      }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/goodlet-ai-logo.png" alt="Goodlet AI Academy" style={{ height: '50px', width: 'auto' }} />
        </a>
        <div style={{ display: 'flex', gap: '30px' }}>
          <a href="/" style={{ color: '#333', textDecoration: 'none' }}>Home</a>
          <a href="/courses" style={{ color: '#f59e0b', textDecoration: 'none', fontWeight: 'bold' }}>Courses</a>
          <a href="/jobs" style={{ color: '#333', textDecoration: 'none' }}>Jobs</a>
          <a href="/about" style={{ color: '#333', textDecoration: 'none' }}>About</a>
        </div>
      </nav>

      <header style={{
        background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
        color: 'white', padding: '80px 20px', textAlign: 'center'
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '20px' }}>📊</div>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px', fontWeight: 'bold' }}>AI for Marketers & Strategists</h1>
        <p style={{ fontSize: '1.3rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 30px' }}>
          Use AI to supercharge market research, content strategy, and campaign optimization.
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {['📊 All Levels', '⏱️ 3 Weeks', `📚 ${lessons.length} Lessons`, '📈 Paid Course'].map((badge, i) => (
            <span key={i} style={{ background: 'rgba(255,255,255,0.2)', padding: '8px 20px', borderRadius: '20px', fontSize: '0.95rem' }}>
              {badge}
            </span>
          ))}
        </div>
      </header>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px 20px 0' }}>
        <a href="/courses/ai-marketers-strategists/progress" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: 'white', padding: '20px 25px', borderRadius: '12px',
          textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ fontSize: '1.5rem' }}>📊</span>
            <div>
              <p style={{ margin: 0, fontWeight: 'bold', color: '#1a202c', fontSize: '1rem' }}>Your Progress Dashboard</p>
              <p style={{ margin: 0, color: '#718096', fontSize: '0.85rem' }}>Track completed lessons and earned badges</p>
            </div>
          </div>
          <span style={{ color: '#f59e0b', fontWeight: 'bold', fontSize: '1.2rem' }}>→</span>
        </a>
      </div>

      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px 80px' }}>
        {Object.keys(weeks).length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px', color: '#718096' }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📚</div>
            <h3>Lessons Loading...</h3>
          </div>
        ) : (
          <LessonList weeks={weeks} weekTitles={weekTitles} />
        )}
      </section>

      <footer style={{ background: '#1a202c', color: 'white', padding: '40px 20px', textAlign: 'center' }}>
        <p style={{ color: '#a0aec0' }}>© 2025 Goodlet AI Academy. All rights reserved.</p>
      </footer>
    </div>
  )
}
