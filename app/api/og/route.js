import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') || 'Goodlet AI Academy'
  const price = searchParams.get('price') || 'Free'
  const level = searchParams.get('level') || 'All Levels'
  const lessons = searchParams.get('lessons') || ''
  const isFree = price === 'Free'

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '1200px',
          height: '630px',
          background: '#0f0c29',
          padding: '64px 80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background gradient overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 60%, #24243e 100%)',
            display: 'flex',
          }}
        />

        {/* Decorative glow circles */}
        <div
          style={{
            position: 'absolute',
            right: '-80px',
            top: '-80px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(102,126,234,0.25) 0%, rgba(102,126,234,0) 70%)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: '80px',
            bottom: '-60px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(118,75,162,0.3) 0%, rgba(118,75,162,0) 70%)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: '-40px',
            bottom: '80px',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(102,126,234,0.15) 0%, rgba(102,126,234,0) 70%)',
            display: 'flex',
          }}
        />

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', position: 'relative', zIndex: 1 }}>

          {/* Top brand */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '32px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div style={{ width: '14px', height: '14px', background: 'white', borderRadius: '3px', display: 'flex' }} />
              </div>
              <span
                style={{
                  color: 'rgba(255,255,255,0.55)',
                  fontSize: '20px',
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                }}
              >
                Goodlet AI Academy
              </span>
            </div>
          </div>

          {/* Course title — fills remaining space */}
          <div style={{ display: 'flex', flex: 1, alignItems: 'center' }}>
            <div
              style={{
                color: 'white',
                fontSize: title.length > 30 ? '62px' : '72px',
                fontWeight: 800,
                lineHeight: 1.1,
                maxWidth: '900px',
                letterSpacing: '-1px',
              }}
            >
              {title}
            </div>
          </div>

          {/* Bottom row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '40px' }}>
            {/* Price badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                background: isFree
                  ? 'rgba(16,163,127,0.15)'
                  : 'linear-gradient(135deg, #667eea, #764ba2)',
                border: isFree ? '1.5px solid rgba(16,163,127,0.6)' : 'none',
                color: isFree ? '#4ade80' : 'white',
                padding: '12px 28px',
                borderRadius: '100px',
                fontSize: '24px',
                fontWeight: 700,
                gap: '8px',
              }}
            >
              {isFree ? 'Free Course' : `$15 · Pilot Price`}
            </div>

            {/* Level badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.65)',
                padding: '12px 24px',
                borderRadius: '100px',
                fontSize: '22px',
              }}
            >
              {level}
            </div>

            {/* Lessons badge */}
            {lessons && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: 'rgba(255,255,255,0.65)',
                  padding: '12px 24px',
                  borderRadius: '100px',
                  fontSize: '22px',
                }}
              >
                {lessons} lessons
              </div>
            )}
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #667eea, #764ba2, #667eea)',
            display: 'flex',
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
