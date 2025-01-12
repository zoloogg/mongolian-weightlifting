import { Participation } from './participation'

export interface Lift {
  _id: string
  participation: Participation['_id']
  weight: number
  results: [boolean | null, boolean | null, boolean | null]
  override: boolean
}
