// Seed script: AI for Writers & Content Creators
// Run: node scripts/seed-writers-creators.js
// Requires: SANITY_WRITE_TOKEN env var

const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: 'bemevm9d',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false
})

function block(text) {
  return [{ _type: 'block', _key: Math.random().toString(36).slice(2), style: 'normal', children: [{ _type: 'span', text }], markDefs: [] }]
}

function slug(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

const lessons = [
  // WEEK 1 — AI Writing Fundamentals
  {
    lessonNumber: 1, weekNumber: 1,
    title: 'Why AI Changes Everything for Writers',
    hasMilestone: false,
    steps: [
      { stepType: 'hook', stepTitle: 'The Blank Page Just Got Easier', content: block('Imagine staring at a blank page — deadline in 2 hours, brain completely empty. Now imagine having a collaborator who never sleeps, never gets writer\'s block, and can generate a rough draft in seconds. That\'s what AI writing tools offer. But here\'s the real question: does this make your skills less valuable, or more?') },
      { stepType: 'explanation', stepTitle: 'AI as a Creative Partner, Not a Replacement', content: block('AI writing tools like ChatGPT, Claude, and Gemini don\'t replace writers — they amplify them. Your job shifts from generating every word to directing, editing, and refining. Think of yourself as a film director: you don\'t act every scene, but your vision shapes everything. The writer who learns to direct AI well will outproduce and outcompete those who don\'t.') },
      { stepType: 'explanation', stepTitle: 'What AI Is Actually Good At', content: block('AI excels at specific tasks: generating first drafts, brainstorming angles, rephrasing awkward sentences, creating outlines, writing headlines, summarising long documents, and maintaining consistent output at volume. It struggles with genuine originality, nuanced human experience, real-time information, and your specific brand voice (unless trained on it).') },
      { stepType: 'example', stepTitle: 'A Content Creator\'s Workflow Transformation', content: block('Maya runs a marketing blog and used to spend 4 hours writing each post. After integrating AI: 30 minutes briefing and prompting, 45 minutes editing and adding her perspective, 15 minutes final polish. Total: 90 minutes. She now publishes 3x more content with the same quality. Her traffic tripled in 6 months. The AI didn\'t replace her voice — it freed her time to focus on it.') },
      { stepType: 'explanation', stepTitle: 'The Competitive Advantage Window', content: block('Right now, in 2025, there is a narrow window where writers who adopt AI tools well have a significant competitive advantage. Most writers are still hesitant or using AI superficially. The ones learning systematic AI-assisted workflows are quietly building massive content moats. This window won\'t stay open forever — the earlier you build these skills, the larger your lead.') },
      { stepType: 'explanation', stepTitle: 'Common Fears (And Why They\'re Overblown)', content: block('"AI will replace me." This fear misunderstands the market. Content demand has exploded alongside AI tools — because AI makes more content possible. What\'s declining is low-quality, generic content. What\'s thriving is distinctive, expert-led content that uses AI for efficiency while retaining human depth. Your unique perspective and expertise are more valuable now, not less.') },
      { stepType: 'explanation', stepTitle: 'The New Writing Stack', content: block('Modern writers are building a stack: a core AI tool for drafting, a grammar and style tool for polish, a research tool for facts and sources, and a scheduling or publishing tool for distribution. Understanding how these pieces work together is the new literacy for content professionals.') },
      { stepType: 'exercise', stepTitle: 'Your First AI Writing Experiment', content: block('Open ChatGPT, Claude, or any AI tool. Give it this prompt: "Write a 150-word introduction for an article about [your area of expertise]. Make it conversational and hook the reader with a surprising fact." Read the output. Note: what did it get right? What would you change? What\'s your authentic voice that it didn\'t capture? This is the gap you\'ll learn to close.') },
      { stepType: 'summary', stepTitle: 'Key Takeaways', content: block('AI writing tools amplify writers, they don\'t replace them. Your role shifts to director and editor. AI excels at volume and structure; you provide voice, perspective, and expertise. Early adopters have a competitive window right now. The goal is a systematic workflow, not occasional use.') }
    ]
  },
  {
    lessonNumber: 2, weekNumber: 1,
    title: 'AI Writing Tools — ChatGPT, Claude, Gemini Compared',
    hasMilestone: false,
    steps: [
      { stepType: 'hook', stepTitle: 'Why the Tool Choice Matters More Than You Think', content: block('Most writers pick one AI tool and stick with it. But just as a carpenter uses different tools for different jobs, the best AI-assisted writers know which tool fits which task. ChatGPT, Claude, and Gemini each have distinct strengths that make them better for specific writing contexts.') },
      { stepType: 'explanation', stepTitle: 'ChatGPT — The Versatile Workhorse', content: block('ChatGPT (GPT-4 and newer) excels at long-form content, creative writing, and code. It\'s highly configurable with custom instructions and has the largest plugin and integration ecosystem. Best for: blog posts, creative writing, technical documentation, structured content like listicles and how-to guides. Weakness: can be verbose and sometimes over-hedges sensitive topics.') },
      { stepType: 'explanation', stepTitle: 'Claude — The Nuanced Writer', content: block('Claude (Anthropic) handles long documents better than any competitor — its context window can handle entire books. It produces more nuanced, careful prose with better reasoning. Best for: long-form essays, research synthesis, academic-adjacent writing, content requiring careful argumentation. Strength: it\'s less likely to produce confident-sounding nonsense and writes with more natural cadence.') },
      { stepType: 'example', stepTitle: 'The Same Prompt, Three Outputs', content: block('Prompt: "Write a LinkedIn post about why remote work improves productivity." ChatGPT: structured, punchy, clear subpoints. Claude: more conversational, nuanced, includes caveats. Gemini: data-driven, references studies. None is objectively better — each suits a different context and audience. Knowing this lets you choose or combine them strategically.') },
      { stepType: 'explanation', stepTitle: 'Gemini — The Research-Integrated Option', content: block('Google\'s Gemini integrates with Google Search, making it uniquely powerful for fact-checked, current-information content. It pulls real-time data and can cite sources. Best for: news-adjacent content, trend pieces, anything requiring current data. Weakness: prose quality sometimes trails ChatGPT and Claude for pure writing tasks.') },
      { stepType: 'explanation', stepTitle: 'Specialised Tools Worth Knowing', content: block('Beyond the big three: Jasper is purpose-built for marketing copy with brand voice training. Copy.ai specialises in short-form sales copy. Notion AI integrates directly into your writing workflow. Grammarly and Hemingway Editor polish existing prose. The trend is toward AI embedded directly in your existing tools rather than separate applications.') },
      { stepType: 'explanation', stepTitle: 'Cost Considerations and Free Tiers', content: block('All three major tools have free tiers that are genuinely useful for starting out. ChatGPT Free uses GPT-3.5 (still capable). Claude Free has limited messages but uses full model. Gemini Free integrates with Google Workspace. Paid tiers (around $20/month) unlock faster speeds, longer context, and newer models. For serious content work, one paid subscription pays for itself in time saved.') },
      { stepType: 'exercise', stepTitle: 'The Side-by-Side Test', content: block('Take a topic you write about regularly. Give the exact same prompt to ChatGPT and Claude (use free tiers). Compare outputs on: prose quality, accuracy, tone, length, and how much editing each would need. Write down which felt more like your voice with minimal editing. That\'s your primary tool for drafting in this style.') },
      { stepType: 'summary', stepTitle: 'Key Takeaways', content: block('ChatGPT is the versatile workhorse, best for structured content and creative writing. Claude excels at nuance, long documents, and careful argumentation. Gemini integrates real-time research. Each has free tiers for testing. Your primary tool should be the one whose output needs the least editing for your specific writing style.') }
    ]
  },
  {
    lessonNumber: 3, weekNumber: 1,
    title: 'Writing Effective Prompts for Long-Form Content',
    hasMilestone: false,
    steps: [
      { stepType: 'hook', stepTitle: 'The Difference Between a Good and Great Prompt', content: block('"Write me a blog post about content marketing." vs "Write a 1,200-word blog post for a B2B SaaS audience about why most content marketing fails due to weak distribution strategy, not weak content. Use a contrarian tone. Include 3 specific examples of companies that succeeded by prioritising distribution. Start with a provocative question."') },
      { stepType: 'explanation', stepTitle: 'The Five Elements of a Strong Writing Prompt', content: block('Every effective long-form writing prompt needs: (1) Format and length specification, (2) Target audience definition, (3) Angle or thesis (what\'s the core argument?), (4) Tone and voice guidance, (5) Specific structural requirements (examples, data, subheadings). Miss any of these and you\'ll spend more time editing than you saved prompting.') },
      { stepType: 'explanation', stepTitle: 'The Layered Prompting Approach', content: block('Rather than one massive prompt, use layers. Start broad: "Help me write an article about remote work productivity." Then refine: "The audience is HR managers at mid-size companies. The angle is that async communication tools matter more than physical environment." Then structure: "Create an outline with 5 sections, each addressing a specific myth about remote work." Build depth through dialogue, not one mega-prompt.') },
      { stepType: 'example', stepTitle: 'Transforming a Weak Prompt', content: block('Weak: "Write about AI for small businesses." Strong: "Write a 900-word practical guide for small business owners (no technical background) who want to save 5+ hours per week using free AI tools. Focus specifically on customer service chatbots, invoice processing, and social media scheduling. Use simple language, real examples, and include an estimated time-saving for each tool category. Tone: encouraging, not overwhelming."') },
      { stepType: 'explanation', stepTitle: 'Using Persona and Audience Anchoring', content: block('The most powerful prompt upgrade is audience anchoring. Tell the AI exactly who is reading this and why they care. "The reader is a 35-year-old first-time startup founder who is technically capable but overwhelmed. They have 5 minutes to read this. They are sceptical of hype but open to practical advice." This produces dramatically more targeted, useful output.') },
      { stepType: 'explanation', stepTitle: 'Prompting for Structure First', content: block('For long-form content, always prompt for structure before content. Ask for an outline, review it, adjust the sections, then ask it to expand each section. This prevents wasted effort on content you\'ll cut and gives you editorial control from the start. Think of it as commissioning a blueprint before building the house.') },
      { stepType: 'explanation', stepTitle: 'Iteration Prompts That Actually Work', content: block('Once you have a draft, specific iteration prompts produce better results than vague requests. "Make it more engaging" is weak. Strong: "Rewrite the opening paragraph to start with a surprising statistic. Cut the second section from 300 to 150 words while keeping the core argument. Add one concrete example to section 4. Make the conclusion actionable with 3 specific next steps."') },
      { stepType: 'exercise', stepTitle: 'Build Your Prompt Template', content: block('Take a piece of content you write regularly (a blog post, newsletter, LinkedIn post). Write down the five prompt elements: format/length, target audience, angle/thesis, tone, structure requirements. Now write a full prompt using these elements. Run it and compare the output to your normal starting point. Refine the template until it produces output that needs 50% less editing than before.') },
      { stepType: 'summary', stepTitle: 'Key Takeaways', content: block('Strong prompts have five elements: format, audience, angle, tone, structure. Use layered prompting rather than one mega-prompt. Audience anchoring is the single highest-leverage upgrade. Always prompt for structure before content in long-form work. Iteration prompts should be specific, not vague.') }
    ]
  },
  {
    lessonNumber: 4, weekNumber: 1,
    title: 'Editing and Refining AI-Generated Content',
    hasMilestone: true,
    milestone: {
      milestoneTitle: 'Week 1 Complete — AI Writing Partner!',
      badgeName: 'AI Writing Partner',
      badgeEmoji: '✍️',
      badgeDescription: 'You can harness AI to accelerate your writing without losing your authentic voice.',
      milestoneContent: block('You\'ve built the foundation of AI-assisted writing. You know your tools, you can write prompts that get results, and now you\'re learning the most important skill: making AI output sound like you. Great AI writers are editors first. This badge represents the beginning of a new creative workflow.')
    },
    steps: [
      { stepType: 'hook', stepTitle: 'The Tell-Tale Signs of Unedited AI Content', content: block('You\'ve seen it: "In today\'s rapidly evolving landscape..." "It\'s important to note that..." "In conclusion, this comprehensive guide has demonstrated..." AI-generated content has distinct patterns that experienced readers immediately recognise. Learning to edit these patterns out — while adding your voice — is what separates AI-assisted writing from AI-generated slop.') },
      { stepType: 'explanation', stepTitle: 'The Core Editing Framework', content: block('Edit AI content in three passes. Pass 1 — Structural: Does the piece make a coherent argument? Are sections in the right order? Is anything missing or redundant? Pass 2 — Voice: Where does it sound generic, hedging, or robotic? Replace those phrases with your natural language. Pass 3 — Detail: Fact-check any statistics or claims. Tighten sentences. Remove filler phrases. Add specific examples from your own experience.') },
      { stepType: 'explanation', stepTitle: 'The Most Common AI Writing Failures', content: block('Recognise and fix: Over-hedging ("it\'s worth noting that", "it\'s important to consider"). Hollow transitions ("Furthermore", "Additionally"). Generic openings ("In today\'s world"). Conclusion padding ("In this article we explored"). False balance ("While some argue X, others believe Y"). Empty intensifiers ("incredibly", "significantly"). Each of these is a signal to rewrite.') },
      { stepType: 'example', stepTitle: 'Before and After — A Real Edit', content: block('Before (AI output): "In the rapidly evolving landscape of content marketing, it is increasingly important for businesses to leverage cutting-edge AI tools to enhance their productivity." After (edited): "Most content teams produce less than they should, not because they lack ideas, but because writing takes longer than anyone plans for. AI changes that equation." Same information, completely different impact.') },
      { stepType: 'explanation', stepTitle: 'Adding Your Voice Systematically', content: block('Your voice comes from three sources: specific experiences ("When I ran my first newsletter campaign..."), genuine opinions with reasoning ("I think most content strategies fail because they optimise for content quantity when distribution deserves 80% of the attention"), and specific knowledge your audience can\'t get elsewhere. AI can\'t produce any of these — you add them in editing.') },
      { stepType: 'explanation', stepTitle: 'When to Discard and Start Over', content: block('Sometimes AI output is so far from what you need that editing takes longer than rewriting. Signs: the core argument is wrong, the tone is irredeemably generic, the structure doesn\'t fit your audience, or you\'re rewriting every sentence. In these cases, use the AI output as a research document — extract useful facts or arguments — then write fresh. This is often faster.') },
      { stepType: 'explanation', stepTitle: 'Using AI to Edit AI', content: block('The meta-skill: use AI to improve AI output. "This paragraph is too generic and hedgy. Rewrite it in a more direct, opinionated tone for an audience of experienced marketers." Or: "Find all the filler phrases and hedging language in this text and list them with suggested replacements." AI-assisted editing of AI-generated content can be faster than doing it manually.') },
      { stepType: 'exercise', stepTitle: 'The Voice Transplant Exercise', content: block('Take an AI-generated draft (from a previous exercise or generate one now). Read it aloud. Every sentence that sounds like you, mark it. Every sentence that sounds robotic or generic, mark it differently. Now rewrite only the marked sentences in your natural voice — pretend you\'re explaining this to a colleague over coffee. Compare the two versions. The difference is your editing fingerprint.') },
      { stepType: 'summary', stepTitle: 'Key Takeaways', content: block('Edit in three passes: structural, voice, detail. Learn to recognise and remove the five common AI failure patterns. Your voice comes from specific experience, genuine opinions, and expert knowledge — add these in editing. Use AI to help edit AI output for efficiency. Know when to discard and start fresh rather than editing exhaustively.') }
    ]
  },
  // WEEK 2 — Content at Scale
  {
    lessonNumber: 5, weekNumber: 2,
    title: 'Blogging and Article Writing with AI',
    hasMilestone: false,
    steps: [
      { stepType: 'hook', stepTitle: 'From 1 Blog Post to 5 Per Week', content: block('A solo blogger once told me she wrote one post per week maximum — research, writing, editing took 8+ hours. After building an AI-assisted workflow, she now publishes five posts weekly in the same time. The quality went up, not down. Here\'s the exact system she uses.') },
      { stepType: 'explanation', stepTitle: 'The Full AI Blog Post Workflow', content: block('Step 1: Topic + SEO research (use AI to brainstorm, human to validate with tools). Step 2: Audience-specific outline (AI creates, human reviews and adjusts). Step 3: Section-by-section drafting (AI drafts each section, human edits and adds specifics). Step 4: Introduction and conclusion (often best written by human or heavily edited). Step 5: Final pass for voice and fact-checking. Total time: 90-120 minutes for a 1,500-word post.') },
      { stepType: 'explanation', stepTitle: 'SEO Integration in the AI Workflow', content: block('AI doesn\'t automatically produce SEO-optimised content, but it can when prompted correctly. Give it your primary keyword, semantic keywords, and search intent before drafting. "Write a 1,200-word guide targeting the keyword \'how to write faster\'. Include semantic variations like \'writing productivity\' and \'writing habits\'. The searcher wants actionable techniques, not theory." This produces naturally optimised content without keyword stuffing.') },
      { stepType: 'example', stepTitle: 'A Real Workflow in Action', content: block('Topic: "Best AI tools for freelance writers." Step 1: Claude generates 15 potential angles, human selects most original. Step 2: ChatGPT creates 6-section outline, human removes 2 weak sections. Step 3: Each section drafted by AI, human adds real tool testing experience. Step 4: Human writes personal intro (AI version felt too generic). Step 5: Grammarly pass, then published. Time: 95 minutes.') },
      { stepType: 'explanation', stepTitle: 'Repurposing Blog Content at Scale', content: block('Each blog post contains 5-10 other content pieces. An AI workflow makes repurposing instant: LinkedIn post (pull key argument), Twitter/X thread (break into 8 insights), Newsletter section (add personal commentary), Short video script (hook + 3 points + CTA), Podcast talking points. One prompt: "From this blog post, extract: 1 LinkedIn post, 5 tweet-length insights, and 3 podcast discussion questions." Done in 30 seconds.') },
      { stepType: 'explanation', stepTitle: 'Maintaining Topical Authority', content: block('Google and readers reward depth over breadth. AI makes it feasible to build genuine topical authority by producing cluster content at scale. A pillar post on "AI writing tools" can link to 10 supporting posts on specific tools, specific use cases, specific audiences. What took 6 months now takes 6 weeks. The writer\'s job is ensuring each piece has genuine depth, not just volume.') },
      { stepType: 'explanation', stepTitle: 'Editorial Calendar Management with AI', content: block('AI can help manage your entire content calendar. "I write about AI productivity for knowledge workers. Generate a 12-week content calendar with: 2 posts per week, alternating between beginner and advanced content, covering tools, workflows, case studies, and mindset topics. Include suggested titles and primary keywords for each." You\'ll have a full editorial strategy in minutes.') },
      { stepType: 'exercise', stepTitle: 'Produce a Full Blog Post', content: block('Using the workflow above, produce a complete 1,000-word blog post on a topic in your expertise. Document your time at each step. Note where AI helped most and where you needed to do more human work. Your goal: complete the full post in under 90 minutes. If you exceed that, identify the bottleneck and adjust your prompting approach for the next post.') },
      { stepType: 'summary', stepTitle: 'Key Takeaways', content: block('Full AI blog workflow takes 90-120 minutes for a quality post vs 4-8 hours traditionally. SEO optimisation requires explicit keyword prompting. Repurposing blog content to other formats takes under 5 minutes with AI. Topical authority clusters are now achievable in weeks, not months.') }
    ]
  },
  {
    lessonNumber: 6, weekNumber: 2,
    title: 'Social Media Content Strategy with AI',
    hasMilestone: false,
    steps: [
      { stepType: 'hook', stepTitle: 'The Consistency Problem', content: block('The number one predictor of social media growth is consistency. Most content creators fail not because their content is bad, but because they can\'t maintain the volume required. AI solves the consistency problem — not by replacing your voice, but by removing the production bottleneck.') },
      { stepType: 'explanation', stepTitle: 'Platform-Specific Prompt Frameworks', content: block('Each platform has distinct content formats. LinkedIn: professional insight with personal story (200-300 words, 1 key lesson, specific example). Twitter/X: punchy observation or question (under 280 chars per tweet, thread starts with a hook). Instagram: visual-first concept with engaging caption. TikTok/Reels: hook in first 2 seconds, payoff by second 15. Your AI prompts must specify the platform to get appropriate output.') },
      { stepType: 'explanation', stepTitle: 'The Content Pillar System', content: block('Define 3-5 content pillars (core themes you write about). For each pillar, AI generates 20 content ideas per week in 5 minutes. You review, select 3-5 per week, and produce them. Example pillars for a writing coach: craft improvement, productivity systems, business of writing, AI tools, mindset. With 5 pillars at 4 posts each, you have a month of content in one session.') },
      { stepType: 'example', stepTitle: 'Building a Month of LinkedIn Content', content: block('Prompt: "I\'m a content strategist specialising in B2B SaaS companies. Generate 20 LinkedIn post ideas (just titles/hooks) covering: thought leadership, practical tactics, case studies, and contrarian takes. Each should appeal to marketing directors at companies with 50-500 employees." Run this, select your 12 best, then prompt for full drafts of each. One hour for a full month of LinkedIn content.') },
      { stepType: 'explanation', stepTitle: 'Engagement-Optimised Formats', content: block('AI knows what formats drive engagement because it was trained on the best-performing content. Use it to generate: open-ended questions (drives comments), controversial but defensible takes (drives shares), step-by-step processes (drives saves), behind-the-scenes stories (drives connection), data-backed observations (drives credibility). Ask specifically for each format to vary your feed.') },
      { stepType: 'explanation', stepTitle: 'Maintaining Authentic Voice at Volume', content: block('The risk of AI-driven social media is homogenisation. Counter this by: (1) Always adding one personal sentence or experience to each post, (2) Using AI to generate options, not finished posts, (3) Maintaining a "voice document" — examples of your best posts — and feeding it to AI as style guidance, (4) Never posting AI output directly without at least one editing pass.') },
      { stepType: 'explanation', stepTitle: 'Cross-Platform Repurposing', content: block('One great piece of content becomes a week of posts across platforms. A LinkedIn essay becomes: 5 tweets (one per key point), an Instagram carousel (one slide per section), a Facebook post (same copy, different framing), a TikTok hook question. Prompt: "Repurpose this LinkedIn post for Twitter (5-tweet thread), Instagram (carousel copy), and TikTok (30-second script). Keep the core insight, adjust the format."') },
      { stepType: 'exercise', stepTitle: 'One-Month Content Calendar in 30 Minutes', content: block('Define your 3 primary content pillars. Prompt your AI tool: "Generate 10 social media content ideas for each pillar (30 total). For my platform [specify: LinkedIn/Twitter/Instagram], targeting [your audience]. Mix formats: questions, tips, stories, contrarian takes, data points." Select your best 12-15, group by week, and write the full drafts for Week 1 right now. Time yourself.') },
      { stepType: 'summary', stepTitle: 'Key Takeaways', content: block('Consistency is the key social media variable — AI solves the volume problem. Each platform needs platform-specific prompt frameworks. Define 3-5 content pillars and generate ideas for all of them in one session. Always add personal voice before posting. One great piece repurposes into 5-7 platform-specific posts with one prompt.') }
    ]
  },
  {
    lessonNumber: 7, weekNumber: 2,
    title: 'Email Copywriting with AI',
    hasMilestone: false,
    steps: [
      { stepType: 'hook', stepTitle: 'The $0.01 Asset That Outperforms Everything Else', content: block('Social algorithms change. Ad costs rise. SEO shifts. But your email list — built of people who explicitly chose to hear from you — remains the most reliable, cost-effective asset in digital marketing. AI makes it dramatically easier to build and maintain that relationship through consistent, high-quality email content.') },
      { stepType: 'explanation', stepTitle: 'Email Copy Types and When to Use AI', content: block('Different email types require different AI approaches. Newsletter content (high AI use, human angle and curation). Sales sequences (medium AI use, heavy human editing for persuasion and authenticity). Welcome sequences (medium AI, personalise heavily). Promotional emails (high AI use for copy variations). Cold outreach (low AI use — authenticity matters most). Transactional emails (high AI use, mostly template-based).') },
      { stepType: 'explanation', stepTitle: 'The Newsletter Production Workflow', content: block('A consistent newsletter drives more long-term business than most paid ads. AI workflow: Monday — prompt for 5 topic ideas based on current trends in your niche. Tuesday — select topic, prompt for outline. Wednesday — prompt for full draft. Thursday — editing pass: add personal stories, current opinions, specific recommendations. Friday — proofread and schedule. 45-minute total effort for a quality newsletter.') },
      { stepType: 'example', stepTitle: 'A Sales Email Sequence Built with AI', content: block('Prompt: "Write a 5-email welcome sequence for new subscribers to my writing productivity newsletter. Email 1: Introduction and quick win. Email 2: Biggest mistake writers make. Email 3: My system for producing content consistently. Email 4: Case study of a student\'s transformation. Email 5: Our paid course offer, positioned around the reader\'s specific pain point of inconsistency. Each email: 200-300 words, conversational tone, one clear CTA." Edit for voice, add specific stories, and your sequence is done in an hour.') },
      { stepType: 'explanation', stepTitle: 'Subject Lines — The Highest Leverage AI Use', content: block('Subject lines determine whether 20% or 45% of your list reads your email. AI is exceptional at generating subject line variations. Prompt: "Generate 15 subject line options for an email about writer\'s block. Include: curiosity hooks, specific numbers, personal questions, contrarian statements, and benefit-focused options." Run A/B tests on the top 3. After 10 tests, you\'ll know exactly which types your audience responds to.') },
      { stepType: 'explanation', stepTitle: 'Personalisation at Scale', content: block('AI enables personalisation that was previously impossible without large teams. Segment your list by reader interest or behaviour, then generate tailored content variants for each segment. "Rewrite this email about AI tools for: (a) beginners just starting out, (b) intermediate users who have tried tools but struggled, (c) advanced users looking to optimise their existing workflow." Three distinct emails in 10 minutes.') },
      { stepType: 'explanation', stepTitle: 'Avoiding the AI-Detected Email Problem', content: block('Readers — and increasingly spam filters — detect generic AI prose. Countermeasures: Always start with a personal story or observation (1-3 sentences). Include a specific reference to something happening right now in your world. Use contractions and casual language. Write one sentence that only you could write (specific experience, opinion, or joke). These four additions make AI-assisted emails undetectable and far more engaging.') },
      { stepType: 'exercise', stepTitle: 'Write Your Next 4 Newsletters', content: block('Choose 4 topics relevant to your audience. For each, write a detailed brief: topic, main insight, one personal story or observation you\'ll include, one specific recommendation. Use AI to produce drafts from each brief. Then do a 15-minute edit on each: add your personal sentences, verify any claims, sharpen the subject line. Time this. Most people can bank 4 newsletters in under 3 hours this way.') },
      { stepType: 'summary', stepTitle: 'Key Takeaways', content: block('Email lists remain the most reliable digital asset. AI workflow produces a quality newsletter in 45 minutes. Subject lines are the highest-leverage AI use — generate and A/B test variants. Personalisation for audience segments is now simple with AI. Four personal touches prevent AI detection and dramatically improve engagement.') }
    ]
  },
  {
    lessonNumber: 8, weekNumber: 2,
    title: 'SEO Content and Keyword Integration',
    hasMilestone: true,
    milestone: {
      milestoneTitle: 'Week 2 Complete — Content Multiplier!',
      badgeName: 'Content Multiplier',
      badgeEmoji: '📢',
      badgeDescription: "You've built AI-powered content systems that produce consistent output at scale.",
      milestoneContent: block('You now have a system for producing content at a volume that would have been impossible before AI. Blog posts, social media, email — each has a workflow that multiplies your output without multiplying your hours. This badge represents your shift from individual contributor to content machine.')
    },
    steps: [
      { stepType: 'hook', stepTitle: 'AI Knows What People Are Searching For', content: block('Here\'s a fact most writers don\'t use: AI was trained on billions of web pages, including the highest-ranking content for almost every search query. This means it has implicit knowledge of what Google rewards. With the right prompting, it produces content that is naturally search-optimised — without the keyword stuffing that used to kill readability.') },
      { stepType: 'explanation', stepTitle: 'The Keyword-to-Content Pipeline', content: block('Start with keyword research (Google Search Console, Ahrefs, or even asking AI what people search for in your niche). Identify a target keyword and 3-5 semantic variations. Give AI the full picture: target keyword, semantic variations, search intent (informational, navigational, transactional), and competing article titles to differentiate from. This produces SEO-optimised content that reads naturally.') },
      { stepType: 'explanation', stepTitle: 'Search Intent — The Most Overlooked SEO Factor', content: block('Google ranks content that best matches search intent, not just keyword frequency. Informational intent ("how to improve writing speed"): needs comprehensive how-to. Commercial intent ("best AI writing tools"): needs comparison and recommendations. Transactional intent ("buy writing course"): needs product information and trust signals. Always specify intent in your prompt. "The searcher wants to understand, not buy. Give them a complete answer with examples."') },
      { stepType: 'example', stepTitle: 'A Complete SEO Article Prompt', content: block('"Write a 1,500-word article targeting the keyword \'how to write faster\'. Semantic variations to include: writing productivity, writing speed, faster writing techniques, writing habits. Search intent: informational — the reader wants actionable techniques they can implement immediately. Differentiate from: listicles with surface-level tips. Provide: a specific framework, research-backed techniques, and a realistic implementation plan. Include naturally: one H2 per major section, bullet points for scanability, and a practical example in each section."') },
      { stepType: 'explanation', stepTitle: 'Internal Linking Strategy with AI', content: block('Internal linking passes SEO authority between pages and keeps readers on your site longer. AI makes building an internal linking strategy effortless. "I have these 10 blog posts [list titles]. For each post, suggest 2-3 other posts from this list that are topically related and would make sense as internal links. Include suggested anchor text for each." Done in minutes. Update your older posts with these links for an immediate SEO boost.') },
      { stepType: 'explanation', stepTitle: 'Meta Descriptions and Title Tags', content: block('Meta descriptions (the text under your link in search results) directly influence click-through rates. AI generates excellent options at scale. "Write 5 meta description options for an article about AI writing tools. Each should be under 155 characters, include the keyword \'AI writing tools\', tease a specific benefit, and end with a soft CTA. Test which version drives the most clicks." This is a 5-minute SEO task with significant traffic impact.') },
      { stepType: 'explanation', stepTitle: 'Content Refresh Strategy', content: block('Google rewards freshness. AI makes updating old content fast. "This article about AI writing tools was written 18 months ago. Identify: outdated information to remove, new tools or developments to add, sections to expand for better depth, and fresh examples to replace old ones." You can refresh a 1,500-word post in 45 minutes, often tripling its traffic without starting from scratch.') },
      { stepType: 'exercise', stepTitle: 'Optimise One Existing Piece', content: block('Choose your best-performing piece of content. Use a free tool (Google Search Console or Ubersuggest) to find 3 keywords it already ranks for on page 2-3. Use AI to: find semantic variations of those keywords, suggest where to naturally add them in the existing content, generate improved meta description options, and identify one section to expand with more depth. Make the updates. Monitor ranking changes over 4 weeks.') },
      { stepType: 'summary', stepTitle: 'Key Takeaways', content: block('Search intent matching matters more than keyword density. Give AI your full keyword brief including semantic variations and intent. Meta descriptions and titles are high-leverage quick wins. Internal linking strategy can be mapped instantly with AI. Content refresh using AI is often faster and more effective than writing new content.') }
    ]
  },
  // WEEK 3 — Voice, Strategy & Systems
  {
    lessonNumber: 9, weekNumber: 3,
    title: 'Maintaining Your Authentic Voice',
    hasMilestone: false,
    steps: [
      { stepType: 'hook', stepTitle: 'The Paradox of AI Voice', content: block('Writers who use AI without a system become homogenised — their content sounds like everyone else\'s AI output. Writers who use AI with a voice system become more distinctively themselves — because AI handles the generic scaffolding and they can spend all their time on what only they can say. The question isn\'t whether to use AI, but how to use it while becoming more, not less, authentic.') },
      { stepType: 'explanation', stepTitle: 'The Voice Document', content: block('The most important investment you can make in AI-assisted writing: a voice document. Collect 5-10 examples of your best writing — pieces that received the most engagement or that you\'re most proud of. Identify patterns: How long are your sentences? Do you use rhetorical questions? What vocabulary is distinctively yours? What opinions do you hold strongly? This document becomes the style guide you feed to AI.') },
      { stepType: 'explanation', stepTitle: 'Feeding Your Voice to AI', content: block('"Here are three examples of my best writing: [paste examples]. Analyse the patterns in my voice: sentence length, vocabulary level, use of analogies, tone (formal/casual/irreverent), signature phrases, how I start and end pieces, and how I handle complexity. Then use this voice profile to help me write in my style going forward." This one prompt dramatically improves AI output quality for your specific voice.') },
      { stepType: 'example', stepTitle: 'Voice Elements That Survive AI Editing', content: block('Specific writers have identifiable voice DNA: Paul Graham\'s essays are dense with insights, casual vocabulary, and unexpected metaphors. Ann Handley\'s newsletters feel like a letter from a smart friend. Ryan Holiday uses Stoic framing for modern problems. Each has elements AI can replicate in structure but not in originality. Your voice DNA should have: one signature structural move, one vocabulary tendency, and one recurring thematic concern. Protect these in every AI-editing pass.') },
      { stepType: 'explanation', stepTitle: 'The Human Layer Framework', content: block('Structure every AI-assisted piece with the Human Layer Framework. AI Scaffolding: structure, section topics, transitions, general points. Human Layer: your personal examples, your specific opinions, your expertise that can\'t be Googled, your observations that only your life experience generates. Rule: the Human Layer should represent at least 20% of the final word count. If it\'s less, the piece doesn\'t feel like you.') },
      { stepType: 'explanation', stepTitle: 'Voice Drift and How to Prevent It', content: block('Voice drift happens when AI gradually dilutes your writing style because you edit less rather than add more. Symptoms: your content feels slightly off, engagement drops, you get fewer "this sounds like you" comments. Prevention: maintain your voice document and review it monthly. Periodically write a piece entirely without AI assistance to reconnect with your natural patterns. Do quarterly audits of published AI-assisted content — are you reading it and thinking "this sounds like me"?') },
      { stepType: 'explanation', stepTitle: 'Audience Testing for Voice Authenticity', content: block('The ultimate test: do people who know you read your content and think "this sounds like you"? Build this feedback into your process. Share AI-assisted pieces with 2-3 close readers before publishing. Ask specifically: "Does this sound like me? Where does it feel off?" Use this feedback to calibrate your editing process rather than relying on your own voice perception, which can become desensitised.') },
      { stepType: 'exercise', stepTitle: 'Build Your Voice Document', content: block('Find 5 pieces of content you\'ve written that best represent your voice. For each, identify: 3 sentences you\'d never change, your most distinctive word choice, the structural approach, and the emotional tone. Compile these observations into a 1-page "voice brief." Then paste this brief into an AI conversation and ask it to write a short test piece in your voice on a topic you know well. Compare the output to your actual writing. Refine the brief until the output sounds like 80% you.') },
      { stepType: 'summary', stepTitle: 'Key Takeaways', content: block('AI without a voice system produces homogenised content. Build a voice document from your best existing writing. Feed your voice document to AI before starting any new piece. The Human Layer (personal examples, opinions, unique expertise) should be at least 20% of the final word count. Voice drift is real — do quarterly audits of your AI-assisted content.') }
    ]
  },
  {
    lessonNumber: 10, weekNumber: 3,
    title: 'Storytelling and Narrative Structure with AI',
    hasMilestone: false,
    steps: [
      { stepType: 'hook', stepTitle: 'Why the Best AI Content Tells Stories', content: block('Data without story is forgotten. Story without data is dismissed. The highest-performing content combines both — and AI can help you structure and generate both elements systematically. The writers who understand narrative structure and can prompt AI to follow it produce content that holds attention in a world where everything competes for it.') },
      { stepType: 'explanation', stepTitle: 'The Three Narrative Structures That Work Online', content: block('Structure 1 — Problem/Stakes/Resolution: Start with a problem the reader has, raise the stakes (what happens if they don\'t solve it), then provide the resolution. Structure 2 — Before/Trigger/After: The reader before a change, what triggered the change, and the transformed state after. Structure 3 — Belief/Challenge/Insight: Start with a common belief, introduce a challenge or contradiction, reveal the unexpected insight. Prompting AI with these structures produces dramatically better output than "write me a story about X."') },
      { stepType: 'explanation', stepTitle: 'Using AI to Generate Story Angles', content: block('"I want to write a piece about [topic] for [audience]. Using the Problem/Stakes/Resolution structure, generate 5 different story angles — each starting with a different problem the audience faces. For each, suggest: the hook sentence, the stakes to raise, and the resolution insight." This gives you 5 complete story frameworks in minutes, and you select the one that resonates most.') },
      { stepType: 'example', stepTitle: 'The Case Study Formula', content: block('Case studies are the most persuasive content format, and AI can draft them from brief inputs. Prompt: "Write a 400-word case study using this information: client was [situation], tried [what they tried], achieved [result]. Use the Before/Trigger/After structure. Include specific numbers wherever I\'ve provided them. Make the client the hero, not the tool or service." Then edit with real details and quotes — this is what readers remember.') },
      { stepType: 'explanation', stepTitle: 'The Hook as a Craft Element', content: block('The first sentence of any piece does 70% of the work — if it doesn\'t hold attention, nothing that follows matters. AI generates good hooks but not great ones. Great hooks have: unexpected specificity ("37% of writers I surveyed"), a provocative contradiction ("The most successful writers I know don\'t actually enjoy writing"), or an immediate scene ("It was 11pm and I had nothing written"). Ask AI for 10 hook options, select the best, then improve it with a human editing pass.') },
      { stepType: 'explanation', stepTitle: 'Pacing and Tension in Long-Form Content', content: block('Long-form content loses readers at predictable points: after the introduction (if they didn\'t get a clear payoff promise), after the second section (if there\'s no escalation), and near the end (if the conclusion feels like a summary rather than a landing). AI can help you map pacing: "Review this outline and identify where a reader might disengage. Suggest where to add a curiosity hook, a brief story, or a surprising data point to maintain momentum."') },
      { stepType: 'explanation', stepTitle: 'Using Personal Stories as Content Anchors', content: block('Personal stories are what AI cannot generate — they\'re uniquely yours and permanently differentiate your content. Build a "story library": a simple document of 20-30 personal experiences, lessons, failures, and observations relevant to your writing topics. Tag each with the themes it illustrates. When writing any piece, query your story library for relevant anchors to embed throughout. AI can help you write around the story; only you can generate the story itself.') },
      { stepType: 'exercise', stepTitle: 'Write a Narrative Case Study', content: block('Take a real transformation you\'ve witnessed — a client success, your own learning journey, someone you know who changed something. Brief: the before state, the turning point, the after state, three specific details or numbers. Use AI to write a 350-word case study using the Before/Trigger/After structure. Then edit: add one specific dialogue line, one sensory detail, and one moment of doubt before the resolution. Compare your edited version to the AI draft. Note which elements you added that made it come alive.') },
      { stepType: 'summary', stepTitle: 'Key Takeaways', content: block('Three narrative structures that work: Problem/Stakes/Resolution, Before/Trigger/After, Belief/Challenge/Insight. Great hooks require human refinement — ask AI for 10, then improve the best one. Build a personal story library and embed stories throughout AI-assisted content. Pacing and tension can be diagnosed by asking AI to review your outline for engagement drop-off points.') }
    ]
  },
  {
    lessonNumber: 11, weekNumber: 3,
    title: 'Content Repurposing and Distribution Workflows',
    hasMilestone: false,
    steps: [
      { stepType: 'hook', stepTitle: 'Create Once, Distribute Everywhere', content: block('The most efficient content creators don\'t create more — they distribute better. A single well-researched piece can become a week of social content, a newsletter, a podcast episode, a video script, and a downloadable guide. AI makes this repurposing instant instead of time-consuming.') },
      { stepType: 'explanation', stepTitle: 'The Content Multiplier System', content: block('Build around a "cornerstone" piece each week — a blog post, long-form article, or YouTube video that contains your best thinking on a topic. From that cornerstone, AI repurposes into: 3 LinkedIn posts (one per main insight), 5 tweets or a thread (punchiest observations), email newsletter (add personal context), Instagram carousel (visual summary), TikTok script (hook + payoff), podcast episode notes. Same thinking, 7 different formats, dramatically more reach.') },
      { stepType: 'explanation', stepTitle: 'Format-Specific Repurposing Prompts', content: block('Each repurpose needs platform-appropriate prompts. LinkedIn: "Extract the most valuable professional insight from this piece and write a 200-word LinkedIn post with a hook, 2-3 supporting points, and a question to drive comments." Twitter thread: "Turn the 5 key points into a thread. Tweet 1 is the hook, tweets 2-6 each contain one insight under 240 characters, final tweet is the CTA." The prompt specifies format requirements so the output is platform-ready with minimal editing.') },
      { stepType: 'example', stepTitle: 'A Content Week Built From One Piece', content: block('Monday: publish 1,500-word guide on "AI for freelance writers." Tuesday: LinkedIn post on the most counterintuitive insight from the guide. Wednesday: email newsletter linking to guide with personal context. Thursday: Twitter thread with 6 actionable tips from the guide. Friday: Instagram carousel with visual summary. Same week, 5 touchpoints, all built from one creation session using AI repurposing prompts. Total additional time: 45 minutes.') },
      { stepType: 'explanation', stepTitle: 'Distribution Strategy with AI Research', content: block('AI can research your optimal distribution channels. "I write about [topic] for [audience]. Suggest the top 5 content distribution channels I should focus on, explaining why each reaches my specific audience. For each channel, give me the ideal content format, posting frequency, and one specific tactic to grow there." This gives you a distribution strategy tailored to your niche in minutes.') },
      { stepType: 'explanation', stepTitle: 'Community and Syndication Opportunities', content: block('Beyond your owned channels, AI helps identify syndication opportunities: relevant publications that accept guest posts, newsletters that accept content partnerships, communities where your content adds value. "What online communities, newsletters, and publications cover [your topic] and might republish or share content from independent writers? For each, describe their typical audience and content style." This identifies distribution partnerships your competitors haven\'t found.') },
      { stepType: 'explanation', stepTitle: 'Building a Distribution Checklist', content: block('Create a systematic distribution checklist that runs after every piece is published. AI can draft this for you: "Create a 10-step distribution checklist for a content creator publishing articles about [your topic]. Include: immediate post-publication steps, 48-hour follow-up actions, weekly aggregation tasks, and monthly distribution audits." Systematise distribution so you never publish and pray again.') },
      { stepType: 'exercise', stepTitle: 'The Full Repurposing Sprint', content: block('Take your most successful piece of content from the past 6 months. In one 60-minute session, use AI to produce: one LinkedIn post, a 5-tweet thread, an email newsletter intro, and a 60-second video script. Time yourself. Post at least 2 of these repurposed pieces this week and compare their engagement to your average. Track which format drove the most traffic back to the original.') },
      { stepType: 'summary', stepTitle: 'Key Takeaways', content: block('Build around a cornerstone piece and repurpose to 7 formats using platform-specific prompts. Same insight, dramatically more reach, 45 extra minutes. AI identifies distribution channels and syndication opportunities you haven\'t considered. A distribution checklist ensures you never underdistribute your best work.') }
    ]
  },
  {
    lessonNumber: 12, weekNumber: 3,
    title: 'Building Your AI-Powered Content System',
    hasMilestone: true,
    milestone: {
      milestoneTitle: 'Course Complete — Content Creator Pro!',
      badgeName: 'Content Creator Pro',
      badgeEmoji: '🎨',
      badgeDescription: 'You have completed the AI for Writers & Content Creators course and built a complete AI-powered content system.',
      milestoneContent: block('You\'ve built a complete AI-powered content system: the tools, the workflows, the voice protection, and the distribution strategy. You produce more, faster, without losing what makes your writing distinctively yours. That\'s the real achievement — not just using AI, but using it to amplify your unique perspective at scale.')
    },
    steps: [
      { stepType: 'hook', stepTitle: 'The System That Runs Without Willpower', content: block('The difference between a content creator who uses AI occasionally and one who builds a genuine competitive advantage is systems. Systems work even when you\'re tired, unfocused, or uninspired. By the end of this lesson, you\'ll have a complete, documented content system you can run every week — consistently, predictably, and with compound results.') },
      { stepType: 'explanation', stepTitle: 'The Components of a Complete Content System', content: block('A complete AI content system has six components: (1) Idea generation workflow (never run out of topics), (2) Production templates (consistent output quality), (3) Voice protection protocols (stay distinctively you), (4) Distribution checklist (reach the right people), (5) Performance tracking (double down on what works), (6) Review and refinement cycle (continuously improve). Each component has an AI tool or workflow that makes it systematic.') },
      { stepType: 'explanation', stepTitle: 'The Weekly Content Rhythm', content: block('Monday (30 min): AI-generate next week\'s content ideas, select this week\'s topics. Tuesday (90 min): Produce cornerstone content (blog post or long video). Wednesday (30 min): Repurpose cornerstone to 3 social formats using AI. Thursday (30 min): Write weekly newsletter using AI draft + personal voice edit. Friday (15 min): Schedule all content, review analytics, note top performers. Total: 3 hours 15 minutes for a full week of multi-platform content. This is sustainable.') },
      { stepType: 'example', stepTitle: 'A System That Produced 10x Growth', content: block('A freelance copywriter implemented this system: Week 1 setup time: 4 hours. Weekly maintenance: 3.5 hours. Results after 3 months: newsletter grew from 400 to 2,200 subscribers, LinkedIn followers 3x\'d, blog traffic 4x. Inbound client inquiries doubled. "I\'m not working more," she said. "I\'m working with a system instead of with willpower." The system compounded her effort rather than requiring constant reinvention.') },
      { stepType: 'explanation', stepTitle: 'Performance Tracking and Iteration', content: block('Measure what matters: email open rates (industry benchmark: 25-35%), LinkedIn post reach and engagement rate, blog organic traffic and time-on-page, social follower growth rate, inbound leads or DMs per month. Ask AI to help analyse patterns: "Here are my last 20 LinkedIn posts with their engagement numbers. Identify patterns in the top 5 performers — format, topic, length, opening style. What should I do more of?" Use data to refine, not replace, your editorial instincts.') },
      { stepType: 'explanation', stepTitle: 'Scaling Beyond Solo Operation', content: block('Once your system is working, AI enables scaling that previously required hiring. AI-generated first drafts can be reviewed and approved in minutes. Style guides and voice documents can be shared with freelancers. Content calendars can be planned quarterly. Distribution can be partially automated. One person with a strong AI system can produce the content output of a small team — which means better margins and more time for the highest-value work only you can do.') },
      { stepType: 'explanation', stepTitle: 'The Content Creator\'s Competitive Moat', content: block('Your competitive moat is not your content volume — AI means volume is table stakes now. Your moat is the intersection of: your specific expertise and experience, your authentic voice and perspective, your distribution relationships and network, and your systematic production capability. None of these can be replicated by AI alone. The system you\'ve built multiplies all four, and it compounds over time while others are still writing one post per week manually.') },
      { stepType: 'exercise', stepTitle: 'Document Your Complete System', content: block('Spend 45 minutes documenting your content system as it stands today: list your primary AI tool and 2-3 prompts that work best for you, your weekly content rhythm (what you create and when), your voice protection checklist (what you always add/remove), your distribution channels and checklist, and the one metric you\'ll track to measure growth. This document is your system. Share it with someone else — teaching it will reveal the gaps. Refine it monthly.') },
      { stepType: 'summary', stepTitle: 'Key Takeaways', content: block('A complete content system has six components: idea generation, production templates, voice protection, distribution, performance tracking, and continuous refinement. The weekly content rhythm takes 3.5 hours for full multi-platform coverage. Measure what matters and use AI to find patterns in your best-performing content. Your competitive moat is the intersection of unique expertise, authentic voice, distribution relationships, and systematic production — none of which AI can replicate without you.')  }
    ]
  }
]

async function seedCourse() {
  console.log('Seeding AI for Writers & Content Creators...')

  const courseDoc = {
    _id: 'course-ai-for-writers-and-content-creators',
    _type: 'course',
    title: 'AI for Writers & Content Creators',
    slug: { _type: 'slug', current: 'ai-for-writers-and-content-creators' },
    description: 'Master AI-assisted writing, editing, and content production without losing your authentic voice.',
    price: 349,
    currency: 'GHS'
  }

  await client.createOrReplace(courseDoc)
  console.log('Course created.')

  for (const lesson of lessons) {
    const steps = lesson.steps.map((step, i) => ({
      _key: `step-${i + 1}`,
      _type: 'lessonStep',
      stepTitle: step.stepTitle,
      stepType: step.stepType,
      content: step.content
    }))

    const milestoneData = lesson.hasMilestone ? {
      hasMilestone: true,
      milestone: {
        milestoneTitle: lesson.milestone.milestoneTitle,
        badgeName: lesson.milestone.badgeName,
        badgeEmoji: lesson.milestone.badgeEmoji,
        badgeDescription: lesson.milestone.badgeDescription,
        milestoneContent: lesson.milestone.milestoneContent
      }
    } : { hasMilestone: false }

    const lessonDoc = {
      _id: `lesson-writers-${lesson.lessonNumber}`,
      _type: 'lesson',
      title: lesson.title,
      slug: { _type: 'slug', current: slug(lesson.title) },
      lessonNumber: lesson.lessonNumber,
      weekNumber: lesson.weekNumber,
      totalDuration: 15,
      stepCount: steps.length,
      courseSlug: 'ai-for-writers-and-content-creators',
      steps,
      ...milestoneData
    }

    await client.createOrReplace(lessonDoc)
    console.log(`✓ Lesson ${lesson.lessonNumber}: ${lesson.title}`)
  }

  console.log('\n✅ AI for Writers & Content Creators seeded successfully!')
  console.log(`Total lessons: ${lessons.length}`)
}

seedCourse().catch(err => { console.error('Seed failed:', err); process.exit(1) })
