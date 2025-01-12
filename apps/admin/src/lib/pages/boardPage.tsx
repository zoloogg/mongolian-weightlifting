'use client'

import { FC, useEffect, useState } from 'react'
import { Category } from '../../types'
import { getLiveCategories } from '../../services/apiService'
import { BoardCategory } from '../../components/BoardCategory'

export const BoardPage: FC = () => {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    getLiveCategories().then((categories) => {
      setCategories(categories)
    })
  }, [])

  return (
    <>
      {
        categories.map((category) => (
          <BoardCategory key={category._id} category={category} />
        ))
      }
    </>
  )
}
