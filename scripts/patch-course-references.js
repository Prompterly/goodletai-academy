const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: 'bemevm9d',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
})

// Maps courseSlug string → course document _id
const courseRefMap = {
  'ai-for-writers-and-content-creators':    'course-ai-for-writers-and-content-creators',
  'ai-for-researchers-and-analysts':         'course-ai-for-researchers-and-analysts',
  'building-ai-agents-and-assistants':       'course-building-ai-agents-and-assistants',
  'ai-ethics-safety-and-responsible-use':    'course-ai-ethics-safety-and-responsible-use',
}

async function patch() {
  console.log('🔧 Patching course references on all new lessons...\n')

  for (const [courseSlug, courseId] of Object.entries(courseRefMap)) {
    // Fetch all lessons that have this courseSlug string
    const lessons = await client.fetch(
      `*[_type == "lesson" && courseSlug == $courseSlug]{ _id, title }`,
      { courseSlug }
    )

    if (lessons.length === 0) {
      console.log(`⚠️  No lessons found for courseSlug: ${courseSlug}`)
      continue
    }

    console.log(`📚 ${courseSlug} — patching ${lessons.length} lessons...`)

    for (const lesson of lessons) {
      await client
        .patch(lesson._id)
        .set({ course: { _type: 'reference', _ref: courseId } })
        .commit()
      console.log(`   ✅ ${lesson.title}`)
    }
    console.log('')
  }

  console.log('🎉 All course references patched!')
}

patch().catch(err => {
  console.error('❌ Patch failed:', err.message)
  process.exit(1)
})
