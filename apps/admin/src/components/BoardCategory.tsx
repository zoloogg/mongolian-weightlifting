'use client'
import { FC, useEffect, useState } from "react"
import { Category } from "../types"
import { Participation } from "../types/participation"
import { getLiveParticipants } from "../services/apiService"
import { BoardParticipant } from "./BoardParticipant"
import { Table, TableBody } from "@mui/material"

interface Props {
  category: Category
}

export const BoardCategory: FC<Props> = ({ category }) => {
  const [participants, setParticipants] = useState<Participation[]>([])

  useEffect(() => {
    const group = category.isA ? 'A' : 'B'

    getLiveParticipants(category._id, group).then((participants) => {
      setParticipants(participants)
    })
  }, [category])

  return (
    <>
      <div>{category.name}</div>
      <Table>
        <TableBody>
          {
            participants.map((participant) => (
              <BoardParticipant key={participant._id} participation={participant} />
            ))
          }
        </TableBody>
      </Table>
    </>)
}

