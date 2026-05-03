export const metadata = {
  title: 'Privacy Policy — Goodlet AI Academy',
  description: 'How Goodlet AI Academy collects, uses, and protects your personal information.',
}

export default function PrivacyPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)', padding: '40px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <a href="/" style={{ color: '#a78bfa', fontSize: '0.9rem', textDecoration: 'none' }}>← Back to Goodlet AI Academy</a>
          <h1 style={{ color: '#fff', fontSize: '2rem', fontWeight: '700', margin: '16px 0 8px' }}>Privacy Policy</h1>
          <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>Last updated: May 2025</p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '48px 20px 80px' }}>
        <div style={{ background: '#fff', borderRadius: '12px', padding: '48px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>

          <Section title="1. Who We Are">
            <p>Goodlet AI Academy ("we", "us", or "our") is an online education platform that teaches AI skills through practical, self-paced courses. Our website is <strong>goodletaiacademy.com</strong>.</p>
            <p>If you have any questions about this policy, contact us at: <a href="mailto:hello@goodletaiacademy.com" style={{ color: '#7c3aed' }}>hello@goodletaiacademy.com</a></p>
          </Section>

          <Section title="2. Information We Collect">
            <p>We collect the following types of information:</p>
            <SubHeading>Information you provide</SubHeading>
            <ul>
              <li><strong>Email address</strong> — when you subscribe to our mailing list or purchase a course</li>
              <li><strong>Payment information</strong> — processed securely by Paystack; we never see or store your card details</li>
            </ul>
            <SubHeading>Information collected automatically</SubHeading>
            <ul>
              <li><strong>Browser storage</strong> — we use your browser's localStorage to remember your course progress and access status on your device</li>
              <li><strong>Server logs</strong> — standard web server logs (IP address, browser type, pages visited) for security and debugging purposes</li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use your information to:</p>
            <ul>
              <li>Deliver courses and lesson content you have enrolled in</li>
              <li>Send you course-related emails and product updates (you can unsubscribe at any time)</li>
              <li>Verify and manage your course enrollment</li>
              <li>Detect and prevent fraud or abuse of our platform</li>
              <li>Improve our courses and website experience</li>
            </ul>
            <p>We do <strong>not</strong> sell your personal information to third parties.</p>
          </Section>

          <Section title="4. Email Marketing">
            <p>When you subscribe or purchase a course, your email is added to our mailing list managed by <strong>Brevo</strong> (formerly Sendinblue). We send course updates, new lesson announcements, and occasional offers.</p>
            <p>Every email includes an unsubscribe link. You can opt out at any time, and we will remove you from marketing emails within 10 business days. Transactional emails related to your purchase may still be sent.</p>
          </Section>

          <Section title="5. Payment Processing">
            <p>All payments are processed by <strong>Paystack</strong>, a PCI-DSS compliant payment processor. We receive a payment confirmation from Paystack (including your email address and transaction reference) but we never receive, store, or have access to your card number, CVV, or bank details.</p>
            <p>Paystack's privacy policy is available at <a href="https://paystack.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed' }}>paystack.com/privacy</a>.</p>
          </Section>

          <Section title="6. Data Storage and Security">
            <p>Your enrollment records are stored in our database (Sanity CMS), hosted in secure cloud infrastructure. We use:</p>
            <ul>
              <li>HTTPS encryption for all data in transit</li>
              <li>Separate read-only and write access tokens for database operations</li>
              <li>Rate limiting on all API endpoints to prevent abuse</li>
            </ul>
            <p>Course progress is stored <strong>locally in your browser</strong> (localStorage) and is not transmitted to our servers.</p>
          </Section>

          <Section title="7. Cookies and Local Storage">
            <p>We use browser <strong>localStorage</strong> (not cookies) to remember:</p>
            <ul>
              <li>Your email address (for course access verification)</li>
              <li>Your course enrollment status (as a cache; verified against our server)</li>
              <li>Your lesson progress within courses</li>
            </ul>
            <p>This data never leaves your browser unless you explicitly provide your email to verify access. You can clear it at any time by clearing your browser's site data.</p>
            <p>We do not use advertising cookies or third-party tracking pixels.</p>
          </Section>

          <Section title="8. Third-Party Services">
            <p>We use the following third-party services:</p>
            <ul>
              <li><strong>Paystack</strong> — payment processing</li>
              <li><strong>Brevo</strong> — email marketing and transactional emails</li>
              <li><strong>Sanity</strong> — content management and enrollment records</li>
              <li><strong>Vercel</strong> — website hosting and deployment</li>
            </ul>
            <p>Each of these services has their own privacy policy governing their use of data passed to them.</p>
          </Section>

          <Section title="9. Your Rights">
            <p>You have the right to:</p>
            <ul>
              <li><strong>Access</strong> the personal data we hold about you</li>
              <li><strong>Correct</strong> inaccurate data</li>
              <li><strong>Delete</strong> your data (subject to legal and contractual requirements)</li>
              <li><strong>Unsubscribe</strong> from marketing emails at any time</li>
            </ul>
            <p>To exercise any of these rights, email us at <a href="mailto:hello@goodletaiacademy.com" style={{ color: '#7c3aed' }}>hello@goodletaiacademy.com</a>.</p>
          </Section>

          <Section title="10. Children's Privacy">
            <p>Our platform is not directed at children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us with their information, please contact us and we will delete it.</p>
          </Section>

          <Section title="11. Changes to This Policy">
            <p>We may update this Privacy Policy from time to time. When we do, we will update the "Last updated" date at the top of this page. Continued use of the platform after changes constitutes acceptance of the updated policy.</p>
          </Section>

          <Section title="12. Contact Us">
            <p>For privacy-related questions or requests, contact us at:</p>
            <p><strong>Goodlet AI Academy</strong><br />Email: <a href="mailto:hello@goodletaiacademy.com" style={{ color: '#7c3aed' }}>hello@goodletaiacademy.com</a></p>
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
