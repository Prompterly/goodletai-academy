import JobsClient from './JobsClient'

export const revalidate = 7200 // refresh every 2 hours

const MERCOR_LINK = 'https://t.mercor.com/g860i'

// ─── Helpers ────────────────────────────────────────────────────────────────

function stripHtml(html) {
  return (html || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
}

function formatJobType(type) {
  const map = { full_time: 'Full-time', contract: 'Contract', part_time: 'Part-time', freelance: 'Freelance' }
  return map[type] || 'Full-time'
}

function inferLevel(title) {
  const t = (title || '').toLowerCase()
  if (/senior|lead|principal|staff|head|director|vp|manager/.test(t)) return 'Senior'
  if (/junior|entry|associate|graduate|intern|trainee/.test(t)) return 'Entry-Level'
  return 'Mid-Level'
}

function mapCategory(category, tags) {
  const combined = `${category || ''} ${(tags || []).join(' ')}`.toLowerCase()
  if (/market|content|seo|social|growth|brand|copywr/.test(combined)) return 'Marketing'
  if (/product|pm\b/.test(combined)) return 'Product'
  if (/research|scientist|data science|analytics|analyst/.test(combined)) return 'Research'
  if (/design|ux|ui\b/.test(combined)) return 'Design'
  if (/automat|workflow|integrat|zapier|make\.com/.test(combined)) return 'Automation'
  return 'Engineering'
}

// ─── Static fallback (shown if API is down) ──────────────────────────────────

const FALLBACK_JOBS = [
  {
    id: 1, title: 'AI Prompt Engineer', company: 'OpenAI',
    companyLogo: null, location: 'Remote', type: 'Full-time', level: 'Mid-Level',
    salary: '$120k – $180k',
    description: 'Design and optimise prompts for GPT models. Work with product teams to improve AI responses and build reliable AI systems.',
    link: 'https://openai.com/careers', category: 'Engineering', postedAt: null,
  },
  {
    id: 2, title: 'AI Automation Specialist', company: 'Anthropic',
    companyLogo: null, location: 'Remote', type: 'Full-time', level: 'Senior',
    salary: '$140k – $200k',
    description: 'Build and optimise AI-powered automation workflows. Create scalable systems that leverage LLMs for enterprise applications.',
    link: 'https://anthropic.com/careers', category: 'Automation', postedAt: null,
  },
  {
    id: 3, title: 'LLM Integration Engineer', company: 'Microsoft',
    companyLogo: null, location: 'Hybrid', type: 'Full-time', level: 'Mid-Level',
    salary: '$130k – $190k',
    description: 'Integrate large language models into Microsoft products. Design AI-powered features and optimise for enterprise scale.',
    link: 'https://careers.microsoft.com', category: 'Engineering', postedAt: null,
  },
  {
    id: 4, title: 'AI Research Specialist', company: 'Google DeepMind',
    companyLogo: null, location: 'Remote', type: 'Full-time', level: 'Mid-Level',
    salary: '£80k – £120k',
    description: 'Train and evaluate AI models. Design evaluation frameworks and create training datasets for next-generation AI systems.',
    link: 'https://deepmind.google/careers', category: 'Research', postedAt: null,
  },
  {
    id: 5, title: 'AI Product Manager', company: 'Various Tech Companies',
    companyLogo: null, location: 'Remote', type: 'Full-time', level: 'Mid-Level',
    salary: '$110k – $160k',
    description: 'Lead AI product development from conception to launch. Bridge the gap between technical AI teams and business stakeholders.',
    link: 'https://wellfound.com', category: 'Product', postedAt: null,
  },
  {
    id: 6, title: 'AI Content Strategist', company: 'Marketing Agencies',
    companyLogo: null, location: 'Remote', type: 'Full-time', level: 'Mid-Level',
    salary: '$90k – $140k',
    description: 'Develop AI-powered content strategies. Use generative AI tools to scale content production while maintaining brand voice.',
    link: 'https://linkedin.com/jobs', category: 'Marketing', postedAt: null,
  },
  {
    id: 7, title: 'AI Workflow Architect', company: 'Enterprise Companies',
    companyLogo: null, location: 'Remote', type: 'Full-time', level: 'Senior',
    salary: '$150k – $220k',
    description: 'Design and implement enterprise AI workflows. Orchestrate multiple AI models and tools into cohesive business solutions.',
    link: 'https://linkedin.com/jobs', category: 'Automation', postedAt: null,
  },
  {
    id: 8, title: 'AI Quality Assurance Engineer', company: 'Tech Companies',
    companyLogo: null, location: 'Remote', type: 'Full-time', level: 'Entry-Level',
    salary: '$70k – $110k',
    description: 'Test and validate AI outputs. Develop testing frameworks for AI systems and ensure quality, safety, and reliability.',
    link: 'https://indeed.com', category: 'Engineering', postedAt: null,
  },
]

// ─── AI relevance filter ─────────────────────────────────────────────────────
// Applied to job TITLES only — keeps results explicitly AI-focused
// and blocks non-AI roles that merely mention AI in their description.

const AI_TITLE_KEYWORDS = [
  'ai', 'artificial intelligence',
  'machine learning', 'ml engineer', 'ml specialist', 'ml ops', 'mlops',
  'llm', 'large language model',
  'gpt', 'nlp', 'natural language',
  'prompt engineer', 'prompt specialist',
  'generative ai', 'gen ai',
  'deep learning', 'neural network',
  'data scientist', 'data science',
  'computer vision',
  'ai researcher', 'ai engineer', 'ai specialist', 'ai consultant',
  'ai analyst', 'ai product', 'ai trainer', 'ai writer',
  'ai automation', 'ai agent', 'ai ops',
  'chatbot', 'conversational ai',
  'language model', 'foundation model',
  'rag ', 'vector', 'embedding',
]

// Blocklist — titles that slip through despite containing a keyword
const TITLE_BLOCKLIST = [
  'customer success', 'customer retention', 'account manager',
  'sales representative', 'business development', 'office manager',
  'hr manager', 'recruiter', 'talent acquisition',
  'financial analyst', 'bookkeeper', 'accountant',
  'social media manager', 'community manager',
]

function isAiRole(title, tags) {
  const t = (title || '').toLowerCase()
  const tagStr = (tags || []).join(' ').toLowerCase()

  // Reject if on the blocklist
  if (TITLE_BLOCKLIST.some(blocked => t.includes(blocked))) return false

  // Accept if title OR tags contain an AI keyword
  return AI_TITLE_KEYWORDS.some(kw => t.includes(kw) || tagStr.includes(kw))
}

// ─── Data fetching ───────────────────────────────────────────────────────────
// Three parallel searches → deduplicate by id → apply AI title filter

const SEARCH_TERMS = ['AI engineer', 'machine learning', 'LLM']

async function fetchTerm(term) {
  try {
    const res = await fetch(
      `https://remotive.com/api/remote-jobs?search=${encodeURIComponent(term)}&limit=25`,
      { next: { revalidate: 7200 } }
    )
    if (!res.ok) return []
    const data = await res.json()
    return data.jobs || []
  } catch {
    return []
  }
}

function normalise(job) {
  return {
    id: job.id,
    title: job.title,
    company: job.company_name,
    companyLogo: job.company_logo || null,
    location: job.candidate_required_location || 'Remote',
    type: formatJobType(job.job_type),
    level: inferLevel(job.title),
    salary: job.salary || null,
    description: stripHtml(job.description).slice(0, 230) + '…',
    link: job.url,
    category: mapCategory(job.category, job.tags),
    postedAt: job.publication_date || null,
  }
}

async function getJobs() {
  try {
    const results = await Promise.all(SEARCH_TERMS.map(fetchTerm))

    const seen = new Set()
    const jobs = results
      .flat()
      .filter(job => {
        if (seen.has(job.id)) return false
        seen.add(job.id)
        return isAiRole(job.title, job.tags)
      })
      .map(normalise)

    return jobs.length >= 3 ? jobs : FALLBACK_JOBS
  } catch {
    return FALLBACK_JOBS
  }
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function JobsPage() {
  const jobs = await getJobs()
  return <JobsClient jobs={jobs} mercorLink={MERCOR_LINK} />
}
