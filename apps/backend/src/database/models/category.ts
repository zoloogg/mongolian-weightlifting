import { model, Schema } from 'mongoose'
import { ICategory } from '../../types/models'

const categorySchema = new Schema<ICategory>(
  {
    name: { type: String, required: true },
    competition: { type: Schema.Types.ObjectId, ref: 'competitions' },
    isDeleted: { type: Boolean },
    isA: { type: Boolean, default: false },
    isB: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
)

export const Category = model<ICategory>('categories', categorySchema)
