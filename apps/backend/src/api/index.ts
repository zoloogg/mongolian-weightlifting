import { Router } from 'express'
import { athletesRouter } from './athletes'
import { clubRouter } from './clubs'
import { competitionRouter } from './competitions'
import { participationRouter } from './participations'
import { liftRouter } from './lifts'
import { boardRouter } from './board'
import { clockRouter } from './clock'

export const router = Router()

router.get('/', (_req, res) => {
  res.json({
    message: 'Mongolian Weightlifting API. v1.0.0 ',
  })
})

router.use('/clubs', clubRouter)
router.use('/athletes', athletesRouter)
router.use('/competitions', competitionRouter)
router.use('/participations', participationRouter)
router.use('/lifts', liftRouter)
router.use('/board', boardRouter)
router.use('/clock', clockRouter)
