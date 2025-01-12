import { IBaseClub, IClub } from '../models'

export interface IClubService {
  getClubs: (query: any) => Promise<IClub[]>
  getClub: (id: string) => Promise<IClub | null>
  createClub: (club: IBaseClub) => Promise<IClub>
  updateClub: (id: string, club: IBaseClub) => Promise<boolean>
  deleteClub: (id: string) => Promise<boolean>
}
