'use client'

import { useRef } from 'react'

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

async function downloadPDF(ref, name, course) {
  const { default: html2canvas } = await import('html2canvas')
  const { jsPDF } = await import('jspdf')

  const el = ref.current
  const canvas = await html2canvas(el, {
    scale: 3,
    useCORS: true,
    backgroundColor: '#ffffff',
    logging: false,
  })

  const imgData = canvas.toDataURL('image/png')
  const pdf = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' })
  const w = pdf.internal.pageSize.getWidth()
  const h = pdf.internal.pageSize.getHeight()
  pdf.addImage(imgData, 'PNG', 0, 0, w, h)
  pdf.save(`${name.replace(/\s+/g, '_')}_${course.replace(/\s+/g, '_')}_Certificate.pdf`)
}

function LinkedInShareButton({ name, course, certId }) {
  const certUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/certificate/${certId}`
    : `https://goodletaiacademy.com/certificate/${certId}`

  const text = encodeURIComponent(
    `I just completed "${course}" at Goodlet AI Academy! 🎓\n\nVerify my certificate: ${certUrl}`
  )
  const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(certUrl)}&summary=${text}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '8px',
        background: '#0077b5', color: 'white', padding: '14px 28px',
        borderRadius: '10px', fontWeight: '700', fontSize: '0.95rem',
        textDecoration: 'none', boxShadow: '0 4px 15px rgba(0,119,181,0.35)',
        transition: 'transform 0.15s',
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
      Share on LinkedIn
    </a>
  )
}

