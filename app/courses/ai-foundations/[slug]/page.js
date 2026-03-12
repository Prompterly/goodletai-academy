import { getLesson, getLessons, PortableText } from '../../../../lib/sanity'
import Link from 'next/link'

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
        <h1 style={{ color: '#1a202c', marginBottom: '15px' }}>Lesson Not Found</h1>
        <Link href="/courses/ai-foundations" style={{ color: '#667eea' }}>
          ← Back to AI Foundations
        </Link>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', fontFamily: 'Arial, sans-serif', background: '#f8fafc' }}>

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
        <Link href="/courses/ai-foundations" style={{
          color: '#667eea',
          textDecoration: 'none',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          ← Back to AI Foundations
        </Link>
      </nav>

      {/* Lesson Header */}
      <header style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'inline-block',
          background: 'rgba(255,255,255,0.2)',
          padding: '6px 20px',
          borderRadius: '20px',
          fontSize: '0.9rem',
          marginBottom: '20px'
        }}>
          Week {lesson.weekNumber} · Lesson {lesson.lessonNumber}
        </div>
        <h1 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '20px', 
          fontWeight: 'bold', 
          lineHeight: '1.2',
          maxWidth: '700px',
          margin: '0 auto 20px'
        }}>
          {lesson.title}
        </h1>
        <span style={{ opacity: 0.85, fontSize: '1rem' }}>
          ⏱️ {lesson.duration} minute read
        </span>
      </header>

      {/* Lesson Content */}
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 20px' }}>

        {/* Intro */}
        {lesson.intro && (
          <div style={{
            background: 'white',
            border: '1px solid #667eea30',
            borderLeft: '4px solid #667eea',
            borderRadius: '12px',
            padding: '30px',
            marginBottom: '30px',
            fontSize: '1.05rem',
            lineHeight: '1.8',
            color: '#2d3748'
          }}>
            <PortableText value={lesson.intro} />
          </div>
        )}

        {/* Main Body */}
        {lesson.body && (
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '40px',
            marginBottom: '25px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            fontSize: '1.05rem',
            lineHeight: '1.9',
            color: '#2d3748'
          }}>
            <h2 style={{ 
              color: '#667eea', 
              marginBottom: '25px', 
              fontSize: '1.4rem',
              paddingBottom: '15px',
              borderBottom: '2px solid #eef2ff'
            }}>
              📖 The Concept
            </h2>
            <PortableText value={lesson.body} />
          </div>
        )}

        {/* Example */}
        {lesson.example && (
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '40px',
            marginBottom: '25px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            borderLeft: '4px solid #10a37f',
            fontSize: '1.05rem',
            lineHeight: '1.9',
            color: '#2d3748'
          }}>
            <h2 style={{ 
              color: '#10a37f', 
              marginBottom: '25px', 
              fontSize: '1.4rem',
              paddingBottom: '15px',
              borderBottom: '2px solid #ecfdf5'
            }}>
              💡 The Example
            </h2>
            <PortableText value={lesson.example} />
          </div>
        )}

        {/* Exercise */}
        {lesson.exercise && (
          <div style={{
            background: '#fffbeb',
            borderRadius: '12px',
            padding: '40px',
            marginBottom: '25px',
            border: '1px solid #fbbf24',
            fontSize: '1.05rem',
            lineHeight: '1.9',
            color: '#2d3748'
          }}>
            <h2 style={{ 
              color: '#d97706', 
              marginBottom: '25px', 
              fontSize: '1.4rem',
              paddingBottom: '15px',
              borderBottom: '2px solid #fef3c7'
            }}>
              🖊️ Your Exercise
            </h2>
            <PortableText value={lesson.exercise} />
          </div>
        )}

        {/* Summary */}
        {lesson.summary && (
          <div style={{
            background: 'linear-gradient(135deg, #0f0c29, #302b63)',
            borderRadius: '12px',
            padding: '40px',
            marginBottom: '40px',
            color: 'white',
            fontSize: '1.05rem',
            lineHeight: '1.9'
          }}>
            <h2 style={{ 
              color: '#a78bfa', 
              marginBottom: '25px', 
              fontSize: '1.4rem',
              paddingBottom: '15px',
              borderBottom: '1px solid rgba(167,139,250,0.3)'
            }}>
              📌 Lesson Summary
            </h2>
            <PortableText value={lesson.summary} />
          </div>
        )}

        {/* Bottom Navigation */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '30px',
          borderTop: '1px solid #e2e8f0',
          flexWrap: 'wrap',
          gap: '15px'
        }}>
          <Link href="/courses/ai-foundations" style={{
            color: '#667eea',
            textDecoration: 'none',
            fontWeight: 'bold',
            padding: '12px 25px',
            border: '2px solid #667eea',
            borderRadius: '8px'
          }}>
            ← Back to Course
          </Link>
          <span style={{ color: '#718096', fontSize: '0.9rem' }}>
            Week {lesson.weekNumber} · Lesson {lesson.lessonNumber}
          </span>
        </div>
      </main>

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