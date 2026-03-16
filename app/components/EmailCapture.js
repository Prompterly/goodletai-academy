 'use client'

import { useState, useEffect } from 'react'

export default function EmailCapture({ 
  source = 'unknown',
  lesson = '',
  title = '🚀 Start Your AI Journey',
  subtitle = 'Enter your email to track your progress and get notified when new lessons drop.',
  buttonText = 'Join Free →',
  compact = false,
  dark = false,
  onSuccess = null
}) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [alreadySubscribed, setAlreadySubscribed] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('subscribedEmail')
    if (saved) {
      setAlreadySubscribed(true)
      setEmail(saved)
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      setStatus('invalid')
      return
    }

    setStatus('loading')

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          source: source,
          lesson: lesson
        })
      })

      localStorage.setItem('subscribedEmail', email)
      setStatus('success')
      setAlreadySubscribed(true)

      if (onSuccess) onSuccess(email)

    } catch (error) {
      localStorage.setItem('subscribedEmail', email)
      setStatus('success')
      setAlreadySubscribed(true)
      if (onSuccess) onSuccess(email)
    }
  }

  // Already subscribed — show minimal confirmation
  if (alreadySubscribed && status !== 'success') {
    if (compact) return null
    return (
      <div style={{
        background: dark ? 'rgba(255,255,255,0.08)' : '#f0fdf4',
        borderRadius: '12px',
        padding: '20px 25px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        border: dark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #bbf7d0'
      }}>
        <span style={{ fontSize: '1.3rem' }}>✅</span>
        <div>
          <p style={{ 
            margin: 0, 
            fontWeight: 'bold', 
            color: dark ? 'white' : '#166534',
            fontSize: '0.95rem'
          }}>
            You're subscribed!
          </p>
          <p style={{ 
            margin: 0, 
            color: dark ? 'rgba(255,255,255,0.7)' : '#4ade80',
            fontSize: '0.85rem'
          }}>
            {email}
          </p>
        </div>
      </div>
    )
  }

  // Success state — just submitted
  if (status === 'success') {
    return (
      <div style={{
        background: dark 
          ? 'rgba(16, 163, 127, 0.2)' 
          : 'linear-gradient(135deg, #ecfdf5, #d1fae5)',
        borderRadius: '16px',
        padding: compact ? '25px' : '35px',
        textAlign: 'center',
        border: dark 
          ? '1px solid rgba(16, 163, 127, 0.3)' 
          : '1px solid #a7f3d0',
        animation: 'scaleIn 0.4s ease-out forwards'
      }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🎉</div>
        <h3 style={{ 
          color: dark ? 'white' : '#065f46', 
          marginBottom: '8px',
          fontSize: '1.3rem'
        }}>
          You're in!
        </h3>
        <p style={{ 
          color: dark ? 'rgba(255,255,255,0.8)' : '#047857',
          fontSize: '0.95rem',
          margin: 0
        }}>
          We'll keep you updated on new lessons and courses.
        </p>
      </div>
    )
  }

  // Main form
  return (
    <div style={{
      background: dark 
        ? 'rgba(255,255,255,0.08)' 
        : 'white',
      borderRadius: '16px',
      padding: compact ? '25px' : '35px',
      border: dark 
        ? '1px solid rgba(255,255,255,0.1)' 
        : '1px solid #e2e8f0',
      boxShadow: dark 
        ? 'none' 
        : '0 2px 8px rgba(0,0,0,0.06)'
    }}>
      {/* Title */}
      {!compact && (
        <h3 style={{
          fontSize: '1.3rem',
          fontWeight: '700',
          color: dark ? 'white' : '#1a202c',
          marginBottom: '8px',
          margin: '0 0 8px 0'
        }}>
          {title}
        </h3>
      )}

      {/* Subtitle */}
      <p style={{
        color: dark ? 'rgba(255,255,255,0.7)' : '#718096',
        fontSize: compact ? '0.9rem' : '0.95rem',
        marginBottom: '20px',
        lineHeight: '1.6',
        margin: '0 0 20px 0'
      }}>
        {subtitle}
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap'
      }}>
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (status === 'invalid') setStatus('idle')
          }}
          style={{
            flex: 1,
            minWidth: '200px',
            padding: '14px 18px',
            borderRadius: '10px',
            border: status === 'invalid'
              ? '2px solid #ef4444'
              : dark 
                ? '1px solid rgba(255,255,255,0.2)' 
                : '1px solid #e2e8f0',
            background: dark ? 'rgba(255,255,255,0.1)' : 'white',
            color: dark ? 'white' : '#1a202c',
            fontSize: '1rem',
            outline: 'none',
            transition: 'border 0.2s ease'
          }}
          onFocus={(e) => {
            e.target.style.borderColor = '#667eea'
          }}
          onBlur={(e) => {
            if (status !== 'invalid') {
              e.target.style.borderColor = dark 
                ? 'rgba(255,255,255,0.2)' 
                : '#e2e8f0'
            }
          }}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          style={{
            background: status === 'loading'
              ? '#a0aec0'
              : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '14px 28px',
            border: 'none',
            borderRadius: '10px',
            cursor: status === 'loading' ? 'wait' : 'pointer',
            fontWeight: 'bold',
            fontSize: '0.95rem',
            boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
            transition: 'all 0.25s ease',
            whiteSpace: 'nowrap'
          }}
          onMouseEnter={(e) => {
            if (status !== 'loading') e.currentTarget.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          {status === 'loading' ? '⏳ Joining...' : buttonText}
        </button>
      </form>

      {/* Error message */}
      {status === 'invalid' && (
        <p style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '8px', margin: '8px 0 0 0' }}>
          Please enter a valid email address
        </p>
      )}

      {/* Trust line */}
      <p style={{
        color: dark ? 'rgba(255,255,255,0.4)' : '#a0aec0',
        fontSize: '0.8rem',
        marginTop: '12px',
        margin: '12px 0 0 0'
      }}>
        🔒 No spam. Unsubscribe anytime. We respect your inbox.
      </p>
    </div>
  )
}
