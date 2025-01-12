import { ILiftService } from '../../types/services'
import { Lift } from '../../database/models'
import { transformQuery } from './utils'
import { participationService } from '../participation'
import { ILift } from '../../types/models'
import { categoryService } from '../category'
export const liftService: ILiftService = {
  getLifts: async (query) => {
    return Lift.find(transformQuery(query))
  },
  createLift: async (lift) => {
    return Lift.create(lift)
  },
  deleteLift: async (id) => {
    const lift = await Lift.findOneAndUpdate(
      { id },
      {
        $set: {
          isDeleted: true,
        },
      }
    )
    return lift?.isModified() ?? false
  },
  updateLift: async (_id, lift) => {
    const updatedLift = await Lift.findOneAndUpdate({ _id }, { $set: lift })
    return updatedLift?.isModified() ?? false
  },
  getRank: async (participationId, liftType) => {
    const participation =
      await participationService.getParticipation(participationId)

    if (!participation) {
      return 0
    }

    const participations = await participationService.getParticipations(
      participation.category.toString()
    )

    const lifts = await Lift.find({
      participation: { $in: participations.map((p) => p._id) },
    })

    const records: Record<string, ILift[]> = {}

    for (const lift of lifts) {
      records[lift.participation.toString()] = [
        ...(records[lift.participation.toString()] ?? []),
        lift,
      ]
    }

    return lifts.length
  },
  vote: async (liftId, idx, vote) => {
    const lift = await Lift.findById(liftId)
    if (!lift || lift.verdict !== 'pending') {
      return false
    }
    lift.results[idx] = vote
    await lift.save()

    if (lift.results.every((v) => v !== null)) {
      lift.verdict =
        lift.results.filter((v) => v === true).length >= 2 ? 'success' : 'fail'
      console.log('Verdict', lift.verdict)

      await lift.save()

      return await liftService.handleFinishedLift(lift)
    }

    return false
  },
  handleFinishedLift: async (lift) => {
    console.log('Handling', lift.idx)
    if ([1, 2, 4, 5].includes(lift.idx)) {
      const nextLift = lift.verdict ? lift.weight + 1 : lift.weight
      await Lift.create({
        participation: lift.participation,
        weight: nextLift,
        idx: lift.idx + 1,
      })
    }

    if (lift.idx <= 3) {
      const lifts = await Lift.find({
        participation: lift.participation,
        verdict: 'success',
        idx: { $lte: 3 },
      })

      const maxWeight = Math.max(...lifts.map((l) => l.weight))

      await participationService.updateParticipation(
        lift.participation.toString(),
        {
          snatch: maxWeight,
        }
      )
    }

    if (lift.idx >= 4 && lift.idx <= 6) {
      const lifts = await Lift.find({
        participation: lift.participation,
        verdict: 'success',
        idx: { $gte: 4 },
      })

      const maxWeight = Math.max(...lifts.map((l) => l.weight))

      await participationService.updateParticipation(
        lift.participation.toString(),
        {
          cleanAndJerk: maxWeight,
        }
      )
    }

    await liftService.handleLive()
    return true
  },
  handleLive: async () => {
    const activeCategories = await categoryService.getActiveCategories()
    console.log('activeCategories', activeCategories)

    const lll: ILift[] = []
    for (const category of activeCategories) {
      console.log('category', category)
      const participations = await participationService.getParticipations(
        category._id.toString()
      )
      console.log('participations X', participations)
      const lifts = await Lift.find({
        participation: { $in: participations.map((p) => p._id) },
        verdict: 'pending',
      })
      console.log('lifts X', lifts)
      lll.push(...lifts)
    }

    lll.sort((a, b) => {
      if (a.weight > b.weight) return 1
      if (a.weight < b.weight) return -1

      if (a._id.toString() > b._id.toString()) return -1
      if (a._id.toString() < b._id.toString()) return 1

      return 0
    })

    console.log('L', lll)

    await Lift.updateMany(
      {},
      {
        $set: {
          isLive: false,
        },
      }
    )

    await Lift.updateOne(
      {
        _id: lll[0],
      },
      {
        $set: {
          isLive: true,
        },
      }
    )

    return true
  },
}
