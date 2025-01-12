import { Category } from '../../database'
import { ICategoryService } from '../../types/services'

export const categoryService: ICategoryService = {
  getActiveCategories: async () => {
    return Category.find({ $or: [{ isA: true }, { isB: true }] })
  },
}
