'use client'

import { useRef, useState } from 'react'

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

function LinkedInShareButton({ certId }) {
  const certUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/certificate/${certId}`
    : `https://goodletaiacademy.com/certificate/${certId}`

  const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(certUrl)}`

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="cert-btn cert-btn-linkedin">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
      Share on LinkedIn
    </a>
  )
}

function LinkedInAddToProfileButton({ course, certId, completedAt }) {
  const certUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/certificate/${certId}`
    : `https://goodletaiacademy.com/certificate/${certId}`

  const date = new Date(completedAt)
  const year = date.getFullYear()
  const month = date.getMonth() + 1

  const params = new URLSearchParams({
    startTask: 'CERTIFICATION_NAME',
    name: course,
    organizationName: 'Goodlet AI Academy',
    issueYear: year,
    issueMonth: month,
    certUrl: certUrl,
    certId: certId,
  })

  const url = `https://www.linkedin.com/profile/add?${params.toString()}`

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="cert-btn cert-btn-add-profile">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
      Add to LinkedIn Profile
    </a>
  )
}

function SocialPostCard({ name, course, certId }) {
  const [copied, setCopied] = useState(false)

  const certUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/certificate/${certId}`
    : `https://goodletaiacademy.com/certificate/${certId}`

  const postText = `🎓 Just completed "${course}" at Goodlet AI Academy!\n\nLevelling up my AI skills — from the fundamentals through to real-world applications and automation.\n\nVerified certificate: ${certUrl}\n\n#AI #ArtificialIntelligence #Learning #GoodletAI #ProfessionalDevelopment`

  const handleCopy = () => {
    navigator.clipboard.writeText(postText).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }

  return (
    <div className="cert-social-card">
      <div className="cert-social-card-header">
        <span>✍️ Ready-to-post caption</span>
        <button className="cert-copy-btn" onClick={handleCopy}>
          {copied ? '✓ Copied!' : 'Copy'}
        </button>
      </div>
      <p className="cert-social-text">{postText}</p>
    </div>
  )
}

