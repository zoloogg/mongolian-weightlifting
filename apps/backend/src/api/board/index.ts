import { Router } from 'express'
import { boardController } from './controller'

export const boardRouter = Router()

boardRouter.get('/active-categories', boardController.getActiveCategories)
