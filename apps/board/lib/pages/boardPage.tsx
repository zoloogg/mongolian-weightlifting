'use client'
import { getClubs, getLiveCategories } from "@/services/apiService"
import { Category, Club } from "@/types"
import { FC, Suspense, useEffect, useState } from "react"
import { LiveCategory } from "../components/LiveCategory"

export const BoardPage: FC = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [clubs, setClubs] = useState<Club[]>([])

  useEffect(() => {
    getLiveCategories().then(setCategories)
    getClubs({}).then(setClubs)
  }, [])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-col justify-top items-start h-screen w-screen p-4">
        <div className="grid grid-cols-4">
          <div className="col-span-1 ">
            <img src="/logo-white.png" />
          </div>
          <div className="col-span-3 text-3xl text-center">
            <span>ХҮНДИЙН ӨРГӨЛТИЙН 2025 ОНЫ НАСАНД ХҮРЭГЧДИЙН ЭРЭГТЭЙЧҮҮДИЙН 71, ЭМЭГТЭЙЧҮҮДИЙН 28 ДАХЬ УДААГИЙН  УЛСЫН АВАРГА ШАЛГАРУУЛАХ ТЭМЦЭЭН</span>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4">
          {categories.map((category) => (
            <LiveCategory key={category._id} clubs={clubs} category={category} />
          ))}
        </div>
      </div>
    </Suspense>
  )
}