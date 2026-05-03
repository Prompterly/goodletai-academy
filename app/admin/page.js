'use client'

import { useState } from 'react'

const COURSE_LABELS = {
  'all-access-bundle': 'All-Access Bundle',
  'AI Automation Specialist': 'AI Automation Specialist',
  'AI Career Builder': 'AI Career Builder',
  'AI for Marketers & Strategists': 'AI for Marketers & Strategists',
  'AI for Writers & Content Creators': 'AI for Writers & Content Creators',
  'AI for Researchers & Analysts': 'AI for Researchers & Analysts',
  'Building AI Agents & Assistants': 'AI Agents & Assistants',
}

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [authed, setAuthed] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [data, setData] = useState(null)

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await fetch('/api/admin-data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      const json = await res.json()
      setData(json)
      setAuthed(true)
    } else {
      setError('Incorrect password.')
    }
    setLoading(false)
  }

  const handleRefresh = async () => {
    setLoading(true)
    const res = await fetch('/api/admin-data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })
    if (res.ok) setData(await res.json())
    setLoading(false)
  }

  if (!authed) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
      }}>
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '48px 40px',
          width: '100%',
          maxWidth: '400px',
          textAlign: 'center',
          boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🔐</div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1a202c', marginBottom: '8px' }}>
            Admin Dashboard
          </h1>
          <p style={{ color: '#718096', fontSize: '0.9rem', marginBottom: '28px' }}>
            Goodlet AI Academy
          </p>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                fontSize: '1rem',
                marginBottom: '16px',
                boxSizing: 'border-box',
                outline: 'none',
              }}
            />
            {error && (
              <p style={{ color: '#e53e3e', fontSize: '0.85rem', marginBottom: '12px' }}>{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '13px',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                fontSize: '1rem',
                cursor: loading ? 'wait' : 'pointer',
              }}
            >
              {loading ? 'Checking...' : 'Access Dashboard →'}
            </button>
          </form>
        </div>
      </div>
    )
  }

  const { enrollments, byCourse, totalRevenue, totalEnrollments, emailListSize } = data

  const statCards = [
    { label: 'Total Enrollments', value: totalEnrollments, icon: '🎓', color: '#667eea' },
    { label: 'Total Revenue', value: `GHS ${totalRevenue.toLocaleString()}`, icon: '💰', color: '#10a37f' },
    { label: 'Email Subscribers', value: emailListSize || '—', icon: '📧', color: '#f59e0b' },
    { label: 'Courses Sold', value: Object.keys(byCourse).length, icon: '📚', color: '#f5576c' },
  ]

  return (
    <div style={{ minHeight: '100vh', background: '#f7fafc', fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 100%)',
        padding: '24px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div>
          <h1 style={{ color: 'white', fontSize: '1.4rem', fontWeight: '700', margin: 0 }}>
            Goodlet AI Academy
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', margin: '4px 0 0' }}>
            Admin Dashboard
          </p>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <button
            onClick={handleRefresh}
            disabled={loading}
            style={{
              background: 'rgba(255,255,255,0.1)',
              color: 'white',
              border: '1px solid rgba(255,255,255,0.2)',
              padding: '8px 16px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '0.85rem',
            }}
          >
            {loading ? '↻ Refreshing...' : '↻ Refresh'}
          </button>
          <a href="/" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', textDecoration: 'none' }}>
            ← Back to Site
          </a>
        </div>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 24px' }}>

        {/* Stat Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px',
          marginBottom: '40px',
        }}>
          {statCards.map((card, i) => (
            <div key={i} style={{
              background: 'white',
              borderRadius: '12px',
              padding: '24px',
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
              border: '1px solid #e2e8f0',
            }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '10px' }}>{card.icon}</div>
              <div style={{ fontSize: '2rem', fontWeight: '800', color: card.color }}>
                {card.value}
              </div>
              <p style={{ color: '#718096', fontSize: '0.85rem', margin: '4px 0 0' }}>{card.label}</p>
            </div>
          ))}
        </div>

        {/* Revenue by Course */}
        {Object.keys(byCourse).length > 0 && (
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '28px',
            marginBottom: '30px',
            boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
            border: '1px solid #e2e8f0',
          }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1a202c', marginBottom: '20px' }}>
              Enrollments by Course
            </h2>
            {Object.entries(byCourse)
              .sort((a, b) => b[1].count - a[1].count)
              .map(([course, stats]) => (
                <div key={course} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px 0',
                  borderBottom: '1px solid #f0f0f0',
                }}>
                  <span style={{ color: '#2d3748', fontSize: '0.95rem' }}>
                    {COURSE_LABELS[course] || course}
                  </span>
                  <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                    <span style={{
                      background: '#eef2ff',
                      color: '#667eea',
                      padding: '3px 10px',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: 'bold',
                    }}>
                      {stats.count} enrolled
                    </span>
                    <span style={{ color: '#10a37f', fontWeight: '700', fontSize: '0.95rem', minWidth: '80px', textAlign: 'right' }}>
                      GHS {stats.revenue.toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        )}

        {/* Enrollment Table */}
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '28px',
          boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
          border: '1px solid #e2e8f0',
          overflowX: 'auto',
        }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1a202c', marginBottom: '20px' }}>
            All Enrollments {enrollments.length > 0 && `(${enrollments.length})`}
          </h2>

          {enrollments.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px', color: '#a0aec0' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>📭</div>
              <p>No enrollments yet. They'll appear here after the first Paystack payment.</p>
            </div>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
                  {['Email', 'Course', 'Plan', 'Amount', 'Reference', 'Date'].map(h => (
                    <th key={h} style={{
                      textAlign: 'left',
                      padding: '10px 12px',
                      color: '#718096',
                      fontWeight: '600',
                      fontSize: '0.78rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {enrollments.map((e, i) => (
                  <tr key={e._id} style={{
                    borderBottom: '1px solid #f7fafc',
                    background: i % 2 === 0 ? 'white' : '#fafafa',
                  }}>
                    <td style={{ padding: '12px', color: '#2d3748' }}>{e.email}</td>
                    <td style={{ padding: '12px', color: '#4a5568' }}>
                      {COURSE_LABELS[e.course] || e.course}
                    </td>
                    <td style={{ padding: '12px' }}>
                      <span style={{
                        background: e.plan === 'bundle' ? '#f0fdf4' : '#fefce8',
                        color: e.plan === 'bundle' ? '#16a34a' : '#ca8a04',
                        padding: '2px 8px',
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                        fontWeight: 'bold',
                      }}>
                        {e.plan === 'bundle' ? 'Bundle' : 'Single'}
                      </span>
                    </td>
                    <td style={{ padding: '12px', color: '#10a37f', fontWeight: '600' }}>
                      GHS {(e.amountGHS || 0).toLocaleString()}
                    </td>
                    <td style={{ padding: '12px', color: '#a0aec0', fontSize: '0.8rem', fontFamily: 'monospace' }}>
                      {e.reference}
                    </td>
                    <td style={{ padding: '12px', color: '#718096' }}>
                      {e.paidAt ? new Date(e.paidAt).toLocaleDateString('en-GB', {
                        day: '2-digit', month: 'short', year: 'numeric'
                      }) : '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

      </div>
    </div>
  )
}
