import { competitionService } from '../../services'
import { ICompetitionController } from '../../types/controllers'

export const competitionController: ICompetitionController = {
  getCompetitions: async (req, res) => {
    const competitions = await competitionService.getCompetitions(req.query)
    res.json(competitions)
  },
  getCompetition: async (req, res) => {
    const competition = await competitionService.getCompetition(req.params.id)
    res.json(competition)
  },
  createCompetition: async (req, res) => {
    const competition = await competitionService.createCompetition(req.body)
    res.json(competition)
  },
  updateCompetition: async (req, res) => {
    const competition = await competitionService.updateCompetition(
      req.params.id,
      req.body
    )
    res.json(competition)
  },
  deleteCompetition: async (req, res) => {
    const competition = await competitionService.deleteCompetition(
      req.params.id
    )
    res.json(competition)
  },

  // Category
  getCategories: async (req, res) => {
    const categories = await competitionService.getCategories(req.params.id)
    res.json(categories)
  },
  createCategory: async (req, res) => {
    const category = await competitionService.createCategory(
      req.params.id,
      req.body
    )
    res.json(category)
  },
  updateCategory: async (req, res) => {
    const category = await competitionService.updateCategory(
      req.params.categoryId,
      req.body
    )
    res.json(category)
  },
  deleteCategory: async (req, res) => {
    const category = await competitionService.deleteCategory(
      req.params.categoryId
    )
    res.json(category)
  },
}
