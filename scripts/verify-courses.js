const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: 'bemevm9d',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
})

async function verify() {
  // Check course documents
  const courses = await client.fetch(
    `*[_type == "course" && _id in [
      "course-ai-for-writers-and-content-creators",
      "course-ai-for-researchers-and-analysts",
      "course-building-ai-agents-and-assistants",
      "course-ai-ethics-safety-and-responsible-use"
    ]]{ _id, title, "slug": slug.current }`
  )
  console.log('📋 Course documents:')
  courses.forEach(c => console.log(`   ${c._id} → slug: "${c.slug}"`))

  // Test the actual getLessons query for each
  console.log('\n🔍 Testing getLessons query:')
  const slugs = [
    'ai-for-writers-and-content-creators',
    'ai-for-researchers-and-analysts',
    'building-ai-agents-and-assistants',
    'ai-ethics-safety-and-responsible-use',
  ]
  for (const courseSlug of slugs) {
    const lessons = await client.fetch(
      `*[_type == "lesson" && course->slug.current == $courseSlug] | order(lessonNumber asc){ lessonNumber, title }`,
      { courseSlug }
    )
    console.log(`   ${courseSlug}: ${lessons.length} lessons found`)
  }
}

verify().catch(err => console.error('❌', err.message))
