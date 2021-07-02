const winston = require('winston')

const format = ({ level, message, label, timestamp }) => {
  return `[${timestamp}] (${level}) [${label}] ${message}`
}

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(format)
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(winston.format.printf(format)),
    }),
  ],
})

const info = (message = '', label = 'logger') => {
  logger.log({ label, message, level: 'info' })
}

const warn = (message = '', label = 'logger') => {
  logger.log({ label, message, level: 'warn' })
}

const error = (message = '', label = 'logger') => {
  logger.log({ label, message, level: 'error' })
}

module.exports = { logger, info, warn, error }