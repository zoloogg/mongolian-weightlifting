import { Athlete } from '../../database'
import { IAthleteService } from '../../types/services'
import { transformQuery } from './utils'

export const athleteService: IAthleteService = {
  createAthlete: async (athlete) => {
    const newAthlete = new Athlete(athlete)
    return newAthlete.save()
  },
  getAthletes: async (query) => {
    const athletes = await Athlete.find(transformQuery(query))
    return athletes
  },
  getAthlete: async (id) => {
    const athlete = await Athlete.findById(id)
    return athlete
  },
  updateAthlete: async (id, athlete) => {
    const result = await Athlete.findByIdAndUpdate(id, {
      $set: athlete,
    })
    return result?.isModified() ?? false
  },
  deleteAthlete: async (id) => {
    const deletedAthlete = await Athlete.findByIdAndUpdate(id, {
      $set: { isDeleted: true },
    })
    return deletedAthlete?.isModified() ?? false
  },
}
