import { ICategory, ICompetition } from '../models'

export interface ICompetitionService {
  getCompetitions: (query: any) => Promise<ICompetition[]>
  getCompetition: (id: string) => Promise<ICompetition | null>
  createCompetition: (competition: ICompetition) => Promise<ICompetition>
  updateCompetition: (id: string, competition: ICompetition) => Promise<boolean>
  deleteCompetition: (id: string) => Promise<boolean>

  // Category
  getCategories: (competitionId: string) => Promise<ICategory[]>
  createCategory: (
    competitionId: string,
    category: ICategory
  ) => Promise<ICategory>
  updateCategory: (id: string, category: ICategory) => Promise<boolean>
  deleteCategory: (id: string) => Promise<boolean>
}
