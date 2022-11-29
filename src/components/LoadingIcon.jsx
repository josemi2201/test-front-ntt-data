import { mdiLoading } from '@mdi/js';
import Icon from '@mdi/react';
import { Box, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';


export const LoadingIcon = ({spin = 0.7}) => {

  const { palette: {primary}} = useTheme()

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        padding: 60,
      }}
    >
      <Icon 
          path={mdiLoading} 
          // size={size} 
          color={primary.main}
          spin={spin}
          
      />
    </Box>
  )
}

LoadingIcon.propTypes = {
  size: PropTypes.number,
  spin: PropTypes.number,
}
