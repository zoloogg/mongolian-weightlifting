import { Document, ObjectId } from 'mongoose'
import { IClub } from './club'

export interface IBaseAthlete {
  firstName: string
  lastName: string
  club: IClub['_id']
  dob: Date
  isDeleted?: boolean
}

export interface IAthlete extends IBaseAthlete, Document<ObjectId> {}
