import { AppBar, Box } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'
import { HeaderActions } from './HeaderActions'
import { HeaderNavigation } from './HeaderNavigation'

export const Header = ({children}) => {

  return (
    <Box
      sx={sx.header}
    >
      <AppBar
        component="nav"
        position="static"
        sx={sx.appbar}
      >
        <HeaderNavigation />
        <HeaderActions />
      </AppBar>
      <Box component="main">
        {children}
      </Box>
    </Box>
  )
}

const sx = {
  header: {
    display: 'flex',
    flexDirection: 'column',
  },
  appbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: "0 8px",
  },
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
}

