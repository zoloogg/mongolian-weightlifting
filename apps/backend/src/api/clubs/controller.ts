import { IClubController } from '../../types/controllers'
import { clubService } from './../../services/'

export const clubController: IClubController = {
  getClubs: async (req, res) => {
    const clubs = await clubService.getClubs(req.query)

    res.status(200).json(clubs)
  },
  getClub: async (req, res) => {
    const club = await clubService.getClub(req.params.id)

    if (!club) {
      res.status(404).json({ message: 'Club not found' })
    }

    res.status(200).json(club)
  },
  createClub: async (req, res) => {
    console.log(req.body)
    const club = await clubService.createClub(req.body)

    res.status(201).json(club)
  },
  updateClub: async (req, res) => {
    const result = await clubService.updateClub(req.params.id, req.body)

    res.status(200).json(result)
  },
  deleteClub: async (req, res) => {
    const result = await clubService.deleteClub(req.params.id)

    res.status(200).json(result)
  },
}
