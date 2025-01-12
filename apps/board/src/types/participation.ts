import { Athlete } from './athlete'
import { Category } from './category'

export interface Participation {
  _id: string
  athlete: Athlete['_id']
  category: Category['_id']
  order: number
  group: string
  snatch: number
  cleanAndJerk: number
}
