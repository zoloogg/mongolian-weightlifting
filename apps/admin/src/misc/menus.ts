import { AdminPanelSettings, Assignment } from '@mui/icons-material'
import { AccountCircle } from '@mui/icons-material'
import { Menu } from '../types'

export const menus: Menu[][] = [
  [
    {
      id: '1',
      icon: AccountCircle,
      title: 'Athletes',
      route: '/athletes',
      scopes: [],
    },
  ],
  [
    {
      id: '2',
      icon: Assignment,
      title: 'Competitions',
      route: '/competitions',
      scopes: [],
    },
  ],
  [
    {
      id: '3',
      icon: AdminPanelSettings,
      title: 'Board admin',
      route: '/board',
      scopes: [],
    },
  ],
]
