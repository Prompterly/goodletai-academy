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
          <a href="/jobs" style={{ color: '#333', textDecoration: 'none' }}>Jobs</a>
          <a href="/about" style={{ color: '#667eea', textDecoration: 'none', fontWeight: 'bold' }}>About</a>
        </div>
      </nav>

      {/* Hero Section with Photo */}
      <header style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '80px 20px',
      }}>
        <div style={{ 
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '40px'
        }}>
                    {/* Text Content */}
          <div style={{ textAlign: 'center' }}>
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
              Clarity over confusion. Skills over hype. Access over gatekeeping.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 20px' }}>
        
        {/* Opening Paragraph */}
        <div style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.8', 
          color: '#2d3748',
          marginBottom: '50px'
        }}>
          <p style={{ marginBottom: '25px' }}>
            Goodlet Owusu Ansah's journey into Generative AI did not begin with a computer science degree 
            or a traditional engineering background. It began with research—academic rigor, business analysis, 
            and a deep curiosity about how information shapes decision-making.
          </p>
        </div>

        {/* Section: The Foundation */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            color: '#1a202c', 
            marginBottom: '25px',
            paddingBottom: '15px',
            borderBottom: '3px solid #667eea'
          }}>
            The Foundation: Research & Analysis
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4a5568', marginBottom: '20px' }}>
            Trained as a business researcher, Goodlet built his early career delivering high-stakes, 
            decision-ready research for Fortune 500 companies. As a <strong>Tier-1 Diamond Research Analyst 
            at AskWonder</strong>, he produced over <strong>300 in-depth reports</strong> for senior executives, 
            while also contributing academic publications to international peer-reviewed journals.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4a5568' }}>
            Research taught him how to ask the right questions, spot weak assumptions, and translate 
            complexity into clarity—skills that would later define his work in AI.
          </p>
        </section>

        {/* Quote Callout Box */}
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
            opacity: '0.3'
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
            opacity: '0.9'
          }}>
            — Goodlet Owusu Ansah
          </p>
        </div>

        {/* Section: The Disruption */}
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
            When ChatGPT first emerged, it disrupted the research industry overnight. Entire research 
            teams were downsized as automation threatened traditional analyst roles. During this period, 
            Goodlet became <strong>the only research analyst retained</strong> while research managers and 
            peers were laid off.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4a5568', marginBottom: '20px' }}>
            Rather than resist the shift, he leaned into it, becoming one of the earliest adopters and 
            internal champions of ChatGPT at AskWonder.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4a5568' }}>
            This curiosity earned him a place on <strong>AskWonder's Product and Innovation Team</strong>, 
            where he helped reimagine how research could be done with Generative AI. Through internal 
            competitions, experimentation, and real-world deployments, Goodlet emerged as the{' '}
            <strong style={{ color: '#667eea' }}>Best AI Prompt Engineer</strong>, recognized for his 
            ability to design reliable prompt systems that transformed AI from a novelty into a 
            production-ready research tool.
          </p>
        </section>

        {/* Stats/Achievement Box - UPDATED WITH AI MODELS */}
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
              <div style={{ fontSize: '2.5rem', color: '#667eea', fontWeight: 'bold', marginBottom: '10px' }}>
                300+
              </div>
              <div style={{ color: '#4a5568', fontSize: '1rem' }}>
                Executive Research Reports
              </div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', color: '#667eea', fontWeight: 'bold', marginBottom: '10px' }}>
                #1
              </div>
              <div style={{ color: '#4a5568', fontSize: '1rem' }}>
                Best AI Prompt Engineer
              </div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', color: '#667eea', fontWeight: 'bold', marginBottom: '10px' }}>
                3+
              </div>
              <div style={{ color: '#4a5568', fontSize: '1rem' }}>
                Years in Production AI
              </div>
            </div>
          </div>

          {/* AI Models Used Section */}
          <div style={{ 
            marginTop: '50px',
            paddingTop: '40px',
            borderTop: '2px solid #e2e8f0'
          }}>
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
              <div style={{
                padding: '20px',
                background: 'white',
                borderRadius: '8px',
                border: '2px solid #10a37f'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🤖</div>
                <div style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#1a202c', marginBottom: '5px' }}>
                  OpenAI GPT
                </div>
                <div style={{ color: '#718096', fontSize: '0.9rem' }}>
                  GPT-3.5, GPT-4, GPT-4 Turbo
                </div>
              </div>
              <div style={{
                padding: '20px',
                background: 'white',
                borderRadius: '8px',
                border: '2px solid #d97757'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🧠</div>
                <div style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#1a202c', marginBottom: '5px' }}>
                  Anthropic Claude
                </div>
                <div style={{ color: '#718096', fontSize: '0.9rem' }}>
                  Claude 2, Claude 3 (Opus, Sonnet, Haiku)
                </div>
              </div>
              <div style={{
                padding: '20px',
                background: 'white',
                borderRadius: '8px',
                border: '2px solid #4285f4'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>💎</div>
                <div style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#1a202c', marginBottom: '5px' }}>
                  Google Gemini
                </div>
                <div style={{ color: '#718096', fontSize: '0.9rem' }}>
                  Gemini Pro, Gemini Ultra
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Today */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            color: '#1a202c', 
            marginBottom: '25px',
            paddingBottom: '15px',
            borderBottom: '3px solid #667eea'
          }}>
            Today: AI Prompt Engineer & Orchestrator
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4a5568', marginBottom: '20px' }}>
            Today, Goodlet works as an <strong>AI Prompt Engineer and Orchestrator at Waldo Fyi</strong>, 
            a Dallas, Texas–based AI-powered strategy engine built for marketers, brand strategists, and 
            agencies. His work focuses on orchestrating LLMs to automate deep research, competitive 
            intelligence, and trend discovery, giving professionals faster and sharper strategic insights.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4a5568' }}>
            What makes Goodlet's journey unique is this: he is <strong>non-technical by background</strong>. 
            His transition into AI was driven not by code-first thinking, but by problem-solving, 
            structured reasoning, and practical experimentation.
          </p>
        </section>

        {/* Section: The Mission */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            color: '#1a202c', 
            marginBottom: '25px',
            paddingBottom: '15px',
            borderBottom: '3px solid #667eea'
          }}>
            The Mission: Democratizing AI Education
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4a5568', marginBottom: '20px' }}>
            That belief led to the creation of <strong>Goodlet AI Academy</strong>.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4a5568', marginBottom: '20px' }}>
            Goodlet AI Academy exists to help beginners, non-technical professionals, and career switchers 
            who feel stuck asking, <em>"How do I level up with Generative AI without getting left behind?"</em>
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4a5568', marginBottom: '20px' }}>
            The platform cuts through noise and jargon, offering clear, practical learning paths, explained 
            in simple language, designed to transition learners into confident AI practitioners.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4a5568' }}>
            Beyond education, the Academy provides first-hand exposure to in-demand AI roles, the skills 
            required to land them, and direct pipelines to opportunities through hiring partners and 
            recruitment agencies. It is not about chasing trends. It is about preparing for the jobs that matter.
          </p>
        </section>

        {/* Core Values Box */}
        <div style={{
          background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
          color: 'white',
          padding: '50px 40px',
          borderRadius: '12px',
          margin: '60px 0',
          textAlign: 'center'
        }}>
          <h3 style={{ 
            fontSize: '1.8rem', 
            marginBottom: '30px',
            fontWeight: 'bold'
          }}>
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
              <p style={{ opacity: '0.9', fontSize: '1rem' }}>Over confusion</p>
            </div>
            <div>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🎯</div>
              <h4 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Skills</h4>
              <p style={{ opacity: '0.9', fontSize: '1rem' }}>Over hype</p>
            </div>
            <div>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🚀</div>
              <h4 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Access</h4>
              <p style={{ opacity: '0.9', fontSize: '1rem' }}>Over gatekeeping</p>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <section style={{ 
          textAlign: 'center',
          padding: '40px 20px',
          marginBottom: '40px'
        }}>
          <p style={{ 
            fontSize: '1.3rem', 
            lineHeight: '1.8', 
            color: '#2d3748',
            fontWeight: '500',
            marginBottom: '30px'
          }}>
            If you are ready to learn, adapt, and grow alongside the rapid evolution of Generative AI, 
            you are in the right place.
          </p>
        </section>

        {/* CTA Section */}
        <div style={{
          background: '#f7fafc',
          padding: '50px 40px',
          borderRadius: '12px',
          textAlign: 'center',
          border: '2px solid #667eea'
        }}>
          <h3 style={{ 
            fontSize: '2rem', 
            color: '#1a202c', 
            marginBottom: '20px' 
          }}>
            Ready to Start Your AI Journey?
          </h3>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#4a5568', 
            marginBottom: '35px',
            lineHeight: '1.6'
          }}>
            Join hundreds of non-technical professionals who are building careers in AI.
            <br />
            Learn from someone who's walked the path and emerged successful.
          </p>
          <div style={{ 
            display: 'flex', 
            gap: '20px', 
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a 
              href="/courses"
              style={{
                display: 'inline-block',
                background: '#667eea',
                color: 'white',
                padding: '18px 45px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                boxShadow: '0 4px 6px rgba(102, 126, 234, 0.4)',
                transition: 'transform 0.2s'
              }}
            >
              Browse Courses →
            </a>
            <a 
              href="/jobs"
              style={{
                display: 'inline-block',
                background: 'white',
                color: '#667eea',
                padding: '18px 45px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                border: '2px solid #667eea'
              }}
            >
              Explore AI Jobs
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
          © 2024 Goodlet AI Academy. All rights reserved.
        </p>
      </footer>
    </div>
  )
}