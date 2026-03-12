import { getLessons } from '../../../lib/sanity'
import Link from 'next/link'
import LessonList from './LessonList'

export default async function AIFoundationsPage() {
  const lessons = await getLessons('ai-foundations')

  const weeks = lessons.reduce((acc, lesson) => {
    const week = lesson.weekNumber
    if (!acc[week]) acc[week] = []
    acc[week].push(lesson)
    return acc
  }, {})

  const weekTitles = {
    1: 'Understanding the AI World',
    2: 'Prompt Engineering Essentials',
    3: 'AI Tools Deep Dive',
    4: 'Building Your First AI Workflow'
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
          <img src="/goodlet-ai-logo.png" alt="Goodlet AI Academy"
            style={{ height: '50px', width: 'auto' }} />
        </a>
        <div style={{ display: 'flex', gap: '30px' }}>
          <a href="/" style={{ color: '#333', textDecoration: 'none' }}>Home</a>
          <a href="/courses" style={{ color: '#667eea', textDecoration: 'none', fontWeight: 'bold' }}>Courses</a>
          <a href="/jobs" style={{ color: '#333', textDecoration: 'none' }}>Jobs</a>
          <a href="/about" style={{ color: '#333', textDecoration: 'none' }}>About</a>
        </div>
      </nav>

      {/* Hero */}
      <header style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🧠</div>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px', fontWeight: 'bold' }}>
          AI Foundations
        </h1>
        <p style={{ fontSize: '1.3rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 30px' }}>
          Build your AI fundamentals from the ground up.
          No coding required. Just curiosity and commitment.
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            '📊 Beginner',
            '⏱️ 4 Weeks',
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

      {/* Lessons - handled by client component */}
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