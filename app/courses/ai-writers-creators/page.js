import { getLessons } from '../../../lib/sanity'
import LessonList from './LessonList'
import InstructorTeaser from '../../components/InstructorTeaser'
import JsonLd from '../../components/JsonLd'

export const metadata = {
  title: 'AI for Writers & Content Creators Course | Goodlet AI Academy',
  description: 'Master AI writing tools without losing your authentic voice. 12 practical lessons covering AI-assisted writing, content scaling, and brand consistency. No coding required.',
  keywords: ['AI for writers', 'AI content creation course', 'AI writing tools', 'content creators AI course', 'AI copywriting', 'AI for bloggers', 'Goodlet AI Academy'],
  alternates: {
    canonical: 'https://www.goodletaiacademy.com/courses/ai-writers-creators',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'AI for Writers & Content Creators Course | Goodlet AI Academy',
    description: 'Scale your content output with AI without losing your voice. 12 practical lessons for writers and creators. No coding required.',
    url: 'https://www.goodletaiacademy.com/courses/ai-writers-creators',
    type: 'website',
    siteName: 'Goodlet AI Academy',
    locale: 'en_GB',
    images: [
      {
        url: 'https://www.goodletaiacademy.com/api/og?title=AI+for+Writers+%26+Content+Creators&price=%2415&level=All+Levels&lessons=12',
        width: 1200,
        height: 630,
        alt: 'AI for Writers & Content Creators | Goodlet AI Academy',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Writers & Content Creators Course | Goodlet AI Academy',
    description: 'Scale your content output with AI without losing your voice. 12 practical lessons, no coding required.',
    images: ['https://www.goodletaiacademy.com/goodlet-ai-logo.png'],
  },
}

export const revalidate = 0

export default async function AIWritersCreatorsPage() {
  const lessons = await getLessons('ai-for-writers-and-content-creators')

  const weeks = lessons.reduce((acc, lesson) => {
    const week = lesson.weekNumber
    if (!acc[week]) acc[week] = []
    acc[week].push(lesson)
    return acc
  }, {})

  const weekTitles = {
    1: 'AI Writing Fundamentals',
    2: 'Content at Scale',
    3: 'Voice, Strategy & Systems'
  }

  const courseJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'AI for Writers & Content Creators',
    description: 'Use AI to write faster, create better content, and build a content business. 12 lessons over 3 weeks.',
    url: 'https://www.goodletaiacademy.com/courses/ai-writers-creators',
    provider: {
      '@type': 'Organization',
      name: 'Goodlet AI Academy',
      url: 'https://www.goodletaiacademy.com',
    },
    instructor: {
      '@type': 'Person',
      name: 'Goodlet Owusu Ansah',
    },
    offers: {
      '@type': 'Offer',
      price: '15',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    educationalLevel: 'All Levels',
    courseMode: 'online',
    numberOfCredits: 12,
    timeRequired: 'P3W',
  }

  return (
    <div style={{ minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <JsonLd data={courseJsonLd} />

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
          <a href="/courses" style={{ color: '#10b981', textDecoration: 'none', fontWeight: 'bold' }}>Courses</a>
          <a href="/jobs" style={{ color: '#333', textDecoration: 'none' }}>Jobs</a>
          <a href="/about" style={{ color: '#333', textDecoration: 'none' }}>About</a>
        </div>
      </nav>

      {/* Hero */}
      <header style={{
        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '20px' }}>✍️</div>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px', fontWeight: 'bold' }}>
          AI for Writers & Content Creators
        </h1>
        <p style={{ fontSize: '1.3rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 30px' }}>
          Master AI-assisted writing, editing, and content production without losing your authentic voice.
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            '📊 All Levels',
            '⏱️ 3 Weeks',
            `📚 ${lessons.length} Lessons`,
            '💰 $15 · Pilot Price'
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
          href="/courses/ai-writers-creators/progress"
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
          <span style={{ color: '#10b981', fontWeight: 'bold', fontSize: '1.2rem' }}>→</span>
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

      <InstructorTeaser />

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
