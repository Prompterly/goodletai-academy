 'use client'

import { useState, useEffect } from 'react'
import EmailCapture from './EmailCapture'

export default function AccessGate({ lesson, children }) {
  const [hasAccess, setHasAccess] = useState(false)
  const [checking, setChecking] = useState(true)

  const lessonNum = lesson.lessonNumber

  useEffect(() => {
    // Lessons 1-4: Free for everyone
    if (lessonNum <= 4) {
      setHasAccess(true)
      setChecking(false)
      return
    }

    // Lessons 5-7: Need email
    if (lessonNum >= 5 && lessonNum <= 7) {
      const email = localStorage.getItem('subscribedEmail')
      if (email) {
        setHasAccess(true)
      }
      setChecking(false)
      return
    }

    // Lessons 8-10: Need payment
    if (lessonNum >= 8) {
      const paid = localStorage.getItem('premiumAccess')
      if (paid === 'true') {
        setHasAccess(true)
      }
      setChecking(false)
      return
    }

    setChecking(false)
  }, [lessonNum])

  if (checking) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Arial, sans-serif'
      }}>
        <p style={{ color: '#718096' }}>Loading...</p>
      </div>
    )
  }

  if (hasAccess) {
    return children
  }

  // Email Gate (Lessons 5-7)
  if (lessonNum >= 5 && lessonNum <= 7) {
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
        <div style={{ maxWidth: '500px', width: '100%', textAlign: 'center' }}>
          {/* Icon */}
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            margin: '0 auto 25px',
            boxShadow: '0 0 30px rgba(102, 126, 234, 0.3)'
          }}>
            🔓
          </div>

          <h1 style={{ color: 'white', fontSize: '1.8rem', marginBottom: '10px', fontWeight: '700' }}>
            Unlock This Lesson
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '8px', fontSize: '1.1rem' }}>
            {lesson.title}
          </p>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '30px', fontSize: '0.95rem' }}>
            Week {lesson.weekNumber} · Lesson {lesson.lessonNumber}
          </p>

          {/* What you get */}
          <div style={{
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '25px',
            textAlign: 'left',
            border: '1px solid rgba(255,255,255,0.08)'
          }}>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', margin: '0 0 12px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Free with email signup:
            </p>
            {['Access to Lessons 5-7', 'Prompt Engineering skills', 'AI Productivity techniques', 'Earn 2 more badges'].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '6px 0' }}>
                <span style={{ color: '#10a37f' }}>✓</span>
                <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>{item}</span>
              </div>
            ))}
          </div>

          {/* Email Capture */}
          <EmailCapture
            source="email-gate"
            lesson={lesson.title}
            title=""
            subtitle="Enter your email to unlock this lesson — completely free."
            buttonText="Unlock Lesson →"
            compact={true}
            dark={true}
            onSuccess={() => setHasAccess(true)}
          />

          {/* Back link */}
          <a href="/courses/ai-foundations" style={{
            display: 'inline-block',
            color: 'rgba(255,255,255,0.5)',
            textDecoration: 'none',
            marginTop: '20px',
            fontSize: '0.9rem'
          }}>
            ← Back to AI Foundations
          </a>
        </div>
      </div>
    )
  }

  // Payment Gate (Lessons 8-10)
  if (lessonNum >= 8) {
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
        <div style={{ maxWidth: '500px', width: '100%', textAlign: 'center' }}>
          {/* Icon */}
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            margin: '0 auto 25px',
            boxShadow: '0 0 30px rgba(245, 158, 11, 0.3)'
          }}>
            ⭐
          </div>

          <h1 style={{ color: 'white', fontSize: '1.8rem', marginBottom: '10px', fontWeight: '700' }}>
            Premium Lesson
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '8px', fontSize: '1.1rem' }}>
            {lesson.title}
          </p>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '30px', fontSize: '0.95rem' }}>
            Week {lesson.weekNumber} · Lesson {lesson.lessonNumber}
          </p>

          {/* Price Card */}
          <div style={{
            background: 'rgba(255,255,255,0.08)',
            borderRadius: '16px',
            padding: '30px',
            marginBottom: '25px',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', margin: '0 0 5px 0' }}>
              One-time payment
            </p>
            <div style={{
              fontSize: '3rem',
              fontWeight: '800',
              color: 'white',
              marginBottom: '5px'
            }}>
              $9.99
            </div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', margin: '0 0 20px 0' }}>
              Lifetime access to all premium lessons
            </p>

            {/* What's included */}
            <div style={{ textAlign: 'left' }}>
              {[
                'Lessons 8-10 (Premium content)',
                'AI for Work and Career Growth',
                'AI Tools You Should Know',
                'Your First AI Workflow',
                'Earn 2 premium badges',
                'Lifetime access — pay once',
                'Future course updates included'
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '6px 0' }}>
                  <span style={{ color: '#fbbf24' }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Button (placeholder — we'll add real payment next session) */}
          <button
            onClick={() => {
              alert('Payment integration coming soon! For now, enjoy free access.')
              localStorage.setItem('premiumAccess', 'true')
              setHasAccess(true)
            }}
            style={{
              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
              color: 'white',
              padding: '18px 50px',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              boxShadow: '0 8px 30px rgba(245, 158, 11, 0.4)',
              width: '100%',
              maxWidth: '350px',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Unlock Full Course — $9.99 →
          </button>

          {/* Trust badges */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginTop: '20px',
            flexWrap: 'wrap'
          }}>
            {['🔒 Secure', '💰 Money-back guarantee', '♾️ Lifetime access'].map((item, i) => (
              <span key={i} style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>
                {item}
              </span>
            ))}
          </div>

          {/* What's free */}
          <div style={{
            marginTop: '30px',
            padding: '20px',
            background: 'rgba(255,255,255,0.03)',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.05)'
          }}>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', margin: '0 0 10px 0' }}>
              Your progress so far:
            </p>
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <span style={{ background: 'rgba(16,163,127,0.2)', color: '#34d399', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem' }}>
                ✅ Lessons 1-4 Free
              </span>
              <span style={{ background: 'rgba(102,126,234,0.2)', color: '#a5b4fc', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem' }}>
                ✅ Lessons 5-7 Unlocked
              </span>
              <span style={{ background: 'rgba(245,158,11,0.2)', color: '#fbbf24', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem' }}>
                🔒 Lessons 8-10 Premium
              </span>
            </div>
          </div>

          {/* Back link */}
          <a href="/courses/ai-foundations" style={{
            display: 'inline-block',
            color: 'rgba(255,255,255,0.5)',
            textDecoration: 'none',
            marginTop: '20px',
            fontSize: '0.9rem'
          }}>
            ← Back to AI Foundations
          </a>
        </div>
      </div>
    )
  }

  return children
}
