'use client'

import { FC, useEffect, useState } from "react"
import { getCompetitions } from "../../services/apiService"
import { Competition } from "../../types"
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import Link from "next/link"

export const CompetitionsPage: FC = () => {
  const [competitions, setCompetitions] = useState<Competition[]>([])

  useEffect(() => {
    getCompetitions({}).then((res) => {
      setCompetitions(res)
    })
  }, [])

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
              competitions.map((competition) => (
                <TableRow key={competition._id}>
                  <TableCell>{competition._id}</TableCell>
                  <TableCell>{competition.name}</TableCell>
                  <TableCell>
                    <Box
                      display="flex"
                      gap={2}
                    >
                      <Link href={`/competitions/${competition._id}/categories`}>
                        <Button>Categories</Button>
                      </Link>
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
