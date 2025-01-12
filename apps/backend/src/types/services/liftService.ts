import { IBaseLift, ILift } from '../models'

export interface ILiftService {
  getLifts: (query: any) => Promise<ILift[]>
  createLift: (lift: IBaseLift) => Promise<ILift>
  deleteLift: (id: string) => Promise<boolean>
  updateLift: (id: string, lift: IBaseLift) => Promise<boolean>
  getRank: (participationId: string, liftType: string) => Promise<number>
  vote: (
    participationId: string,
    idx: number,
    vote: boolean
  ) => Promise<boolean>
  handleFinishedLift: (lift: ILift) => Promise<boolean>
  handleLive: () => Promise<boolean>
}
