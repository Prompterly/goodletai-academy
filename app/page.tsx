'use client'

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* Navigation */}
      <nav style={{
        background: 'white',
        padding: '20px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <a href="/" style={{ 
          fontSize: '1.5rem', 
          fontWeight: 'bold', 
          color: '#667eea',
          textDecoration: 'none'
        }}>
          Goodlet AI
        </a>
        <div style={{ display: 'flex', gap: '30px' }}>
          <a href="/" style={{ color: '#667eea', textDecoration: 'none', fontWeight: 'bold' }}>Home</a>
          <a href="/courses" style={{ color: '#333', textDecoration: 'none' }}>Courses</a>
          <a href="/jobs" style={{ color: '#333', textDecoration: 'none' }}>Jobs</a>
          <a href="/about" style={{ color: '#333', textDecoration: 'none' }}>About</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '100px 20px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px', fontWeight: 'bold' }}>
          Master AI Prompt Engineering
        </h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '30px', opacity: 0.9 }}>
          Learn to craft powerful prompts with Goodlet AI
        </p>
        <a href="/courses" style={{
          display: 'inline-block',
          background: 'white',
          color: '#667eea',
          padding: '15px 40px',
          fontSize: '1.2rem',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold',
          textDecoration: 'none'
        }}>
          Start Learning Here
        </a>
      </header>

      {/* NEW: Stats Section - Three Cards */}
      <section style={{ 
        background: '#f7fafc', 
        padding: '80px 20px' 
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              color: '#1a202c', 
              marginBottom: '15px',
              fontWeight: 'bold'
            }}>
              The AI Opportunity: By The Numbers
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#4a5568',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              The data is clear: AI skills are the future. Here's what the world's leading organizations are saying.
            </p>
          </div>

          {/* Three Stat Cards */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            marginBottom: '50px'
          }}>
            
            {/* Card 1: Job Creation */}
            <div 
              className="stat-card"
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '40px 30px',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)',
                textAlign: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(102, 126, 234, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.3)';
              }}
            >
              <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🌍</div>
              <div style={{ 
                fontSize: '3.5rem', 
                fontWeight: 'bold', 
                marginBottom: '10px',
                lineHeight: '1'
              }}>
                170M
              </div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                marginBottom: '20px' 
              }}>
                New Jobs by 2030
              </h3>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.6', 
                opacity: 0.95,
                marginBottom: '20px'
              }}>
                "New technologies will help create approximately 170 million new jobs by 2030, equivalent to 14% of today's total employment."
              </p>
              <p style={{ 
                fontSize: '0.9rem', 
                fontStyle: 'italic', 
                opacity: 0.85 
              }}>
                — World Economic Forum
              </p>
            </div>

            {/* Card 2: Salary Premium */}
            <div 
              className="stat-card"
              style={{
                background: 'linear-gradient(135deg, #10a37f 0%, #0d8a6a 100%)',
                color: 'white',
                padding: '40px 30px',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(16, 163, 127, 0.3)',
                textAlign: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(16, 163, 127, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(16, 163, 127, 0.3)';
              }}
            >
              <div style={{ fontSize: '4rem', marginBottom: '20px' }}>💰</div>
              <div style={{ 
                fontSize: '3.5rem', 
                fontWeight: 'bold', 
                marginBottom: '10px',
                lineHeight: '1'
              }}>
                +56%
              </div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                marginBottom: '20px' 
              }}>
                Salary Premium
              </h3>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.6', 
                opacity: 0.95,
                marginBottom: '20px'
              }}>
                "Workers with AI skills like prompt engineering command a 56% wage premium, up from 25% last year."
              </p>
              <p style={{ 
                fontSize: '0.9rem', 
                fontStyle: 'italic', 
                opacity: 0.85 
              }}>
                — PWC 2025 Global AI Jobs Barometer
              </p>
            </div>

            {/* Card 3: Skills Over Degrees */}
            <div 
              className="stat-card"
              style={{
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                color: 'white',
                padding: '40px 30px',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(245, 87, 108, 0.3)',
                textAlign: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(245, 87, 108, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(245, 87, 108, 0.3)';
              }}
            >
              <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🎓</div>
              <div style={{ 
                fontSize: '2.8rem', 
                fontWeight: 'bold', 
                marginBottom: '10px',
                lineHeight: '1.1'
              }}>
                AI Skills<br/>
                <span style={{ fontSize: '2rem' }}>Beat</span><br/>
                Internships
              </div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                marginBottom: '20px' 
              }}>
                The New Path Forward
              </h3>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.6', 
                opacity: 0.95,
                marginBottom: '20px'
              }}>
                "Getting unbelievably proficient with AI tools is now more valuable than traditional internships for leapfrogging into a profession."
              </p>
              <p style={{ 
                fontSize: '0.9rem', 
                fontStyle: 'italic', 
                opacity: 0.85 
              }}>
                — Demis Hassabis, CEO of Google DeepMind
              </p>
            </div>
          </div>

          {/* CTA Below Cards */}
          <div style={{ textAlign: 'center' }}>
            <p style={{ 
              fontSize: '1.3rem', 
              color: '#2d3748', 
              marginBottom: '30px',
              fontWeight: '500'
            }}>
              The opportunity is massive. The time to act is now.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
                href="/courses"
                style={{
                  display: 'inline-block',
                  background: '#667eea',
                  color: 'white',
                  padding: '18px 45px',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
                }}
              >
                Start Learning Today →
              </a>
              <a 
                href="/jobs"
                style={{
                  display: 'inline-block',
                  background: 'white',
                  color: '#667eea',
                  padding: '18px 45px',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  border: '2px solid #667eea',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#667eea';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.color = '#667eea';
                }}
              >
                Explore AI Jobs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Learn Prompt Engineering - Features */}
      <section style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '60px' }}>
          Why Learn Prompt Engineering?
        </h2>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          gap: '40px',
          flexWrap: 'wrap',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{ flex: '1', minWidth: '250px' }}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🚀</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>High Demand Skill</h3>
            <p style={{ color: '#666' }}>
              Companies are hiring prompt engineers at premium salaries
            </p>
          </div>
          
          <div style={{ flex: '1', minWidth: '250px' }}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🎯</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Practical Training</h3>
            <p style={{ color: '#666' }}>
              Real-world examples and hands-on projects
            </p>
          </div>
          
          <div style={{ flex: '1', minWidth: '250px' }}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📈</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Career Growth</h3>
            <p style={{ color: '#666' }}>
              Future-proof your career in the AI era
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#1a202c',
        color: 'white',
        padding: '40px 20px',
        textAlign: 'center',
        marginTop: '80px'
      }}>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px' }}>
          Goodlet AI
        </p>
        <p style={{ color: '#a0aec0' }}>
          Training the next generation of AI prompt engineers
        </p>
        <p style={{ color: '#a0aec0', marginTop: '20px' }}>
          © 2024 Goodlet AI. All rights reserved.
        </p>
      </footer>
    </div>
  )
}