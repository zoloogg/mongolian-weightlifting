import { getLifts, getLiftsQuery, getLiveParticipants } from "@/services/apiService"
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

  useEffect(() => {
    const group = category.isA ? 'A' : 'B'

    getLiveParticipants(category._id, group).then((participants) => {
      setParticipants(participants)
      getLiftsQuery({}).then((lifts) => {
        console.log("B", lifts)
        setLifts(lifts)
      })
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
                <BoardParticipant key={participant._id} participation={participant} idx={idx + 1} allLifts={lifts} allClubs={clubs} />
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
