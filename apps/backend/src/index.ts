import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import { router } from './api'
import { config } from './bootloader'
import { initDb } from './database'
const main = async () => {
  await initDb()

  const app = express()

  app.use(morgan('dev'))
  app.use(helmet())
  app.use(cors({ origin: '*' }))
  app.use(express.json())

  app.use('/api/v1', router)

  app.listen(config.port, () => {
    console.log(`Listening: http://localhost:${config.port}`)
  })
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
