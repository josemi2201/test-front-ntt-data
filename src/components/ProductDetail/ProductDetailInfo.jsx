import { Box, Chip, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { PropertyView } from '../UI/PropertyView';

export const ProductDetailInfo = ({product}) => {

  const {
    description,
    priceDescription,
  } = product

  return (
    <Box>
      <Typography
        variant="h4"
      >
        {description}
      </Typography>

      <Chip 
        label={priceDescription} 
        color="primary"
        size='medium'
        sx={sx.priceChip}
      />

      <Box component="hr" />
      <Box
        component="ul"
      > 
        <PropertyView
          description="model"
          value={""}
        />
        <PropertyView
          description="processor"
          value={""}
        />
        <PropertyView
          description="RAM"
          value={""}
        />
        <PropertyView
          description="S.O."
          value={""}
        />
        <PropertyView
          description="screen resolution"
          value={""}
        />
        <PropertyView
          description="battery"
          value={""}
        />
        <PropertyView
          description="cameras"
          value={""}
        />
        <PropertyView
          description="dimensions"
          value={""}
        />
        <PropertyView
          description="weight"
          value={""}
        />
      </Box>
    </Box>
  )
}

const sx = {
  priceChip: {
    fontSize: '24px',
  }
}

ProductDetailInfo.propTypes = {
  product: PropTypes.object.isRequired
}