'use client'

import { useState, useEffect } from 'react'

// Common email typo corrections
const typoFixes = {
  'gmal.com': 'gmail.com',
  'gmial.com': 'gmail.com',
  'gmai.com': 'gmail.com',
  'gmil.com': 'gmail.com',
  'gmail.co': 'gmail.com',
  'gmail.cm': 'gmail.com',
  'gmaill.com': 'gmail.com',
  'gamil.com': 'gmail.com',
  'gnail.com': 'gmail.com',
  'yaho.com': 'yahoo.com',
  'yahooo.com': 'yahoo.com',
  'yahoo.co': 'yahoo.com',
  'yahoo.cm': 'yahoo.com',
  'yhaoo.com': 'yahoo.com',
  'hotmal.com': 'hotmail.com',
  'hotmai.com': 'hotmail.com',
  'hotmial.com': 'hotmail.com',
  'hotmail.co': 'hotmail.com',
  'outlok.com': 'outlook.com',
  'outloo.com': 'outlook.com',
  'outlook.co': 'outlook.com',
  'outllook.com': 'outlook.com',
  'iclod.com': 'icloud.com',
  'icloud.co': 'icloud.com',
  'protonmal.com': 'protonmail.com',
  'protonmail.co': 'protonmail.com'
}

// Disposable/temporary email domains to block
const disposableDomains = [
  'tempmail.com', 'throwaway.email', 'guerrillamail.com',
  'mailinator.com', 'yopmail.com', 'sharklasers.com',
  'guerrillamailblock.com', 'grr.la', 'dispostable.com',
  'tempail.com', 'fakeinbox.com', 'mailnesia.com',
  'maildrop.cc', 'discard.email', 'trashmail.com',
  'temp-mail.org', '10minutemail.com', 'minutemail.com'
]

