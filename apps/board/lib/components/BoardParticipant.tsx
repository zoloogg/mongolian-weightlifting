'use client'
import { FC, useEffect, useState } from "react";
import { Participation } from "@/types/participation";
import { Athlete, Club, Lift } from "@/types";
import { getAthlete, getClub, getLifts } from "@/services/apiService";
import { romanize } from "@/utils";

interface Props {
  idx: number
  participation: Participation
  allLifts?: Lift[]
  allClubs?: Club[]
  totalRank?: number
  snatchesRank?: number
  cleanRank?: number

}

export const BoardParticipant: FC<Props> = ({ idx, participation, allLifts, allClubs, totalRank, snatchesRank, cleanRank }) => {
  const [athlete, setAthlete] = useState<Athlete | null>(null)
  const [club, setClub] = useState<Club | null>(null)
  const [dob, setDob] = useState<string | null>(null)
  const [lifts, setLifts] = useState<Lift[]>([])

  const getLifts2 = async () => {
    console.log("A", allLifts)
    const l = allLifts?.filter((lift) => lift.participation === participation._id) ?? []
    console.log(l)
    return l
  }

  const getClub2 = async (clubId: string) => {
    const c = allClubs?.find((club) => club._id === clubId) ?? null
    return c
  }

  useEffect(() => {
    getAthlete(participation.athlete).then((athlete) => {
      setAthlete(athlete)

      if (athlete.dob) {
        const d = new Date(athlete.dob)
        d.setHours(d.getHours() + 8);

        setDob(d.toISOString().split('T')[0])
      }

      getClub2(athlete.club).then((club) => {
        setClub(club)
      })

      getLifts2().then((lifts) => {
        if (lifts.length < 6) {
          const missing = 6 - lifts.length
          for (let i = 0; i < missing; i++) {
            lifts.push({ weight: 0, _id: '', participation: '', results: [null, null, null], override: false, verdict: null, isLive: false })
          }
        }

        setLifts(lifts)
      })
    })
  }, [participation])

  const LiftBox = ({ lift }: { lift: Lift }) => {
    const className = [
      'text-center',
    ]
    if (lift.isLive) {
      className.push('animate-pulse')
      className.push('bg-orange-500')
      className.push('text-white')
    } else if (lift.verdict === 'success') {
      className.push('bg-green-500')
      className.push('text-white')
    } else if (lift.verdict === 'fail') {
      className.push('bg-red-500')
      className.push('text-white')
    }

    return (
      <td className={className.join(' ')}>
        {lift.weight === -1 ? "-" : ''}
        {(lift.weight !== 0 && lift.weight > 0) ? lift.weight : ''}
      </td>
    )
  }

  const Ranking: FC<{ val: number }> = ({ val }) => {
    const className = ['text-center font-bold']
    if (val === 1) {
      className.push('text-yellow-500')
    }
    if (val === 2) {
      className.push('text-gray-500')
    }
    if (val === 3) {
      className.push('text-[#CD7F32]')
    }

    return (
      <span className={className.join(' ')}>{romanize(val)} </span>
    )
  }

  return (
    <tr className="divide-x divide-y">
      <td>{idx}</td>
      <td>{[athlete?.lastName, athlete?.firstName].join('. ')}</td>
      <td>{dob}</td>
      <td>{club?.name}</td>
      {
        lifts.slice(0, 3).map((lift) => <LiftBox lift={lift} />)
      }
      <td className="text-center">
        {Math.floor(participation.snatch)}
      </td>
      <td className="text-center">
        {<Ranking val={snatchesRank ?? 0} />}
      </td>
      {
        lifts.slice(3, 6).map((lift) => <LiftBox lift={lift} />)
      }
      <td className="text-center">
        {Math.floor(participation.cleanAndJerk)}
      </td>
      <td className="text-center">
        {<Ranking val={cleanRank ?? 0} />}
      </td>
      <td className="text-center">
        {participation.snatch !== undefined && participation.cleanAndJerk !== undefined ? Math.floor(participation.snatch) + Math.floor(participation.cleanAndJerk) : ''}
      </td>
      <td className="text-center">
        {<Ranking val={totalRank ?? 0} />}
      </td>
    </tr>
  )
}

