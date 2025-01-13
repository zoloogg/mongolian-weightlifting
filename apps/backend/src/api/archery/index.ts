import { Router } from 'express'
import { archeryController } from './controller'

export const archeryRouter = Router()

archeryRouter.get('/match', archeryController.getMatch)
archeryRouter.get('/bracket', archeryController.getBracket)
archeryRouter.get('/ranking', archeryController.getRanking)
