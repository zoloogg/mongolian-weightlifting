import { Logout } from "@mui/icons-material"
import { Box, List } from "@mui/material"
import { Menu } from "../types"
import { FC } from "react"
import { DrawerItem } from "./DrawerItem"

interface Props {
  isOpen: boolean
  menus: Menu[][]
  allowedScopes: string[]
  onLogout?: () => void
}

export const Drawer: FC<Props> = ({
  isOpen,
  menus,
  allowedScopes,
  onLogout
}) => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      sx={{
        backgroundColor: theme => theme.palette.secondary.main,
        overflowY: 'auto',
        flexShrink: '0'
      }}
    >
      {
        menus.map((list, idx) => (
          <Box key={idx}>
            <List>
              {
                list.map((menuItem, i) => {
                  const { id, icon: ItemIcon, title, route, scopes, subMenus } = menuItem

                  // const badgeContent = (name !== undefined && menuBadges[name] !== 0) ? menuBadges[name] : undefined

                  const isRender = scopes.length === 0 || allowedScopes.some(e => scopes.includes(e))

                  return (
                    isRender && (
                      <DrawerItem
                        key={id}
                        id={id}
                        route={route}
                        title={title}
                        badgeContent={0}
                        icon={ItemIcon}
                        subMenus={subMenus}
                        isOpen={isOpen}
                        onClick={() => { }}
                      />)
                  )
                })
              }
            </List>
          </Box>
        ))
      }
      {
        !onLogout &&
        <>
          <Box
            flexGrow={1}
          />
          <Box>
            <DrawerItem
              title='Logout'
              icon={Logout}
              onClick={onLogout}
              id='logout'
              route=''
              isOpen={false}
            />
          </Box>
        </>
      }
    </Box>
  )
}