import { Dialog } from "@mui/material"
import { FC } from "react"

interface Props {
  isOpen: boolean
  onClose: () => void
}
export const AthleteDialog: FC<Props> = ({ onClose, isOpen }) => {
  return <Dialog onClose={onClose} open={isOpen}></Dialog>
}

