import { getLiftsQuery, getLiveParticipants } from "@/services/apiService"
import { Category, Club, Lift, Participation } from "@/types"
import { FC, useEffect, useState } from "react"
import { BoardParticipant } from "./BoardParticipant"

interface Props {
  category: Category
  clubs: Club[]
}
export const LiveCategory: FC<Props> = ({ category, clubs }) => {
  const [participants, setParticipants] = useState<Participation[]>([])
  const [lifts, setLifts] = useState<Lift[]>([])
  const [refresh, setRefresh] = useState(0)

  const [totalRank, setTotalRank] = useState<Record<string, number>>({})
  const [snatchesRank, setSnatchesRank] = useState<Record<string, number>>({})
  const [cleanRank, setCleanRank] = useState<Record<string, number>>({})

  useEffect(() => {
    const group = category.isA ? 'A' : 'B'

    getLiveParticipants(category._id, group).then((participants) => {
      setParticipants(participants)
      getLiftsQuery({}).then((lifts) => {
        console.log("B", lifts)
        setLifts(lifts)
      })

      const total: Record<string, number> = {}
      const snatches: Record<string, number> = {}
      const clean: Record<string, number> = {}

      for (const participant of participants) {
        if (participant.snatch !== 0 && participant.snatch !== undefined && participant.snatch !== null) {
          snatches[participant._id] = participant.snatch
        }
        if (participant.cleanAndJerk !== 0 && participant.cleanAndJerk !== undefined && participant.cleanAndJerk !== null) {
          clean[participant._id] = participant.cleanAndJerk
        }

        if (snatches[participant._id] !== undefined && clean[participant._id] !== undefined) {
          total[participant._id] = snatches[participant._id] + clean[participant._id]
        }
      }

      const sortedTotal = Object.entries(total).sort((a, b) => b[1] - a[1]).reduce((acc: Record<string, number>, el, idx) => {
        acc[el[0]] = idx + 1

        return acc
      }, {})
      console.log('sortedTotal: ', sortedTotal);
      const sortedSnatches = Object.entries(snatches).sort((a, b) => b[1] - a[1]).reduce((acc: Record<string, number>, el, idx) => {
        acc[el[0]] = idx + 1

        return acc
      }, {})
      const sortedClean = Object.entries(clean).sort((a, b) => b[1] - a[1]).reduce((acc: Record<string, number>, el, idx) => {
        acc[el[0]] = idx + 1

        return acc
      }, {})

      setTotalRank(sortedTotal)
      setSnatchesRank(sortedSnatches)
      setCleanRank(sortedClean)
    })
  }, [category, refresh])

  setTimeout(function () {
    setRefresh(refresh + 1)
  }, 3000);

  return (
    <div className="flex flex-col w-full">
      <div className="text-2xl font-bold">
        {category.name} ({category.isA ? 'A' : 'B'} групп)
      </div>
      <div className="flex">
        <table rules="all" className="w-full border border-white border-solid divide-y">
          <thead className="divide-y">
            <tr className="divide-x">
              <th colSpan={4}></th>
              <th colSpan={5}>Огцом</th>
              <th colSpan={5}>Түлхэлттэй</th>
              <th colSpan={2}>Нийт</th>
            </tr>
            <tr className="divide-x">
              <th></th>
              <th>Нэр</th>
              <th>D.O.B</th>
              <th>Клуб</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>Дүн</th>
              <th>Байр</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>Дүн</th>
              <th>Байр</th>
              <th>Дүн</th>
              <th>Байр</th>
            </tr>
          </thead>
          <tbody>
            {
              participants.map((participant, idx) => (
                <BoardParticipant
                  totalRank={totalRank[participant._id]}
                  snatchesRank={snatchesRank[participant._id]}
                  cleanRank={cleanRank[participant._id]}
                  key={participant._id}
                  participation={participant}
                  idx={idx + 1}
                  allLifts={lifts}
                  allClubs={clubs}
                />
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
