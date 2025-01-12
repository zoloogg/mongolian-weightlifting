'use client'

import { FC, useEffect, useState } from "react";
import { Athlete, Lift } from "../types";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { updateLift } from "../services/apiService";

interface Props {
  open: boolean
  onClose: () => void
  onSave: (weight: number, liftId: string | undefined) => void
  athlete?: Athlete
  cnt: number
  lift?: Lift
}

export const LiftDialog: FC<Props> = ({ open, onClose, onSave, athlete, cnt, lift }) => {
  const [weight, setWeight] = useState(lift?.weight ?? 0)

  useEffect(() => {
    setWeight(lift?.weight ?? 0)
  }, [lift])

  const setLive = (value: boolean) => {
    updateLift(lift?._id, {
      isLive: value,
    })
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{athlete?.lastName} {athlete?.firstName} - {cnt}</DialogTitle>
      <DialogContent>
        <TextField type="number" label="Weight" value={weight} onChange={(e) => { setWeight(parseInt(e.target.value)) }} />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => {
          onSave(weight, lift?._id)
        }}>Save</Button>
        <Button color="success" onClick={() => {
          setLive(true)
        }}>LIVE</Button>
        <Button color="error" onClick={() => {
          setLive(false)
        }}>KILL LIVE</Button>

      </DialogActions>
    </Dialog>
  )
}
