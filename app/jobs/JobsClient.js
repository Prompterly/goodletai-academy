'use client'

import { useState } from 'react'

const CATEGORIES = ['All', 'Engineering', 'Automation', 'Research', 'Product', 'Marketing', 'Design']

function timeAgo(dateStr) {
  if (!dateStr) return null
  const days = Math.floor((Date.now() - new Date(dateStr)) / 86400000)
  if (days === 0) return 'Today'
  if (days === 1) return 'Yesterday'
  if (days < 7) return `${days}d ago`
  if (days < 30) return `${Math.floor(days / 7)}w ago`
  return `${Math.floor(days / 30)}mo ago`
}

// ─── Mercor Featured Card ─────────────────────────────────────────────────────

function MercorHero({ mercorLink }) {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)',
      color: 'white', borderRadius: '20px', padding: '44px 48px',
      marginBottom: '60px', position: 'relative', overflow: 'hidden',
      border: '1px solid rgba(102,126,234,0.2)',
      boxShadow: '0 24px 60px rgba(0,0,0,0.2)',
    }}>
      {/* Glow orbs */}
      <div style={{ position: 'absolute', top: '-60px', right: '-40px', width: '260px', height: '260px', background: 'radial-gradient(circle, rgba(102,126,234,0.22) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-50px', left: '30%', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(118,75,162,0.18) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <span style={{
          background: 'linear-gradient(135deg, #667eea, #764ba2)',
          padding: '5px 16px', borderRadius: '20px',
          fontSize: '0.72rem', fontWeight: '700', letterSpacing: '1.5px',
          textTransform: 'uppercase', display: 'inline-block', marginBottom: '24px',
        }}>
          🤝 Featured Partner
        </span>

        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '32px' }}>
          <div style={{ flex: '1', minWidth: '280px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', margin: '0 0 14px', lineHeight: '1.2' }}>
              Skip the applications.<br />Get matched.
            </h2>
            <p style={{ fontSize: '1.05rem', opacity: 0.8, lineHeight: '1.8', marginBottom: '26px', maxWidth: '500px' }}>
              Mercor vets you once — then top AI companies come to you directly.
              No cold applying. No ghosting. Just the right roles.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px', marginBottom: '32px' }}>
              {['Free to sign up', 'Top AI companies', 'Remote-first roles', 'No cold applying'].map(f => (
                <span key={f} style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '0.88rem', opacity: 0.85 }}>
                  <span style={{ color: '#a78bfa', fontWeight: '800' }}>✓</span> {f}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '18px', flexWrap: 'wrap' }}>
              <a
                href={mercorLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  color: 'white', padding: '16px 36px', borderRadius: '12px',
                  fontWeight: '700', fontSize: '1.05rem', textDecoration: 'none',
                  boxShadow: '0 8px 30px rgba(102,126,234,0.35)',
                  display: 'inline-block',
                }}
              >
                Create Your Free Profile →
              </a>
              <p style={{ fontSize: '0.8rem', opacity: 0.4, margin: 0 }}>Takes under 5 minutes</p>
            </div>
          </div>

          {/* Stats */}
          <div style={{
            background: 'rgba(255,255,255,0.05)', borderRadius: '16px',
            padding: '28px 32px', border: '1px solid rgba(255,255,255,0.07)',
            minWidth: '185px', textAlign: 'center', flexShrink: 0,
          }}>
            {[
              { value: '10,000+', label: 'Vetted candidates' },
              { value: '500+', label: 'Hiring companies' },
              { value: '$120k+', label: 'Avg. placed salary' },
            ].map((s, i) => (
              <div key={s.label} style={{ marginBottom: i < 2 ? '24px' : 0 }}>
                <p style={{
                  fontSize: '1.75rem', fontWeight: '800', margin: '0 0 4px',
                  background: 'linear-gradient(135deg, #a78bfa, #818cf8)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>
                  {s.value}
                </p>
                <p style={{ fontSize: '0.78rem', opacity: 0.5, margin: 0 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Mid-page Mercor Banner ───────────────────────────────────────────────────

function MercorBanner({ mercorLink }) {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '16px', padding: '26px 32px', margin: '8px 0',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      gap: '20px', flexWrap: 'wrap',
    }}>
      <div>
        <p style={{ color: 'white', fontWeight: '700', fontSize: '1.1rem', margin: '0 0 5px' }}>
          Not finding the right fit?
        </p>
        <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0, fontSize: '0.9rem' }}>
          Let Mercor match you directly with top AI companies — no cold applications needed.
        </p>
      </div>
      <a
        href={mercorLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: 'white', color: '#667eea',
          padding: '13px 28px', borderRadius: '10px',
          fontWeight: '700', fontSize: '0.95rem', textDecoration: 'none',
          whiteSpace: 'nowrap', flexShrink: 0,
        }}
      >
        Get Matched Free →
      </a>
    </div>
  )
}

// ─── Job Card ────────────────────────────────────────────────────────────────

function JobCard({ job }) {
  const posted = timeAgo(job.postedAt)
  return (
    <div
      style={{
        background: 'white', border: '1px solid #e2e8f0',
        borderRadius: '14px', padding: '26px 28px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        transition: 'box-shadow 0.2s ease, transform 0.2s ease',
      }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.09)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'; e.currentTarget.style.transform = 'translateY(0)' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '20px', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '280px' }}>
          {/* Tags row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
            {job.companyLogo && (
              <img
                src={job.companyLogo} alt={job.company}
                style={{ width: '26px', height: '26px', borderRadius: '6px', objectFit: 'contain', border: '1px solid #e2e8f0', padding: '2px', background: 'white' }}
              />
            )}
            <span style={{ background: '#f0f0ff', color: '#667eea', padding: '3px 12px', borderRadius: '20px', fontSize: '0.76rem', fontWeight: '700' }}>
              {job.category}
            </span>
            <span style={{ background: '#f7fafc', color: '#718096', padding: '3px 12px', borderRadius: '20px', fontSize: '0.76rem' }}>
              {job.level}
            </span>
            {posted && (
              <span style={{ fontSize: '0.76rem', color: '#b0bec5' }}>{posted}</span>
            )}
          </div>

          <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#1a202c', margin: '0 0 5px', lineHeight: '1.3' }}>
            {job.title}
          </h3>
          <p style={{ fontSize: '0.95rem', color: '#4a5568', margin: '0 0 10px', fontWeight: '500' }}>{job.company}</p>

          <div style={{ display: 'flex', gap: '16px', marginBottom: '12px', flexWrap: 'wrap', fontSize: '0.83rem', color: '#718096' }}>
            <span>📍 {job.location}</span>
            <span>💼 {job.type}</span>
            {job.salary && (
              <span style={{ color: '#667eea', fontWeight: '600' }}>💰 {job.salary}</span>
            )}
          </div>

          <p style={{ color: '#718096', lineHeight: '1.65', fontSize: '0.88rem', margin: 0 }}>{job.description}</p>
        </div>

        <div style={{ flexShrink: 0 }}>
          <a
            href={job.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              color: 'white', padding: '12px 24px', borderRadius: '10px',
              textDecoration: 'none', fontWeight: '700', fontSize: '0.88rem',
              boxShadow: '0 4px 12px rgba(102,126,234,0.3)',
              display: 'inline-block', whiteSpace: 'nowrap',
            }}
          >
            Apply Now →
          </a>
        </div>
      </div>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function JobsClient({ jobs, mercorLink }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? jobs
    : jobs.filter(j => j.category === activeCategory)

  // Interleave a Mercor banner after every 5 job cards
  const jobItems = filtered.flatMap((job, index) => {
    const items = [<JobCard key={job.id} job={job} />]
    if ((index + 1) % 5 === 0 && index < filtered.length - 1) {
      items.push(<MercorBanner key={`mercor-mid-${index}`} mercorLink={mercorLink} />)
    }
    return items
  })

  return (
    <div style={{ minHeight: '100vh', fontFamily: 'Arial, sans-serif', background: '#f8fafc' }}>

      {/* ── Nav ── */}
      <nav style={{
        background: 'white', padding: '0 24px',
        boxShadow: '0 1px 0 #e2e8f0',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        position: 'sticky', top: 0, zIndex: 100, height: '64px',
      }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/goodlet-ai-logo.png" alt="Goodlet AI Academy" style={{ height: '44px', width: 'auto' }} />
        </a>
        <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
          <a href="/" style={{ color: '#4a5568', textDecoration: 'none', fontSize: '0.92rem' }}>Home</a>
          <a href="/courses" style={{ color: '#4a5568', textDecoration: 'none', fontSize: '0.92rem' }}>Courses</a>
          <a href="/jobs" style={{ color: '#667eea', textDecoration: 'none', fontWeight: '700', fontSize: '0.92rem' }}>Jobs</a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <header style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white', padding: '80px 20px', textAlign: 'center',
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', letterSpacing: '3px', textTransform: 'uppercase', opacity: 0.65, marginBottom: '16px' }}>
            Live AI Opportunities
          </p>
          <h1 style={{ fontSize: '3rem', marginBottom: '18px', fontWeight: '800', lineHeight: '1.15' }}>
            Find Your Next AI Role
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.88, marginBottom: '40px', lineHeight: '1.75', maxWidth: '560px', margin: '0 auto 40px' }}>
            {jobs.length} live roles updated every 2 hours — from remote AI engineering
            to product, marketing, and automation.
          </p>

          {/* Two paths */}
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={mercorLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'white', color: '#667eea',
                padding: '16px 34px', borderRadius: '12px',
                fontWeight: '700', fontSize: '1rem', textDecoration: 'none',
                boxShadow: '0 8px 30px rgba(0,0,0,0.18)',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
              }}
            >
              🎯 Get Matched by Mercor
            </a>
            <a
              href="#jobs"
              style={{
                background: 'rgba(255,255,255,0.12)', color: 'white',
                padding: '16px 34px', borderRadius: '12px',
                fontWeight: '600', fontSize: '1rem', textDecoration: 'none',
                border: '2px solid rgba(255,255,255,0.35)',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
              }}
            >
              Browse Live Jobs ↓
            </a>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: '1050px', margin: '0 auto', padding: '56px 20px 40px' }}>

        {/* ── Mercor featured card ── */}
        <MercorHero mercorLink={mercorLink} />

        {/* ── Filters + count ── */}
        <div id="jobs" style={{ marginBottom: '28px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px', flexWrap: 'wrap', gap: '10px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1a202c', margin: 0 }}>
              Live AI Roles
              <span style={{ fontSize: '0.78rem', fontWeight: '400', color: '#b0bec5', marginLeft: '10px' }}>
                {filtered.length} roles
              </span>
            </h2>
            <p style={{ fontSize: '0.78rem', color: '#b0bec5', margin: 0 }}>🔄 Refreshed every 2 hours</p>
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 20px', borderRadius: '25px', cursor: 'pointer',
                  fontWeight: activeCategory === cat ? '700' : '500',
                  fontSize: '0.86rem',
                  border: activeCategory === cat ? '2px solid #667eea' : '2px solid #e2e8f0',
                  background: activeCategory === cat ? '#667eea' : 'white',
                  color: activeCategory === cat ? 'white' : '#4a5568',
                  transition: 'all 0.15s ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── Job list ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {jobItems}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '70px 20px', color: '#718096' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '16px' }}>No {activeCategory} roles right now.</p>
            <button
              onClick={() => setActiveCategory('All')}
              style={{ background: '#667eea', color: 'white', border: 'none', padding: '12px 28px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: '0.95rem' }}
            >
              View all roles
            </button>
          </div>
        )}

        {/* ── Bottom CTA ── */}
        <div style={{
          background: 'white', borderRadius: '20px', padding: '50px 40px',
          marginTop: '60px', textAlign: 'center',
          border: '1px solid #e2e8f0', boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
        }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '14px', color: '#1a202c', fontWeight: '700' }}>
            Build the skills to land these roles
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#4a5568', maxWidth: '520px', margin: '0 auto 32px', lineHeight: '1.75' }}>
            Our courses are built around the exact roles on this page.
            Start learning today, apply with confidence tomorrow.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="/courses"
              style={{
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                color: 'white', padding: '15px 36px', borderRadius: '10px',
                textDecoration: 'none', fontWeight: '700', fontSize: '1rem',
                boxShadow: '0 4px 15px rgba(102,126,234,0.3)',
              }}
            >
              Explore Courses →
            </a>
            <a
              href={mercorLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'white', color: '#667eea',
                padding: '15px 36px', borderRadius: '10px',
                textDecoration: 'none', fontWeight: '700', fontSize: '1rem',
                border: '2px solid #667eea',
              }}
            >
              Get Matched on Mercor →
            </a>
          </div>
        </div>
      </main>

      {/* ── Disclaimer ── */}
      <div style={{
        maxWidth: '800px', margin: '60px auto', padding: '28px 36px',
        background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', textAlign: 'center',
      }}>
        <p style={{ fontSize: '0.88rem', fontWeight: '700', color: '#4a5568', marginBottom: '8px' }}>
          A quick note on our jobs board
        </p>
        <p style={{ fontSize: '0.85rem', color: '#718096', lineHeight: '1.75', margin: 0 }}>
          The listings here are curated to help you find AI opportunities in one place — think of it as a head start, not a guarantee.
          We don't post or verify these roles directly, and securing a job is ultimately down to the skills and effort you bring.
          That's exactly what we're here to help you build.
        </p>
      </div>

      {/* ── Footer ── */}
      <footer style={{ background: '#1a202c', color: 'white', padding: '50px 20px', textAlign: 'center' }}>
        <p style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '15px' }}>Goodlet AI Academy</p>
        <p style={{ color: '#a0aec0', fontSize: '1.05rem', marginBottom: '10px' }}>
          Clarity over confusion. Skills over hype. Access over gatekeeping.
        </p>
        <p style={{ color: '#718096', marginTop: '30px', fontSize: '0.9rem' }}>
          © 2025 Goodlet AI Academy. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
