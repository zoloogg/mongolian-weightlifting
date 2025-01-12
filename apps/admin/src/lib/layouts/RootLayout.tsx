'use client'

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { FunctionComponent, ReactNode } from 'react'
import { LoggedLayout } from './LoggedLayout'
import { menus } from '../../misc'

interface Props {
  children: ReactNode
}


export const COLORS = {
  primary: {
    main: '#fdc414'
  },
  secondary: {
    main: '#201b43',
    contrastText: '#fff'
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    }
  },
  typography: {
    fontFamily: '\'SF Pro Display\',\'Open Sans\', sans-serif'
  },
  palette: {
    primary: COLORS.primary,
    secondary: COLORS.secondary,
    background: {
      default: '#FAFAFA'
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        color: 'secondary'
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 0
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          margin: 0
        }
      }
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    },
    MuiIconButton: {
      defaultProps: {
        color: 'secondary'
      }
    },
    MuiTextField: {
      defaultProps: {
        size: 'small'
      },
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.default,
          borderRadius: '4px'
        })
      }
    },
    MuiSelect: {
      defaultProps: {
        size: 'small'
      },
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.default,
          borderRadius: '4px'
        })
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '1rem'
        }
      }
    }
  }
})


export const RootLayout: FunctionComponent<Props> = ({ children }) => {
  return (
    <html suppressHydrationWarning>
      <body
        style={{
          height: '100vh'
        }}
      >
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <LoggedLayout menus={menus} >
            {children}
          </LoggedLayout>
        </ThemeProvider>
      </body>
    </html >
  )
}
