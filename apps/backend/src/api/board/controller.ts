import { IBoardController } from '../../types/controllers'
import { categoryService } from '../../services'

export const boardController: IBoardController = {
  getActiveCategories: async (req, res) => {
    const categories = await categoryService.getActiveCategories()

    res.json(categories)
  },
}
