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

function isAiRole(title) {
  const t = (title || '').toLowerCase()

  // Reject if on the blocklist
  if (TITLE_BLOCKLIST.some(blocked => t.includes(blocked))) return false

  // Accept only if the TITLE itself contains an AI keyword
  // (tags excluded — companies tag everything with "ai" regardless of role)
  return AI_TITLE_KEYWORDS.some(kw => t.includes(kw))
}

// ─── Data fetching (JSearch via RapidAPI) ────────────────────────────────────
// Pulls from Indeed, LinkedIn, Glassdoor & ZipRecruiter simultaneously.
// Two searches × 4 revalidations/day × 30 days = ~240 req/month (free tier: 500)

const SEARCH_TERMS = ['AI engineer remote', 'machine learning engineer remote']

async function fetchTerm(term) {
  try {
    const res = await fetch(
      `https://jsearch.p.rapidapi.com/search?query=${encodeURIComponent(term)}&num_pages=1&date_posted=month`,
      {
        headers: {
          'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
        },
        next: { revalidate: 21600 },
      }
    )
    if (!res.ok) {
      console.error(`[jobs] JSearch ${term} → ${res.status} ${res.statusText}`)
      return []
    }
    const data = await res.json()
    console.log(`[jobs] JSearch "${term}" → ${(data.data || []).length} results`)
    return data.data || []
  } catch (err) {
    console.error(`[jobs] JSearch fetch error for "${term}":`, err)
    return []
  }
}

function formatSalary(job) {
  if (!job.job_min_salary && !job.job_max_salary) return null
  const currency = job.job_salary_currency || 'USD'
  const symbol = currency === 'USD' ? '$' : currency === 'GBP' ? '£' : currency === 'EUR' ? '€' : currency
  const period = job.job_salary_period === 'YEAR' ? '/yr' : job.job_salary_period === 'HOUR' ? '/hr' : ''
  const min = job.job_min_salary ? `${symbol}${Math.round(job.job_min_salary / 1000)}k` : null
  const max = job.job_max_salary ? `${symbol}${Math.round(job.job_max_salary / 1000)}k` : null
  if (min && max) return `${min} – ${max}${period}`
  return `${min || max}${period}`
}

function formatLocation(job) {
  if (job.job_is_remote) return 'Remote'
  const parts = [job.job_city, job.job_state, job.job_country].filter(Boolean)
  return parts.slice(0, 2).join(', ') || 'Remote'
}

function formatEmploymentType(type) {
  const map = { FULLTIME: 'Full-time', PARTTIME: 'Part-time', CONTRACTOR: 'Contract', INTERN: 'Internship' }
  return map[type] || 'Full-time'
}

function normalise(job) {
  return {
    id: job.job_id,
    title: job.job_title,
    company: job.employer_name,
    companyLogo: job.employer_logo || null,
    location: formatLocation(job),
    type: formatEmploymentType(job.job_employment_type),
    level: inferLevel(job.job_title),
    salary: formatSalary(job),
    description: stripHtml(job.job_description).slice(0, 230) + '…',
    link: job.job_apply_link,
    category: mapCategory('', job.job_required_skills || []),
    postedAt: job.job_posted_at_datetime_utc || null,
  }
}

async function getJobs() {
  try {
    const results = await Promise.all(SEARCH_TERMS.map(fetchTerm))

    const seen = new Set()
    const jobs = results
      .flat()
      .filter(job => {
        if (seen.has(job.job_id)) return false
        seen.add(job.job_id)
        return isAiRole(job.job_title)
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
