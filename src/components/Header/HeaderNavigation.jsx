import { mdiArrowLeft } from '@mdi/js'
import { Avatar, Box, Breadcrumbs, IconButton as MuiIconButton, Link, useTheme } from '@mui/material'
import logoImg from '../../assets/logo.png'
import { IconButton } from '../UI/IconButton'
import React from 'react'

export const HeaderNavigation = () => {

  const { palette: { primary } } = useTheme()

  const handleClickLogo = () => {
    alert('Logo clicked')
  }

  const handleClickPreviousPage = () => {
    alert('PreviousPage clicked')
  }

  return (
    <Box
      sx={sx.headerNavigation}
    >
      <MuiIconButton onClick={handleClickLogo}>
        <Avatar src={logoImg} />
      </MuiIconButton>
      <IconButton
        icon={mdiArrowLeft}
        onClick={handleClickPreviousPage}
        size={1.3}
        tooltip="Previous page"
      />
      <Breadcrumbs color={primary.contrastText}>
        <Link 
          underline="hover" 
          color="inherit" 
          href="/product"
        >
          Product
        </Link>
        <Link 
          underline="hover" 
          color="inherit" 
          href="/product/z45a56465w"
        >
          Mobile 1
        </Link>
      </Breadcrumbs>
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