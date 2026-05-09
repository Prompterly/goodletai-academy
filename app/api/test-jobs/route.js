export const dynamic = 'force-dynamic'

export async function GET() {
  const key = process.env.RAPIDAPI_KEY

  if (!key) {
    return Response.json({ error: 'RAPIDAPI_KEY is missing from environment' }, { status: 500 })
  }

  try {
    const res = await fetch(
      'https://jsearch.p.rapidapi.com/search?query=AI%20engineer%20remote&num_pages=1',
      {
        headers: {
          'X-RapidAPI-Key': key,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
        },
      }
    )

    const data = await res.json()

    return Response.json({
      status: res.status,
      ok: res.ok,
      keyPresent: true,
      keyPreview: `${key.slice(0, 8)}...${key.slice(-6)}`,
      resultCount: (data.data || []).length,
      firstJob: data.data?.[0]?.job_title || null,
      apiStatus: data.status || null,
      error: data.message || null,
    })
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 })
  }
}
