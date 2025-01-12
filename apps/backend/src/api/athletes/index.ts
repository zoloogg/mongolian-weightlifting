import { Router } from 'express'
import { athleteController } from './controller'

export const athletesRouter = Router()

athletesRouter.post('/', athleteController.createAthlete)
athletesRouter.get('/', athleteController.getAthletes)
athletesRouter.get('/:id', athleteController.getAthlete)
athletesRouter.patch('/:id', athleteController.updateAthlete)
athletesRouter.delete('/:id', athleteController.deleteAthlete)
