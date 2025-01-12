import { Request, Response } from 'express'

export interface IClubController {
  getClubs: (req: Request, res: Response) => Promise<void>
  getClub: (req: Request, res: Response) => Promise<void>
  createClub: (req: Request, res: Response) => Promise<void>
  updateClub: (req: Request, res: Response) => Promise<void>
  deleteClub: (req: Request, res: Response) => Promise<void>
}
