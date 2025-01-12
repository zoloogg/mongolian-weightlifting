import { Types } from 'mongoose'
import { Club } from '../../database'
import { IClubService } from '../../types/services'
import { transformQuery } from './utils'
export const clubService: IClubService = {
  createClub: async (club) => {
    const newClub = await Club.create(club)
    return newClub
  },
  getClub: async (id) => {
    const club = await Club.findById(new Types.ObjectId(id))
    return club
  },
  getClubs: async (query) => {
    const clubs = await Club.find(transformQuery(query))
    return clubs
  },
  updateClub: async (id, club) => {
    const result = await Club.findByIdAndUpdate(new Types.ObjectId(id), {
      $set: club,
    })

    return result?.isModified() === true
  },
  deleteClub: async (id) => {
    const result = await Club.findByIdAndUpdate(new Types.ObjectId(id), {
      $set: { isDeleted: true },
    })

    return result?.isModified() === true
  },
}
