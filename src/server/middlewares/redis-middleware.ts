import { Context, Next } from 'hono'
import Redis from 'ioredis'

// Initialize Redis client
const redis = new Redis()

export const rateLimiterMiddleware = async (c: Context, next: Next) => {
  try {
    const ip =
      c.req.header('x-forwarded-for')?.split(',')[0].trim() ||
      c.req.header('remote-addr')

    if (!ip) {
      return c.json({ error: 'Unable to determine IP address' }, 400) // Bad Request if no IP is found
    }

    const key = `rate_limit:${ip}`

    // Increment the number of requests for this IP address
    const requests = await redis.incr(key)

    // If this is the first request, set the expiration time (60 seconds)
    if (requests === 1) {
      await redis.expire(key, 60)
    }

    // If the number of requests exceeds 10, return a 429 (Too Many Requests) response
    if (requests > 10) {
      return c.json({ error: 'Rate limit exceeded' }, 429)
    }

    // Proceed to the next middleware or route handler
    await next()
  } catch {
    return c.json({ error: 'Internal server error' }, 500) // Handle Redis or other errors
  }
}

export const cacheMiddleware = async (c: Context, next: Next) => {
  try {
    if (c.req.method !== 'GET') {
      return await next() // Only cache GET requests
    }

    const cacheKey = `cache:${c.req.url}`

    // Check if response exists in Redis
    const cachedResponse = await redis.get(cacheKey)

    if (cachedResponse) {
      return c.json(JSON.parse(cachedResponse)) // Return cached response
    }

    // Proceed to the next middleware or route handler
    await next()

    // Get the response body and cache it
    const response = c.res
    if (response.status === 200) {
      const body = await response.text()
      await redis.setex(cacheKey, 300, body) // Cache response for 5 minutes (300s)
    }
  } catch {
    return c.json({ error: 'Internal server error' }, 500)
  }
}
