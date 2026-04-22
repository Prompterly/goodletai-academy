'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import EmailCapture from '../../components/EmailCapture'

function LessonItem({ lesson, isLast }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href={`/courses/ai-foundations/${lesson.slug.current}`}
      style={{ textDecoration: 'none' }}
    >
      <div
        style={{
          padding: '20px 30px',
          background: hovered ? '#f8f9ff' : 'white',
          borderBottom: !isLast ? '1px solid #f0f0f0' : 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          cursor: 'pointer',
          transition: 'background 0.2s'
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: '#eef2ff',
          color: '#667eea',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          flexShrink: 0
        }}>
          {lesson.lessonNumber}
        </div>
        <div style={{ flex: 1 }}>
          <h4 style={{
            margin: '0 0 4px 0',
            color: '#1a202c',
            fontSize: '1.05rem'
          }}>
            {lesson.title}
          </h4>
          <span style={{ color: '#718096', fontSize: '0.85rem' }}>
            ⏱️ {lesson.totalDuration} min · {lesson.stepCount || 0} steps
          </span>
        </div>
        <span style={{ color: '#667eea', fontSize: '1.3rem' }}>→</span>
      </div>
    </Link>
  )
}

function LockedWeekPreview({ weekNum, weekTitle, lessonCount }) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        opacity: 0.5,
        color: 'white',
        padding: '16px 24px',
        borderRadius: '12px 12px 0 0',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        <div style={{
          background: 'rgba(255,255,255,0.2)',
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          flexShrink: 0
        }}>
          {weekNum}
        </div>
        <div>
          <p style={{ opacity: 0.8, fontSize: '0.75rem', margin: '0 0 2px 0' }}>WEEK {weekNum}</p>
          <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{weekTitle}</h3>
        </div>
        <span style={{ marginLeft: 'auto', fontSize: '0.85rem', opacity: 0.8 }}>
          🔒 {lessonCount} lessons
        </span>
      </div>
      <div style={{
        border: '1px solid #e2e8f0',
        borderTop: 'none',
        borderRadius: '0 0 12px 12px',
        background: '#f8fafc',
        height: '52px',
        opacity: 0.4
      }} />
    </div>
  )
}

export default function LessonList({ weeks, weekTitles }) {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('subscribedEmail')
    if (saved) setIsUnlocked(true)
    setChecking(false)
  }, [])

  // Avoid a flash of locked content on returning users
  if (checking) {
    return (
      <div style={{ textAlign: 'center', padding: '60px', color: '#718096' }}>
        <div style={{ fontSize: '2rem', marginBottom: '10px', opacity: 0.4 }}>📚</div>
        <p style={{ fontSize: '0.9rem' }}>Loading your lessons...</p>
      </div>
    )
  }

  // ── LOCKED STATE ──────────────────────────────────────────────────────────
  if (!isUnlocked) {
    const totalLessons = Object.values(weeks).flat().length
    return (
      <div>
        {/* Teaser: show locked week previews */}
        {Object.keys(weeks).sort().map((weekNum) => (
          <LockedWeekPreview
            key={weekNum}
            weekNum={weekNum}
            weekTitle={weekTitles[weekNum] || `Week ${weekNum}`}
            lessonCount={weeks[weekNum].length}
          />
        ))}

        {/* Gate card */}
        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '44px 40px',
          textAlign: 'center',
          boxShadow: '0 8px 40px rgba(102, 126, 234, 0.15)',
          border: '1px solid #e8e4ff',
          marginTop: '8px'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '12px' }}>🔓</div>
          <h3 style={{
            fontSize: '1.6rem',
            fontWeight: '800',
            color: '#1a202c',
            margin: '0 0 10px 0'
          }}>
            All {totalLessons} lessons are free
          </h3>
          <p style={{
            color: '#718096',
            fontSize: '1rem',
            lineHeight: '1.6',
            margin: '0 0 30px 0',
            maxWidth: '420px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Drop your email for instant access — no credit card, no catch.
            We'll also send you course updates and AI tips.
          </p>
          <EmailCapture
            source="course-gate"
            title=""
            subtitle=""
            buttonText="Unlock Free Lessons →"
            onSuccess={() => setIsUnlocked(true)}
          />
        </div>
      </div>
    )
  }

  // ── UNLOCKED STATE ────────────────────────────────────────────────────────
  return (
    <>
      {Object.keys(weeks).sort().map((weekNum) => (
        <div key={weekNum} style={{ marginBottom: '50px' }}>

          {/* Week Header */}
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '20px 30px',
            borderRadius: '12px 12px 0 0',
            display: 'flex',
            alignItems: 'center',
            gap: '15px'
          }}>
            <div style={{
              background: 'rgba(255,255,255,0.2)',
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '1.2rem',
              flexShrink: 0
            }}>
              {weekNum}
            </div>
            <div>
              <p style={{ opacity: 0.8, fontSize: '0.85rem', margin: '0 0 4px 0' }}>
                WEEK {weekNum}
              </p>
              <h3 style={{ margin: 0, fontSize: '1.3rem' }}>
                {weekTitles[weekNum] || `Week ${weekNum}`}
              </h3>
            </div>
          </div>

          {/* Lessons */}
          <div style={{
            border: '1px solid #e2e8f0',
            borderTop: 'none',
            borderRadius: '0 0 12px 12px',
            overflow: 'hidden'
          }}>
            {weeks[weekNum].map((lesson, index) => (
              <LessonItem
                key={lesson._id}
                lesson={lesson}
                isLast={index === weeks[weekNum].length - 1}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  )
}
