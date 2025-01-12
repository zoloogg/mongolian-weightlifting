import { IBaseParticipation, IParticipation } from '../models'

export interface IParticipationService {
  getParticipation: (participationId: string) => Promise<IParticipation | null>
  getParticipations: (categoryId: string) => Promise<IParticipation[]>
  registerParticipation: (
    categoryId: string,
    athleteId: string,
    data: Partial<IBaseParticipation>
  ) => Promise<IParticipation>
  updateParticipation: (
    participationId: string,
    participation: Partial<IParticipation>
  ) => Promise<boolean>
  removeParticipation: (participationId: string) => Promise<boolean>
}
