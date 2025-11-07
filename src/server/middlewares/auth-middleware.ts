import type { Context, Next } from 'hono'

import { auth } from '@/lib/auth'

export const authMiddleware = async (c: Context, next: Next) => {
  try {
    const session = await auth(c.req, c.res)

    if (!session) {
      return c.json({ error: 'Unauthorized' }, 401)
    }

    c.set('user', session.user) // Attach user data to context
    await next()
  } catch {
    return c.json({ error: 'Internal server error' }, 500)
  }
}
