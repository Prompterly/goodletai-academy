'use client'

export default function Jobs() {
  const jobs = [
    {
      id: 1,
      title: "AI Prompt Engineer",
      company: "OpenAI",
      location: "Remote",
      type: "Full-time",
      level: "Mid-Level",
      salary: "$120k - $180k",
      description: "Design and optimize prompts for GPT models. Work with product teams to improve AI responses and build reliable AI systems.",
      link: "https://openai.com/careers",
      featured: true,
      category: "Engineering"
    },
    {
      id: 2,
      title: "AI Automation Specialist",
      company: "Anthropic",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      level: "Senior",
      salary: "$140k - $200k",
      description: "Build and optimize AI-powered automation workflows. Create scalable systems that leverage LLMs for enterprise applications.",
      link: "https://anthropic.com/careers",
      featured: true,
      category: "Automation"
    },
    {
      id: 3,
      title: "LLM Integration Engineer",
      company: "Microsoft",
      location: "Redmond, WA / Hybrid",
      type: "Full-time",
      level: "Mid-Level",
      salary: "$130k - $190k",
      description: "Integrate large language models into Microsoft products. Design AI-powered features and optimize for enterprise scale.",
      link: "https://careers.microsoft.com",
      featured: true,
      category: "Engineering"
    },
    {
      id: 4,
      title: "Freelance AI Consultant",
      company: "Multiple Clients",
      location: "Remote",
      type: "Contract",
      level: "Entry-Level",
      salary: "$50 - $150/hour",
      description: "Help businesses implement AI solutions. Audit workflows, recommend tools, and build custom AI systems for various industries.",
      link: "https://upwork.com",
      featured: false,
      category: "Consulting"
    },
    {
      id: 5,
      title: "AI Research & Training Specialist",
      company: "Google DeepMind",
      location: "London, UK / Remote",
      type: "Full-time",
      level: "Mid-Level",
      salary: "£80k - £120k",
      description: "Train and evaluate AI models. Design evaluation frameworks and create training datasets for next-generation AI systems.",
      link: "https://deepmind.google/careers",
      featured: false,
      category: "Research"
    },
    {
      id: 6,
      title: "AI Product Manager",
      company: "Various Tech Companies",
      location: "Remote",
      type: "Full-time",
      level: "Mid-Level",
      salary: "$110k - $160k",
      description: "Lead AI product development from conception to launch. Bridge the gap between technical AI teams and business stakeholders.",
      link: "https://wellfound.com",
      featured: false,
      category: "Product"
    },
    {
      id: 7,
      title: "AI Training & Education Specialist",
      company: "EdTech Companies",
      location: "Remote",
      type: "Part-time",
      level: "Senior",
      salary: "$60 - $100/hour",
      description: "Create and deliver AI training programs. Develop curriculum for corporate teams transitioning to AI-powered workflows.",
      link: "https://linkedin.com/jobs",
      featured: false,
      category: "Education"
    },
    {
      id: 8,
      title: "AI Quality Assurance Engineer",
      company: "Tech Companies",
      location: "Remote",
      type: "Full-time",
      level: "Entry-Level",
      salary: "$70k - $110k",
      description: "Test and validate AI outputs. Develop testing frameworks for AI systems and ensure quality, safety, and reliability.",
      link: "https://indeed.com",
      featured: false,
      category: "Engineering"
    },
    {
      id: 9,
      title: "AI Content Strategist",
      company: "Marketing Agencies",
      location: "Remote",
      type: "Full-time",
      level: "Mid-Level",
      salary: "$90k - $140k",
      description: "Develop AI-powered content strategies. Use generative AI tools to scale content production while maintaining brand voice.",
      link: "https://linkedin.com/jobs",
      featured: false,
      category: "Marketing"
    },
    {
      id: 10,
      title: "AI Workflow Architect",
      company: "Enterprise Companies",
      location: "Remote / Hybrid",
      type: "Full-time",
      level: "Senior",
      salary: "$150k - $220k",
      description: "Design and implement enterprise AI workflows. Orchestrate multiple AI models and tools into cohesive business solutions.",
      link: "https://linkedin.com/jobs",
      featured: false,
      category: "Architecture"
    }
  ]

  const featuredJobs = jobs.filter(job => job.featured)
  const regularJobs = jobs.filter(job => !job.featured)

  const categories = ["All", "Engineering", "Automation", "Consulting", "Research", "Product", "Marketing", "Education", "Architecture"]

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
          <a href="/courses" style={{ color: '#333', textDecoration: 'none' }}>Courses</a>
          <a href="/jobs" style={{ color: '#667eea', textDecoration: 'none', fontWeight: 'bold' }}>Jobs</a>
          <a href="/about" style={{ color: '#333', textDecoration: 'none' }}>About</a>
        </div>
      </nav>

      {/* Hero */}
      <header style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px', fontWeight: 'bold' }}>
          AI Careers & Opportunities
        </h1>
        <p style={{ fontSize: '1.3rem', opacity: 0.9, marginBottom: '30px', maxWidth: '700px', margin: '0 auto 30px' }}>
          Discover roles in AI engineering, automation, research, and more. 
          Your next career move starts here.
        </p>
        
        {/* Job Alert */}
        <div style={{
          background: 'rgba(255,255,255,0.1)',
          padding: '30px',
          borderRadius: '12px',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '15px' }}>
            🔔 Get notified about new AI opportunities
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

      {/* Category Filters */}
      <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {categories.map((cat, index) => (
            <button 
              key={index}
              style={{
                padding: '10px 20px',
                border: index === 0 ? '2px solid #667eea' : '2px solid #e2e8f0',
                borderRadius: '25px',
                background: index === 0 ? '#667eea' : 'white',
                color: index === 0 ? 'white' : '#4a5568',
                cursor: 'pointer',
                fontWeight: index === 0 ? 'bold' : 'normal',
                fontSize: '0.95rem'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        {/* Featured */}
        <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: '#1a202c', display: 'flex', alignItems: 'center', gap: '10px' }}>
          ⭐ Featured Opportunities
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '25px',
          marginBottom: '60px'
        }}>
          {featuredJobs.map((job) => (
            <div 
              key={job.id} 
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                borderRadius: '16px',
                padding: '30px',
                boxShadow: '0 8px 16px rgba(102, 126, 234, 0.3)',
                position: 'relative',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '15px' }}>
                <span style={{
                  background: 'rgba(255,255,255,0.2)',
                  padding: '5px 12px',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold'
                }}>
                  FEATURED
                </span>
                <span style={{
                  background: 'rgba(255,255,255,0.2)',
                  padding: '5px 12px',
                  borderRadius: '20px',
                  fontSize: '0.8rem'
                }}>
                  {job.category}
                </span>
              </div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '10px' }}>{job.title}</h3>
              <p style={{ fontSize: '1.2rem', marginBottom: '15px', opacity: 0.9 }}>{job.company}</p>
              <div style={{ display: 'flex', gap: '15px', marginBottom: '15px', flexWrap: 'wrap', fontSize: '0.9rem' }}>
                <span>📍 {job.location}</span>
                <span>💼 {job.type}</span>
                <span>📊 {job.level}</span>
              </div>
              <p style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '15px' }}>{job.salary}</p>
              <p style={{ marginBottom: '20px', lineHeight: '1.6', opacity: 0.95 }}>{job.description}</p>
              <a href={job.link} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-block',
                background: 'white',
                color: '#667eea',
                padding: '12px 30px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}>
                Apply Now →
              </a>
            </div>
          ))}
        </div>

        {/* All Jobs */}
        <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: '#1a202c' }}>
          All Opportunities
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {regularJobs.map((job) => (
            <div 
              key={job.id} 
              style={{
                background: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '25px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: '20px' }}>
                <div style={{ flex: '1', minWidth: '300px' }}>
                  <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                    <span style={{
                      background: '#edf2f7',
                      color: '#4a5568',
                      padding: '3px 12px',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: 'bold'
                    }}>
                      {job.category}
                    </span>
                    <span style={{
                      background: '#edf2f7',
                      color: '#4a5568',
                      padding: '3px 12px',
                      borderRadius: '20px',
                      fontSize: '0.8rem'
                    }}>
                      {job.level}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: '#1a202c' }}>{job.title}</h3>
                  <p style={{ fontSize: '1.1rem', color: '#4a5568', marginBottom: '12px' }}>{job.company}</p>
                  <div style={{ display: 'flex', gap: '15px', marginBottom: '12px', flexWrap: 'wrap', fontSize: '0.9rem', color: '#718096' }}>
                    <span>📍 {job.location}</span>
                    <span>💼 {job.type}</span>
                  </div>
                  <p style={{ color: '#4a5568', lineHeight: '1.6' }}>{job.description}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '15px', minWidth: '150px' }}>
                  <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#667eea' }}>{job.salary}</p>
                  <a href={job.link} target="_blank" rel="noopener noreferrer" style={{
                    background: '#667eea',
                    color: 'white',
                    padding: '10px 25px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    fontSize: '0.95rem'
                  }}>
                    View Job →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          background: '#f7fafc',
          borderRadius: '16px',
          padding: '50px 40px',
          marginTop: '60px',
          textAlign: 'center',
          border: '2px solid #667eea'
        }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#1a202c' }}>
            Not Ready to Apply Yet?
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#4a5568', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
            Build the skills employers are looking for. Our courses are designed to make you job-ready.
          </p>
          <a href="/courses" style={{
            display: 'inline-block',
            background: '#667eea',
            color: 'white',
            padding: '15px 40px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.1rem'
          }}>
            Explore Learning Paths →
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        background: '#1a202c',
        color: 'white',
        padding: '50px 20px',
        textAlign: 'center',
        marginTop: '80px'
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