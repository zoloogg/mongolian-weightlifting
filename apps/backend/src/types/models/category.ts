import { Document, ObjectId } from 'mongoose'
import { ICompetition } from './competition'

export interface IBaseCategory {
  name: string
  competition: ICompetition['_id']
  isDeleted?: boolean
  isA: boolean
  isB: boolean
}

export interface ICategory extends IBaseCategory, Document<ObjectId> {}
