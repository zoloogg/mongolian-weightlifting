import { ICategory } from './../models'

export interface IBoardService {
  getActiveCategories: () => Promise<ICategory[]>
}
