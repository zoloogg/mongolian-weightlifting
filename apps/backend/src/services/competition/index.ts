import { Category, Competition } from '../../database'
import { ICompetitionService } from '../../types/services'
import { transformQuery } from './utils'

export const competitionService: ICompetitionService = {
  getCompetitions: async (query) => {
    const competitions = await Competition.find(transformQuery(query))
    return competitions
  },
  getCompetition: async (id) => {
    const competition = await Competition.findById(id)
    return competition
  },
  createCompetition: async (competition) => {
    const newCompetition = await Competition.create(competition)
    return newCompetition
  },
  updateCompetition: async (id, competition) => {
    const updatedCompetition = await Competition.findByIdAndUpdate(id, {
      $set: competition,
    })
    return updatedCompetition?.isModified() ?? false
  },
  deleteCompetition: async (id) => {
    const deletedCompetition = await Competition.findByIdAndUpdate(id, {
      $set: { isDeleted: true },
    })
    return deletedCompetition?.isModified() ?? false
  },

  // Category
  getCategories: async (competitionId) => {
    const categories = await Category.find(
      transformQuery({ competition: competitionId })
    )
    return categories
  },
  createCategory: async (competitionId, category) => {
    const newCategory = await Category.create({
      ...category,
      competition: competitionId,
    })
    return newCategory
  },
  updateCategory: async (id, category) => {
    const updatedCategory = await Category.findByIdAndUpdate(id, {
      $set: category,
    })
    return updatedCategory?.isModified() ?? false
  },
  deleteCategory: async (id) => {
    const deletedCategory = await Category.findByIdAndUpdate(id, {
      $set: { isDeleted: true },
    })
    return deletedCategory?.isModified() ?? false
  },
}
