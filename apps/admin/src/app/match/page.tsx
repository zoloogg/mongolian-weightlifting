'use client'
import { Box } from "@mui/material"
import axios from "axios"
import { FC, useEffect, useState } from "react"

const API_URL = 'http://localhost:4000/api/v1/archery'

const Page: FC = () => {
  const [category, setCategory] = useState('')
  const [name1, setName1] = useState('')
  const [name2, setName2] = useState('')

  const [arrow1, setArrow1] = useState(0)
  const [arrow2, setArrow2] = useState(0)
  const [arrow3, setArrow3] = useState(0)
  const [arrow4, setArrow4] = useState(0)
  const [arrow5, setArrow5] = useState(0)
  const [arrow6, setArrow6] = useState(0)

  const [arrow7, setArrow7] = useState(0)
  const [arrow8, setArrow8] = useState(0)
  const [arrow9, setArrow9] = useState(0)
  const [arrow10, setArrow10] = useState(0)
  const [arrow11, setArrow11] = useState(0)
  const [arrow12, setArrow12] = useState(0)

  const [setScore1, setSetScore1] = useState(0)
  const [setScore2, setSetScore2] = useState(0)

  const sendData = () => {
    const data = {
      category,
      name: name1,
      arrow1,
      arrow2,
      arrow3,
      arrow4,
      arrow5,
      arrow6,
      setIdx: 1,
      setScore: setScore1,
    }
    axios.post(`${API_URL}/match/1`, data)

    const data2 = {
      category,
      name: name2,
      arrow1: arrow7,
      arrow2: arrow8,
      arrow3: arrow9,
      arrow4: arrow10,
      arrow5: arrow11,
      arrow6: arrow12,
      setIdx: 2,
      setScore: setScore2,
    }
    axios.post(`${API_URL}/match/2`, data2)
  }

  useEffect(() => {
    sendData()
  }, [category, name1, name2, arrow1, arrow2, arrow3, arrow4, arrow5, arrow6, setScore1, arrow7, arrow8, arrow9, arrow10, arrow11, arrow12, setScore2])
  return (
    <div>
      <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
      <Box
        display="flex"
        gap={2}
      >
        <input type="text" placeholder="Name 1" value={name1} onChange={(e) => setName1(e.target.value)} />
        <input type="number" value={arrow1} onChange={(e) => setArrow1(Number(e.target.value))} />
        <input type="number" value={arrow2} onChange={(e) => setArrow2(Number(e.target.value))} />
        <input type="number" value={arrow3} onChange={(e) => setArrow3(Number(e.target.value))} />
        <input type="number" value={arrow4} onChange={(e) => setArrow4(Number(e.target.value))} />
        <input type="number" value={arrow5} onChange={(e) => setArrow5(Number(e.target.value))} />
        <input type="number" value={arrow6} onChange={(e) => setArrow6(Number(e.target.value))} />
        <input type="number" value={setScore1} onChange={(e) => setSetScore1(Number(e.target.value))} />
      </Box>
      <Box
        display="flex"
        gap={2}
      >
        <input type="text" placeholder="Name 2" value={name2} onChange={(e) => setName2(e.target.value)} />
        <input type="number" value={arrow7} onChange={(e) => setArrow7(Number(e.target.value))} />
        <input type="number" value={arrow8} onChange={(e) => setArrow8(Number(e.target.value))} />
        <input type="number" value={arrow9} onChange={(e) => setArrow9(Number(e.target.value))} />
        <input type="number" value={arrow10} onChange={(e) => setArrow10(Number(e.target.value))} />
        <input type="number" value={arrow11} onChange={(e) => setArrow11(Number(e.target.value))} />
        <input type="number" value={arrow12} onChange={(e) => setArrow12(Number(e.target.value))} />
        <input type="number" value={setScore2} onChange={(e) => setSetScore2(Number(e.target.value))} />
      </Box>
    </div>
  )
}

export default Page