function validateEmail(email) {
  const trimmed = email.trim().toLowerCase()
  const errors = []
  let suggestion = null

  // Empty check
  if (!trimmed) {
    return { valid: false, errors: ['Please enter your email address'], suggestion: null, cleaned: trimmed }
  }

  // Space check
  if (trimmed.includes(' ')) {
    return { valid: false, errors: ['Email cannot contain spaces'], suggestion: null, cleaned: trimmed.replace(/\s/g, '') }
  }

  // @ symbol check
  if (!trimmed.includes('@')) {
    return { valid: false, errors: ['Missing @ symbol'], suggestion: null, cleaned: trimmed }
  }

  // Split into parts
  const parts = trimmed.split('@')

  // Multiple @ check
  if (parts.length !== 2) {
    return { valid: false, errors: ['Email should have exactly one @ symbol'], suggestion: null, cleaned: trimmed }
  }

  const [localPart, domain] = parts

  // Local part check
  if (!localPart || localPart.length < 1) {
    return { valid: false, errors: ['Missing name before @'], suggestion: null, cleaned: trimmed }
  }

  // Domain check
  if (!domain || !domain.includes('.')) {
    return { valid: false, errors: ['Invalid domain. Did you forget .com?'], suggestion: null, cleaned: trimmed }
  }

  // Domain too short
  const domainParts = domain.split('.')
  if (domainParts[domainParts.length - 1].length < 2) {
    return { valid: false, errors: ['Invalid domain ending'], suggestion: null, cleaned: trimmed }
  }

  // Too short overall
  if (trimmed.length < 6) {
    return { valid: false, errors: ['Email is too short'], suggestion: null, cleaned: trimmed }
  }

  // Check for typos
  if (typoFixes[domain]) {
    suggestion = `${localPart}@${typoFixes[domain]}`
  }

  // Check for disposable emails
  if (disposableDomains.includes(domain)) {
    return { valid: false, errors: ['Please use a real email address, not a temporary one'], suggestion: null, cleaned: trimmed }
  }

  // Basic format regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(trimmed)) {
    return { valid: false, errors: ['Invalid email format'], suggestion: null, cleaned: trimmed }
  }

  return { valid: true, errors: [], suggestion, cleaned: trimmed }
}

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
  const [errorMsg, setErrorMsg] = useState('')
  const [suggestion, setSuggestion] = useState(null)
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

    // Validate
    const result = validateEmail(email)

    if (!result.valid) {
      setStatus('invalid')
      setErrorMsg(result.errors[0])
      if (result.cleaned !== email.trim().toLowerCase()) {
        setEmail(result.cleaned)
      }
      return
    }

    // Show typo suggestion
    if (result.suggestion && !suggestion) {
      setSuggestion(result.suggestion)
      setStatus('suggestion')
      return
    }

    setStatus('loading')
    setSuggestion(null)

    const cleanEmail = result.cleaned

    try {
      await fetch(process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: cleanEmail,
          source: source,
          lesson: lesson
        })
      })

      localStorage.setItem('subscribedEmail', cleanEmail)
      setStatus('success')
      setAlreadySubscribed(true)
      if (onSuccess) onSuccess(cleanEmail)

    } catch (error) {
      localStorage.setItem('subscribedEmail', cleanEmail)
      setStatus('success')
      setAlreadySubscribed(true)
      if (onSuccess) onSuccess(cleanEmail)
    }
  }

  const acceptSuggestion = () => {
    setEmail(suggestion)
    setSuggestion(null)
    setStatus('idle')
  }

  const rejectSuggestion = () => {
    setSuggestion(null)
    setStatus('idle')
  }

  // Already subscribed
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

  // Success state
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
      background: dark ? 'rgba(255,255,255,0.08)' : 'white',
      borderRadius: '16px',
      padding: compact ? '25px' : '35px',
      border: dark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e2e8f0',
      boxShadow: dark ? 'none' : '0 2px 8px rgba(0,0,0,0.06)'
    }}>
      {/* Title */}
      {!compact && title && (
        <h3 style={{
          fontSize: '1.3rem',
          fontWeight: '700',
          color: dark ? 'white' : '#1a202c',
          margin: '0 0 8px 0'
        }}>
          {title}
        </h3>
      )}

      {/* Subtitle */}
      <p style={{
        color: dark ? 'rgba(255,255,255,0.7)' : '#718096',
        fontSize: compact ? '0.9rem' : '0.95rem',
        lineHeight: '1.6',
        margin: '0 0 20px 0'
      }}>
        {subtitle}
      </p>

      {/* Typo Suggestion Banner */}
      {status === 'suggestion' && suggestion && (
        <div style={{
          background: dark ? 'rgba(245, 158, 11, 0.2)' : '#fffbeb',
          border: dark ? '1px solid rgba(245, 158, 11, 0.3)' : '1px solid #fbbf24',
          borderRadius: '10px',
          padding: '15px',
          marginBottom: '15px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          <p style={{
            margin: 0,
            color: dark ? '#fbbf24' : '#92400e',
            fontSize: '0.9rem',
            fontWeight: '500'
          }}>
            ⚠️ Did you mean <strong>{suggestion}</strong>?
          </p>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={acceptSuggestion}
              style={{
                background: dark ? 'rgba(16,163,127,0.3)' : '#10a37f',
                color: 'white',
                padding: '8px 16px',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '0.85rem'
              }}
            >
              Yes, fix it ✓
            </button>
            <button
              onClick={rejectSuggestion}
              style={{
                background: 'transparent',
                color: dark ? 'rgba(255,255,255,0.6)' : '#718096',
                padding: '8px 16px',
                border: dark ? '1px solid rgba(255,255,255,0.2)' : '1px solid #e2e8f0',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '0.85rem'
              }}
            >
              No, it's correct
            </button>
          </div>
        </div>
      )}

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
            if (status === 'invalid') {
              setStatus('idle')
              setErrorMsg('')
            }
            if (status === 'suggestion') {
              setSuggestion(null)
              setStatus('idle')
            }
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
      {status === 'invalid' && errorMsg && (
        <p style={{
          color: '#ef4444',
          fontSize: '0.85rem',
          margin: '10px 0 0 0',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          ⚠️ {errorMsg}
        </p>
      )}

      {/* Trust line */}
      <p style={{
        color: dark ? 'rgba(255,255,255,0.4)' : '#a0aec0',
        fontSize: '0.8rem',
        margin: '12px 0 0 0'
      }}>
        🔒 No spam. Unsubscribe anytime. We respect your inbox.
      </p>
    </div>
  )
}