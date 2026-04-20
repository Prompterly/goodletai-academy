 'use client'

import EmailCapture from '../../../components/EmailCapture'
import { useState, useEffect } from 'react'

const allBadges = [
  {
    name: 'Market Intelligence Pro',
    emoji: '🔍',
    description: "You can gather and synthesize AI-powered market intelligence fast.",
    earnedAfter: 4
  },
  {
    name: 'Content Strategist',
    emoji: '✍️',
    description: "You've built AI-powered content systems that produce consistent, on-brand output at scale.",
    earnedAfter: 8
  },
  {
    name: 'AI Marketing Specialist',
    emoji: '📈',
    description: "You have completed the AI for Marketers & Strategists course.",
    earnedAfter: 12
  }
]

export default function ProgressDashboard({ lessons }) {
  const [completedLessons, setCompletedLessons] = useState([])
  const [earnedBadges, setEarnedBadges] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('completedLessons_marketers') || '[]')
    const badges = JSON.parse(localStorage.getItem('earnedBadges_marketers') || '[]')
    setCompletedLessons(saved)
    setEarnedBadges(badges)
    setLoaded(true)
  }, [])

  if (!loaded) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Arial, sans-serif'
      }}>
        <p style={{ color: '#718096' }}>Loading your progress...</p>
      </div>
    )
  }

  const totalLessons = lessons.length
  const completedCount = completedLessons.length
  const progressPercent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0

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

  // Find next uncompleted lesson
  const nextLesson = lessons.find(l => !completedLessons.includes(l.lessonNumber))

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
        <a href="/courses/ai-marketers-strategists" style={{
          color: '#f59e0b',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>
          ← Back to Course
        </a>
      </nav>

      {/* Hero */}
      <header style={{
        background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
        color: 'white',
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📊</div>
        <h1 style={{ fontSize: '2.2rem', marginBottom: '10px', fontWeight: 'bold' }}>
          Your AI Marketing Progress
        </h1>
        <p style={{ opacity: 0.85, fontSize: '1.1rem' }}>
          Track your journey to becoming an AI Marketing Specialist
        </p>
      </header>

      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '50px 20px' }}>

        {/* Overall Progress Card */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '40px',
          marginBottom: '40px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          textAlign: 'center'
        }}>
          {/* Circular Progress */}
          <div style={{
            width: '140px',
            height: '140px',
            borderRadius: '50%',
            background: `conic-gradient(#f59e0b ${progressPercent * 3.6}deg, #edf2f7 0deg)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 25px'
          }}>
            <div style={{
              width: '110px',
              height: '110px',
              borderRadius: '50%',
              background: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column'
            }}>
              <span style={{ fontSize: '2.2rem', fontWeight: '800', color: '#f59e0b' }}>
                {progressPercent}%
              </span>
            </div>
          </div>

          <h2 style={{ fontSize: '1.5rem', color: '#1a202c', marginBottom: '8px' }}>
            {completedCount === 0 && "Ready to Start!"}
            {completedCount > 0 && completedCount < totalLessons && "Keep Going!"}
            {completedCount === totalLessons && "🎉 Course Complete!"}
          </h2>
          <p style={{ color: '#718096', fontSize: '1.05rem', marginBottom: '25px' }}>
            {completedCount} of {totalLessons} lessons completed
          </p>

          {/* Progress Bar */}
          <div style={{
            background: '#edf2f7',
            borderRadius: '10px',
            height: '12px',
            overflow: 'hidden',
            maxWidth: '500px',
            margin: '0 auto 25px'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
              height: '100%',
              width: `${progressPercent}%`,
              borderRadius: '10px',
              transition: 'width 0.5s ease'
            }} />
          </div>

          {/* Continue Button */}
          {nextLesson && (
            <a
              href={`/courses/ai-marketers-strategists/${nextLesson.slug.current}`}
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                color: 'white',
                padding: '14px 35px',
                borderRadius: '10px',
                fontWeight: 'bold',
                fontSize: '1rem',
                textDecoration: 'none',
                boxShadow: '0 4px 15px rgba(245, 158, 11, 0.3)'
              }}
            >
              Continue: {nextLesson.title} →
            </a>
          )}
        </div>

        {/* Badges Section */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '40px',
          marginBottom: '40px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }}>
          <h2 style={{
            fontSize: '1.4rem',
            color: '#1a202c',
            marginBottom: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            🏅 Badges Earned
          </h2>
          <p style={{ color: '#718096', marginBottom: '30px', fontSize: '0.95rem' }}>
            {earnedBadges.length} of {allBadges.length} badges unlocked
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px'
          }}>
            {allBadges.map((badge, index) => {
              const isEarned = earnedBadges.find(b => b.name === badge.name)

              return (
                <div
                  key={index}
                  style={{
                    background: isEarned
                      ? 'linear-gradient(135deg, #fffbeb, #fef3c7)'
                      : '#f7fafc',
                    borderRadius: '12px',
                    padding: '25px 20px',
                    textAlign: 'center',
                    border: isEarned
                      ? '2px solid #f59e0b'
                      : '2px solid #e2e8f0',
                    opacity: isEarned ? 1 : 0.6,
                    position: 'relative'
                  }}
                >
                  {/* Lock overlay */}
                  {!isEarned && (
                    <div style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      fontSize: '0.8rem'
                    }}>
                      🔒
                    </div>
                  )}

                  <div style={{
                    fontSize: '2.5rem',
                    marginBottom: '12px',
                    filter: isEarned ? 'none' : 'grayscale(100%)'
                  }}>
                    {badge.emoji}
                  </div>
                  <h3 style={{
                    fontSize: '1rem',
                    color: isEarned ? '#1a202c' : '#a0aec0',
                    marginBottom: '8px',
                    fontWeight: '600'
                  }}>
                    {badge.name}
                  </h3>
                  <p style={{
                    fontSize: '0.8rem',
                    color: isEarned ? '#4a5568' : '#cbd5e0',
                    lineHeight: '1.5',
                    margin: 0
                  }}>
                    {isEarned ? badge.description : `Complete Lesson ${badge.earnedAfter} to unlock`}
                  </p>

                  {isEarned && (
                    <div style={{
                      marginTop: '12px',
                      fontSize: '0.75rem',
                      color: '#f59e0b',
                      fontWeight: 'bold'
                    }}>
                      ✅ EARNED
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Lesson Progress */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '40px',
          marginBottom: '40px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }}>
          <h2 style={{
            fontSize: '1.4rem',
            color: '#1a202c',
            marginBottom: '30px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            📚 Lesson Progress
          </h2>

          {Object.keys(weeks).sort().map((weekNum) => (
            <div key={weekNum} style={{ marginBottom: '30px' }}>

              {/* Week Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '15px',
                paddingBottom: '10px',
                borderBottom: '1px solid #edf2f7'
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>
                  {weekNum}
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: '0.75rem', color: '#a0aec0', textTransform: 'uppercase' }}>
                    Week {weekNum}
                  </p>
                  <p style={{ margin: 0, fontSize: '1rem', fontWeight: '600', color: '#1a202c' }}>
                    {weekTitles[weekNum] || `Week ${weekNum}`}
                  </p>
                </div>
              </div>

              {/* Lessons */}
              {weeks[weekNum].map((lesson) => {
                const isCompleted = completedLessons.includes(lesson.lessonNumber)

                return (
                  <a
                    key={lesson._id}
                    href={`/courses/ai-marketers-strategists/${lesson.slug.current}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '15px',
                      padding: '12px 15px',
                      borderRadius: '10px',
                      textDecoration: 'none',
                      marginBottom: '5px',
                      transition: 'background 0.2s',
                      background: 'transparent'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#fffbeb'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    {/* Status */}
                    <div style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8rem',
                      fontWeight: 'bold',
                      flexShrink: 0,
                      background: isCompleted ? '#10a37f' : '#edf2f7',
                      color: isCompleted ? 'white' : '#a0aec0'
                    }}>
                      {isCompleted ? '✓' : lesson.lessonNumber}
                    </div>

                    {/* Lesson Info */}
                    <div style={{ flex: 1 }}>
                      <p style={{
                        margin: 0,
                        fontSize: '0.95rem',
                        color: isCompleted ? '#10a37f' : '#1a202c',
                        fontWeight: isCompleted ? '500' : '400'
                      }}>
                        {lesson.title}
                      </p>
                      <span style={{ fontSize: '0.8rem', color: '#a0aec0' }}>
                        {lesson.totalDuration} min · {lesson.stepCount || 0} steps
                      </span>
                    </div>

                    {/* Status Label */}
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 'bold',
                      color: isCompleted ? '#10a37f' : '#cbd5e0'
                    }}>
                      {isCompleted ? 'COMPLETED' : 'START'}
                    </span>
                  </a>
                )
              })}
            </div>
          ))}
        </div>

        {/* Email Capture */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '40px',
          marginBottom: '40px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }}>
          <EmailCapture
            source="progress-dashboard"
            title="🎯 Stay on Track!"
            subtitle="Get weekly reminders and be the first to know when new courses launch."
            buttonText="Keep Me Updated →"
          />
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
