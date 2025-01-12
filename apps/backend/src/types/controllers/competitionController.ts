import { Request, Response } from 'express'
export interface ICompetitionController {
  getCompetitions: (req: Request, res: Response) => Promise<void>
  getCompetition: (req: Request, res: Response) => Promise<void>
  createCompetition: (req: Request, res: Response) => Promise<void>
  updateCompetition: (req: Request, res: Response) => Promise<void>
  deleteCompetition: (req: Request, res: Response) => Promise<void>

  // Category
  getCategories: (req: Request, res: Response) => Promise<void>
  createCategory: (req: Request, res: Response) => Promise<void>
  updateCategory: (req: Request, res: Response) => Promise<void>
  deleteCategory: (req: Request, res: Response) => Promise<void>
}
