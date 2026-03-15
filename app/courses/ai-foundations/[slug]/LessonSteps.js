'use client'

import { useState } from 'react'
import { PortableText } from '../../../../lib/sanity'

const stepTypeStyles = {
  hook: { icon: '🪝', label: 'Hook', accent: '#667eea', bg: '#eef2ff' },
  explanation: { icon: '📖', label: 'Concept', accent: '#667eea', bg: '#eef2ff' },
  example: { icon: '💡', label: 'Example', accent: '#10a37f', bg: '#ecfdf5' },
  motivation: { icon: '🔥', label: 'Why It Matters', accent: '#f59e0b', bg: '#fffbeb' },
  exercise: { icon: '🖊️', label: 'Exercise', accent: '#d97706', bg: '#fffbeb' },
  summary: { icon: '📌', label: 'Summary', accent: '#8b5cf6', bg: '#f5f3ff' }
}

function MilestoneScreen({ milestone, onContinue }) {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '600px',
        textAlign: 'center',
        color: 'white'
      }}>
        {/* Badge */}
        <div style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '3.5rem',
          margin: '0 auto 30px',
          boxShadow: '0 0 40px rgba(102, 126, 234, 0.4)',
          border: '4px solid rgba(255,255,255,0.2)'
        }}>
          {milestone.badgeEmoji || '🏆'}
        </div>

        {/* Milestone Title */}
        <h1 style={{
          fontSize: '2.2rem',
          fontWeight: '800',
          marginBottom: '15px',
          lineHeight: '1.3'
        }}>
          {milestone.milestoneTitle || 'Milestone Achieved!'}
        </h1>

        {/* Badge Name */}
        <div style={{
          display: 'inline-block',
          background: 'rgba(102, 126, 234, 0.3)',
          border: '1px solid rgba(102, 126, 234, 0.5)',
          padding: '8px 24px',
          borderRadius: '30px',
          fontSize: '1rem',
          fontWeight: 'bold',
          marginBottom: '30px',
          color: '#a5b4fc'
        }}>
          🏅 Badge Earned: {milestone.badgeName}
        </div>

        {/* Milestone Content */}
        <div style={{
          background: 'rgba(255,255,255,0.08)',
          borderRadius: '16px',
          padding: '30px',
          marginBottom: '30px',
          textAlign: 'left',
          fontSize: '1.1rem',
          lineHeight: '1.8',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          {milestone.milestoneContent && (
            <PortableText value={milestone.milestoneContent} />
          )}
        </div>

        {/* Badge Description */}
        <div style={{
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '12px',
          padding: '20px',
          marginBottom: '40px',
          border: '1px solid rgba(255,255,255,0.08)'
        }}>
          <p style={{ fontSize: '0.9rem', opacity: 0.7, margin: '0 0 8px 0' }}>
            BADGE DESCRIPTION
          </p>
          <p style={{ fontSize: '1rem', opacity: 0.9, margin: 0, lineHeight: '1.6' }}>
            {milestone.badgeDescription}
          </p>
        </div>

        {/* Continue Button */}
        <button
          onClick={onContinue}
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '18px 50px',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            boxShadow: '0 8px 30px rgba(102, 126, 234, 0.4)',
            transition: 'all 0.3s ease'
          }}
        >
          Continue Learning →
        </button>
      </div>
    </div>
  )
}

