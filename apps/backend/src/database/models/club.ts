import { model, Schema } from 'mongoose'
import { IClub } from '../../types/models'

const clubSchema = new Schema<IClub>(
  {
    name: { type: String, required: true },
    isDeleted: { type: Boolean },
  },
  {
    timestamps: true,
  }
)

export const Club = model<IClub>('clubs', clubSchema)
