import { SvgIconComponent } from '@mui/icons-material'

export interface Menu {
  id: string
  icon: SvgIconComponent
  title: string
  route: string
  scopes: string[]
  subMenus?: Menu[]
}
