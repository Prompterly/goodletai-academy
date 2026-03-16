 'use client'

import EmailCapture from '../../components/EmailCapture'

export default function CourseEmailCapture() {
  return (
    <div style={{
      maxWidth: '900px',
      margin: '0 auto',
      padding: '20px 20px 0'
    }}>
      <EmailCapture
        source="course-landing"
        title="🚀 Start Your AI Journey"
        subtitle="Enter your email to track your progress, unlock advanced lessons, and get notified when new courses drop."
        buttonText="Join Free →"
      />
    </div>
  )
}