export default function LessonSteps({ lesson }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [showMilestone, setShowMilestone] = useState(false)
  const [lessonCompleted, setLessonCompleted] = useState(false)

  const steps = lesson.steps || []
  const totalSteps = steps.length
  const step = steps[currentStep]
  const progress = ((currentStep + 1) / totalSteps) * 100
  const stepStyle = stepTypeStyles[step?.stepType] || stepTypeStyles.explanation

  const goNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const goPrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const completeLesson = () => {
    // Save completion to local storage
    const completedLessons = JSON.parse(localStorage.getItem('completedLessons') || '[]')
    if (!completedLessons.includes(lesson.lessonNumber)) {
      completedLessons.push(lesson.lessonNumber)
      localStorage.setItem('completedLessons', JSON.stringify(completedLessons))
    }

    // Save badge if milestone exists
    if (lesson.hasMilestone && lesson.milestone?.badgeName) {
      const badges = JSON.parse(localStorage.getItem('earnedBadges') || '[]')
      if (!badges.find(b => b.name === lesson.milestone.badgeName)) {
        badges.push({
          name: lesson.milestone.badgeName,
          emoji: lesson.milestone.badgeEmoji,
          description: lesson.milestone.badgeDescription,
          earnedAt: new Date().toISOString()
        })
        localStorage.setItem('earnedBadges', JSON.stringify(badges))
      }
    }

    if (lesson.hasMilestone && lesson.milestone) {
      setShowMilestone(true)
    } else {
      setLessonCompleted(true)
    }
  }

  // Show milestone screen
  if (showMilestone) {
    return (
      <MilestoneScreen
        milestone={lesson.milestone}
        onContinue={() => window.location.href = '/courses/ai-foundations'}
      />
    )
  }

  // Show simple completion screen (for lessons without milestones)
  if (lessonCompleted) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div style={{ maxWidth: '500px', textAlign: 'center', color: 'white' }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>✅</div>
          <h1 style={{ fontSize: '2rem', marginBottom: '15px' }}>Lesson Complete!</h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.8, marginBottom: '40px', lineHeight: '1.7' }}>
            Great work! You've completed "{lesson.title}". Keep the momentum going.
          </p>
          <a
            href="/courses/ai-foundations"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: '16px 40px',
              borderRadius: '12px',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              textDecoration: 'none',
              boxShadow: '0 8px 30px rgba(102, 126, 234, 0.4)'
            }}
          >
            Next Lesson →
          </a>
        </div>
      </div>
    )
  }

  if (!step) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 20px' }}>
        <h2>No steps found for this lesson</h2>
        <a href="/courses/ai-foundations" style={{ color: '#667eea' }}>
          ← Back to AI Foundations
        </a>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', fontFamily: 'Arial, sans-serif', background: '#f8fafc' }}>

      {/* Top Navigation Bar */}
      <nav style={{
        background: 'white',
        padding: '15px 20px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '12px'
          }}>
            <a href="/courses/ai-foundations" style={{
              color: '#667eea',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '0.9rem'
            }}>
              ← AI Foundations
            </a>
            <span style={{ color: '#718096', fontSize: '0.85rem' }}>
              Step {currentStep + 1} of {totalSteps}
            </span>
          </div>
          <div style={{
            background: '#edf2f7',
            borderRadius: '10px',
            height: '8px',
            overflow: 'hidden'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              height: '100%',
              width: `${progress}%`,
              borderRadius: '10px',
              transition: 'width 0.4s ease'
            }} />
          </div>
        </div>
      </nav>

      {/* Lesson Title Bar */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '25px 20px',
        textAlign: 'center'
      }}>
        <p style={{ opacity: 0.8, fontSize: '0.85rem', margin: '0 0 8px 0' }}>
          Week {lesson.weekNumber} · Lesson {lesson.lessonNumber}
        </p>
        <h1 style={{ fontSize: '1.6rem', margin: 0, fontWeight: 'bold' }}>
          {lesson.title}
        </h1>
      </div>

      {/* Step Content */}
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>

        {/* Step Type Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '25px' }}>
          <span style={{
            background: stepStyle.bg,
            color: stepStyle.accent,
            padding: '6px 16px',
            borderRadius: '20px',
            fontSize: '0.85rem',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            {stepStyle.icon} {stepStyle.label}
          </span>
        </div>

        {/* Step Title */}
        <h2 style={{
          fontSize: '2rem',
          color: '#1a202c',
          marginBottom: '30px',
          fontWeight: '700',
          lineHeight: '1.3'
        }}>
          {step.stepTitle}
        </h2>

        {/* Step Content */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '40px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          fontSize: '1.1rem',
          lineHeight: '1.9',
          color: '#2d3748',
          borderTop: `4px solid ${stepStyle.accent}`
        }}>
          {step.content && <PortableText value={step.content} />}
        </div>

        {/* Navigation Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '40px',
          paddingTop: '25px',
          borderTop: '1px solid #e2e8f0'
        }}>
          {currentStep > 0 ? (
            <button onClick={goPrev} style={{
              background: 'white',
              color: '#667eea',
              padding: '14px 28px',
              border: '2px solid #667eea',
              borderRadius: '10px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '1rem'
            }}>
              ← Previous
            </button>
          ) : <div />}

          <span style={{ color: '#a0aec0', fontSize: '0.9rem' }}>
            {currentStep + 1} / {totalSteps}
          </span>

          {currentStep < totalSteps - 1 ? (
            <button onClick={goNext} style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: '14px 28px',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '1rem',
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
            }}>
              Next →
            </button>
          ) : (
            <button onClick={completeLesson} style={{
              background: 'linear-gradient(135deg, #10a37f 0%, #0d8a6a 100%)',
              color: 'white',
              padding: '14px 28px',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '1rem',
              boxShadow: '0 4px 15px rgba(16, 163, 127, 0.3)'
            }}>
              Complete Lesson ✓
            </button>
          )}
        </div>
      </main>
    </div>
  )
}