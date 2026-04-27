export default function InstructorTeaser() {
  return (
    <div style={{
      maxWidth: '900px',
      margin: '0 auto 60px',
      padding: '0 20px'
    }}>
      <div style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%)',
        borderRadius: '16px',
        padding: '32px 36px',
        border: '1px solid #e0e7ff',
        display: 'flex',
        alignItems: 'center',
        gap: '28px',
        flexWrap: 'wrap'
      }}>
        {/* Photo */}
        <img
          src="/instructor.jpg"
          alt="Goodlet Owusu Ansah"
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '3px solid #667eea',
            flexShrink: 0,
            boxShadow: '0 4px 15px rgba(102,126,234,0.25)'
          }}
        />

        {/* Text */}
        <div style={{ flex: 1, minWidth: '220px' }}>
          <p style={{
            margin: '0 0 4px',
            fontSize: '0.78rem',
            fontWeight: '700',
            color: '#667eea',
            textTransform: 'uppercase',
            letterSpacing: '0.08em'
          }}>
            Your Instructor
          </p>
          <p style={{
            margin: '0 0 6px',
            fontWeight: '700',
            fontSize: '1.05rem',
            color: '#1a202c'
          }}>
            Goodlet Owusu Ansah
          </p>
          <p style={{
            margin: 0,
            fontSize: '0.9rem',
            color: '#4a5568',
            lineHeight: '1.6'
          }}>
            AI Prompt Engineer & Orchestrator at Waldo Fyi · Attended TechShow London &amp; European Chatbot Summit, Edinburgh · Non-technical background, real-world AI expertise.
          </p>
        </div>

        {/* CTA */}
        <a
          href="/about"
          style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '10px',
            textDecoration: 'none',
            fontWeight: '700',
            fontSize: '0.88rem',
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 12px rgba(102,126,234,0.3)',
            flexShrink: 0
          }}
        >
          Meet the Instructor →
        </a>
      </div>
    </div>
  )
}
