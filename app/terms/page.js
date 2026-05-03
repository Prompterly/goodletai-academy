export const metadata = {
  title: 'Terms of Service — Goodlet AI Academy',
  description: 'Terms and conditions for using Goodlet AI Academy courses and services.',
}

export default function TermsPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)', padding: '40px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <a href="/" style={{ color: '#a78bfa', fontSize: '0.9rem', textDecoration: 'none' }}>← Back to Goodlet AI Academy</a>
          <h1 style={{ color: '#fff', fontSize: '2rem', fontWeight: '700', margin: '16px 0 8px' }}>Terms of Service</h1>
          <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>Last updated: May 2025</p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '48px 20px 80px' }}>
        <div style={{ background: '#fff', borderRadius: '12px', padding: '48px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>

          <p style={{ color: '#4a5568', lineHeight: '1.8', fontSize: '0.95rem', marginBottom: '32px', padding: '16px', background: '#f0fdf4', borderRadius: '8px', borderLeft: '4px solid #22c55e' }}>
            Please read these Terms of Service carefully before purchasing or accessing any courses on Goodlet AI Academy. By using our platform, you agree to be bound by these terms.
          </p>

          <Section title="1. Acceptance of Terms">
            <p>By accessing or using Goodlet AI Academy ("the Platform", "we", "us"), you agree to be bound by these Terms of Service. If you do not agree, do not use the Platform.</p>
            <p>We may update these terms at any time. Continued use of the Platform after changes constitutes your acceptance of the new terms.</p>
          </Section>

          <Section title="2. Course Access and Enrollment">
            <p>When you purchase a course:</p>
            <ul>
              <li>You receive <strong>lifetime access</strong> to that course's current content for personal, non-commercial use</li>
              <li>Access is tied to the email address used at purchase</li>
              <li>Access is <strong>non-transferable</strong> — you may not share your access credentials with others</li>
              <li>We reserve the right to update, modify, or expand course content over time</li>
            </ul>
            <p>Free courses are available to anyone without purchase and may be withdrawn or changed at any time.</p>
          </Section>

          <Section title="3. Payment and Pricing">
            <p>All prices are listed in USD and GHS. Payments are processed by Paystack and are subject to their terms of service.</p>
            <SubHeading>No refund policy</SubHeading>
            <p>Due to the digital nature of our courses, <strong>all sales are final and non-refundable</strong> once course content has been accessed. If you have a technical issue preventing access, contact us within 7 days of purchase at <a href="mailto:info@goodletaiacademy.com" style={{ color: '#7c3aed' }}>info@goodletaiacademy.com</a> or via WhatsApp at <a href="https://wa.me/447379219268" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed' }}>+44 7379 219268</a> and we will work to resolve it.</p>
            <p>We may, at our sole discretion, issue a refund in exceptional circumstances.</p>
          </Section>

          <Section title="4. Intellectual Property">
            <p>All course content — including videos, text, quizzes, exercises, and materials — is owned by Goodlet AI Academy and protected by copyright law.</p>
            <p>You may <strong>not</strong>:</p>
            <ul>
              <li>Copy, reproduce, or distribute course content in any form</li>
              <li>Share login credentials or grant others access to your enrolled courses</li>
              <li>Record, screenshot, or re-publish course materials for commercial or public use</li>
              <li>Create derivative works from course content without express written permission</li>
            </ul>
            <p>Personal notes and summaries you create while taking courses remain your property.</p>
          </Section>

          <Section title="5. Acceptable Use">
            <p>You agree to use the Platform only for lawful purposes and in ways that do not infringe on others' rights. You must not:</p>
            <ul>
              <li>Attempt to gain unauthorised access to any part of the Platform or other users' accounts</li>
              <li>Use automated tools to scrape, download, or extract course content in bulk</li>
              <li>Circumvent any access controls or payment systems</li>
              <li>Use the Platform in any way that could damage, disable, or impair its operation</li>
            </ul>
            <p>Violation of these terms may result in immediate termination of your access without refund.</p>
          </Section>

          <Section title="6. Disclaimer of Warranties">
            <p>The Platform and all course content are provided <strong>"as is"</strong> without warranties of any kind, express or implied.</p>
            <p>We do not warrant that:</p>
            <ul>
              <li>The Platform will be uninterrupted or error-free</li>
              <li>Course content is complete, accurate, or up to date (AI is a fast-moving field)</li>
              <li>Completion of any course will result in specific employment outcomes or certifications recognised by third parties</li>
            </ul>
          </Section>

          <Section title="7. Limitation of Liability">
            <p>To the maximum extent permitted by law, Goodlet AI Academy shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Platform or any course content.</p>
            <p>Our total liability to you for any claims arising from these terms shall not exceed the amount you paid for the relevant course.</p>
          </Section>

          <Section title="8. Third-Party Services">
            <p>The Platform uses third-party services including Paystack (payments), Brevo (email), Sanity (content), and Vercel (hosting). We are not responsible for the availability, accuracy, or content of these third-party services.</p>
          </Section>

          <Section title="9. Termination">
            <p>We reserve the right to terminate or suspend your access to the Platform at any time if you violate these Terms, engage in fraud, or cause harm to the Platform or other users.</p>
            <p>Upon termination for cause, no refund will be issued. If we terminate your account without cause, we will provide a prorated refund for unused course access.</p>
          </Section>

          <Section title="10. Governing Law">
            <p>These Terms are governed by the laws of Ghana. Any disputes arising from these Terms shall be subject to the jurisdiction of the courts of Ghana.</p>
          </Section>

          <Section title="11. Contact">
            <p>For questions about these Terms, reach us through either of the following:</p>
            <p>
              📧 <strong>Email:</strong> <a href="mailto:info@goodletaiacademy.com" style={{ color: '#7c3aed' }}>info@goodletaiacademy.com</a><br />
              💬 <strong>WhatsApp:</strong> <a href="https://wa.me/447379219268" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed' }}>+44 7379 219268</a>
            </p>
          </Section>

        </div>
      </div>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <section style={{ marginBottom: '36px' }}>
      <h2 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#1a202c', marginBottom: '12px', paddingBottom: '8px', borderBottom: '2px solid #e2e8f0' }}>
        {title}
      </h2>
      <div style={{ color: '#4a5568', lineHeight: '1.8', fontSize: '0.95rem' }}>
        {children}
      </div>
    </section>
  )
}

function SubHeading({ children }) {
  return <p style={{ fontWeight: '600', color: '#2d3748', marginTop: '16px', marginBottom: '4px' }}>{children}</p>
}
