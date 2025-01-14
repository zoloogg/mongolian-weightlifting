import { model, Schema } from 'mongoose'
import { IAthlete, IRanking } from '../../types/models'

const rankingSchema = new Schema<IRanking>(
  {
    isActive: { type: Boolean, required: true },
    name: { type: String, required: true },
    data: { type: Schema.Types.Mixed, required: true },
  },
  {
    timestamps: true,
  }
)

export const Ranking = model<IRanking>('rankings', rankingSchema)
