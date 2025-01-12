'use client'

import { FC, ReactNode, useState } from 'react'
import { AppBar, Box, SxProps, TextField, Theme } from '@mui/material'
import { Search } from '@mui/icons-material'
import { Drawer } from '../../components/Drawer'
import { Menu } from '../../types'

interface Props {
  menus: Menu[][]
  extra?: ReactNode
  children: ReactNode
  onLogout?: () => void
  sx?: SxProps<Theme>
}

export const LoggedLayout: FC<Props> = ({ children, menus, extra, onLogout, sx }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <>
      <AppBar
        position='sticky'
        sx={{
          display: 'flex',
          flexDirection: 'row',
          padding: '1rem'
        }}
      >
        <Box sx={{ flexGrow: 1 }} />

        <Box display='flex' gap={1.5}>
          {extra}

          <TextField
            placeholder='Хайх...'
            variant='outlined'
            slotProps={{
              input: {
                startAdornment: <Search />
              }
            }}
          />
        </Box>
      </AppBar>
      <Box
        display='flex'
        minHeight='calc(100vh - 72px)' // TODO css variable
        maxHeight='calc(100vh - 72px)'
        width='100vw'
        maxWidth='100vw'
        overflow='hidden'
      >
        <Drawer
          isOpen={isDrawerOpen}
          menus={menus}
          allowedScopes={[]}
          onLogout={onLogout}
        />
        <Box
          component='main'
          sx={{ flexGrow: 1, overflow: 'auto', padding: '1rem', ...sx }}
        >
          {children}
        </Box>
      </Box>
    </>
  )
}
