import { Router } from 'express'
import { clubController } from './controller'

export const clubRouter = Router()

clubRouter.get('/', clubController.getClubs)
clubRouter.get('/:id', clubController.getClub)
clubRouter.post('/', clubController.createClub)
clubRouter.patch('/:id', clubController.updateClub)
clubRouter.delete('/:id', clubController.deleteClub)
