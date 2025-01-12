import { Document, ObjectId } from 'mongoose'
import { IAthlete, ICategory } from './index'

export interface IBaseParticipation {
  athlete: IAthlete['_id']
  category: ICategory['_id']
  group: string
  order: number
  isDeleted?: boolean
}

export interface IParticipation extends IBaseParticipation, Document<ObjectId> {
  snatch?: number
  cleanAndJerk?: number
}
