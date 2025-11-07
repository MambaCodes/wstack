import { Hono } from 'hono'

import { rateLimiterMiddleware } from './middlewares/redis-middleware'
import api from './routes/api'

const app = new Hono()

app.use(rateLimiterMiddleware)
app.route('/api', api)

export default app
