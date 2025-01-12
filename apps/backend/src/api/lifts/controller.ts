import { liftService } from '../../services/lift'
import { ILiftController } from '../../types/controllers'

export const liftController: ILiftController = {
  getLifts: async (req, res) => {
    const lifts = await liftService.getLifts(req.query)

    res.json(lifts)
  },
  createLift: async (req, res) => {
    const existing = await liftService.getLifts({
      participation: req.body.participation,
    })
    const lift = await liftService.createLift({
      ...req.body,
      idx: existing.length + 1,
    })
    res.json(lift)
  },
  deleteLift: async (req, res) => {
    const deleted = await liftService.deleteLift(req.params.id)
    res.json(deleted)
  },
  updateLift: async (req, res) => {
    const lift = await liftService.updateLift(req.params.id, req.body)
    res.json(lift)
  },
  getRank: async (req, res) => {
    const { participationId, liftType } = req.query
    const rank = await liftService.getRank(
      participationId as string,
      liftType as string
    )
    res.json(rank)
  },
  vote: async (req, res) => {
    const { id } = req.params
    const { idx, vote } = req.body

    const current = await liftService.getLift({ isLive: true })

    if (current === null) {
      res.status(400).json({ message: 'No live lift found' })
      return
    }

    const voted = await liftService.vote(current._id.toString(), idx, vote)
    res.json(voted)
  },
  fixLive: async (req, res) => {
    const live = await liftService.handleLive()
    res.json(live)
  },
  last: async (req, res) => {
    const last = await liftService.getLast()
    res.json(last)
  },
}
