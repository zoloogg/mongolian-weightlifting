import { IAthlete, IBaseAthlete } from '../models'

export interface IAthleteService {
  createAthlete: (athlete: IBaseAthlete) => Promise<IAthlete>
  getAthletes: (query: any) => Promise<IAthlete[]>
  getAthlete: (id: string) => Promise<IAthlete | null>
  updateAthlete: (id: string, athlete: IBaseAthlete) => Promise<boolean>
  deleteAthlete: (id: string) => Promise<boolean>
}
