'use client'

import { useState, useEffect, useCallback } from 'react'

const photos = [
  {
    src: '/conferences/mainstage-london.jpg',
    caption: 'Main Stage · TechShow London',
    tag: 'TechShow London'
  },
  {
    src: '/conferences/with-suzanne-brink.jpg',
    caption: 'With Suzanne Brink · Head of Responsible AI, Lloyd\'s Banking Group',
    tag: 'TechShow London'
  },
  {
    src: '/conferences/panel-discussion.jpg',
    caption: 'Panel: Responsible AI in Finance · TechShow London',
    tag: 'TechShow London'
  },
  {
    src: '/conferences/with-benjamin-fife.jpg',
    caption: 'With Benjamin Fife · AI, Data & Tech, Investec',
    tag: 'TechShow London'
  },
  {
    src: '/conferences/mainstage-scotland.jpg',
    caption: 'Main Stage · European Chatbot & AI Summit, Edinburgh',
    tag: 'Edinburgh'
  },
  {
    src: '/conferences/session-edinburgh.jpg',
    caption: 'Session: Making AI Sound Human · Edinburgh',
    tag: 'Edinburgh'
  },
  {
    src: '/conferences/demo-by-twillio.jpg',
    caption: 'Twilio Demo: Building Real-Time AI Voice Agents · Edinburgh',
    tag: 'Edinburgh'
  },
  {
    src: '/conferences/with-shahar-erez.jpg',
    caption: 'With Shahar Erez · Co-founder & CEO, Arato AI',
    tag: 'Edinburgh'
  },
  {
    src: '/conferences/with-prof-kulvinder.jpg',
    caption: 'With Prof. Kulvinder Panesar · University of Bradford',
    tag: 'Edinburgh'
  },
  {
    src: '/conferences/with-dr-isi-oyinkansola.jpg',
    caption: 'With Dr. Isi Idemudia & Dr. Oyinkansola Onwuchekwa · Edinburgh',
    tag: 'Edinburgh'
  },
  {
    src: '/conferences/Edinburgh%20conference.jpg',
    caption: 'Taking it all in · European Chatbot & AI Summit, Edinburgh',
    tag: 'Edinburgh'
  },
  {
    src: '/conferences/Session%20on%20Humanizing%20AI.jpg',
    caption: 'Session: Humanizing AI · Edinburgh',
    tag: 'Edinburgh'
  },
  {
    src: '/conferences/Panel%20Discussion.jpg',
    caption: 'Panel: Harnessing Agentic AI · Edinburgh',
    tag: 'Edinburgh'
  },
  {
    src: '/conferences/Session%20on%20HITL.JPG',
    caption: 'Session: Human in the Loop (HITL) · Edinburgh',
    tag: 'Edinburgh'
  },
  {
    src: '/conferences/%40Arato%20AI%27s%20Stand.JPG',
    caption: 'At Arato AI\'s Stand · Edinburgh',
    tag: 'Edinburgh'
  },
]

export default function ConferenceGallery() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [lightbox, setLightbox] = useState(false)
  const [fading, setFading] = useState(false)

  const goTo = useCallback((index) => {
    setFading(true)
    setTimeout(() => {
      setCurrent(index)
      setFading(false)
    }, 300)
  }, [])

  const next = useCallback(() => {
    goTo((current + 1) % photos.length)
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + photos.length) % photos.length)
  }, [current, goTo])

  // Auto-advance every 4 seconds
  useEffect(() => {
    if (paused || lightbox) return
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [paused, lightbox, next])

  const photo = photos[current]

  return (
    <section style={{ marginBottom: '60px' }}>
      <h2 style={{
        fontSize: '2rem',
        color: '#1a202c',
        marginBottom: '12px',
        paddingBottom: '15px',
        borderBottom: '3px solid #667eea'
      }}>
        On the Ground: AI Conferences
      </h2>
      <p style={{ color: '#4a5568', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '28px' }}>
        Staying connected to where the industry is moving — in rooms with the people shaping it —
        is part of what makes the teaching real.
      </p>

      {/* Carousel */}
      <div
        style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', background: '#0f0c29' }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Main image */}
        <div
          style={{
            position: 'relative',
            aspectRatio: '16/9',
            cursor: 'zoom-in',
            overflow: 'hidden'
          }}
          onClick={() => setLightbox(true)}
        >
          <img
            src={photo.src}
            alt={photo.caption}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              opacity: fading ? 0 : 1,
              transition: 'opacity 0.3s ease'
            }}
          />

          {/* Gradient overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)'
          }} />

          {/* Caption */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '24px 28px',
            opacity: fading ? 0 : 1,
            transition: 'opacity 0.3s ease'
          }}>
            <span style={{
              display: 'inline-block',
              background: photo.tag === 'TechShow London' ? '#10b981' : '#667eea',
              color: 'white',
              fontSize: '0.72rem',
              fontWeight: '700',
              padding: '4px 12px',
              borderRadius: '999px',
              marginBottom: '8px',
              textTransform: 'uppercase',
              letterSpacing: '0.06em'
            }}>
              {photo.tag}
            </span>
            <p style={{
              color: 'white',
              fontSize: '1rem',
              fontWeight: '600',
              margin: 0,
              lineHeight: '1.4',
              textShadow: '0 1px 4px rgba(0,0,0,0.5)'
            }}>
              {photo.caption}
            </p>
          </div>

          {/* Click to enlarge hint */}
          <div style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            background: 'rgba(0,0,0,0.45)',
            color: 'white',
            fontSize: '0.75rem',
            padding: '5px 12px',
            borderRadius: '999px',
            backdropFilter: 'blur(4px)'
          }}>
            🔍 Click to enlarge
          </div>
        </div>

        {/* Prev / Next buttons */}
        <button
          onClick={(e) => { e.stopPropagation(); prev() }}
          style={{
            position: 'absolute',
            left: '14px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.18)',
            backdropFilter: 'blur(6px)',
            border: '1px solid rgba(255,255,255,0.25)',
            color: 'white',
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '1.1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.2s ease'
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.35)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.18)'}
        >
          ‹
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); next() }}
          style={{
            position: 'absolute',
            right: '14px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.18)',
            backdropFilter: 'blur(6px)',
            border: '1px solid rgba(255,255,255,0.25)',
            color: 'white',
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '1.1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.2s ease'
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.35)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.18)'}
        >
          ›
        </button>

        {/* Dot indicators */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          padding: '14px'
        }}>
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === current ? '24px' : '8px',
                height: '8px',
                borderRadius: '999px',
                border: 'none',
                background: i === current
                  ? 'linear-gradient(135deg, #667eea, #764ba2)'
                  : 'rgba(255,255,255,0.35)',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>
      </div>

      {/* Counter */}
      <p style={{
        textAlign: 'center',
        color: '#a0aec0',
        fontSize: '0.82rem',
        marginTop: '10px'
      }}>
        {current + 1} / {photos.length} · Hover to pause · Click image to enlarge
      </p>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.92)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            cursor: 'zoom-out'
          }}
        >
          <div style={{ maxWidth: '900px', width: '100%', textAlign: 'center' }}>
            <img
              src={photo.src}
              alt={photo.caption}
              style={{
                maxWidth: '100%',
                maxHeight: '80vh',
                borderRadius: '12px',
                objectFit: 'contain',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
              }}
            />
            <p style={{
              color: 'rgba(255,255,255,0.88)',
              marginTop: '16px',
              fontSize: '1rem',
              fontWeight: '500'
            }}>
              {photo.caption}
            </p>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', marginTop: '6px' }}>
              Click anywhere to close
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
