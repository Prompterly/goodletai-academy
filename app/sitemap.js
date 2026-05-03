export default function sitemap() {
  const base = 'https://www.goodletaiacademy.com'
  const now = new Date()

  const staticPages = [
    { url: base, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${base}/courses`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${base}/about`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/jobs`, priority: 0.7, changeFrequency: 'weekly' },
  ]

  const coursePages = [
    { slug: 'ai-foundations', priority: 0.9 },
    { slug: 'ai-ethics-safety', priority: 0.85 },
    { slug: 'ai-automation-specialist', priority: 0.85 },
    { slug: 'ai-career-builder', priority: 0.85 },
    { slug: 'ai-marketers-strategists', priority: 0.85 },
    { slug: 'ai-writers-creators', priority: 0.85 },
    { slug: 'ai-researchers-analysts', priority: 0.85 },
    { slug: 'ai-agents-assistants', priority: 0.85 },
  ].map(({ slug, priority }) => ({
    url: `${base}/courses/${slug}`,
    priority,
    changeFrequency: 'monthly',
  }))

  return [...staticPages, ...coursePages].map((page) => ({
    ...page,
    lastModified: now,
  }))
}
