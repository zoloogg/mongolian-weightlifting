import { model, Schema } from 'mongoose'
import { IClub, ICompetition } from '../../types/models'

const competitionSchema = new Schema<ICompetition>(
  {
    name: { type: String, required: true },
    isDeleted: { type: Boolean },
  },
  {
    timestamps: true,
  }
)

export const Competition = model<ICompetition>(
  'competitions',
  competitionSchema
)
