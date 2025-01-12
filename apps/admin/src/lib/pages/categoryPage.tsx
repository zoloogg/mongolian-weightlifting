'use client'

import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { Category } from '../../types'
import { getCategories, updateCategory } from '../../services/apiService'
import { useParams, useSearchParams } from 'next/navigation'

export const CategoryPage: FC = () => {
  const params = useParams()
  const competitionId = params['id'] as string

  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    getCategories(competitionId, {})
      .then((res) => {
        setCategories(res)
      })
  }, [])

  const toggle = (category: Category, type: 'A' | 'B') => {
    const updatedCategory = { [`is${type}`]: !category[type] }
    updateCategory(competitionId, category._id, updatedCategory)
  }

  return (
    <Box
      display='flex'
      flexDirection='column'
      gap={2}
    >
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              categories.map((category) => (
                <TableRow key={category._id}>
                  <TableCell>{category._id}</TableCell>
                  <TableCell>{category.name}</TableCell>
                  <TableCell>
                    <Box
                      display="flex"
                      gap={2}
                    >
                      <Button onClick={() => toggle(category, 'A')}>{category.isA ? 'Stop' : 'Start'} A</Button>
                      <Button onClick={() => toggle(category, 'B')}>{category.isB ? 'Stop' : 'Start'} B</Button>
                      <Button>Delete</Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