function ReferralNudge({ certId }) {
  const [copied, setCopied] = useState(false)
  const academyUrl = 'https://www.goodletaiacademy.com'

  const handleCopy = () => {
    navigator.clipboard.writeText(academyUrl).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }

  const whatsappText = encodeURIComponent(
    `Hey! I just completed a course at Goodlet AI Academy — worth checking out if you want to level up your AI skills. It's free to start: ${academyUrl}`
  )

  return (
    <div className="cert-referral">
      <p className="cert-referral-heading">Know someone who'd benefit?</p>
      <p className="cert-referral-sub">Share Goodlet AI Academy with a friend or colleague.</p>
      <div className="cert-referral-btns">
        <a
          href={`https://wa.me/?text=${whatsappText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="cert-btn cert-btn-whatsapp"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Share via WhatsApp
        </a>
        <button className="cert-btn cert-btn-copy-link" onClick={handleCopy}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
          {copied ? 'Copied!' : 'Copy Link'}
        </button>
      </div>
    </div>
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
    <div className="cert-page">
      <style>{`
        .cert-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          font-family: Georgia, serif;
          box-sizing: border-box;
        }

        /* ── Card ── */
        .cert-card {
          width: 100%;
          max-width: 780px;
          background: #fffefb;
          border-radius: 4px;
          padding: 60px 70px;
          box-shadow: 0 30px 80px rgba(0,0,0,0.45);
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
        }

        /* Corner ornaments */
        .cert-corner {
          position: absolute;
          width: 80px;
          height: 80px;
        }
        .cert-corner.tl { top: 0; left: 0; border-top: 5px solid #764ba2; border-left: 5px solid #764ba2; border-radius: 4px 0 0 0; }
        .cert-corner.tr { top: 0; right: 0; border-top: 5px solid #764ba2; border-right: 5px solid #764ba2; border-radius: 0 4px 0 0; }
        .cert-corner.bl { bottom: 0; left: 0; border-bottom: 5px solid #764ba2; border-left: 5px solid #764ba2; border-radius: 0 0 0 4px; }
        .cert-corner.br { bottom: 0; right: 0; border-bottom: 5px solid #764ba2; border-right: 5px solid #764ba2; border-radius: 0 0 4px 0; }

        .cert-bg-pattern {
          position: absolute; inset: 0; opacity: 0.03;
          background-image: repeating-linear-gradient(45deg, #764ba2 0, #764ba2 1px, transparent 0, transparent 50%);
          background-size: 20px 20px;
          pointer-events: none;
        }

        .cert-content {
          position: relative;
          text-align: center;
        }

        /* Academy row */
        .cert-academy-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 8px;
        }
        .cert-academy-line {
          height: 1px;
          width: 40px;
        }
        .cert-academy-name {
          font-size: 0.72rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #764ba2;
          font-family: Arial, sans-serif;
          font-weight: 700;
        }

        /* Title */
        .cert-title {
          font-size: 2.2rem;
          font-weight: 400;
          color: #1a0a2e;
          margin: 0 0 28px;
          letter-spacing: 1px;
          line-height: 1.3;
          font-family: Georgia, serif;
        }

        /* Divider */
        .cert-divider {
          margin: 0 auto 24px;
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, #667eea, #764ba2);
        }

        /* Labels */
        .cert-label {
          font-size: 0.85rem;
          color: #718096;
          letter-spacing: 1px;
          margin: 0 0 10px;
          font-family: Arial, sans-serif;
        }
        .cert-label-below {
          font-size: 0.85rem;
          color: #718096;
          letter-spacing: 1px;
          margin: 16px 0 10px;
          font-family: Arial, sans-serif;
        }

        /* Student name */
        .cert-name {
          font-size: 2.8rem;
          font-weight: 700;
          color: #1a0a2e;
          margin: 0 0 0;
          line-height: 1.2;
          font-family: Georgia, serif;
          border-bottom: 2px solid #e2d9f3;
          padding-bottom: 16px;
          display: inline-block;
          max-width: 100%;
          word-break: break-word;
        }

        /* Course name */
        .cert-course {
          font-size: 1.55rem;
          font-weight: 700;
          color: #764ba2;
          margin: 0 0 32px;
          line-height: 1.3;
          font-family: Georgia, serif;
        }

        /* Footer */
        .cert-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #e8e0f5;
          padding-top: 24px;
          gap: 16px;
        }
        .cert-footer-date { text-align: left; }
        .cert-footer-certid { text-align: right; }
        .cert-footer-label {
          font-size: 0.65rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #a0aec0;
          font-family: Arial, sans-serif;
          margin: 0 0 4px;
        }
        .cert-footer-value {
          font-size: 0.9rem;
          color: #2d3748;
          font-weight: 600;
          font-family: Arial, sans-serif;
          margin: 0;
        }
        .cert-footer-certid .cert-footer-value {
          color: #764ba2;
          font-family: monospace, Arial;
        }

        /* Seal */
        .cert-seal-wrap { text-align: center; flex-shrink: 0; }
        .cert-seal-circle {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 6px;
          box-shadow: 0 4px 20px rgba(102,126,234,0.4);
          border: 3px solid white;
          outline: 2px solid #764ba2;
          font-size: 1.8rem;
        }
        .cert-seal-label {
          font-size: 0.6rem;
          letter-spacing: 1.5px;
          color: #764ba2;
          text-transform: uppercase;
          font-family: Arial, sans-serif;
          font-weight: 700;
          margin: 0;
        }

        /* Below-card elements */
        .cert-verified-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(72, 187, 120, 0.15);
          border: 1px solid rgba(72,187,120,0.4);
          border-radius: 30px;
          padding: 8px 20px;
          margin-top: 24px;
          color: #68d391;
          font-size: 0.85rem;
          font-family: Arial, sans-serif;
          font-weight: 600;
        }

        /* Action buttons */
        .cert-actions {
          display: flex;
          gap: 12px;
          margin-top: 24px;
          flex-wrap: wrap;
          justify-content: center;
          width: 100%;
          max-width: 780px;
        }

        .cert-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px 22px;
          border-radius: 10px;
          font-weight: 700;
          font-size: 0.9rem;
          cursor: pointer;
          font-family: Arial, sans-serif;
          text-decoration: none;
          transition: transform 0.15s;
          border: none;
          white-space: nowrap;
        }
        .cert-btn:hover { transform: translateY(-2px); }
        .cert-btn-download {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(102,126,234,0.35);
        }
        .cert-btn-linkedin {
          background: #0077b5;
          color: white;
          box-shadow: 0 4px 15px rgba(0,119,181,0.35);
        }
        .cert-btn-add-profile {
          background: rgba(0,119,181,0.12);
          color: #60a5fa;
          border: 1px solid rgba(0,119,181,0.35);
        }
        .cert-btn-whatsapp {
          background: #25d366;
          color: white;
          box-shadow: 0 4px 15px rgba(37,211,102,0.3);
        }
        .cert-btn-copy-link {
          background: rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.7);
          border: 1px solid rgba(255,255,255,0.18);
        }

        /* Social post card */
        .cert-social-card {
          width: 100%;
          max-width: 780px;
          margin-top: 28px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 14px;
          overflow: hidden;
          font-family: Arial, sans-serif;
        }
        .cert-social-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 18px;
          background: rgba(255,255,255,0.05);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.6);
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.02em;
        }
        .cert-copy-btn {
          background: rgba(102,126,234,0.2);
          border: 1px solid rgba(102,126,234,0.4);
          color: #a5b4fc;
          padding: 5px 14px;
          border-radius: 6px;
          font-size: 0.78rem;
          font-weight: 700;
          cursor: pointer;
          font-family: Arial, sans-serif;
          transition: background 0.15s;
        }
        .cert-copy-btn:hover { background: rgba(102,126,234,0.35); }
        .cert-social-text {
          padding: 16px 18px;
          color: rgba(255,255,255,0.75);
          font-size: 0.88rem;
          line-height: 1.7;
          margin: 0;
          white-space: pre-wrap;
        }

        /* Referral nudge */
        .cert-referral {
          width: 100%;
          max-width: 780px;
          margin-top: 24px;
          padding: 22px 24px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px;
          text-align: center;
          font-family: Arial, sans-serif;
        }
        .cert-referral-heading {
          color: white;
          font-size: 1rem;
          font-weight: 700;
          margin: 0 0 4px;
        }
        .cert-referral-sub {
          color: rgba(255,255,255,0.45);
          font-size: 0.83rem;
          margin: 0 0 16px;
        }
        .cert-referral-btns {
          display: flex;
          gap: 10px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cert-verify-url {
          color: rgba(255,255,255,0.3);
          font-size: 0.72rem;
          margin-top: 24px;
          font-family: Arial, sans-serif;
          text-align: center;
        }

        /* ── Mobile ── */
        @media (max-width: 600px) {
          .cert-page { padding: 24px 14px; }
          .cert-card { padding: 32px 22px; }
          .cert-corner { width: 50px; height: 50px; }
          .cert-title { font-size: 1.45rem; margin-bottom: 18px; }
          .cert-name { font-size: 1.75rem; padding-bottom: 12px; }
          .cert-course { font-size: 1.1rem; margin-bottom: 22px; }
          .cert-seal-circle { width: 52px; height: 52px; font-size: 1.3rem; }
          .cert-footer { gap: 8px; padding-top: 18px; }
          .cert-footer-value { font-size: 0.78rem; }
          .cert-footer-label { font-size: 0.58rem; }
          .cert-actions { flex-direction: column; }
          .cert-btn { width: 100%; }
          .cert-referral-btns { flex-direction: column; }
        }
      `}</style>

      {/* ── Certificate Card ── */}
      <div ref={certRef} className="cert-card">
        <div className="cert-corner tl" />
        <div className="cert-corner tr" />
        <div className="cert-corner bl" />
        <div className="cert-corner br" />
        <div className="cert-bg-pattern" />

        <div className="cert-content">

          {/* Academy name */}
          <div className="cert-academy-row">
            <div className="cert-academy-line" style={{ background: 'linear-gradient(90deg, transparent, #764ba2)' }} />
            <span className="cert-academy-name">Goodlet AI Academy</span>
            <div className="cert-academy-line" style={{ background: 'linear-gradient(90deg, #764ba2, transparent)' }} />
          </div>

          <h1 className="cert-title">Certificate of Completion</h1>

          <div className="cert-divider" />

          <p className="cert-label">This certifies that</p>

          <h2 className="cert-name">{cert.name}</h2>

          <p className="cert-label-below">has successfully completed</p>

          <h3 className="cert-course">{cert.courseName}</h3>

          {/* Footer row */}
          <div className="cert-footer">
            <div className="cert-footer-date">
              <p className="cert-footer-label">Date Awarded</p>
              <p className="cert-footer-value">{formatDate(cert.completedAt)}</p>
            </div>

            <div className="cert-seal-wrap">
              <div className="cert-seal-circle">🎓</div>
              <p className="cert-seal-label">Verified</p>
            </div>

            <div className="cert-footer-certid">
              <p className="cert-footer-label">Certificate ID</p>
              <p className="cert-footer-value">{cert.certificateId}</p>
            </div>
          </div>

        </div>
      </div>

      {/* Verification badge */}
      <div className="cert-verified-badge">
        <span>✓</span>
        <span>Verified Certificate — Issued by Goodlet AI Academy</span>
      </div>

      {/* Action buttons */}
      <div className="cert-actions">
        <button
          className="cert-btn cert-btn-download"
          onClick={() => downloadPDF(certRef, cert.name, cert.courseName)}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download PDF
        </button>

        <LinkedInShareButton certId={cert.certificateId} />

        <LinkedInAddToProfileButton
          course={cert.courseName}
          certId={cert.certificateId}
          completedAt={cert.completedAt}
        />
      </div>

      {/* Social post template */}
      <SocialPostCard name={cert.name} course={cert.courseName} certId={cert.certificateId} />

      {/* Referral nudge */}
      <ReferralNudge certId={cert.certificateId} />

      <p className="cert-verify-url">
        Verify this certificate at goodletaiacademy.com/certificate/{cert.certificateId}
      </p>
    </div>
  )
}
