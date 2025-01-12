'use client'

import { FC, useEffect, useState } from "react";
import { Participation } from "../types/participation";
import { Athlete, Lift } from "../types";
import { createLift, getAthlete, getLifts, updateLift } from "../services/apiService";
import { Box, Button, TableCell, TableRow } from "@mui/material";
import { LiftDialog } from "./LiftDialog";

interface Props {
  participation: Participation
}

export const BoardParticipant: FC<Props> = ({ participation }) => {
  const [athlete, setAthlete] = useState<Athlete | null>(null)
  const [lifts, setLifts] = useState<Lift[]>([])
  const [open, setOpen] = useState(false)
  const [lift, setLift] = useState<Lift | null>(null)

  useEffect(() => {
    getAthlete(participation.athlete).then((athlete) => {
      setAthlete(athlete)
    })

    getLifts(participation._id).then((lifts) => {
      setLifts(lifts)
    })
  }, [participation])

  console.log(lifts)

  const handleSave = (weight: number, liftId: string | undefined) => {
    if (liftId) {
      updateLift(liftId, { weight })
    } else {
      createLift(participation._id, { weight })
    }
  }

  const getColor = (lift: Lift | undefined) => {
    if (lift === undefined || lift.results[0] === null) {
      return 'inherit'
    }

    const cnt = lift.results.reduce((acc, el) => acc + (el ? 1 : 0), 0) ?? 0

    console.log(lift.results, cnt)

    if (cnt >= 2) {
      return 'success'
    }
    else {
      return 'error'
    }
  }

  return (
    <TableRow>
      <TableCell>{athlete?.lastName} {athlete?.firstName}</TableCell>
      <TableCell><Button color={getColor(lifts[0])} onClick={() => { setOpen(true); setLift(lifts[0]) }}>{lifts[0]?.weight ?? 'Snatch 1'}</Button></TableCell>
      <TableCell><Button color={getColor(lifts[1])} onClick={() => { setOpen(true); setLift(lifts[1]) }}>{lifts[1]?.weight ?? 'Snatch 2'}</Button></TableCell>
      <TableCell><Button color={getColor(lifts[2])} onClick={() => { setOpen(true); setLift(lifts[2]) }}>{lifts[2]?.weight ?? 'Snatch 3'}</Button></TableCell>
      <TableCell><Button color={getColor(lifts[3])} onClick={() => { setOpen(true); setLift(lifts[3]) }}>{lifts[3]?.weight ?? 'C&J 1'}</Button></TableCell>
      <TableCell><Button color={getColor(lifts[4])} onClick={() => { setOpen(true); setLift(lifts[4]) }}>{lifts[4]?.weight ?? 'C&J 2'}</Button></TableCell>
      <TableCell><Button color={getColor(lifts[5])} onClick={() => { setOpen(true); setLift(lifts[5]) }}>{lifts[5]?.weight ?? 'C&J 3'}</Button></TableCell>
      <TableCell>
        <LiftDialog open={open} onClose={() => { setOpen(false) }} onSave={handleSave} athlete={athlete} cnt={1} lift={lift} />
      </TableCell>
    </TableRow>
  )
}
