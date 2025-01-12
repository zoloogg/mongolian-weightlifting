import { Request, Response } from 'express'

export interface IParticipationController {
  getParticipations: (req: Request, res: Response) => Promise<void>
  registerParticipation: (req: Request, res: Response) => Promise<void>
  updateParticipation: (req: Request, res: Response) => Promise<void>
  removeParticipation: (req: Request, res: Response) => Promise<void>
}
