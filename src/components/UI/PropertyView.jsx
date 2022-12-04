import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

export const PropertyView = ({description, value}) => {
  return (
    <Box 
      component="li"
    >
      <Box
        sx={sx.contProperty}
      >
        <Typography
          sx={sx.description}
        >
          {description}: 
        </Typography>
        <Typography
          sx={sx.value}
        >
          { value }
        </Typography>
      </Box>
    </Box>
  )
}

const sx = {
  contProperty: {
    display: "flex",
  },
  description: {
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  value: {
    marginLeft: 1,
  }
}

PropertyView.propTypes = {
  description: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

