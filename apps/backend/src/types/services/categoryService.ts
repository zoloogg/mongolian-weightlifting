import { ICategory } from '../models'

export interface ICategoryService {
  getActiveCategories: () => Promise<ICategory[]>
}
