import { athleteService, clubService } from '../../services'
import { IAthleteController } from '../../types/controllers'

export const athleteController: IAthleteController = {
  createAthlete: async (req, res) => {
    const { club } = req.body

    const existingClub = await clubService.getClub(club)
    if (!existingClub) {
      res.status(404).json({ message: 'Club not found' })
      return
    }

    const athlete = await athleteService.createAthlete(req.body)
    res.status(201).json(athlete)
  },
  getAthletes: async (req, res) => {
    const athletes = await athleteService.getAthletes(req.query)
    res.status(200).json(athletes)
  },
  getAthlete: async (req, res) => {
    const athlete = await athleteService.getAthlete(req.params.id)
    res.status(200).json(athlete)
  },
  updateAthlete: async (req, res) => {
    const athlete = await athleteService.updateAthlete(req.params.id, req.body)
    res.status(200).json(athlete)
  },
  deleteAthlete: async (req, res) => {
    const athlete = await athleteService.deleteAthlete(req.params.id)
    res.status(200).json(athlete)
  },
}
