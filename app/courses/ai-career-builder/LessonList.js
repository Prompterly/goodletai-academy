'use client'

import Link from 'next/link'
import { useState } from 'react'

function LessonItem({ lesson, isLast }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href={`/courses/ai-career-builder/${lesson.slug.current}`}
      style={{ textDecoration: 'none' }}
    >
      <div
        style={{
          padding: '20px 30px',
          background: hovered ? '#fdf2f8' : 'white',
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
          background: '#fdf2f8',
          color: '#f5576c',
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
        <span style={{ color: '#f5576c', fontSize: '1.3rem' }}>→</span>
      </div>
    </Link>
  )
}

export default function LessonList({ weeks, weekTitles }) {
  return (
    <>
      {Object.keys(weeks).sort().map((weekNum) => (
        <div key={weekNum} style={{ marginBottom: '50px' }}>

          {/* Week Header */}
          <div style={{
            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
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
