export default function Jobs() {
  const jobs = [
    {
      id: 1,
      title: "Prompt Engineer",
      company: "OpenAI",
      location: "Remote",
      type: "Full-time",
      level: "Mid-Level",
      salary: "$120k - $180k",
      description: "Design and optimize prompts for GPT models. Work with product teams to improve AI responses.",
      link: "https://openai.com/careers",
      featured: true
    },
    {
      id: 2,
      title: "AI Content Strategist",
      company: "Anthropic",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      level: "Senior",
      salary: "$140k - $200k",
      description: "Lead prompt engineering initiatives for Claude. Create best practices and training materials.",
      link: "https://anthropic.com/careers",
      featured: true
    },
    {
      id: 3,
      title: "LLM Integration Specialist",
      company: "Microsoft",
      location: "Redmond, WA / Hybrid",
      type: "Full-time",
      level: "Mid-Level",
      salary: "$130k - $190k",
      description: "Integrate large language models into Microsoft products. Optimize prompts for enterprise use cases.",
      link: "https://careers.microsoft.com",
      featured: true
    },
    {
      id: 4,
      title: "Freelance Prompt Consultant",
      company: "Multiple Clients",
      location: "Remote",
      type: "Contract",
      level: "Entry-Level",
      salary: "$50 - $150/hour",
      description: "Help businesses optimize their AI prompts. Flexible hours, work with various industries.",
      link: "https://upwork.com",
      featured: false
    },
    {
      id: 5,
      title: "AI Training Specialist",
      company: "Google DeepMind",
      location: "London, UK / Remote",
      type: "Full-time",
      level: "Mid-Level",
      salary: "£80k - £120k",
      description: "Train and evaluate AI models through prompt engineering. Collaborate with research teams.",
      link: "https://deepmind.google/careers",
      featured: false
    },
    {
      id: 6,
      title: "Conversational AI Designer",
      company: "Various Startups",
      location: "Remote",
      type: "Full-time",
      level: "Entry-Level",
      salary: "$80k - $120k",
      description: "Design conversational experiences for chatbots and virtual assistants using prompt engineering.",
      link: "https://wellfound.com",
      featured: false
    },
    {
      id: 7,
      title: "Prompt Engineering Instructor",
      company: "Online Education Platforms",
      location: "Remote",
      type: "Part-time",
      level: "Senior",
      salary: "$60 - $100/hour",
      description: "Teach prompt engineering courses. Create curriculum and mentor students.",
      link: "https://linkedin.com/jobs",
      featured: false
    },
    {
      id: 8,
      title: "AI QA Engineer",
      company: "Tech Companies",
      location: "Remote",
      type: "Full-time",
      level: "Entry-Level",
      salary: "$70k - $110k",
      description: "Test and validate AI outputs. Develop testing frameworks for prompt quality assurance.",
      link: "https://indeed.com",
      featured: false
    }
  ]

  const featuredJobs = jobs.filter(job => job.featured)
  const regularJobs = jobs.filter(job => !job.featured)

  return (
    <div style={{ minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* Navigation */}
      <nav style={{
        background: 'white',
        padding: '20px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <a href="/" style={{ 
          fontSize: '1.5rem', 
          fontWeight: 'bold', 
          color: '#667eea',
          textDecoration: 'none'
        }}>
          GAI Academy
        </a>
        <div style={{ display: 'flex', gap: '30px' }}>
          <a href="/" style={{ color: '#333', textDecoration: 'none' }}>Home</a>
          <a href="/courses" style={{ color: '#333', textDecoration: 'none' }}>Courses</a>
          <a href="/jobs" style={{ color: '#667eea', textDecoration: 'none', fontWeight: 'bold' }}>Jobs</a>
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
          AI Prompt Engineering Jobs
        </h1>
        <p style={{ fontSize: '1.3rem', opacity: 0.9, marginBottom: '30px' }}>
          Launch your career in the fastest-growing tech field
        </p>
        
        {/* Job Alert Signup */}
        <div style={{
          background: 'rgba(255,255,255,0.1)',
          padding: '30px',
          borderRadius: '12px',
          maxWidth: '600px',
          margin: '0 auto',
          backdropFilter: 'blur(10px)'
        }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '15px' }}>
            💼 Get notified about new opportunities
          </p>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <input 
              type="email" 
              placeholder="Enter your email"
              style={{
                padding: '12px 20px',
                borderRadius: '8px',
                border: 'none',
                flex: '1',
                maxWidth: '300px',
                fontSize: '1rem'
              }}
            />
            <button style={{
              background: '#1a202c',
              color: 'white',
              padding: '12px 30px',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '1rem'
            }}>
              Subscribe
            </button>
          </div>
        </div>
      </header>

      {/* Filter Buttons */}
      <div style={{
        maxWidth: '1200px',
        margin: '40px auto',
        padding: '0 20px'
      }}>
        <div style={{ 
          display: 'flex', 
          gap: '15px', 
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <button style={{
            padding: '10px 20px',
            border: '2px solid #667eea',
            borderRadius: '25px',
            background: '#667eea',
            color: 'white',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            All Jobs
          </button>
          <button style={{
            padding: '10px 20px',
            border: '2px solid #e2e8f0',
            borderRadius: '25px',
            background: 'white',
            color: '#4a5568',
            cursor: 'pointer'
          }}>
            Remote Only
          </button>
          <button style={{
            padding: '10px 20px',
            border: '2px solid #e2e8f0',
            borderRadius: '25px',
            background: 'white',
            color: '#4a5568',
            cursor: 'pointer'
          }}>
            Full-time
          </button>
          <button style={{
            padding: '10px 20px',
            border: '2px solid #e2e8f0',
            borderRadius: '25px',
            background: 'white',
            color: '#4a5568',
            cursor: 'pointer'
          }}>
            Entry-Level
          </button>
          <button style={{
            padding: '10px 20px',
            border: '2px solid #e2e8f0',
            borderRadius: '25px',
            background: 'white',
            color: '#4a5568',
            cursor: 'pointer'
          }}>
            Contract
          </button>
        </div>
      </div>

      {/* Featured Jobs Section */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        <h2 style={{ 
          fontSize: '2rem', 
          marginBottom: '30px',
          color: '#1a202c',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          ⭐ Featured Opportunities
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '25px',
          marginBottom: '60px'
        }}>
          {featuredJobs.map((job) => (
            <div key={job.id} style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              borderRadius: '12px',
              padding: '30px',
              boxShadow: '0 8px 16px rgba(102, 126, 234, 0.3)',
              position: 'relative'
            }}>
              {/* Featured Badge */}
              <span style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'rgba(255,255,255,0.2)',
                padding: '5px 12px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 'bold'
              }}>
                FEATURED
              </span>

              <h3 style={{ fontSize: '1.6rem', marginBottom: '10px' }}>
                {job.title}
              </h3>
              <p style={{ fontSize: '1.2rem', marginBottom: '15px', opacity: 0.9 }}>
                {job.company}
              </p>
              
              <div style={{ 
                display: 'flex', 
                gap: '15px',
                marginBottom: '15px',
                flexWrap: 'wrap',
                fontSize: '0.9rem'
              }}>
                <span>📍 {job.location}</span>
                <span>💼 {job.type}</span>
                <span>📊 {job.level}</span>
              </div>

              <p style={{ 
                fontSize: '1.3rem', 
                fontWeight: 'bold',
                marginBottom: '15px'
              }}>
                {job.salary}
              </p>

              <p style={{ 
                marginBottom: '20px',
                lineHeight: '1.6',
                opacity: 0.95
              }}>
                {job.description}
              </p>

              <a 
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  background: 'white',
                  color: '#667eea',
                  padding: '12px 30px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '1rem'
                }}
              >
                Apply Now →
              </a>
            </div>
          ))}
        </div>

        {/* All Jobs Section */}
        <h2 style={{ 
          fontSize: '2rem', 
          marginBottom: '30px',
          color: '#1a202c'
        }}>
          All Opportunities
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {regularJobs.map((job) => (
            <div key={job.id} style={{
              background: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '25px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              transition: 'box-shadow 0.2s'
            }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'start',
                flexWrap: 'wrap',
                gap: '20px'
              }}>
                <div style={{ flex: '1', minWidth: '300px' }}>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    marginBottom: '8px',
                    color: '#1a202c'
                  }}>
                    {job.title}
                  </h3>
                  <p style={{ 
                    fontSize: '1.1rem', 
                    color: '#4a5568',
                    marginBottom: '12px'
                  }}>
                    {job.company}
                  </p>
                  
                  <div style={{ 
                    display: 'flex', 
                    gap: '15px',
                    marginBottom: '12px',
                    flexWrap: 'wrap',
                    fontSize: '0.9rem',
                    color: '#718096'
                  }}>
                    <span>📍 {job.location}</span>
                    <span>💼 {job.type}</span>
                    <span>📊 {job.level}</span>
                  </div>

                  <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
                    {job.description}
                  </p>
                </div>

                <div style={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  gap: '15px',
                  minWidth: '150px'
                }}>
                  <p style={{ 
                    fontSize: '1.3rem', 
                    fontWeight: 'bold',
                    color: '#667eea'
                  }}>
                    {job.salary}
                  </p>
                  
                  <a 
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: '#667eea',
                      color: 'white',
                      padding: '10px 25px',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      fontSize: '0.95rem'
                    }}
                  >
                    View Job →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Career Resources */}
        <div style={{
          background: '#f7fafc',
          borderRadius: '12px',
          padding: '40px',
          marginTop: '60px',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#1a202c' }}>
            Need Help Getting Started?
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#4a5568', marginBottom: '30px' }}>
            Take our courses to build the skills companies are looking for
          </p>
          <a 
            href="/courses"
            style={{
              display: 'inline-block',
              background: '#667eea',
              color: 'white',
              padding: '15px 40px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1.1rem'
            }}
          >
            Browse Courses
          </a>
        </div>
      </main>

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