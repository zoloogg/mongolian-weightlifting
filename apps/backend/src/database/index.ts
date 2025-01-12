import { connect } from 'mongoose'
import { config } from '../bootloader'

export const initDb = async () => {
  if (!config.mongoUrl) {
    throw new Error('MongoDB URL is not set')
  }

  await connect(config.mongoUrl)

  console.log('Connected to MongoDB')
}

export * from './models'
