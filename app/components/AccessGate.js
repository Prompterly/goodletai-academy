'use client'

import { useState, useEffect } from 'react'
import EmailCapture from './EmailCapture'

export default function AccessGate({ lesson, children, courseType = 'free' }) {
  const [hasAccess, setHasAccess] = useState(false)
  const [checking, setChecking] = useState(true)
  const [paymentLoading, setPaymentLoading] = useState(false)
  const [paystackLoaded, setPaystackLoaded] = useState(false)
  const [hasEmail, setHasEmail] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('bundle')

  const coursePricing = {
    'ai-automation': { name: 'AI Automation Specialist', ghs: 499, usd: 49.90 },
    'ai-career': { name: 'AI Career Builder', ghs: 399, usd: 39.90 },
    'ai-marketers': { name: 'AI for Marketers & Strategists', ghs: 349, usd: 34.90 },
    'ai-writers': { name: 'AI for Writers & Content Creators', ghs: 349, usd: 34.90 },
    'ai-researchers': { name: 'AI for Researchers & Analysts', ghs: 349, usd: 34.90 },
    'ai-agents': { name: 'Building AI Agents & Assistants', ghs: 499, usd: 49.90 }
  }

  const bundlePrice = { ghs: 1499, usd: 149.90, save_ghs: 1046, save_usd: 104.60 }
  const coursePrice = coursePricing[courseType] || null

  // Load Paystack for paid courses
  useEffect(() => {
    if (courseType !== 'free') {
      const script = document.createElement('script')
      script.src = 'https://js.paystack.co/v1/inline.js'
      script.async = true
      script.onload = () => setPaystackLoaded(true)
      document.body.appendChild(script)
      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script)
        }
      }
    }
  }, [courseType])

  useEffect(() => {
    // Free courses — always accessible
    if (courseType === 'free') {
      setHasAccess(true)
      setChecking(false)
      return
    }

    // Paid courses — check payment
    const fullAccess = localStorage.getItem('allCoursesAccess')
    const courseAccess = localStorage.getItem(`course_${courseType}_access`)
    if (fullAccess === 'true' || courseAccess === 'true') {
      setHasAccess(true)
    }
    const email = localStorage.getItem('subscribedEmail')
    if (email) setHasEmail(true)
    setChecking(false)
  }, [courseType])

  const handlePayment = (plan) => {
    const email = localStorage.getItem('subscribedEmail')

    if (!email) {
      alert('Please enter your email first to continue.')
      return
    }

    if (!paystackLoaded || !window.PaystackPop) {
      alert('Payment system is loading. Please try again in a moment.')
      return
    }

    setPaymentLoading(true)

    const isBundle = plan === 'bundle'
    const amount = isBundle ? bundlePrice.ghs * 100 : coursePrice.ghs * 100
    const description = isBundle ? 'All Courses Bundle' : coursePrice.name

    const handler = window.PaystackPop.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
      email: email,
      amount: amount,
      currency: 'GHS',
      ref: 'GAA_' + Math.floor(Math.random() * 1000000000 + 1),
      metadata: {
        custom_fields: [
          {
            display_name: 'Plan',
            variable_name: 'plan',
            value: description
          },
          {
            display_name: 'Amount',
            variable_name: 'amount',
            value: isBundle ? `GHS ${bundlePrice.ghs}` : `GHS ${coursePrice.ghs}`
          }
        ]
      },
      callback: function (response) {
        if (isBundle) {
          localStorage.setItem('allCoursesAccess', 'true')
        } else {
          localStorage.setItem(`course_${courseType}_access`, 'true')
        }
        localStorage.setItem('paymentRef', response.reference)
        setHasAccess(true)
        setPaymentLoading(false)
      },
      onClose: function () {
        setPaymentLoading(false)
      }
    })

    handler.openIframe()
  }

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

  if (hasAccess) return children

  // Payment Gate (Paid Courses Only)
  if (courseType !== 'free' && coursePrice) {
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
        <div style={{ maxWidth: '600px', width: '100%', textAlign: 'center' }}>
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
            Premium Course
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '8px', fontSize: '1.1rem' }}>
            {coursePrice.name}
          </p>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '30px', fontSize: '0.95rem' }}>
            {lesson.title}
          </p>

          {/* Email capture if needed */}
          {!hasEmail && (
            <div style={{ marginBottom: '25px' }}>
              <EmailCapture
                source="payment-gate"
                lesson={coursePrice.name}
                title=""
                subtitle="Enter your email first to continue with payment."
                buttonText="Continue →"
                compact={true}
                dark={true}
                onSuccess={() => setHasEmail(true)}
              />
            </div>
          )}

          {/* Pricing Cards */}
          {hasEmail && (
            <>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '15px',
                marginBottom: '25px'
              }}>
                {/* Single Course */}
                <div
                  onClick={() => setSelectedPlan('single')}
                  style={{
                    background: selectedPlan === 'single'
                      ? 'rgba(255,255,255,0.12)'
                      : 'rgba(255,255,255,0.05)',
                    borderRadius: '16px',
                    padding: '25px 15px',
                    border: selectedPlan === 'single'
                      ? '2px solid #f59e0b'
                      : '2px solid rgba(255,255,255,0.1)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textAlign: 'center'
                  }}
                >
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', margin: '0 0 8px 0' }}>
                    This Course Only
                  </p>
                  <div style={{ fontSize: '1.8rem', fontWeight: '800', color: 'white', marginBottom: '4px' }}>
                    GHS {coursePrice.ghs}
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', margin: 0 }}>
                    ${coursePrice.usd} USD
                  </p>
                </div>

                {/* All Courses Bundle */}
                <div
                  onClick={() => setSelectedPlan('bundle')}
                  style={{
                    background: selectedPlan === 'bundle'
                      ? 'rgba(255,255,255,0.12)'
                      : 'rgba(255,255,255,0.05)',
                    borderRadius: '16px',
                    padding: '25px 15px',
                    border: selectedPlan === 'bundle'
                      ? '2px solid #10a37f'
                      : '2px solid rgba(255,255,255,0.1)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    background: '#10a37f',
                    color: 'white',
                    padding: '4px 12px',
                    fontSize: '0.6rem',
                    fontWeight: 'bold',
                    borderRadius: '0 14px 0 8px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    Best Value
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', margin: '0 0 8px 0' }}>
                    All Courses Bundle
                  </p>
                  <div style={{ fontSize: '1.8rem', fontWeight: '800', color: 'white', marginBottom: '4px' }}>
                    GHS {bundlePrice.ghs.toLocaleString()}
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', margin: '0 0 4px 0' }}>
                    ${bundlePrice.usd} USD
                  </p>
                  <p style={{ color: '#10a37f', fontSize: '0.75rem', margin: 0, fontWeight: 'bold' }}>
                    Save GHS {bundlePrice.save_ghs.toLocaleString()} (${bundlePrice.save_usd})
                  </p>
                </div>
              </div>

              {/* What's Included */}
              <div style={{
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '12px',
                padding: '20px',
                marginBottom: '25px',
                textAlign: 'left',
                border: '1px solid rgba(255,255,255,0.08)'
              }}>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', margin: '0 0 12px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {selectedPlan === 'bundle' ? 'All courses included:' : 'This course includes:'}
                </p>
                {selectedPlan === 'bundle' ? (
                  [
                    'AI Automation Specialist (GHS 499)',
                    'AI Career Builder (GHS 399)',
                    'AI for Marketers & Strategists (GHS 349)',
                    'AI for Writers & Content Creators (GHS 349)',
                    'AI for Researchers & Analysts (GHS 349)',
                    'Building AI Agents & Assistants (GHS 599)',
                    'Lifetime access to all courses',
                    'All future course updates'
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '5px 0' }}>
                      <span style={{ color: '#10a37f' }}>✓</span>
                      <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>{item}</span>
                    </div>
                  ))
                ) : (
                  [
                    `${coursePrice.name}`,
                    'All lessons and exercises',
                    'Completion badges',
                    'Lifetime access'
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '5px 0' }}>
                      <span style={{ color: '#fbbf24' }}>✓</span>
                      <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>{item}</span>
                    </div>
                  ))
                )}
              </div>

              {/* Payment Button */}
              <button
                onClick={() => handlePayment(selectedPlan)}
                disabled={paymentLoading}
                style={{
                  background: paymentLoading
                    ? '#a0aec0'
                    : selectedPlan === 'bundle'
                      ? 'linear-gradient(135deg, #10a37f 0%, #0d8a6a 100%)'
                      : 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                  color: 'white',
                  padding: '18px 50px',
                  border: 'none',
                  borderRadius: '12px',
                  cursor: paymentLoading ? 'wait' : 'pointer',
                  fontWeight: 'bold',
                  fontSize: '1.05rem',
                  boxShadow: selectedPlan === 'bundle'
                    ? '0 8px 30px rgba(16, 163, 127, 0.4)'
                    : '0 8px 30px rgba(245, 158, 11, 0.4)',
                  width: '100%',
                  maxWidth: '400px',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  if (!paymentLoading) e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                {paymentLoading
                  ? '⏳ Processing...'
                  : selectedPlan === 'bundle'
                    ? `Unlock All Courses — GHS ${bundlePrice.ghs.toLocaleString()} →`
                    : `Unlock Course — GHS ${coursePrice.ghs} →`
                }
              </button>
            </>
          )}

          {/* Trust badges */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '15px',
            marginTop: '20px',
            flexWrap: 'wrap'
          }}>
            {['🔒 Secure Payment', '💰 Money-back guarantee', '♾️ Lifetime access'].map((item, i) => (
              <span key={i} style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>
                {item}
              </span>
            ))}
          </div>

          <p style={{
            color: 'rgba(255,255,255,0.3)',
            fontSize: '0.75rem',
            marginTop: '15px'
          }}>
            Powered by Paystack · Cards & Mobile Money accepted
          </p>

          <a href="/courses" style={{
            display: 'inline-block',
            color: 'rgba(255,255,255,0.5)',
            textDecoration: 'none',
            marginTop: '20px',
            fontSize: '0.9rem'
          }}>
            ← Back to Courses
          </a>
        </div>
      </div>
    )
  }

  return children
}