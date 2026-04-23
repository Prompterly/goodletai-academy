'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import EmailCapture from '../../components/EmailCapture'

function LockedWeekPreview({ weekNum, weekTitle, lessonCount }) {
  return (
    <div style={{ marginBottom: '50px', opacity: 0.6 }}>
      <div style={{
        background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
        color: 'white',
        padding: '20px 30px',
        borderRadius: '12px 12px 0 0',
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        filter: 'grayscale(30%)'
      }}>
        <div style={{
          background: 'rgba(255,255,255,0.2)',
          width: '45px', height: '45px',
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 'bold', fontSize: '1.2rem', flexShrink: 0
        }}>
          {weekNum}
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ opacity: 0.8, fontSize: '0.85rem', margin: '0 0 4px 0' }}>WEEK {weekNum}</p>
          <h3 style={{ margin: 0, fontSize: '1.3rem' }}>{weekTitle}</h3>
        </div>
        <span style={{ fontSize: '1.5rem' }}>🔒</span>
      </div>
      <div style={{
        border: '1px solid #e2e8f0', borderTop: 'none',
        borderRadius: '0 0 12px 12px', overflow: 'hidden',
        background: '#f8fafc'
      }}>
        <div style={{ padding: '20px 30px', color: '#a0aec0', fontSize: '0.9rem' }}>
          {lessonCount} lessons · Sign up to unlock
        </div>
      </div>
    </div>
  )
}

function LessonItem({ lesson, isLast }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href={`/courses/ai-ethics-safety/${lesson.slug.current}`}
      style={{ textDecoration: 'none' }}
    >
      <div
        style={{
          padding: '20px 30px',
          background: hovered ? '#eef2ff' : 'white',
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
          color: '#6366f1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          flexShrink: 0
        }}>
          {lesson.lessonNumber}
        </div>
        <div style={{ flex: 1 }}>
          <h4 style={{ margin: '0 0 4px 0', color: '#1a202c', fontSize: '1.05rem' }}>
            {lesson.title}
          </h4>
          <span style={{ color: '#718096', fontSize: '0.85rem' }}>
            ⏱️ {lesson.totalDuration} min · {lesson.stepCount || 0} steps
          </span>
        </div>
        <span style={{ color: '#6366f1', fontSize: '1.3rem' }}>→</span>
      </div>
    </Link>
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

  if (checking) return null

  if (!isUnlocked) {
    return (
      <div>
        {/* Locked previews */}
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
          background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 100%)',
          borderRadius: '16px',
          padding: '40px',
          textAlign: 'center',
          color: 'white',
          marginTop: '10px'
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🔒</div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', fontWeight: '700' }}>
            Unlock Free Lessons
          </h3>
          <p style={{ opacity: 0.8, marginBottom: '30px', lineHeight: '1.7' }}>
            AI Ethics is completely free. Drop your email to unlock all 8 lessons instantly.
          </p>
          <div style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '12px',
            padding: '25px',
            maxWidth: '420px',
            margin: '0 auto'
          }}>
            <EmailCapture
              source="course-gate"
              title=""
              subtitle=""
              buttonText="Unlock Free Lessons →"
              onSuccess={() => setIsUnlocked(true)}
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {Object.keys(weeks).sort().map((weekNum) => (
        <div key={weekNum} style={{ marginBottom: '50px' }}>

          {/* Week Header */}
          <div style={{
            background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
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
