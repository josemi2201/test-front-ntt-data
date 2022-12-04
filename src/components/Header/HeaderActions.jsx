import { mdiCart } from '@mdi/js'
import { Box } from '@mui/material'
import React from 'react'
import { IconButton } from '../UI/IconButton'

export const HeaderActions = () => {
  
  const handleClickCart = () => {
    alert('Cart clicked')
  }

  return (
    <Box
      sx={sx.headerActions}
    >
      <IconButton
        icon={mdiCart}
        onClick={handleClickCart}
        haveBadge
        badgeContent={2}
        tooltip="Total items in cart: 2"
      />
    </Box>
  )
}

const sx = {
  headerActions: {
    marginRight: 2,
  },
}
