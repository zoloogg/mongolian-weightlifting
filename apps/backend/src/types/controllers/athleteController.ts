import { Request, Response } from 'express'

export interface IAthleteController {
  getAthletes: (req: Request, res: Response) => Promise<void>
  getAthlete: (req: Request, res: Response) => Promise<void>
  createAthlete: (req: Request, res: Response) => Promise<void>
  updateAthlete: (req: Request, res: Response) => Promise<void>
  deleteAthlete: (req: Request, res: Response) => Promise<void>
}
