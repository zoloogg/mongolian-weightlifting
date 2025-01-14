import { Document, ObjectId } from 'mongoose'

export interface IBaseRanking {
  isActive: boolean
  name: string
  data: any
}

export interface IRanking extends IBaseRanking, Document<ObjectId> {}
