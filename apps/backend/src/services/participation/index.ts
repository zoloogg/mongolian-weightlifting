import { Participation } from '../../database'
import { IParticipationService } from '../../types/services'
import { transformQuery } from './utils'

export const participationService: IParticipationService = {
  getParticipation: async (participationId) => {
    return Participation.findById(participationId)
  },
  getParticipations: async (categoryId) => {
    const participations = await Participation.find(
      transformQuery({ category: categoryId })
    )
    return participations
  },
  registerParticipation: async (categoryId, athleteId, data) => {
    const participation = await Participation.create({
      category: categoryId,
      athlete: athleteId,
      ...data,
    })
    return participation
  },
  updateParticipation: async (participationId, participation) => {
    const updatedParticipation = await Participation.findByIdAndUpdate(
      participationId,
      {
        $set: participation,
      }
    )
    return updatedParticipation?.isModified() ?? false
  },
  removeParticipation: async (participationId) => {
    const participation = await Participation.findByIdAndUpdate(
      participationId,
      {
        $set: { isDeleted: true },
      }
    )
    return participation?.isModified() ?? false
  },
}
