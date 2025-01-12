import { Router } from 'express'
import { clockController } from './controller'

export const clockRouter = Router()

clockRouter.get('/', clockController.get)
clockRouter.post('/set', clockController.set)
clockRouter.post('/pause', clockController.pause)
clockRouter.post('/clear', clockController.clear)
