import { Router } from 'express'
import { competitionController } from './controller'

export const competitionRouter = Router()

competitionRouter.get('/', competitionController.getCompetitions)
competitionRouter.get('/:id', competitionController.getCompetition)
competitionRouter.post('/', competitionController.createCompetition)
competitionRouter.patch('/:id', competitionController.updateCompetition)
competitionRouter.delete('/:id', competitionController.deleteCompetition)

// Category
competitionRouter.get('/:id/categories', competitionController.getCategories)
competitionRouter.post('/:id/categories', competitionController.createCategory)
competitionRouter.patch(
  '/:id/categories/:categoryId',
  competitionController.updateCategory
)
competitionRouter.delete(
  '/:id/categories/:categoryId',
  competitionController.deleteCategory
)
