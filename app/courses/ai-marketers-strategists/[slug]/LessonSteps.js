'use client'

import { useState, useEffect } from 'react'
import { PortableText } from '../../../../lib/sanity'
import './animations.css'

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
          background: 'white',
          borderRight: '1px solid #e2e8f0',
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
        <div style={{
          padding: '20px',
          borderBottom: '1px solid #edf2f7',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
          color: 'white'
        }}>
          <h3 style={{ margin: 0, fontSize: '0.95rem', fontWeight: '700' }}>
            📚 Lesson Steps
          </h3>
          <button onClick={onClose} style={{
            background: 'rgba(255,255,255,0.2)',
            border: 'none',
            color: 'white',
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1.1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            ✕
          </button>
        </div>
        <div style={{
          padding: '15px 20px',
          borderBottom: '1px solid #edf2f7',
          background: '#f8fafc'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '8px',
            fontSize: '0.8rem',
            color: '#718096'
          }}>
            <span>Progress</span>
            <span>{currentStep + 1} / {steps.length}</span>
          </div>
          <div style={{
            background: '#edf2f7',
            borderRadius: '10px',
            height: '6px',
            overflow: 'hidden'
          }}>
            <div className="progress-bar" style={{
              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
              height: '100%',
              width: `${((currentStep + 1) / steps.length) * 100}%`,
              borderRadius: '10px'
            }} />
          </div>
        </div>
        <div style={{ padding: '10px 0' }}>
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
                  padding: '14px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  cursor: 'pointer',
                  background: isCurrent ? '#fffbeb' : 'transparent',
                  borderLeft: isCurrent ? '3px solid #f59e0b' : '3px solid transparent'
                }}
              >
                <div style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  flexShrink: 0,
                  background: isCompleted ? '#10a37f' : isCurrent ? '#f59e0b' : '#edf2f7',
                  color: isCompleted || isCurrent ? 'white' : '#a0aec0',
                  transition: 'all 0.3s ease'
                }}>
                  {isCompleted ? '✓' : index + 1}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{
                    margin: 0,
                    fontSize: '0.85rem',
                    fontWeight: isCurrent ? '600' : '400',
                    color: isCompleted ? '#10a37f' : isCurrent ? '#1a202c' : '#718096',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {step.stepTitle}
                  </p>
                  <span style={{ fontSize: '0.7rem', color: sStyle.accent, opacity: 0.7 }}>
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
    const completedLessons = JSON.parse(localStorage.getItem('completedLessons_marketers') || '[]')
    if (!completedLessons.includes(lesson.lessonNumber)) {
      completedLessons.push(lesson.lessonNumber)
      localStorage.setItem('completedLessons_marketers', JSON.stringify(completedLessons))
    }
    if (lesson.hasMilestone && lesson.milestone?.badgeName) {
      const badges = JSON.parse(localStorage.getItem('earnedBadges_marketers') || '[]')
      if (!badges.find(b => b.name === lesson.milestone.badgeName)) {
        badges.push({
          name: lesson.milestone.badgeName,
          emoji: lesson.milestone.badgeEmoji,
          description: lesson.milestone.badgeDescription,
          earnedAt: new Date().toISOString()
        })
        localStorage.setItem('earnedBadges_marketers', JSON.stringify(badges))
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

  if (showMilestone) {
    return (
      <MilestoneScreen
        milestone={lesson.milestone}
        onContinue={() => window.location.href = '/courses/ai-marketers-strategists'}
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
            fontSize: '1.1rem', opacity: 0.8, marginBottom: '40px', lineHeight: '1.7'
          }}>
            Great work! You've completed "{lesson.title}". Keep the momentum going.
          </p>
          <a className="milestone-button btn-next" href="/courses/ai-marketers-strategists" style={{
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
        <a href="/courses/ai-marketers-strategists" style={{ color: '#f59e0b' }}>← Back</a>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', fontFamily: 'Arial, sans-serif', background: '#f8fafc' }}>

      <nav className="nav-top-bar" style={{
        background: 'white',
        padding: '15px 20px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="hamburger-btn"
                style={{
                  background: 'none',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '8px 10px',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  color: '#f59e0b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  lineHeight: 1
                }}
              >
                ☰
              </button>
              <a href="/courses/ai-marketers-strategists" style={{
                color: '#f59e0b',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '0.9rem'
              }}>
                ← AI Marketers
              </a>
            </div>
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
            <div className="progress-bar" style={{
              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
              height: '100%',
              width: `${progress}%`,
              borderRadius: '10px'
            }} />
          </div>
        </div>
      </nav>

      <div className="lesson-title-bar" style={{
        background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
        color: 'white',
        padding: '20px',
        textAlign: 'center'
      }}>
        <p style={{ opacity: 0.8, fontSize: '0.85rem', margin: '0 0 6px 0' }}>
          Week {lesson.weekNumber} · Lesson {lesson.lessonNumber}
        </p>
        <h1 style={{ fontSize: '1.4rem', margin: 0, fontWeight: 'bold' }}>
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
          <div className="step-badge-container step-badge" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '25px'
          }}>
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
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            fontSize: '1.1rem',
            lineHeight: '1.9',
            color: '#2d3748',
            borderTop: `4px solid ${stepStyle.accent}`
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
              color: '#f59e0b',
              padding: '14px 28px',
              border: '2px solid #f59e0b',
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
            <button className="btn-next" onClick={goNext} style={{
              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
              color: 'white',
              padding: '14px 28px',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '1rem',
              boxShadow: '0 4px 15px rgba(245, 158, 11, 0.3)'
            }}>
              Next →
            </button>
          ) : (
            <button className="btn-complete" onClick={completeLesson} style={{
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
            color: '#f59e0b',
            padding: '12px 20px',
            border: '2px solid #f59e0b',
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
            background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
            color: 'white',
            padding: '12px 20px',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '0.9rem',
            flex: 1,
            boxShadow: '0 2px 10px rgba(245, 158, 11, 0.3)'
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
