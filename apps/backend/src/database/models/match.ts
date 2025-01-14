import { model, Schema } from 'mongoose'
import { IMatch } from '../../types/models'

const matchSchema = new Schema<IMatch>({
  category: { type: String, required: true },
  name: { type: String, required: true },
  arrow1: { type: Number, required: true },
  arrow2: { type: Number, required: true },
  arrow3: { type: Number, required: true },
  arrow4: { type: Number, required: true },
  arrow5: { type: Number, required: true },
  arrow6: { type: Number, required: true },
  setIdx: { type: Number, required: true },
  setScore: { type: Number, required: true },
})

export const Match = model<IMatch>('matches', matchSchema)
