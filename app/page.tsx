'use client'

import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
const [hoveredPath, setHoveredPath] = useState<number | null>(null)

  return (
    <div style={{ minHeight: '100vh', fontFamily: "'Segoe UI', Arial, sans-serif", overflowX: 'hidden' }}>
      
      {/* ==================== NAVIGATION ==================== */}
      <nav style={{
        background: 'rgba(255,255,255,0.97)',
        padding: '15px 20px',
        boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backdropFilter: 'blur(10px)'
      }}>
        <a href="/" style={{ 
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none'
        }}>
          <div style={{ 
  display: 'flex', 
  alignItems: 'center', 
  gap: '10px',
  marginBottom: '15px' 
}}>
  <img 
    src="/goodlet-ai-logo.png" 
    alt="Goodlet AI Academy"
    style={{ height: '40px', width: 'auto' }}
  />
  <span style={{
    fontSize: '1.1rem',
    fontWeight: '700',
    color: 'black',
    letterSpacing: '-0.3px'
  }}>
    Goodlet AI Academy
  </span>
</div>
        </a>
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <a href="/" style={{ color: '#667eea', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.95rem' }}>Home</a>
          <a href="/courses" style={{ color: '#555', textDecoration: 'none', fontSize: '0.95rem' }}>Courses</a>
          <a href="/jobs" style={{ color: '#555', textDecoration: 'none', fontSize: '0.95rem' }}>Jobs</a>
          <a href="/about" style={{ color: '#555', textDecoration: 'none', fontSize: '0.95rem' }}>About</a>
          <a href="/courses" style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '10px 24px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '0.9rem',
            boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
            transition: 'all 0.3s ease'
          }}>
            Get Started
          </a>
        </div>
      </nav>

      {/* ==================== HERO SECTION ==================== */}
      <header style={{
        background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
        color: 'white',
        padding: '120px 20px 100px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(102,126,234,0.15) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }}/>
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(118,75,162,0.15) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }}/>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto' }}>
          {/* Badge */}
          <div style={{
            display: 'inline-block',
            background: 'rgba(102, 126, 234, 0.2)',
            border: '1px solid rgba(102, 126, 234, 0.4)',
            padding: '8px 20px',
            borderRadius: '30px',
            marginBottom: '30px',
            fontSize: '0.95rem',
            color: '#a5b4fc'
          }}>
            🚀 Trusted by professionals transitioning into AI careers
          </div>

          {/* Main Headline */}
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
            marginBottom: '25px', 
            fontWeight: '800',
            lineHeight: '1.15',
            letterSpacing: '-1px'
          }}>
            Master AI Skills &<br/>
            <span style={{
              background: 'linear-gradient(135deg, #667eea 0%, #a78bfa 50%, #f093fb 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Automation for the Future of Work
            </span>
          </h1>

          {/* Subheadline */}
          <p style={{ 
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', 
            marginBottom: '40px', 
            opacity: 0.85,
            lineHeight: '1.7',
            maxWidth: '700px',
            margin: '0 auto 40px'
          }}>
            Go from AI-curious to AI-proficient. Learn prompt engineering, workflow automation, 
            and AI tools from a working professional who made the transition himself.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '50px' }}>
            <a href="/courses" style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: '18px 40px',
              fontSize: '1.1rem',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              fontWeight: 'bold',
              textDecoration: 'none',
              boxShadow: '0 8px 30px rgba(102, 126, 234, 0.4)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(102, 126, 234, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(102, 126, 234, 0.4)';
            }}>
              Explore Learning Paths →
            </a>
            <a href="/about" style={{
              display: 'inline-block',
              background: 'rgba(255,255,255,0.1)',
              color: 'white',
              padding: '18px 40px',
              fontSize: '1.1rem',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '12px',
              cursor: 'pointer',
              fontWeight: 'bold',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
            }}>
              Our Story
            </a>
          </div>

          {/* Hero Stats Bar */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            flexWrap: 'wrap',
            padding: '30px',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#a78bfa' }}>170M+</div>
              <div style={{ fontSize: '0.85rem', opacity: 0.7 }}>New AI Jobs by 2030</div>
            </div>
            <div style={{ width: '1px', background: 'rgba(255,255,255,0.15)' }}/>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#34d399' }}>+56%</div>
              <div style={{ fontSize: '0.85rem', opacity: 0.7 }}>AI Salary Premium</div>
            </div>
            <div style={{ width: '1px', background: 'rgba(255,255,255,0.15)' }}/>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f9a8d4' }}>20%</div>
              <div style={{ fontSize: '0.85rem', opacity: 0.7 }}>Annual Job Growth</div>
            </div>
            <div style={{ width: '1px', background: 'rgba(255,255,255,0.15)' }}/>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fbbf24' }}>3+</div>
              <div style={{ fontSize: '0.85rem', opacity: 0.7 }}>AI Models Covered</div>
            </div>
          </div>
        </div>
      </header>

      {/* ==================== TRUST BAR ==================== */}
      <section style={{
        padding: '40px 20px',
        background: '#fafbfc',
        borderBottom: '1px solid #edf2f7'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#a0aec0', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px' }}>
            Insights sourced from global leaders
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#a0aec0' }}>McKinsey</span>
            <span style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#a0aec0' }}>PWC</span>
            <span style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#a0aec0' }}>World Economic Forum</span>
            <span style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#a0aec0' }}>Google DeepMind</span>
          </div>
        </div>
      </section>

      {/* ==================== THE PROBLEM ==================== */}
      <section style={{ padding: '100px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#1a202c', marginBottom: '20px', fontWeight: '700' }}>
              The AI Skills Gap Is Real
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#4a5568', maxWidth: '700px', margin: '0 auto' }}>
              AI is transforming every industry. The question isn't whether it will affect your career — it's whether you'll be ready.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
            gap: '30px'
          }}>
            {/* Without AI Skills */}
            <div style={{
              background: 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)',
              borderRadius: '16px',
              padding: '40px',
              border: '1px solid #fecaca',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: '#ef4444',
                color: 'white',
                padding: '5px 15px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 'bold'
              }}>
                WITHOUT AI SKILLS
              </div>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>😰</div>
              <h3 style={{ fontSize: '1.5rem', color: '#991b1b', marginBottom: '20px' }}>Falling Behind</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  "Replaced by AI-powered automation",
                  "Watching colleagues get promoted",
                  "Spending hours on tasks AI does in minutes",
                  "Feeling overwhelmed by rapid change",
                  "Missing high-paying opportunities",
                  "Stuck in outdated workflows"
                ].map((item, i) => (
                  <li key={i} style={{ 
                    padding: '10px 0', 
                    color: '#991b1b',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    borderBottom: '1px solid rgba(239,68,68,0.1)'
                  }}>
                    <span style={{ color: '#ef4444' }}>✗</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* With AI Skills */}
            <div style={{
              background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
              borderRadius: '16px',
              padding: '40px',
              border: '1px solid #a7f3d0',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: '#10b981',
                color: 'white',
                padding: '5px 15px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 'bold'
              }}>
                WITH AI SKILLS
              </div>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🚀</div>
              <h3 style={{ fontSize: '1.5rem', color: '#065f46', marginBottom: '20px' }}>Leading the Pack</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  "Commanding 56% higher salary",
                  "Automating repetitive work in minutes",
                  "Building AI-powered solutions",
                  "Leading AI initiatives at work",
                  "Accessing 170M+ new job opportunities",
                  "Future-proofing your entire career"
                ].map((item, i) => (
                  <li key={i} style={{ 
                    padding: '10px 0', 
                    color: '#065f46',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    borderBottom: '1px solid rgba(16,185,129,0.1)'
                  }}>
                    <span style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== STATS INFOGRAPHIC ==================== */}
      <section style={{ 
        background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)', 
        padding: '100px 20px',
        color: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '15px', fontWeight: '700' }}>
              The AI Skills Revolution: By The Numbers
            </h2>
            <p style={{ fontSize: '1.2rem', opacity: 0.8, maxWidth: '700px', margin: '0 auto' }}>
              These aren't predictions. They're happening right now.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            {/* Stat 1 */}
            <div 
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '40px 30px',
                borderRadius: '16px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(102, 126, 234, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.3)';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🌍</div>
              <div style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '5px', color: '#a78bfa' }}>
                170M
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', fontWeight: '600' }}>New AI Jobs by 2030</h3>
              
              {/* Progress Bar */}
              <div style={{ 
                background: 'rgba(255,255,255,0.1)', 
                borderRadius: '10px', 
                height: '8px', 
                marginBottom: '15px',
                overflow: 'hidden'
              }}>
                <div style={{ 
                  background: 'linear-gradient(90deg, #667eea, #a78bfa)', 
                  height: '100%', 
                  width: '85%',
                  borderRadius: '10px',
                  transition: 'width 1s ease'
                }}/>
              </div>

              <p style={{ fontSize: '0.95rem', opacity: 0.8, lineHeight: '1.6' }}>
                "New technologies will create 170 million new jobs, equivalent to 14% of today's total employment."
              </p>
              <p style={{ fontSize: '0.85rem', marginTop: '15px', opacity: 0.6, fontStyle: 'italic' }}>
                — World Economic Forum
              </p>
            </div>

            {/* Stat 2 */}
            <div 
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '40px 30px',
                borderRadius: '16px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(16, 163, 127, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(16, 163, 127, 0.3)';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>💰</div>
              <div style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '5px', color: '#34d399' }}>
                +56%
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', fontWeight: '600' }}>Salary Premium</h3>
              
              {/* Progress Bar */}
              <div style={{ 
                background: 'rgba(255,255,255,0.1)', 
                borderRadius: '10px', 
                height: '8px', 
                marginBottom: '15px',
                overflow: 'hidden'
              }}>
                <div style={{ 
                  background: 'linear-gradient(90deg, #10a37f, #34d399)', 
                  height: '100%', 
                  width: '56%',
                  borderRadius: '10px',
                  transition: 'width 1s ease'
                }}/>
              </div>

              <p style={{ fontSize: '0.95rem', opacity: 0.8, lineHeight: '1.6' }}>
                "Workers with AI skills command a 56% wage premium, up from 25% last year."
              </p>
              <p style={{ fontSize: '0.85rem', marginTop: '15px', opacity: 0.6, fontStyle: 'italic' }}>
                — PWC 2025 Global AI Jobs Barometer
              </p>
            </div>

            {/* Stat 3 */}
            <div 
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '40px 30px',
                borderRadius: '16px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(249, 168, 212, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(249, 168, 212, 0.3)';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🎓</div>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '5px', color: '#f9a8d4', lineHeight: '1.2' }}>
                Skills Beat<br/>Degrees
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', fontWeight: '600' }}>The New Path Forward</h3>
              
              {/* Progress Bar */}
              <div style={{ 
                background: 'rgba(255,255,255,0.1)', 
                borderRadius: '10px', 
                height: '8px', 
                marginBottom: '15px',
                overflow: 'hidden'
              }}>
                <div style={{ 
                  background: 'linear-gradient(90deg, #f093fb, #f5576c)', 
                  height: '100%', 
                  width: '92%',
                  borderRadius: '10px',
                  transition: 'width 1s ease'
                }}/>
              </div>

              <p style={{ fontSize: '0.95rem', opacity: 0.8, lineHeight: '1.6' }}>
                "AI proficiency is now more valuable than traditional internships for leapfrogging into a profession."
              </p>
              <p style={{ fontSize: '0.85rem', marginTop: '15px', opacity: 0.6, fontStyle: 'italic' }}>
                — Demis Hassabis, CEO of Google DeepMind
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== LEARNING PATHS ==================== */}
      <section style={{ padding: '100px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{
              display: 'inline-block',
              background: '#eef2ff',
              color: '#667eea',
              padding: '8px 20px',
              borderRadius: '30px',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}>
              STRUCTURED LEARNING
            </span>
            <h2 style={{ fontSize: '2.5rem', color: '#1a202c', marginBottom: '15px', fontWeight: '700' }}>
              Choose Your Learning Path
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#4a5568', maxWidth: '600px', margin: '0 auto' }}>
              Three structured tracks designed to take you from beginner to job-ready.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                icon: '🧠',
                title: 'AI Foundations',
                subtitle: 'Start Here',
                description: 'Build your AI fundamentals. Understand LLMs, master prompting, explore AI tools.',
                items: ['Understanding AI & LLMs', 'Prompt Engineering Essentials', 'AI Tools Landscape', 'First AI Workflow'],
                level: 'Beginner',
                duration: '4 weeks',
                color: '#667eea',
                gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                price: 'Free',
                tag: 'MOST POPULAR'
              },
              {
                icon: '⚡',
                title: 'AI Automation',
                subtitle: 'Level Up',
                description: 'Master AI-powered automation. Build systems that save hours of manual work.',
                items: ['No-Code AI Automation', 'Custom GPTs & Assistants', 'Workflow Orchestration', 'AI Agent Development'],
                level: 'Intermediate',
                duration: '6 weeks',
                color: '#10a37f',
                gradient: 'linear-gradient(135deg, #10a37f 0%, #0d8a6a 100%)',
                price: 'Coming Soon',
                tag: 'HIGH DEMAND'
              },
              {
                icon: '🚀',
                title: 'AI Career Builder',
                subtitle: 'Get Hired',
                description: 'Turn AI skills into a career. Build portfolio, ace interviews, land your dream role.',
                items: ['AI Portfolio Building', 'Job Market Navigation', 'Interview Preparation', 'Freelancing with AI'],
                level: 'Intermediate',
                duration: '4 weeks',
                color: '#f5576c',
                gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                price: 'Coming Soon',
                tag: 'CAREER TRACK'
              }
            ].map((path, index) => (
              <div 
                key={index}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: hoveredPath === index 
                    ? '0 20px 60px rgba(0,0,0,0.12)' 
                    : '0 4px 6px rgba(0,0,0,0.05)',
                  border: '1px solid #edf2f7',
                  transition: 'all 0.4s ease',
                  transform: hoveredPath === index ? 'translateY(-8px)' : 'translateY(0)',
                  cursor: 'pointer'
                }}
                onMouseEnter={() => setHoveredPath(index)}
                onMouseLeave={() => setHoveredPath(null)}
              >
                {/* Card Header */}
                <div style={{
                  background: path.gradient,
                  padding: '30px',
                  color: 'white',
                  position: 'relative'
                }}>
                  <span style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    background: 'rgba(255,255,255,0.2)',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    letterSpacing: '0.5px'
                  }}>
                    {path.tag}
                  </span>
                  <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{path.icon}</div>
                  <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '5px' }}>{path.subtitle}</p>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: '700' }}>{path.title}</h3>
                </div>

                {/* Card Body */}
                <div style={{ padding: '30px' }}>
                  <p style={{ color: '#4a5568', lineHeight: '1.6', marginBottom: '20px' }}>
                    {path.description}
                  </p>
                  
                  <ul style={{ listStyle: 'none', padding: 0, marginBottom: '25px' }}>
                    {path.items.map((item, i) => (
                      <li key={i} style={{ 
                        padding: '8px 0', 
                        color: '#4a5568',
                        borderBottom: '1px solid #f7fafc',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                      }}>
                        <span style={{ color: path.color, fontWeight: 'bold' }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    color: '#718096',
                    fontSize: '0.85rem',
                    marginBottom: '20px',
                    paddingTop: '15px',
                    borderTop: '1px solid #edf2f7'
                  }}>
                    <span>📊 {path.level}</span>
                    <span>⏱️ {path.duration}</span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.4rem', fontWeight: 'bold', color: path.color }}>
                      {path.price}
                    </span>
                    {path.price === "Free" ? (
  <a
    href="/courses/ai-foundations"
    style={{
      display: 'inline-block',
      background: path.gradient,
      color: 'white',
      padding: '12px 25px',
      borderRadius: '10px',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '0.95rem',
      textDecoration: 'none',
      boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
    }}
  >
    Start Free →
  </a>
) : (
  <button style={{
    background: '#edf2f7',
    color: '#a0aec0',
    padding: '12px 25px',
    border: 'none',
    borderRadius: '10px',
    cursor: 'not-allowed',
    fontWeight: 'bold',
    fontSize: '0.95rem'
  }}>
    Coming Soon
  </button>
)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHO THIS IS FOR ==================== */}
      <section style={{ padding: '100px 20px', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{
              display: 'inline-block',
              background: '#ecfdf5',
              color: '#10a37f',
              padding: '8px 20px',
              borderRadius: '30px',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}>
              BUILT FOR YOU
            </span>
            <h2 style={{ fontSize: '2.5rem', color: '#1a202c', marginBottom: '15px', fontWeight: '700' }}>
              Who Is This For?
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#4a5568', maxWidth: '600px', margin: '0 auto' }}>
              If any of these sound like you, you're in the right place.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '25px'
          }}>
            {[
              {
                icon: '🔄',
                title: 'Career Switchers',
                description: 'Ready to transition into AI but not sure where to start. No technical background needed.',
                color: '#667eea'
              },
              {
                icon: '💼',
                title: 'Working Professionals',
                description: 'Want to add AI skills to your current role. Marketers, analysts, researchers, managers.',
                color: '#10a37f'
              },
              {
                icon: '⚡',
                title: 'Automation Enthusiasts',
                description: 'Love efficiency and want to automate everything. Build AI-powered workflows and systems.',
                color: '#f5576c'
              },
              {
                icon: '🌱',
                title: 'AI-Curious Beginners',
                description: 'Fascinated by AI but overwhelmed by the noise. Want clear, structured guidance.',
                color: '#fbbf24'
              }
            ].map((persona, index) => (
              <div 
                key={index}
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '35px 25px',
                  textAlign: 'center',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.04)',
                  border: '1px solid #edf2f7',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.08)';
                  e.currentTarget.style.borderColor = persona.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.04)';
                  e.currentTarget.style.borderColor = '#edf2f7';
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{persona.icon}</div>
                <h3 style={{ fontSize: '1.3rem', color: '#1a202c', marginBottom: '12px', fontWeight: '600' }}>
                  {persona.title}
                </h3>
                <p style={{ color: '#4a5568', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  {persona.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== YOUR INSTRUCTOR ==================== */}
      <section style={{ padding: '100px 20px', background: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{
              display: 'inline-block',
              background: '#fef3c7',
              color: '#d97706',
              padding: '8px 20px',
              borderRadius: '30px',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}>
              YOUR INSTRUCTOR
            </span>
            <h2 style={{ fontSize: '2.5rem', color: '#1a202c', marginBottom: '15px', fontWeight: '700' }}>
              Learn from Someone Who's Done It
            </h2>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #f8fafc 0%, #edf2f7 100%)',
            borderRadius: '20px',
            padding: '50px 40px',
            border: '1px solid #e2e8f0'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <h3 style={{ fontSize: '1.8rem', color: '#1a202c', marginBottom: '10px' }}>
                Goodlet Owusu Ansah
              </h3>
              <p style={{ color: '#667eea', fontWeight: 'bold', fontSize: '1.1rem' }}>
                AI Prompt Engineer & Orchestrator at Waldo Fyi
              </p>
            </div>

            {/* Credentials Grid */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '20px',
              marginBottom: '30px'
            }}>
              {[
                { stat: '300+', label: 'Executive Reports' },
                { stat: '#1', label: 'AI Prompt Engineer' },
                { stat: '3+', label: 'Years in Production AI' },
                { stat: 'Non-Tech', label: 'Background' }
              ].map((item, i) => (
                <div key={i} style={{ textAlign: 'center', padding: '15px' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#667eea', marginBottom: '5px' }}>
                    {item.stat}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#718096' }}>{item.label}</div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: '30px',
              borderRadius: '12px',
              textAlign: 'center',
              marginBottom: '25px'
            }}>
              <p style={{ fontSize: '1.15rem', fontStyle: 'italic', lineHeight: '1.7', marginBottom: '15px' }}>
                "If a non-technical brain like mine could earn a front-row seat working with the most 
                powerful AI tools in the world, then anyone willing to commit time and effort can do the same."
              </p>
              <p style={{ fontSize: '0.9rem', opacity: 0.85 }}>— Goodlet Owusu Ansah</p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <a href="/about" style={{
                display: 'inline-block',
                color: '#667eea',
                fontWeight: 'bold',
                textDecoration: 'none',
                fontSize: '1.05rem',
                borderBottom: '2px solid #667eea',
                paddingBottom: '3px'
              }}>
                Read Full Story →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== AI TOOLS MASTERED ==================== */}
      <section style={{ padding: '80px 20px', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', color: '#1a202c', marginBottom: '15px', fontWeight: '700' }}>
            AI Models & Tools You'll Master
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#4a5568', marginBottom: '40px' }}>
            Hands-on training with the AI tools that power today's most innovative companies.
          </p>

          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '30px', 
            flexWrap: 'wrap' 
          }}>
            {[
              { name: 'OpenAI GPT', models: 'GPT Pro, GPT Mini, GPT Nano', color: '#10a37f', icon: '🤖' },
              { name: 'Anthropic Claude', models: 'Claude Sonnet, Opus, Haiku', color: '#d97757', icon: '🧠' },
              { name: 'Google Gemini', models: 'Gemini Pro, Ultra, Flash', color: '#4285f4', icon: '💎' },
              { name: 'Automation Tools', models: 'Zapier, Make, n8n, Custom APIs', color: '#ff6d00', icon: '⚡' },
              { name: 'AI Assistants', models: 'Custom GPTs, Agents, Copilots', color: '#9333ea', icon: '🛠️' }
            ].map((tool, i) => (
              <div 
                key={i}
                style={{
                  background: 'white',
                  padding: '25px 30px',
                  borderRadius: '12px',
                  border: `2px solid ${tool.color}20`,
                  minWidth: '170px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = tool.color;
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = `0 8px 25px ${tool.color}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${tool.color}20`;
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{tool.icon}</div>
                <div style={{ fontWeight: 'bold', color: '#1a202c', marginBottom: '5px', fontSize: '1rem' }}>
                  {tool.name}
                </div>
                <div style={{ color: '#718096', fontSize: '0.8rem' }}>{tool.models}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA / EMAIL SIGNUP ==================== */}
      <section style={{
        background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
        padding: '100px 20px',
        textAlign: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background glow */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(102,126,234,0.1) 0%, transparent 70%)',
          filter: 'blur(60px)'
        }}/>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.8rem', marginBottom: '20px', fontWeight: '800', lineHeight: '1.2' }}>
            Ready to Future-Proof<br/>Your Career?
          </h2>
          <p style={{ fontSize: '1.3rem', opacity: 0.85, marginBottom: '40px', lineHeight: '1.7' }}>
            Join professionals who are building AI skills that matter. 
            Get early access to courses, job alerts, and exclusive resources.
          </p>

          {/* Email Form */}
          <div style={{
            background: 'rgba(255,255,255,0.08)',
            padding: '40px',
            borderRadius: '20px',
            border: '1px solid rgba(255,255,255,0.1)',
            marginBottom: '30px'
          }}>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <input 
                type="email" 
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  padding: '16px 24px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  background: 'rgba(255,255,255,0.1)',
                  color: 'white',
                  flex: '1',
                  maxWidth: '350px',
                  fontSize: '1rem',
                  outline: 'none'
                }}
              />
              <button style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '16px 35px',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '1rem',
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
              }}>
                Join the Academy →
              </button>
            </div>
            <p style={{ fontSize: '0.85rem', opacity: 0.5, marginTop: '15px' }}>
              No spam. Unsubscribe anytime. We respect your inbox.
            </p>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/courses" style={{ color: '#a78bfa', textDecoration: 'none', fontSize: '0.95rem' }}>
              📚 Browse Courses
            </a>
            <a href="/jobs" style={{ color: '#34d399', textDecoration: 'none', fontSize: '0.95rem' }}>
              💼 View AI Jobs
            </a>
            <a href="/about" style={{ color: '#f9a8d4', textDecoration: 'none', fontSize: '0.95rem' }}>
              📖 Our Story
            </a>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer style={{
        background: '#0a0a0a',
        color: 'white',
        padding: '60px 20px 30px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '40px',
            marginBottom: '50px'
          }}>
            {/* Brand */}
            <div>
              <img 
                src="/goodlet-ai-logo.png" 
                alt="Goodlet AI Academy"
                style={{ height: '45px', width: 'auto', marginBottom: '15px' }}
              />
              <p style={{ color: '#a0aec0', lineHeight: '1.7', fontSize: '0.95rem' }}>
                Clarity over confusion.<br/>
                Skills over hype.<br/>
                Access over gatekeeping.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 style={{ fontSize: '1rem', marginBottom: '20px', fontWeight: '600', color: '#e2e8f0' }}>
                Quick Links
              </h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  { name: 'Home', href: '/' },
                  { name: 'Learning Paths', href: '/courses' },
                  { name: 'AI Jobs', href: '/jobs' },
                  { name: 'About', href: '/about' }
                ].map((link, i) => (
                  <li key={i} style={{ marginBottom: '12px' }}>
                    <a href={link.href} style={{ color: '#a0aec0', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#667eea'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#a0aec0'}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learning */}
            <div>
              <h4 style={{ fontSize: '1rem', marginBottom: '20px', fontWeight: '600', color: '#e2e8f0' }}>
                Learning Paths
              </h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'AI Foundations',
                  'AI Automation',
                  'AI Career Builder',
                  'AI for Marketers',
                  'AI for Researchers'
                ].map((item, i) => (
                  <li key={i} style={{ marginBottom: '12px' }}>
                    <a href="/courses" style={{ color: '#a0aec0', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#667eea'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#a0aec0'}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 style={{ fontSize: '1rem', marginBottom: '20px', fontWeight: '600', color: '#e2e8f0' }}>
                Contact
              </h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '12px', color: '#a0aec0', fontSize: '0.95rem' }}>
                  📧 info@goodletaiacademy.com
                </li>
                <li style={{ marginBottom: '12px', color: '#a0aec0', fontSize: '0.95rem' }}>
                  🌐 www.goodletaiacademy.com
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div style={{ 
            borderTop: '1px solid #1a1a2e',
            paddingTop: '25px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '15px'
          }}>
            <p style={{ color: '#4a5568', fontSize: '0.85rem' }}>
              © 2025 Goodlet AI Academy. All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
              <a href="#" style={{ color: '#4a5568', textDecoration: 'none', fontSize: '0.85rem' }}>Privacy Policy</a>
              <a href="#" style={{ color: '#4a5568', textDecoration: 'none', fontSize: '0.85rem' }}>Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}