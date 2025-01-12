import { Request, Response } from 'express'

export interface ClockController {
  get: (req: Request, res: Response) => Promise<void>
  set: (req: Request, res: Response) => Promise<void>
  pause: (req: Request, res: Response) => Promise<void>
  clear: (req: Request, res: Response) => Promise<void>
}
