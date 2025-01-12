import { model, Schema } from 'mongoose'
import { IParticipation } from '../../types/models'

const participationSchema = new Schema<IParticipation>(
  {
    athlete: { type: Schema.Types.ObjectId, ref: 'athletes', required: true },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'categories',
      required: true,
    },
    group: { type: String, default: 'A' },
    order: { type: Number, default: 0 },
    isDeleted: { type: Boolean },
    snatch: { type: Number },
    cleanAndJerk: { type: Number },
  },
  {
    timestamps: true,
  }
)

export const Participation = model<IParticipation>(
  'participations',
  participationSchema
)
