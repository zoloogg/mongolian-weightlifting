'use client'

import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { Athlete } from '../../types'
import { getAthletes } from '../../services/apiService'

export const AthletesPage: FC = () => {
  const [athletes, setAthletes] = useState<Athlete[]>([])

  useEffect(() => {
    getAthletes({}).then((res) => {
      setAthletes(res)
    })
  }, [])

  return (
    <Box
      display='flex'
      flexDirection='column'
      gap={2}
    >
      <Box
        display='flex'
        justifyContent='end'
      >
        <Button variant="contained" color="primary">
          Add Athlete
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Last Name</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              athletes.map((athlete) => (
                <TableRow key={athlete._id}>
                  <TableCell>{athlete.lastName}</TableCell>
                  <TableCell>{athlete.firstName}</TableCell>
                  <TableCell>{athlete.gender}</TableCell>
                  <TableCell>{athlete.birthDate}</TableCell>
                  <TableCell>
                    <Box
                      display="flex"
                      gap={2}
                    >
                      <Button>Edit</Button>
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
