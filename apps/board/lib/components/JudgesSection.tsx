'use client'
import { getLastResult, getLiveLift } from "@/services/apiService"
import { Lift } from "@/types"
import { FC, useEffect, useState } from "react"

export const JudgesSection: FC = () => {
  const [lift, setLift] = useState<Lift | null>(null)
  const [last, setLast] = useState<Lift['results']>([null, null, null])

  useEffect(() => {
    getLiveLift().then((lift) => {
      setLift(lift)
    })
    getLastResult().then((last) => {
      setLast(last)
    })
  }, [])

  // setInterval(() => {
  //   getLiveLift().then((lift) => {
  //     setLift(lift)
  //   })
  //   getLastResult().then((last) => {
  //     setLast(last)
  //   })
  // }, 10000)

  const Circ = ({ key, color }: { key: number, color: string }) => {
    return (
      <div className={`w-32 h-32 ${color} rounded-full`}></div >
    )
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex md:flex-row flex-col justify-around items-center gap-2">
        {
          lift?.results.some((result) => result !== null) ?
            lift?.results.map((result, idx) => (
              <Circ key={idx} color={result === null ? 'bg-blue-300' : 'bg-green-300'} />
            ))
            :
            last.map((result, idx) => (
              <Circ key={idx} color={result === null ? 'bg-blue-300' : (result === true ? 'bg-white' : 'bg-red-500')} />
            ))
        }
      </div>
    </div>
  )
}
