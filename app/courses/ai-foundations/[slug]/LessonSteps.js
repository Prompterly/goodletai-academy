'use client'

import { useState, useEffect } from 'react'
import { PortableText } from '../../../../lib/sanity'
import EmailCapture from '../../../components/EmailCapture'
import './animations.css'

// Thin wrapper so EmailCapture can call setHasAccess on success
function EmailGate({ onUnlock }) {
  return (
    <EmailCapture
      source="lesson-gate"
      title=""
      subtitle=""
      buttonText="Unlock Free Lessons →"
      onSuccess={() => onUnlock()}
    />
  )
}

const stepTypeStyles = {
  hook:        { icon: '🪝', label: 'Hook',           accent: '#f59e0b', pillBg: '#f59e0b', contentBg: '#fffbeb', calloutBg: '#fffdf0' },
  explanation: { icon: '📘', label: 'Concept',        accent: '#764ba2', pillBg: '#764ba2', contentBg: '#f5f3ff', calloutBg: '#f3f0ff' },
  example:     { icon: '💡', label: 'Example',        accent: '#38b2ac', pillBg: '#38b2ac', contentBg: '#e6fffa', calloutBg: '#f0fffe' },
  motivation:  { icon: '🔥', label: 'Why It Matters', accent: '#f59e0b', pillBg: '#f59e0b', contentBg: '#fffbeb', calloutBg: '#fffdf0' },
  exercise:    { icon: '🖊️', label: 'Exercise',       accent: '#ed8936', pillBg: '#ed8936', contentBg: '#fffaf0', calloutBg: '#fff8f0' },
  summary:     { icon: '📌', label: 'Summary',        accent: '#48bb78', pillBg: '#48bb78', contentBg: '#f0fff4', calloutBg: '#f0fff4' }
}

function MilestoneScreen({ milestone, onContinue }) {
  return (
    <div className="milestone-screen" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ maxWidth: '600px', textAlign: 'center', color: 'white', width: '100%' }}>
        <div className="milestone-emoji milestone-glow milestone-emoji-circle" style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '3.5rem',
          margin: '0 auto 30px',
          border: '4px solid rgba(255,255,255,0.2)'
        }}>
          {milestone.badgeEmoji || '🏆'}
        </div>
        <h1 className="milestone-title" style={{
          fontSize: '2.2rem',
          fontWeight: '800',
          marginBottom: '15px',
          lineHeight: '1.3'
        }}>
          {milestone.milestoneTitle || 'Milestone Achieved!'}
        </h1>
        <div className="milestone-badge" style={{
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
        <div className="milestone-content milestone-content-box" style={{
          background: 'rgba(255,255,255,0.08)',
          borderRadius: '16px',
          padding: '30px',
          marginBottom: '30px',
          textAlign: 'left',
          fontSize: '1.1rem',
          lineHeight: '1.8',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          {milestone.milestoneContent && <PortableText value={milestone.milestoneContent} />}
        </div>
        <div className="milestone-content" style={{
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '12px',
          padding: '20px',
          marginBottom: '40px',
          border: '1px solid rgba(255,255,255,0.08)'
        }}>
          <p style={{ fontSize: '0.9rem', opacity: 0.7, margin: '0 0 8px 0' }}>BADGE DESCRIPTION</p>
          <p style={{ fontSize: '1rem', opacity: 0.9, margin: 0, lineHeight: '1.6' }}>
            {milestone.badgeDescription}
          </p>
        </div>
        <button className="milestone-button btn-next" onClick={onContinue} style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '18px 50px',
          border: 'none',
          borderRadius: '12px',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '1.1rem',
          boxShadow: '0 8px 30px rgba(102, 126, 234, 0.4)',
          width: '100%',
          maxWidth: '300px'
        }}>
          Continue Learning →
        </button>
      </div>
    </div>
  )
}

