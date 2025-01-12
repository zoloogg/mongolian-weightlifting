import { Request, Response } from 'express'

export interface IBoardController {
  getActiveCategories: (req: Request, res: Response) => Promise<void>
}
