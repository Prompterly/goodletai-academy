const requests = new Map()

/**
 * Simple in-memory rate limiter.
 * Works within a single warm serverless instance.
 * For distributed rate limiting across Vercel instances, use Upstash Redis.
 *
 * @returns true if the request is allowed, false if it should be rejected
 */
export function rateLimit(ip, limit = 20, windowMs = 60_000) {
  const now = Date.now()
  const windowStart = now - windowMs
  const key = ip || 'unknown'

  const timestamps = (requests.get(key) || []).filter(t => t > windowStart)

  if (timestamps.length >= limit) {
    return false
  }

  timestamps.push(now)
  requests.set(key, timestamps)

  // Prune stale entries to avoid unbounded memory growth
  if (requests.size > 5_000) {
    for (const [k, times] of requests.entries()) {
      if (times.every(t => t <= windowStart)) {
        requests.delete(k)
      }
    }
  }

  return true
}
