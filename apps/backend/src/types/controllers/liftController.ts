import { Request, Response } from 'express'

export interface ILiftController {
  getLifts: (req: Request, res: Response) => Promise<void>
  createLift: (req: Request, res: Response) => Promise<void>
  deleteLift: (req: Request, res: Response) => Promise<void>
  updateLift: (req: Request, res: Response) => Promise<void>
  getRank: (req: Request, res: Response) => Promise<void>
  vote: (req: Request, res: Response) => Promise<void>
  fixLive: (req: Request, res: Response) => Promise<void>
  last: (req: Request, res: Response) => Promise<void>
}
