export const metadata = {
  title: 'About | Goodlet AI Academy',
  description: 'The story behind Goodlet AI Academy. A non-technical professional who became an AI Prompt Engineer and built a platform to help others do the same.',
  openGraph: {
    title: 'About | Goodlet AI Academy',
    description: 'From business researcher to AI Prompt Engineer. The real story behind Goodlet AI Academy.',
    url: 'https://www.goodletaiacademy.com/about',
    type: 'website',
  },
}

export default function About() {
  return (
    <div style={{ minHeight: '100vh', fontFamily: 'Arial, sans-serif', background: '#ffffff' }}>

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
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img
            src="/goodlet-ai-logo.png"
            alt="Goodlet AI Academy"
            style={{ height: '50px', width: 'auto' }}
          />
        </a>
        <div style={{ display: 'flex', gap: '30px' }}>
          <a href="/" style={{ color: '#333', textDecoration: 'none' }}>Home</a>
          <a href="/courses" style={{ color: '#333', textDecoration: 'none' }}>Courses</a>
          <a href="/jobs" style={{ color: '#333', textDecoration: 'none' }}>Jobs</a>
          <a href="/about" style={{ color: '#667eea', textDecoration: 'none', fontWeight: 'bold' }}>About</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          marginBottom: '20px',
          fontWeight: 'bold',
          lineHeight: '1.2'
        }}>
          About Goodlet AI Academy
        </h1>
        <p style={{
          fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
          maxWidth: '800px',
          margin: '0 auto',
          opacity: 0.95,
          lineHeight: '1.6'
        }}>
          Training the next generation of AI-powered professionals, automation enthusiasts,
          and those ready to thrive in the AI era.
        </p>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 20px' }}>

        {/* Opening with Photo */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '40px',
          marginBottom: '60px',
          flexWrap: 'wrap'
        }}>
          <div style={{ flexShrink: 0, textAlign: 'center' }}>
            <img
              src="/instructor.jpg"
              alt="Goodlet Owusu Ansah"
              style={{
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '4px solid #667eea',
                boxShadow: '0 8px 30px rgba(102,126,234,0.25)',
                display: 'block',
                margin: '0 auto 15px'
              }}
            />
            <p style={{ margin: 0, fontWeight: '700', color: '#1a202c', fontSize: '1rem' }}>Goodlet Owusu Ansah</p>
            <p style={{ margin: '4px 0 0', color: '#667eea', fontSize: '0.85rem', fontWeight: '600' }}>AI Prompt Engineer and Orchestrator</p>
            <p style={{ margin: '2px 0 0', color: '#718096', fontSize: '0.82rem' }}>Waldo Fyi, Dallas TX</p>
          </div>
          <div style={{ flex: 1, minWidth: '280px', fontSize: '1.2rem', lineHeight: '1.9', color: '#2d3748' }}>
            <p style={{ marginBottom: '20px' }}>
              Goodlet Owusu Ansah did not get into AI through a computer science degree or an engineering background.
              He got in through research. Years of studying how businesses think, how decisions get made, and how
              information can be turned into something genuinely useful.
            </p>
            <p style={{ margin: 0 }}>
              That background ended up being the thing that set him apart.
            </p>
          </div>
        </div>

        {/* The Foundation */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{
            fontSize: '2rem',
            color: '#1a202c',
            marginBottom: '25px',
            paddingBottom: '15px',
            borderBottom: '3px solid #667eea'
          }}>
            The Foundation: Research and Analysis
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4a5568', marginBottom: '20px' }}>
            He spent the early part of his career as a <strong>Tier-1 Diamond Research Analyst at AskWonder</strong>,
            producing over <strong>300 in-depth reports</strong> for senior executives at Fortune 500 companies.
            Alongside that, he was contributing to academic publications in international peer-reviewed journals.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4a5568' }}>
            Research taught him something that most people overlook. Asking the right questions matters more than
            having the right tools. That lesson shaped everything that came after.
          </p>
        </section>

        {/* Quote Callout */}
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '40px',
          borderRadius: '12px',
          margin: '60px 0',
          boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)',
          position: 'relative'
        }}>
          <div style={{
            fontSize: '4rem',
            position: 'absolute',
            top: '10px',
            left: '20px',
            opacity: 0.3
          }}>
            "
          </div>
          <p style={{
            fontSize: '1.4rem',
            lineHeight: '1.6',
            fontStyle: 'italic',
            margin: '0',
            position: 'relative',
            zIndex: 1,
            textAlign: 'center'
          }}>
            If a non-technical brain like mine could earn a front-row seat working with the most
            powerful AI tools in the world, then anyone willing to commit time and effort can do the same.
          </p>
          <p style={{
            textAlign: 'center',
            marginTop: '20px',
            fontSize: '1.1rem',
            opacity: 0.9
          }}>
            Goodlet Owusu Ansah
          </p>
        </div>

        {/* The Disruption */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{
            fontSize: '2rem',
            color: '#1a202c',
            marginBottom: '25px',
            paddingBottom: '15px',
            borderBottom: '3px solid #667eea'
          }}>
            The Disruption: Surviving the AI Wave
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4a5568', marginBottom: '20px' }}>
            When ChatGPT arrived, it hit the research industry hard. Teams were cut. Roles that had existed
            for years disappeared almost overnight. During that period, Goodlet was <strong>the only research
            analyst on his team who kept his job</strong> while managers and peers around him were let go.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4a5568', marginBottom: '20px' }}>
            He did not fight the shift. He went towards it. He started experimenting with AI tools early,
            figuring out what they could actually do, and became one of the internal champions for AI
            automation at AskWonder.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4a5568' }}>
            That led to a spot on <strong>AskWonder's Product and Innovation Team</strong>, where he helped
            reshape how research was done using AI. Through internal competitions and real-world deployments,
            he was recognised as the{' '}
            <strong style={{ color: '#667eea' }}>Best AI Prompt Engineer</strong>, known for building
            reliable AI systems that turned manual research workflows into automated ones.
          </p>
        </section>

        {/* Achievement Stats */}
        <div style={{
          background: '#f7fafc',
          padding: '40px',
          borderRadius: '12px',
          margin: '60px 0',
          border: '1px solid #e2e8f0'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            color: '#1a202c',
            marginBottom: '30px',
            textAlign: 'center'
          }}>
            Three Years Later: Results That Speak
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '30px',
            textAlign: 'center'
          }}>
            <div>
              <div style={{ fontSize: '2.5rem', color: '#667eea', fontWeight: 'bold', marginBottom: '10px' }}>300+</div>
              <div style={{ color: '#4a5568', fontSize: '1rem' }}>Executive Research Reports</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', color: '#667eea', fontWeight: 'bold', marginBottom: '10px' }}>#1</div>
              <div style={{ color: '#4a5568', fontSize: '1rem' }}>Best AI Prompt Engineer</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', color: '#667eea', fontWeight: 'bold', marginBottom: '10px' }}>3+</div>
              <div style={{ color: '#4a5568', fontSize: '1rem' }}>Years in Production AI</div>
            </div>
          </div>

          {/* AI Models Mastered */}
          <div style={{ marginTop: '50px', paddingTop: '40px', borderTop: '2px solid #e2e8f0' }}>
            <h4 style={{
              fontSize: '1.3rem',
              color: '#1a202c',
              marginBottom: '30px',
              textAlign: 'center',
              fontWeight: 'bold'
            }}>
              AI Models Mastered
            </h4>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '30px',
              textAlign: 'center'
            }}>
              <div style={{ padding: '20px', background: 'white', borderRadius: '8px', border: '2px solid #10a37f' }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🤖</div>
                <div style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#1a202c', marginBottom: '5px' }}>OpenAI GPT</div>
                <div style={{ color: '#718096', fontSize: '0.9rem' }}>GPT Pro, GPT Mini, GPT Nano</div>
              </div>
              <div style={{ padding: '20px', background: 'white', borderRadius: '8px', border: '2px solid #d97757' }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🧠</div>
                <div style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#1a202c', marginBottom: '5px' }}>Anthropic Claude</div>
                <div style={{ color: '#718096', fontSize: '0.9rem' }}>Claude Haiku, Sonnet and Opus</div>
              </div>
              <div style={{ padding: '20px', background: 'white', borderRadius: '8px', border: '2px solid #4285f4' }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>💎</div>
                <div style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#1a202c', marginBottom: '5px' }}>Google Gemini</div>
                <div style={{ color: '#718096', fontSize: '0.9rem' }}>Gemini Pro, Gemini Ultra</div>
              </div>
            </div>
          </div>
        </div>

        {/* Today */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{
            fontSize: '2rem',
            color: '#1a202c',
            marginBottom: '25px',
            paddingBottom: '15px',
            borderBottom: '3px solid #667eea'
          }}>
            Today: AI Professional and Educator
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4a5568', marginBottom: '20px' }}>
            Today, Goodlet works as an <strong>AI Prompt Engineer and Orchestrator at Waldo Fyi</strong>,
            a Dallas, Texas based AI-powered strategy engine. His day-to-day work involves orchestrating
            large language models to automate deep research, competitive intelligence, and trend discovery.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4a5568', marginBottom: '20px' }}>
            What makes his path stand out is that he is <strong>non-technical by background</strong>.
            He did not learn to code his way into this career. He got here through problem-solving,
            structured thinking, and a willingness to keep experimenting when most people gave up.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4a5568' }}>
            What started as learning how to write better prompts turned into building full AI automation
            systems and production workflows. That is exactly what he now teaches.
          </p>
        </section>

        {/* The Mission */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{
            fontSize: '2rem',
            color: '#1a202c',
            marginBottom: '25px',
            paddingBottom: '15px',
            borderBottom: '3px solid #667eea'
          }}>
            The Mission: Empowering the AI Generation
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4a5568', marginBottom: '20px' }}>
            That experience is what led to <strong>Goodlet AI Academy</strong>.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4a5568', marginBottom: '20px' }}>
            The academy is for the people who feel stuck. The ones asking themselves how to actually
            get ahead with AI without needing a technical background. Beginners, career switchers,
            non-technical professionals, and anyone who wants to use AI for real work, not just talk about it.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4a5568', marginBottom: '20px' }}>
            The courses cut through the noise. No jargon. No fluff. Clear paths from where you are
            to where you want to be, whether that is prompt engineering, automation, landing a new
            role, or using AI to grow your business.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4a5568' }}>
            Beyond the courses, the Academy connects students to real opportunities. AI job listings,
            hiring partners, and a direct line to the roles that are actively being recruited for.
            This is not about chasing hype. It is about building skills that hold up.
          </p>
        </section>

        {/* Core Values */}
        <div style={{
          background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
          color: 'white',
          padding: '50px 40px',
          borderRadius: '12px',
          margin: '60px 0',
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '10px', fontWeight: 'bold' }}>
            Our Core Promise
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            marginTop: '40px'
          }}>
            <div>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>💎</div>
              <h4 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Clarity</h4>
              <p style={{ opacity: 0.9, fontSize: '1rem' }}>Over confusion</p>
            </div>
            <div>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🎯</div>
              <h4 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Skills</h4>
              <p style={{ opacity: 0.9, fontSize: '1rem' }}>Over hype</p>
            </div>
            <div>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🚀</div>
              <h4 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Access</h4>
              <p style={{ opacity: 0.9, fontSize: '1rem' }}>Over gatekeeping</p>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <section style={{ textAlign: 'center', padding: '40px 20px', marginBottom: '40px' }}>
          <p style={{
            fontSize: '1.3rem',
            lineHeight: '1.8',
            color: '#2d3748',
            fontWeight: '500',
            marginBottom: '30px'
          }}>
            If you are ready to learn, adapt, and build something real with AI, you are in the right place.
          </p>
        </section>

        {/* CTA */}
        <div style={{
          background: '#f7fafc',
          padding: '50px 40px',
          borderRadius: '12px',
          textAlign: 'center',
          border: '2px solid #667eea'
        }}>
          <h3 style={{ fontSize: '2rem', color: '#1a202c', marginBottom: '20px' }}>
            Ready to Start Your AI Journey?
          </h3>
          <p style={{
            fontSize: '1.2rem',
            color: '#4a5568',
            marginBottom: '35px',
            lineHeight: '1.6'
          }}>
            Join the next generation of AI-powered professionals.<br />
            Learn from someone who has walked the path and come out the other side.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/courses" style={{
              display: 'inline-block',
              background: '#667eea',
              color: 'white',
              padding: '18px 45px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              boxShadow: '0 4px 6px rgba(102, 126, 234, 0.4)'
            }}>
              Explore Learning Paths →
            </a>
            <a href="/jobs" style={{
              display: 'inline-block',
              background: 'white',
              color: '#667eea',
              padding: '18px 45px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              border: '2px solid #667eea'
            }}>
              View AI Careers
            </a>
          </div>
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
