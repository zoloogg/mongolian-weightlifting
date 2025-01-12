import { FunctionComponent, ReactNode, useState } from 'react'
import { ExpandLess, ExpandMore, SvgIconComponent } from '@mui/icons-material'
import { Badge, Collapse, List, ListItemButton, ListItemIcon, ListItemText, SvgIcon } from '@mui/material'
import Link from 'next/link'
import { Menu } from '../types'

interface ButtonProps {
  route: string
  text: string
  onClick: any
  isSub?: boolean
  badgeContent?: number
  ItemIcon: SvgIconComponent
  right?: ReactNode
  isOpen: boolean
}

interface Props {
  id: string
  icon: SvgIconComponent
  title: string
  route: string
  badgeContent?: number
  onClick: any
  isSub?: boolean
  right?: ReactNode
  subMenus?: Menu[]
  isOpen: boolean
}

const LinkButton: FunctionComponent<ButtonProps> = (props) => {
  return (
    <ListItemButton onClick={props.onClick}>
      <ListItemIcon sx={{ mr: props.isOpen ? 1 : 0 }}>
        {props.badgeContent !== undefined
          ? (
            <Badge
              max={9999}
              badgeContent={props.badgeContent}
              color='primary'
            >
              <SvgIcon
                component={props.ItemIcon}
                sx={{
                  color: theme => theme.palette.secondary.contrastText
                }}
              />
            </Badge>
          )
          : <props.ItemIcon
            sx={{
              color: theme => theme.palette.secondary.contrastText
            }}
          />}
      </ListItemIcon>
      {props.isOpen &&
        <ListItemText
          primary={props.text}
          sx={{
            color: theme => theme.palette.secondary.contrastText
          }}
        />}
      {props.isOpen && props.right}
    </ListItemButton>
  )
}

export const DrawerItem: FunctionComponent<Props> = (props) => {
  const { route, subMenus, isSub } = props

  const [open, handleOpen] = useState(false)

  return (
    <>
      {subMenus !== undefined
        ? <LinkButton
          isOpen={props.isOpen}
          route={props.route}
          text={props.title}
          ItemIcon={props.icon}
          onClick={() => { handleOpen(!open) }}
          right={open ? <ExpandLess className='text-white' /> : <ExpandMore className='text-white' />}
        />
        : (
          <Link href={route} passHref>
            <LinkButton
              route={route}
              onClick={props.onClick}
              isSub={isSub}
              text={props.title}
              ItemIcon={props.icon}
              badgeContent={props.badgeContent}
              isOpen={props.isOpen}
            />
          </Link>
        )}

      {subMenus !== undefined &&
        <Collapse hidden={!props.isOpen} in={open}>
          <List component='div'>
            {subMenus.map((sub, j) => (
              <StoraDrawerItem
                key={sub.id}
                id={sub.id}
                route={sub.route}
                isSub
                badgeContent={props.badgeContent}
                title={sub.title}
                icon={sub.icon}
                onClick={props.onClick}
                isOpen={props.isOpen}
              />
            ))}
          </List>
        </Collapse>}
    </>
  )
}
