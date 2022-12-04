import { mdiCartArrowDown } from '@mdi/js';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { colorsDemo, storageDemo } from '../../data/demoData';
import { Button } from '../UI/Button';
import { Select } from '../UI/Select';

export const ProductDetailActions = () => {

  return (
    <Box>
      <Typography
        variant="h4"
        sx={sx.title}
      >
        Options
      </Typography>
      <Box component="hr" />
      <Box>
        <Box
          component="form"
          onSubmit={()=>{}}
          sx={sx.form}
        >
          <Select 
            label="Storage"
            name="storage"
            options={storageDemo}
            value={""}
            handleChange={()=>{}}
            touched={""}
            errors={""}
          />
          <Select 
            label="Color"
            name="color"
            options={colorsDemo}
            value={""}
            handleChange={()=>{}}
            touched={""}
            errors={""}
          />
          <Button 
            icon={mdiCartArrowDown}
            text="Add to cart"
            type="submit"
          />
        </Box>
      </Box>
    </Box>
  )
}

const sx = {
  form:{
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    marginTop: 3,
  }
}

ProductDetailActions.propTypes = {
  product: PropTypes.object.isRequired
}