'use client'

import { getLiveLift, vote } from "@/services/apiService"
import { Lift } from "@/types"
import { useSearchParams } from "next/navigation"
import { FC, useEffect, useState } from "react"

export const VotePage: FC = () => {
  const searchParams = useSearchParams()
  const idx = searchParams.get('idx')

  // const [lift, setLift] = useState<Lift | null>(null)

  // useEffect(() => {
  //   getLiveLift().then((lift) => {
  //     setLift(lift)
  //   })
  // }, [])

  // setTimeout(function () {
  //   window.location.reload();
  // }, 30000);

  const handleVote = (myVote: boolean) => {
    if (idx === null) return

    vote('TBA', parseInt(idx), myVote).then((res) => {
      console.log(res)
    })
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* <div>
        {JSON.stringify(lift, null, 4)}
      </div> */}
      <div className="flex md:flex-row flex-col justify-around items-center h-screen">

        <button onClick={() => handleVote(true)}><div className='w-64 h-64 bg-white rounded-full'></div></button>
        <button onClick={() => handleVote(false)}><div className='w-64 h-64 bg-red-500 rounded-full'></div></button>
      </div>
    </div >
  )
}
