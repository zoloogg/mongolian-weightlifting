import { participationService } from '../../services'
import { IParticipationController } from '../../types/controllers'

export const participationController: IParticipationController = {
  getParticipations: async (req, res) => {
    const participations = await participationService.getParticipations(
      req.params.categoryId
    )
    res.json(participations)
  },
  registerParticipation: async (req, res) => {
    const participation = await participationService.registerParticipation(
      req.params.categoryId,
      req.body.athleteId,
      req.body
    )
    res.json(participation)
  },
  updateParticipation: async (req, res) => {
    const participation = await participationService.updateParticipation(
      req.params.participationId,
      req.body
    )
    res.json(participation)
  },
  removeParticipation: async (req, res) => {
    const participation = await participationService.removeParticipation(
      req.params.participationId
    )
    res.json(participation)
  },
}
