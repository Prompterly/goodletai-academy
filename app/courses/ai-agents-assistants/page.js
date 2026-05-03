import { getLessons } from '../../../lib/sanity'
import LessonList from './LessonList'
import InstructorTeaser from '../../components/InstructorTeaser'
import JsonLd from '../../components/JsonLd'

export const metadata = {
  title: 'Build AI Agents & Assistants Course | Goodlet AI Academy',
  description: 'Design, build, and deploy custom AI agents that automate complex multi-step workflows. 16 advanced lessons covering agent architecture, tool use, and real-world deployment.',
  keywords: ['build AI agents', 'AI assistants course', 'custom AI agents', 'AI automation course', 'AI agent development', 'LLM agents', 'Goodlet AI Academy'],
  alternates: {
    canonical: 'https://www.goodletaiacademy.com/courses/ai-agents-assistants',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Build AI Agents & Assistants Course | Goodlet AI Academy',
    description: 'Design, build, and deploy custom AI agents that automate complex workflows. 16 advanced lessons covering architecture, tool use, and deployment.',
    url: 'https://www.goodletaiacademy.com/courses/ai-agents-assistants',
    type: 'website',
    siteName: 'Goodlet AI Academy',
    locale: 'en_GB',
    images: [
      {
        url: 'https://www.goodletaiacademy.com/api/og?title=Building+AI+Agents+%26+Assistants&price=%2415&level=Advanced&lessons=16',
        width: 1200,
        height: 630,
        alt: 'Building AI Agents & Assistants | Goodlet AI Academy',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Build AI Agents & Assistants Course | Goodlet AI Academy',
    description: 'Design, build, and deploy custom AI agents. 16 advanced lessons covering architecture, tool use, and deployment.',
    images: ['https://www.goodletaiacademy.com/goodlet-ai-logo.png'],
  },
}

export const revalidate = 0

export default async function AIAgentsAssistantsPage() {
  const lessons = await getLessons('building-ai-agents-and-assistants')

  const weeks = lessons.reduce((acc, lesson) => {
    const week = lesson.weekNumber
    if (!acc[week]) acc[week] = []
    acc[week].push(lesson)
    return acc
  }, {})

  const weekTitles = {
    1: 'Agent Foundations',
    2: 'Building Blocks',
    3: 'Real-World Agents',
    4: 'Deployment & Scale'
  }

  const courseJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Building AI Agents & Assistants',
    description: 'Design and build custom AI agents and assistants. Learn agentic workflows, tool use, and multi-step AI systems. 16 lessons over 4 weeks.',
    url: 'https://www.goodletaiacademy.com/courses/ai-agents-assistants',
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
    educationalLevel: 'Advanced',
    courseMode: 'online',
    numberOfCredits: 16,
    timeRequired: 'P4W',
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
          <a href="/courses" style={{ color: '#f97316', textDecoration: 'none', fontWeight: 'bold' }}>Courses</a>
          <a href="/jobs" style={{ color: '#333', textDecoration: 'none' }}>Jobs</a>
          <a href="/about" style={{ color: '#333', textDecoration: 'none' }}>About</a>
        </div>
      </nav>

      {/* Hero */}
      <header style={{
        background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🤖</div>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px', fontWeight: 'bold' }}>
          Building AI Agents & Assistants
        </h1>
        <p style={{ fontSize: '1.3rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 30px' }}>
          Design, build, and deploy custom AI agents that automate complex multi-step tasks at scale.
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            '📊 Advanced',
            '⏱️ 4 Weeks',
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
          href="/courses/ai-agents-assistants/progress"
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
          <span style={{ color: '#f97316', fontWeight: 'bold', fontSize: '1.2rem' }}>→</span>
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