function Sidebar({ steps, currentStep, onStepClick, isOpen, onClose }) {
  return (
    <>
      <div
        className={`sidebar-overlay ${isOpen ? 'active' : ''}`}
        onClick={onClose}
      />
      <div
        className={`desktop-sidebar sidebar-drawer ${isOpen ? 'open' : 'closed'}`}
        style={{
          width: '280px',
          background: '#1a1a2e',
          borderRight: '1px solid #2d2a4e',
          padding: '0',
          overflowY: 'auto',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 250,
          flexShrink: 0
        }}
      >
        {/* Sidebar header */}
        <div style={{
          padding: '18px 20px',
          borderBottom: '1px solid #2d2a4e',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h3 style={{ margin: 0, fontSize: '0.95rem', fontWeight: '700', color: 'white' }}>
            Lesson Steps
          </h3>
          <button onClick={onClose} style={{
            background: 'rgba(255,255,255,0.1)',
            border: 'none',
            color: '#a0aec0',
            width: '28px',
            height: '28px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            ✕
          </button>
        </div>

        {/* Progress bar */}
        <div style={{ padding: '14px 20px', borderBottom: '1px solid #2d2a4e' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '8px',
            fontSize: '0.75rem',
            color: '#718096'
          }}>
            <span style={{ color: '#a0aec0' }}>Progress</span>
            <span style={{ color: '#a0aec0', fontWeight: '600' }}>{currentStep + 1} / {steps.length}</span>
          </div>
          <div style={{
            background: '#2d3748',
            borderRadius: '10px',
            height: '10px',
            overflow: 'hidden'
          }}>
            <div className="progress-bar" style={{
              background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
              height: '100%',
              width: `${((currentStep + 1) / steps.length) * 100}%`,
              borderRadius: '10px',
              transition: 'width 0.4s ease'
            }} />
          </div>
        </div>

        {/* Step list */}
        <div style={{ padding: '8px 0' }}>
          {steps.map((step, index) => {
            const isCompleted = index < currentStep
            const isCurrent = index === currentStep
            const sStyle = stepTypeStyles[step.stepType] || stepTypeStyles.explanation
            return (
              <div
                key={index}
                className="sidebar-item"
                onClick={() => { onStepClick(index); onClose() }}
                style={{
                  padding: '12px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  cursor: 'pointer',
                  background: isCurrent ? '#2d2a5e' : 'transparent',
                  borderLeft: isCurrent ? '3px solid #667eea' : '3px solid transparent',
                  transition: 'all 0.2s ease'
                }}
              >
                {/* Step number / checkmark */}
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  flexShrink: 0,
                  background: isCompleted ? '#48bb78' : isCurrent ? '#667eea' : '#2d3748',
                  color: isCompleted || isCurrent ? 'white' : '#718096',
                  transition: 'all 0.3s ease'
                }}>
                  {isCompleted ? '✓' : index + 1}
                </div>

                {/* Step title + badge */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{
                    margin: '0 0 4px 0',
                    fontSize: '0.83rem',
                    fontWeight: isCurrent ? '700' : '400',
                    color: isCompleted ? '#718096' : isCurrent ? 'white' : '#a0aec0',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    textDecoration: isCompleted ? 'line-through' : 'none'
                  }}>
                    {step.stepTitle}
                  </p>
                  {/* Coloured pill badge */}
                  <span style={{
                    display: 'inline-block',
                    background: sStyle.pillBg,
                    color: 'white',
                    padding: '2px 8px',
                    borderRadius: '10px',
                    fontSize: '0.65rem',
                    fontWeight: '600',
                    opacity: isCompleted ? 0.5 : 1
                  }}>
                    {sStyle.icon} {sStyle.label}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default function LessonSteps({ lesson }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [showMilestone, setShowMilestone] = useState(false)
  const [lessonCompleted, setLessonCompleted] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [animDirection, setAnimDirection] = useState('enter')
  const [animKey, setAnimKey] = useState(0)
  const [accessChecked, setAccessChecked] = useState(false)
  const [hasAccess, setHasAccess] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024
      if (!mobile) setSidebarOpen(true)
      else setSidebarOpen(false)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const saved = localStorage.getItem('subscribedEmail')
    setHasAccess(!!saved)
    setAccessChecked(true)
  }, [])

  const steps = lesson.steps || []
  const totalSteps = steps.length
  const step = steps[currentStep]
  const progress = ((currentStep + 1) / totalSteps) * 100
  const stepStyle = stepTypeStyles[step?.stepType] || stepTypeStyles.explanation

  const goNext = () => {
    if (currentStep < totalSteps - 1) {
      setAnimDirection('forward')
      setAnimKey(prev => prev + 1)
      setCurrentStep(currentStep + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const goPrev = () => {
    if (currentStep > 0) {
      setAnimDirection('backward')
      setAnimKey(prev => prev + 1)
      setCurrentStep(currentStep - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const jumpToStep = (index) => {
    setAnimDirection(index > currentStep ? 'forward' : 'backward')
    setAnimKey(prev => prev + 1)
    setCurrentStep(index)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const completeLesson = () => {
    const completedLessons = JSON.parse(localStorage.getItem('completedLessons') || '[]')
    if (!completedLessons.includes(lesson.lessonNumber)) {
      completedLessons.push(lesson.lessonNumber)
      localStorage.setItem('completedLessons', JSON.stringify(completedLessons))
    }
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

  const getAnimClass = () => {
    if (animDirection === 'forward') return 'step-content-forward'
    if (animDirection === 'backward') return 'step-content-backward'
    return 'step-content-enter'
  }

  // ── ACCESS GATE ─────────────────────────────────────────────────────────
  if (!accessChecked) return null // avoid flash while localStorage is read

  if (!hasAccess) {
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
        <div style={{ maxWidth: '480px', width: '100%', textAlign: 'center', color: 'white' }}>
          <div style={{ fontSize: '3.5rem', marginBottom: '16px' }}>🔒</div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '10px', lineHeight: '1.3' }}>
            Sign up to access lessons
          </h1>
          <p style={{ opacity: 0.75, fontSize: '1rem', lineHeight: '1.7', marginBottom: '32px' }}>
            AI Foundations is completely free. Just drop your email to unlock all lessons instantly.
          </p>
          <div style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '16px',
            padding: '28px',
            marginBottom: '20px'
          }}>
            <EmailGate onUnlock={() => setHasAccess(true)} />
          </div>
          <a href="/courses/ai-foundations" style={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: '0.85rem',
            textDecoration: 'none'
          }}>
            ← Back to course page
          </a>
        </div>
      </div>
    )
  }
  // ────────────────────────────────────────────────────────────────────────

  if (showMilestone) {
    return (
      <MilestoneScreen
        milestone={lesson.milestone}
        onContinue={() => window.location.href = '/courses/ai-foundations'}
      />
    )
  }

  if (lessonCompleted) {
    return (
      <div className="page-enter" style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div style={{ maxWidth: '500px', textAlign: 'center', color: 'white', width: '100%' }}>
          <div className="milestone-emoji" style={{ fontSize: '4rem', marginBottom: '20px' }}>✅</div>
          <h1 className="milestone-title" style={{ fontSize: '2rem', marginBottom: '15px' }}>
            Lesson Complete!
          </h1>
          <p className="milestone-content" style={{
            fontSize: '1.1rem', opacity: 0.8, marginBottom: '30px', lineHeight: '1.7'
          }}>
            Great work! You've completed "{lesson.title}". Keep the momentum going.
          </p>

          {lesson.lessonNumber >= 3 && (
            <div className="milestone-content" style={{
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '14px',
              padding: '24px',
              marginBottom: '30px',
              textAlign: 'left'
            }}>
              <p style={{ margin: '0 0 6px 0', fontSize: '0.8rem', color: '#a5b4fc', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>
                ⚡ Ready to go deeper?
              </p>
              <p style={{ margin: '0 0 18px 0', fontSize: '0.95rem', opacity: 0.85, lineHeight: '1.7' }}>
                The <strong>AI Automation Specialist</strong> course builds on exactly what you just learned — 30 lessons, real workflows, and a career-ready portfolio.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="/courses/ai-automation-specialist" style={{
                  background: 'linear-gradient(135deg, #10a37f, #0d8a6a)',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  fontSize: '0.88rem',
                  textDecoration: 'none'
                }}>
                  Explore AI Automation →
                </a>
                <a href="/courses" style={{
                  color: 'rgba(255,255,255,0.6)',
                  padding: '10px 20px',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  fontSize: '0.88rem',
                  textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}>
                  See all courses
                </a>
              </div>
            </div>
          )}

          <a className="milestone-button btn-next" href="/courses/ai-foundations" style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '16px 40px',
            borderRadius: '12px',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            textDecoration: 'none',
            boxShadow: '0 8px 30px rgba(102, 126, 234, 0.4)'
          }}>
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
        <a href="/courses/ai-foundations" style={{ color: '#667eea' }}>← Back</a>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', fontFamily: 'Arial, sans-serif', background: '#f8fafc' }}>

      <nav className="nav-top-bar" style={{
        background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 100%)',
        padding: '0 20px',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '54px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="hamburger-btn"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '8px 10px',
                  cursor: 'pointer',
                  fontSize: '1.1rem',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  lineHeight: 1
                }}
              >
                ☰
              </button>
              <a href="/courses/ai-foundations" style={{
                color: 'rgba(255,255,255,0.85)',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '0.9rem'
              }}>
                ← AI Foundations
              </a>
            </div>
            <span style={{ color: '#a78bfa', fontSize: '0.85rem', fontWeight: '600' }}>
              Step {currentStep + 1} of {totalSteps}
            </span>
          </div>
          {/* Thick progress stripe */}
          <div style={{ background: 'rgba(0,0,0,0.3)', height: '8px', overflow: 'hidden' }}>
            <div className="progress-bar" style={{
              background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
              height: '100%',
              width: `${progress}%`,
              transition: 'width 0.4s ease'
            }} />
          </div>
        </div>
      </nav>

      <div className="lesson-title-bar" style={{
        background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 100%)',
        color: 'white',
        padding: '20px 20px 24px',
        textAlign: 'center'
      }}>
        <p style={{ opacity: 0.6, fontSize: '0.75rem', margin: '0 0 6px 0', letterSpacing: '2px', textTransform: 'uppercase' }}>
          Week {lesson.weekNumber} · Lesson {lesson.lessonNumber}
        </p>
        <h1 style={{ fontSize: '1.5rem', margin: 0, fontWeight: '800' }}>
          {lesson.title}
        </h1>
      </div>

      <Sidebar
        steps={steps}
        currentStep={currentStep}
        onStepClick={jumpToStep}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <main className="content-area content-main" style={{
        padding: '40px 20px 100px',
        maxWidth: '850px',
        margin: '0 auto'
      }}>
        <div key={animKey} className={getAnimClass()}>
          {/* Step type badge */}
          <div className="step-badge-container step-badge" style={{ marginBottom: '20px' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: stepStyle.pillBg,
              color: 'white',
              padding: '6px 18px',
              borderRadius: '20px',
              fontSize: '0.85rem',
              fontWeight: '700',
              boxShadow: `0 2px 8px ${stepStyle.pillBg}55`
            }}>
              {stepStyle.icon} {stepStyle.label}
            </span>
          </div>

          <h2 className="step-title step-title-text" style={{
            fontSize: '2rem',
            color: '#1a202c',
            marginBottom: '30px',
            fontWeight: '700',
            lineHeight: '1.3'
          }}>
            {step.stepTitle}
          </h2>

          <div className="step-body step-content-box" style={{
            background: 'white',
            borderRadius: '16px',
            padding: '40px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.07)',
            fontSize: '1.05rem',
            lineHeight: '1.9',
            color: '#2d3748',
            borderLeft: `4px solid ${stepStyle.accent}`
          }}>
            {step.content && <PortableText value={step.content} />}
          </div>
        </div>

        <div className="desktop-nav-buttons" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '40px',
          paddingTop: '25px',
          borderTop: '1px solid #e2e8f0'
        }}>
          {currentStep > 0 ? (
            <button className="btn-prev" onClick={goPrev} style={{
              background: 'white',
              color: '#667eea',
              padding: '12px 24px',
              border: '2px solid #e2e8f0',
              borderRadius: '10px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '0.95rem',
              color: '#718096'
            }}>
              ← Previous
            </button>
          ) : <div />}

          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: 0, color: '#a0aec0', fontSize: '0.8rem' }}>
              Step {currentStep + 1} of {totalSteps} · You're {Math.round(progress)}% through this lesson
            </p>
          </div>

          {currentStep < totalSteps - 1 ? (
            <div style={{ textAlign: 'right' }}>
              <button className="btn-next" onClick={goNext} style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '12px 28px',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '1rem',
                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
                display: 'block'
              }}>
                Next →
              </button>
              {steps[currentStep + 1] && (
                <p style={{ margin: '6px 0 0', fontSize: '0.75rem', color: '#a0aec0' }}>
                  Up next: {steps[currentStep + 1].stepTitle}
                </p>
              )}
            </div>
          ) : (
            <button className="btn-complete" onClick={completeLesson} style={{
              background: 'linear-gradient(135deg, #10a37f 0%, #0d8a6a 100%)',
              color: 'white',
              padding: '12px 28px',
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

      <div className="mobile-bottom-nav" style={{
        display: 'none',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'white',
        padding: '12px 20px',
        boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
        zIndex: 90,
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '10px'
      }}>
        {currentStep > 0 ? (
          <button onClick={goPrev} style={{
            background: 'white',
            color: '#667eea',
            padding: '12px 20px',
            border: '2px solid #667eea',
            borderRadius: '10px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '0.9rem',
            flex: 1
          }}>
            ←
          </button>
        ) : <div style={{ flex: 1 }} />}

        <div style={{
          textAlign: 'center',
          color: '#718096',
          fontSize: '0.85rem',
          fontWeight: '600',
          minWidth: '60px'
        }}>
          {currentStep + 1} / {totalSteps}
        </div>

        {currentStep < totalSteps - 1 ? (
          <button onClick={goNext} style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '12px 20px',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '0.9rem',
            flex: 1,
            boxShadow: '0 2px 10px rgba(102, 126, 234, 0.3)'
          }}>
            Next →
          </button>
        ) : (
          <button onClick={completeLesson} style={{
            background: 'linear-gradient(135deg, #10a37f 0%, #0d8a6a 100%)',
            color: 'white',
            padding: '12px 20px',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '0.9rem',
            flex: 1,
            boxShadow: '0 2px 10px rgba(16, 163, 127, 0.3)'
          }}>
            Complete ✓
          </button>
        )}
      </div>
    </div>
  )
}