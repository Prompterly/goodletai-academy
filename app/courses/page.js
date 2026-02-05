export default function Courses() {
  const courses = [
    {
      id: 1,
      title: "Prompt Engineering Fundamentals",
      description: "Master the basics of crafting effective AI prompts. Perfect for beginners.",
      level: "Beginner",
      duration: "2 hours",
      lessons: 10,
      price: "Free"
    },
    {
      id: 2,
      title: "Advanced Prompt Techniques",
      description: "Learn chain-of-thought, few-shot learning, and advanced prompting strategies.",
      level: "Intermediate",
      duration: "3 hours",
      lessons: 15,
      price: "Coming Soon"
    },
    {
      id: 3,
      title: "Prompt Engineering for Developers",
      description: "Apply prompt engineering to code generation, debugging, and software development.",
      level: "Intermediate",
      duration: "4 hours",
      lessons: 20,
      price: "Coming Soon"
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
          <a href="/courses" style={{ color: '#667eea', textDecoration: 'none', fontWeight: 'bold' }}>Courses</a>
          <a href="/jobs" style={{ color: '#333', textDecoration: 'none' }}>Jobs</a>
          <a href="/about" style={{ color: '#333', textDecoration: 'none' }}>About</a>
        </div>
      </nav>

      {/* Courses Header */}
      <header style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
          All Courses
        </h1>
        <p style={{ fontSize: '1.3rem', opacity: 0.9 }}>
          Start your journey to becoming an AI prompt engineering expert
        </p>
      </header>

      {/* Courses Grid */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '30px' 
        }}>
          {courses.map((course) => (
            <div key={course.id} style={{
              background: 'white',
              borderRadius: '12px',
              padding: '30px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s',
              border: '1px solid #e2e8f0'
            }}>
              {/* Course Level Badge */}
              <span style={{
                display: 'inline-block',
                background: '#667eea',
                color: 'white',
                padding: '5px 15px',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                marginBottom: '15px'
              }}>
                {course.level}
              </span>

              {/* Course Title */}
              <h2 style={{ 
                fontSize: '1.8rem', 
                marginBottom: '15px',
                color: '#1a202c'
              }}>
                {course.title}
              </h2>

              {/* Course Description */}
              <p style={{ 
                color: '#4a5568', 
                marginBottom: '20px',
                lineHeight: '1.6'
              }}>
                {course.description}
              </p>

              {/* Course Meta */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                color: '#718096',
                fontSize: '0.9rem',
                marginBottom: '20px',
                paddingTop: '20px',
                borderTop: '1px solid #e2e8f0'
              }}>
                <span>📚 {course.lessons} lessons</span>
                <span>⏱️ {course.duration}</span>
              </div>

              {/* Price & CTA */}
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
                  {course.price}
                </span>
                <button style={{
                  background: course.price === "Free" ? '#667eea' : '#cbd5e0',
                  color: 'white',
                  padding: '12px 25px',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: course.price === "Free" ? 'pointer' : 'not-allowed',
                  fontWeight: 'bold',
                  fontSize: '1rem'
                }}>
                  {course.price === "Free" ? "Enroll Now" : "Coming Soon"}
                </button>
              </div>
            </div>
          ))}
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
          GAI Academy
        </p>
        <p style={{ color: '#a0aec0' }}>
          Training the next generation of AI prompt engineers
        </p>
        <p style={{ color: '#a0aec0', marginTop: '20px' }}>
          © 2025 GAI Academy. All rights reserved.
        </p>
      </footer>
    </div>
  )
}