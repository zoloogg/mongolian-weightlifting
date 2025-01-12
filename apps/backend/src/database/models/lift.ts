import { model, Schema } from 'mongoose'
import { ILift } from '../../types/models'

const liftSchema = new Schema<ILift>(
  {
    participation: { type: String, required: true },
    weight: { type: Number, required: true },
    results: {
      type: [Boolean, Boolean, Boolean],
      default: [null, null, null],
    },
    override: { type: Boolean },
    isLive: { type: Boolean },
    idx: { type: Number },
    verdict: { type: String, default: 'pending' },
  },
  {
    timestamps: true,
    virtuals: true,
  }
)

export const Lift = model<ILift>('lifts', liftSchema)
