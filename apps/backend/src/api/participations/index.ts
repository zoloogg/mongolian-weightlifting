import { Router } from 'express'
import { participationController } from './controller'

export const participationRouter = Router()

participationRouter.get(
  '/:categoryId/athletes',
  participationController.getParticipations
)
participationRouter.post(
  '/:categoryId/athletes',
  participationController.registerParticipation
)
participationRouter.patch(
  '/:participationId',
  participationController.updateParticipation
)
participationRouter.delete(
  '/:participationId',
  participationController.removeParticipation
)