export default function CertificateView({ cert }) {
  const certRef = useRef(null)

  if (!cert) {
    return (
      <div style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
        fontFamily: 'Georgia, serif', padding: '40px 20px',
      }}>
        <div style={{ textAlign: 'center', color: 'white' }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🔍</div>
          <h1 style={{ fontSize: '2rem', marginBottom: '12px' }}>Certificate Not Found</h1>
          <p style={{ opacity: 0.7, marginBottom: '30px' }}>
            This certificate ID doesn't exist or has been revoked.
          </p>
          <a href="/" style={{ color: '#a5b4fc', textDecoration: 'underline' }}>← Back to Goodlet AI Academy</a>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '40px 20px', fontFamily: 'Georgia, serif',
    }}>

      {/* ── Certificate Card ─────────────────────────────────── */}
      <div
        ref={certRef}
        style={{
          width: '100%', maxWidth: '780px', background: '#fffefb',
          borderRadius: '4px', padding: '60px 70px',
          boxShadow: '0 30px 80px rgba(0,0,0,0.45)',
          position: 'relative', overflow: 'hidden',
        }}
      >
        {/* Corner ornaments */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '90px', height: '90px', borderTop: '5px solid #764ba2', borderLeft: '5px solid #764ba2', borderRadius: '4px 0 0 0' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: '90px', height: '90px', borderTop: '5px solid #764ba2', borderRight: '5px solid #764ba2', borderRadius: '0 4px 0 0' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '90px', height: '90px', borderBottom: '5px solid #764ba2', borderLeft: '5px solid #764ba2', borderRadius: '0 0 0 4px' }} />
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: '90px', height: '90px', borderBottom: '5px solid #764ba2', borderRight: '5px solid #764ba2', borderRadius: '0 0 4px 0' }} />

        {/* Subtle background pattern */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.03,
          backgroundImage: 'repeating-linear-gradient(45deg, #764ba2 0, #764ba2 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }} />

        {/* Content */}
        <div style={{ position: 'relative', textAlign: 'center' }}>

          {/* Academy name */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '10px', marginBottom: '6px',
          }}>
            <div style={{ height: '1px', width: '40px', background: 'linear-gradient(90deg, transparent, #764ba2)' }} />
            <span style={{ fontSize: '0.75rem', letterSpacing: '3px', textTransform: 'uppercase', color: '#764ba2', fontFamily: 'Arial, sans-serif', fontWeight: '700' }}>
              Goodlet AI Academy
            </span>
            <div style={{ height: '1px', width: '40px', background: 'linear-gradient(90deg, #764ba2, transparent)' }} />
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: '2.2rem', fontWeight: '400', color: '#1a0a2e',
            margin: '0 0 32px', letterSpacing: '1px', lineHeight: '1.3',
            fontFamily: 'Georgia, serif',
          }}>
            Certificate of Completion
          </h1>

          {/* Divider */}
          <div style={{ margin: '0 auto 28px', width: '60px', height: '2px', background: 'linear-gradient(90deg, #667eea, #764ba2)' }} />

          {/* "This certifies that" */}
          <p style={{ fontSize: '0.9rem', color: '#718096', letterSpacing: '1px', margin: '0 0 10px', fontFamily: 'Arial, sans-serif' }}>
            This certifies that
          </p>

          {/* Student name */}
          <h2 style={{
            fontSize: '2.8rem', fontWeight: '700', color: '#1a0a2e',
            margin: '0 0 18px', lineHeight: '1.2',
            fontFamily: 'Georgia, serif',
            borderBottom: '2px solid #e2d9f3', paddingBottom: '18px',
            display: 'inline-block', minWidth: '300px',
          }}>
            {cert.name}
          </h2>

          {/* "has successfully completed" */}
          <p style={{ fontSize: '0.9rem', color: '#718096', letterSpacing: '1px', margin: '18px 0 10px', fontFamily: 'Arial, sans-serif' }}>
            has successfully completed
          </p>

          {/* Course name */}
          <h3 style={{
            fontSize: '1.6rem', fontWeight: '700',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text', margin: '0 0 36px', lineHeight: '1.3',
          }}>
            {cert.courseName}
          </h3>

          {/* Footer row */}
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            borderTop: '1px solid #e8e0f5', paddingTop: '28px', gap: '20px',
            flexWrap: 'wrap',
          }}>
            {/* Date */}
            <div style={{ textAlign: 'left' }}>
              <p style={{ margin: '0 0 4px', fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#a0aec0', fontFamily: 'Arial, sans-serif' }}>Date Awarded</p>
              <p style={{ margin: 0, fontSize: '0.95rem', color: '#2d3748', fontWeight: '600', fontFamily: 'Arial, sans-serif' }}>{formatDate(cert.completedAt)}</p>
            </div>

            {/* Seal */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px', height: '80px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 6px',
                boxShadow: '0 4px 20px rgba(102,126,234,0.4)',
                border: '3px solid white',
                outline: '2px solid #764ba2',
              }}>
                <span style={{ fontSize: '2rem' }}>🎓</span>
              </div>
              <p style={{ margin: 0, fontSize: '0.65rem', letterSpacing: '1.5px', color: '#764ba2', textTransform: 'uppercase', fontFamily: 'Arial, sans-serif', fontWeight: '700' }}>Verified</p>
            </div>

            {/* Certificate ID */}
            <div style={{ textAlign: 'right' }}>
              <p style={{ margin: '0 0 4px', fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#a0aec0', fontFamily: 'Arial, sans-serif' }}>Certificate ID</p>
              <p style={{ margin: 0, fontSize: '0.95rem', color: '#764ba2', fontWeight: '700', fontFamily: 'monospace, Arial' }}>{cert.certificateId}</p>
            </div>
          </div>
        </div>
      </div>
      {/* ────────────────────────────────────────────────────── */}

      {/* Verification badge */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '8px',
        background: 'rgba(72, 187, 120, 0.15)', border: '1px solid rgba(72,187,120,0.4)',
        borderRadius: '30px', padding: '8px 20px', marginTop: '24px',
        color: '#68d391', fontSize: '0.85rem', fontFamily: 'Arial, sans-serif', fontWeight: '600',
      }}>
        <span>✓</span>
        <span>Verified Certificate — Issued by Goodlet AI Academy</span>
      </div>

      {/* Action buttons */}
      <div style={{
        display: 'flex', gap: '14px', marginTop: '28px', flexWrap: 'wrap', justifyContent: 'center',
      }}>
        <button
          onClick={() => downloadPDF(certRef, cert.name, cert.courseName)}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white', padding: '14px 28px', border: 'none', borderRadius: '10px',
            fontWeight: '700', fontSize: '0.95rem', cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(102,126,234,0.35)', fontFamily: 'Arial, sans-serif',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download PDF
        </button>

        <LinkedInShareButton name={cert.name} course={cert.courseName} certId={cert.certificateId} />
      </div>

      <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.75rem', marginTop: '30px', fontFamily: 'Arial, sans-serif' }}>
        Verify this certificate at goodletaiacademy.com/certificate/{cert.certificateId}
      </p>
    </div>
  )
}
