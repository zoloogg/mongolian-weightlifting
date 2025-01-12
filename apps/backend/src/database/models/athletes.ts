import { model, Schema } from 'mongoose'
import { IAthlete } from '../../types/models'

const athletesSchema = new Schema<IAthlete>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    club: { type: Schema.Types.ObjectId, ref: 'clubs', required: true },
    dob: { type: Date },
    isDeleted: { type: Boolean },
  },
  {
    timestamps: true,
  }
)

export const Athlete = model<IAthlete>('athletes', athletesSchema)
