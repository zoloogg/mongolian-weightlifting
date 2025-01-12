import { Document, ObjectId } from 'mongoose'

export interface IBaseClub {
  name: string
  isDeleted?: boolean
}

export interface IClub extends IBaseClub, Document<ObjectId> {}
