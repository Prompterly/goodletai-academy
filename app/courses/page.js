'use client'

export default function Courses() {
  const learningPaths = [
    {
      id: 1,
      title: "AI Foundations",
      description: "Build your AI fundamentals from the ground up. Perfect for beginners and non-technical professionals.",
      icon: "🧠",
      courses: [
        "Understanding AI & Large Language Models",
        "Prompt Engineering Essentials",
        "AI Tools Landscape & Selection",
        "Building Your First AI Workflow"
      ],
      level: "Beginner",
      duration: "4 weeks",
      lessons: 20,
      price: "Free",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      shadow: "rgba(102, 126, 234, 0.3)",
      featured: true
    },
    {
      id: 2,
      title: "AI Automation Specialist",
      description: "Master AI-powered automation. Build systems that save hours of manual work every week.",
      icon: "⚡",
      courses: [
        "No-Code AI Automation",
        "Custom GPTs & AI Assistants",
        "Workflow Automation with AI",
        "Advanced Prompt Chaining & Agents"
      ],
      level: "Intermediate",
      duration: "6 weeks",
      lessons: 30,
      price: "Coming Soon",
      url: "/courses/ai-automation-specialist",
      color: "linear-gradient(135deg, #10a37f 0%, #0d8a6a 100%)",
      shadow: "rgba(16, 163, 127, 0.3)",
      featured: false
    },
    {
      id: 3,
      title: "AI Career Builder",
      description: "Turn your AI skills into a career. Build a portfolio, land interviews, and get hired.",
      icon: "🚀",
      courses: [
        "Building an AI Portfolio",
        "AI Job Market Navigation",
        "Interview Prep for AI Roles",
        "Freelancing with AI Skills"
      ],
      level: "Intermediate",
      duration: "4 weeks",
      lessons: 16,
      price: "Coming Soon",
      url: "/courses/ai-career-builder",
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      shadow: "rgba(245, 87, 108, 0.3)",
      featured: false
    }
  ]

  const individualCourses = [
    {
      id: 4,
      title: "AI for Marketers & Strategists",
      description: "Use AI to supercharge market research, competitive intelligence, content strategy, and campaign optimization.",
      icon: "📊",
      level: "All Levels",
      duration: "3 weeks",
      lessons: 12,
      price: "Coming Soon",
      url: "/courses/ai-marketers-strategists"
    },
    {
      id: 5,
      title: "AI for Writers & Content Creators",
      description: "Master AI-assisted writing, editing, ideation, and content production without losing your voice.",
      icon: "✍️",
      level: "All Levels",
      duration: "3 weeks",
      lessons: 12,
      price: "Coming Soon"
    },
    {
      id: 6,
      title: "AI for Researchers & Analysts",
      description: "Transform your research workflow with AI. From data collection to insight generation in minutes.",
      icon: "🔬",
      level: "All Levels",
      duration: "3 weeks",
      lessons: 12,
      price: "Coming Soon"
    },
    {
      id: 7,
      title: "Building AI Agents & Assistants",
      description: "Design, build, and deploy custom AI agents that automate complex multi-step tasks.",
      icon: "🤖",
      level: "Advanced",
      duration: "4 weeks",
      lessons: 16,
      price: "Coming Soon"
    },
    {
      id: 8,
      title: "AI Ethics, Safety & Responsible Use",
      description: "Understand the ethical implications of AI. Learn to build and use AI systems responsibly.",
      icon: "🛡️",
      level: "All Levels",
      duration: "2 weeks",
      lessons: 8,
      price: "Free"
    }
  ]

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
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none'
        }}>
          <img 
            src="/goodlet-ai-logo.png" 
            alt="Goodlet AI Academy"
            style={{ height: '50px', width: 'auto' }}
          />
        </a>
        <div style={{ display: 'flex', gap: '30px' }}>
          <a href="/" style={{ color: '#333', textDecoration: 'none' }}>Home</a>
          <a href="/courses" style={{ color: '#667eea', textDecoration: 'none', fontWeight: 'bold' }}>Courses</a>
          <a href="/jobs" style={{ color: '#333', textDecoration: 'none' }}>Jobs</a>
          <a href="/about" style={{ color: '#333', textDecoration: 'none' }}>About</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px', fontWeight: 'bold' }}>
          Learning Paths & Courses
        </h1>
        <p style={{ fontSize: '1.3rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto' }}>
          Structured learning paths designed to take you from AI-curious to AI-proficient. 
          Choose your track and start building real skills.
        </p>
      </header>

      {/* How It Works */}
      <section style={{ 
        padding: '60px 20px',
        background: '#f7fafc',
        borderBottom: '1px solid #e2e8f0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '50px', color: '#1a202c' }}>
            How It Works
          </h2>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '60px', 
            flexWrap: 'wrap',
            textAlign: 'center'
          }}>
            <div style={{ flex: '1', minWidth: '200px', maxWidth: '280px' }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                fontWeight: 'bold',
                margin: '0 auto 20px'
              }}>1</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: '#1a202c' }}>Choose Your Path</h3>
              <p style={{ color: '#4a5568' }}>Pick a learning path based on your goals and experience level</p>
            </div>
            <div style={{ flex: '1', minWidth: '200px', maxWidth: '280px' }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #10a37f 0%, #0d8a6a 100%)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                fontWeight: 'bold',
                margin: '0 auto 20px'
              }}>2</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: '#1a202c' }}>Learn by Doing</h3>
              <p style={{ color: '#4a5568' }}>Practical lessons with real-world projects and hands-on exercises</p>
            </div>
            <div style={{ flex: '1', minWidth: '200px', maxWidth: '280px' }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                fontWeight: 'bold',
                margin: '0 auto 20px'
              }}>3</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: '#1a202c' }}>Launch Your Career</h3>
              <p style={{ color: '#4a5568' }}>Apply your skills to real jobs, freelance work, or career advancement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '15px', color: '#1a202c' }}>
          ⭐ Learning Paths
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#4a5568', marginBottom: '40px' }}>
          Structured tracks that take you from beginner to job-ready in weeks, not years.
        </p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '30px',
          marginBottom: '80px'
        }}>
          {learningPaths.map((path) => (
            <div 
              key={path.id} 
              style={{
                background: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0,0,0,0.07)',
                border: '1px solid #e2e8f0',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.07)';
              }}
            >
              {/* Card Header */}
              <div style={{
                background: path.color,
                padding: '30px',
                color: 'white',
                position: 'relative'
              }}>
                {path.featured && (
                  <span style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    background: 'rgba(255,255,255,0.2)',
                    padding: '5px 15px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold'
                  }}>
                    START HERE
                  </span>
                )}
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{path.icon}</div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>{path.title}</h3>
                <p style={{ opacity: 0.95, lineHeight: '1.6' }}>{path.description}</p>
              </div>

              {/* Card Body */}
              <div style={{ padding: '30px' }}>
                <h4 style={{ fontSize: '1.1rem', color: '#1a202c', marginBottom: '15px', fontWeight: 'bold' }}>
                  What You'll Learn:
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '25px' }}>
                  {path.courses.map((course, index) => (
                    <li key={index} style={{ 
                      padding: '8px 0', 
                      color: '#4a5568',
                      borderBottom: '1px solid #f0f0f0',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}>
                      <span style={{ color: '#10a37f', fontWeight: 'bold' }}>✓</span>
                      {course}
                    </li>
                  ))}
                </ul>

                {/* Meta */}
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  color: '#718096',
                  fontSize: '0.9rem',
                  marginBottom: '20px',
                  paddingTop: '15px',
                  borderTop: '1px solid #e2e8f0'
                }}>
                  <span>📊 {path.level}</span>
                  <span>📚 {path.lessons} lessons</span>
                  <span>⏱️ {path.duration}</span>
                </div>

                {/* CTA */}
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 'bold',
                    color: '#667eea'
                  }}>
                    {path.price}
                  </span>
                  {path.price === "Free" ? (
  <a href="/courses/ai-foundations" style={{
    display: 'inline-block',
    background: '#667eea',
    color: 'white',
    padding: '12px 25px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1rem',
    textDecoration: 'none'
  }}>
    Start Learning →
  </a>
) : path.url ? (
  <a href={path.url} style={{
    display: 'inline-block',
    background: path.color,
    color: 'white',
    padding: '12px 25px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1rem',
    textDecoration: 'none'
  }}>
    Start Learning →
  </a>
) : (
  <button style={{
    background: '#cbd5e0',
    color: 'white',
    padding: '12px 25px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'not-allowed',
    fontWeight: 'bold',
    fontSize: '1rem'
  }}>
    Coming Soon
  </button>
)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Individual Courses */}
        <h2 style={{ fontSize: '2.5rem', marginBottom: '15px', color: '#1a202c' }}>
          📚 Individual Courses
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#4a5568', marginBottom: '40px' }}>
          Dive deep into specific AI skills and industry applications.
        </p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '25px'
        }}>
          {individualCourses.map((course) => (
            <div 
              key={course.id} 
              style={{
                background: 'white',
                borderRadius: '12px',
                padding: '30px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                border: '1px solid #e2e8f0',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'start', gap: '15px' }}>
                <div style={{ fontSize: '2.5rem' }}>{course.icon}</div>
                <div style={{ flex: 1 }}>
                  <span style={{
                    display: 'inline-block',
                    background: '#edf2f7',
                    color: '#4a5568',
                    padding: '3px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    marginBottom: '10px'
                  }}>
                    {course.level}
                  </span>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '10px', color: '#1a202c' }}>
                    {course.title}
                  </h3>
                  <p style={{ color: '#4a5568', lineHeight: '1.6', marginBottom: '15px' }}>
                    {course.description}
                  </p>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '15px',
                    borderTop: '1px solid #e2e8f0'
                  }}>
                    <div style={{ display: 'flex', gap: '15px', color: '#718096', fontSize: '0.9rem' }}>
                      <span>📚 {course.lessons} lessons</span>
                      <span>⏱️ {course.duration}</span>
                    </div>
                    {course.url ? (
                      <a href={course.url} style={{
                        display: 'inline-block',
                        background: '#667eea',
                        color: 'white',
                        padding: '8px 18px',
                        borderRadius: '8px',
                        fontWeight: 'bold',
                        fontSize: '0.9rem',
                        textDecoration: 'none'
                      }}>
                        Start →
                      </a>
                    ) : (
                      <span style={{
                        fontWeight: 'bold',
                        color: course.price === "Free" ? '#10a37f' : '#667eea'
                      }}>
                        {course.price}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '80px 20px',
        textAlign: 'center',
        color: 'white'
      }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
          Not Sure Where to Start?
        </h2>
        <p style={{ fontSize: '1.3rem', opacity: 0.95, marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
          Begin with our free AI Foundations path. No experience needed. 
          No credit card required. Just curiosity and commitment.
        </p>
        <a 
          href="/courses/ai-foundations"
          style={{
            display: 'inline-block',
            background: 'white',
            color: '#667eea',
            padding: '18px 50px',
            borderRadius: '10px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
          }}
        >
          Start Free AI Foundations →
        </a>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#1a202c',
        color: 'white',
        padding: '50px 20px',
        textAlign: 'center'
      }}>
        <p style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '15px' }}>
          Goodlet AI Academy
        </p>
        <p style={{ color: '#a0aec0', fontSize: '1.1rem', marginBottom: '10px' }}>
          Clarity over confusion. Skills over hype. Access over gatekeeping.
        </p>
        <p style={{ color: '#718096', marginTop: '30px' }}>
          © 2025 Goodlet AI Academy. All rights reserved.
        </p>
      </footer>
    </div>
  )
}