export const metadata = {
  title: 'Courses & Learning Paths | Goodlet AI Academy',
  description: 'Browse structured AI learning paths and individual courses. Start free with AI Foundations or go deeper with AI Automation, Career Builder, and Marketing courses.',
  openGraph: {
    title: 'Courses & Learning Paths | Goodlet AI Academy',
    description: 'Structured AI courses for non-technical professionals. Free and paid tracks covering automation, career building, and marketing with AI.',
    url: 'https://www.goodletaiacademy.com/courses',
    siteName: 'Goodlet AI Academy',
    type: 'website',
    images: [{ url: '/goodlet-ai-logo.png', width: 800, height: 600, alt: 'Goodlet AI Academy Courses' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Courses & Learning Paths | Goodlet AI Academy',
    description: 'Structured AI courses for non-technical professionals. Start free.',
  },
}

export default function CoursesLayout({ children }) {
  return children
}
