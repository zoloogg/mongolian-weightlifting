import { ObjectId, Document } from 'mongoose'
import { IParticipation } from './participation'
export interface IBaseLift {
  participation: IParticipation['_id']
  weight: number
  results: [boolean | null, boolean | null, boolean | null]
  override: boolean
  isLive?: boolean
  idx: number
  verdict: 'success' | 'fail' | 'pending'
}

export interface ILift extends IBaseLift, Document<ObjectId> {}
