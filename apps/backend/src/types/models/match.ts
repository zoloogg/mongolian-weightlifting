import { Document, ObjectId } from 'mongoose'
import { IClub } from './club'

export interface IBaseMatch {
  category: string
  name: string
  arrow1: number
  arrow2: number
  arrow3: number
  arrow4: number
  arrow5: number
  arrow6: number
  setIdx: number
  setScore: number
}

export interface IMatch extends IBaseMatch, Document<ObjectId> {}
