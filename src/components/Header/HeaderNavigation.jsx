import { mdiArrowLeft } from '@mdi/js'
import { Avatar, Box, IconButton as MuiIconButton } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import logoImg from '../../assets/logo.png'
import { IconButton } from '../UI/IconButton'
import { HeaderBreadcrumbs } from './HeaderBreadcrumbs'

export const HeaderNavigation = () => {

  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleClickLogo = () => {
    navigate
  }

  const handleClickPreviousPage = () => {
    navigate(-1)
  }

  return (
    <Box
      sx={sx.headerNavigation}
    >
      <MuiIconButton onClick={handleClickLogo}>
        <Avatar src={logoImg} />
      </MuiIconButton>
      {
        pathname !== "/product" && <IconButton
          icon={mdiArrowLeft}
          onClick={handleClickPreviousPage}
          size={1.3}
          tooltip="Previous page"
        />
      }
      <HeaderBreadcrumbs />
    </Box>
  )
}

const sx = {
  headerNavigation: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
}