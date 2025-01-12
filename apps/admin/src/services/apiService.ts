import { Athlete, Competition, Lift } from '../types'
import { Category } from '../types/category'
import { Participation } from '../types/participation'
import { sendGet, sendPatch, sendPost } from './utils'

const getAthletes = async (params: any): Promise<Athlete[]> => {
  const res = await sendGet<Athlete[]>('/v1/athletes', params)

  return res.data
}

const getAthlete = async (athleteId: string): Promise<Athlete> => {
  const res = await sendGet<Athlete>(`/v1/athletes/${athleteId}`, {})

  return res.data
}

const getCategories = async (
  competitionId: string,
  params: any
): Promise<Category[]> => {
  const res = await sendGet<Category[]>(
    `/v1/competitions/${competitionId}/categories`,
    params
  )

  return res.data
}

const updateCategory = async (
  competitionId: string,
  categoryId: string,
  params: any
): Promise<Category[]> => {
  const res = await sendPatch(
    `/v1/competitions/${competitionId}/categories/${categoryId}`,
    params
  )

  return res.data
}

const getCompetitions = async (params: any): Promise<Competition[]> => {
  const res = await sendGet<Competition[]>('/v1/competitions', params)

  return res.data
}

// Board
const getLiveCategories = async (): Promise<Category[]> => {
  const res = await sendGet<Category[]>('/v1/board/active-categories', {})

  return res.data
}

const getLiveParticipants = async (
  categoryId: string,
  group: string
): Promise<Participation[]> => {
  const res = await sendGet<Participation[]>(
    `/v1/participations/${categoryId}/athletes`,
    { group }
  )

  return res.data
}

const getLifts = async (participationId: string): Promise<Lift[]> => {
  const res = await sendGet<Lift[]>(`/v1/lifts/`, {
    participation: participationId,
  })

  return res.data
}

const updateLift = async (liftId: string, params: any): Promise<Lift> => {
  const res = await sendPatch(`/v1/lifts/${liftId}`, params)

  return res.data
}

const createLift = async (
  participationId: string,
  params: any
): Promise<Lift> => {
  const res = await sendPost(`/v1/lifts`, {
    participation: participationId,
    ...params,
  })

  return res.data
}

export {
  getAthletes,
  getAthlete,
  getCategories,
  updateCategory,
  getCompetitions,
  getLiveCategories,
  getLiveParticipants,
  getLifts,
  updateLift,
  createLift,
}
