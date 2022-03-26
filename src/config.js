import 'dotenv/config'

const config= {
  port: process.env.PORT || 3000,
  logLevel: process.env.LOG_LEVEL || 'error',
  mongoDbUrl: process.env.MONGO_DB_URL || 'mongodb://localhost:27017/prod-db',
}

export default config