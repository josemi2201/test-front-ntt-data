import { mdiLoading } from '@mdi/js';
import Icon from '@mdi/react';
import { Box, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';


export const LoadingIcon = ({spin = 0.7, size = 1}) => {

  const { palette: {secondary}} = useTheme()

  return (
    <Box
      sx={sx.cont}
    >
      <Icon 
          path={mdiLoading} 
          size={size} 
          color={secondary.main}
          spin={spin}
          
      />
    </Box>
  )
}

const sx = {
  cont: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
}

LoadingIcon.propTypes = {
  size: PropTypes.number,
  spin: PropTypes.number,
}
