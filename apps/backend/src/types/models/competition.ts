import { Document, ObjectId } from 'mongoose'

export interface IBaseCompetition {
  name: string
  isDeleted?: boolean
}

export interface ICompetition extends IBaseCompetition, Document<ObjectId> {}
