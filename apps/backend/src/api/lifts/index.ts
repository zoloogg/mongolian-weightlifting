import { Router } from 'express'
import { liftController } from './controller'

export const liftRouter = Router()

liftRouter.get('/', liftController.getLifts)
liftRouter.post('/', liftController.createLift)
liftRouter.delete('/:id', liftController.deleteLift)
liftRouter.patch('/:id', liftController.updateLift)
liftRouter.get('/:id/rank', liftController.getRank)
liftRouter.post('/:id/vote', liftController.vote)

liftRouter.get('/live', liftController.fixLive)
