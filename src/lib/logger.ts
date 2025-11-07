import path from 'path'

import winston from 'winston'

import 'winston-daily-rotate-file'

const logFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.printf(({ timestamp, level, message }) => {
    return `${timestamp} [${level.toUpperCase()}]: ${message}`
  }),
)

const dailyRotateTransport = new winston.transports.DailyRotateFile({
  dirname: path.join(process.cwd(), 'logs'),
  filename: 'application-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  maxFiles: '14d', // Keep logs for 14 days
})

export const logger = winston.createLogger({
  level: 'info',
  format: logFormat,
  transports: [new winston.transports.Console(), dailyRotateTransport],
})

export function log(level: 'info' | 'warn' | 'error', message: string) {
  logger.log(level, message)
}
