import { mdiCartArrowDown } from '@mdi/js';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { colorsDemo, storageDemo } from '../../data/demoData';
import { Button } from '../UI/Button';
import { Select } from '../UI/Select';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useData } from '../../hooks/useData';

const validationSchema = yup.object({
  storageCode: yup
      .string()
      .required('Color is required'),
  colorCode: yup
      .string()
      .required('Storage is required'),
});

export const ProductDetailActions = ({product}) => {

  const { addCard } = useData();
  
  const { values, errors, touched, handleSubmit, handleChange } = useFormik({
    initialValues: {
      storageCode: '',
      colorCode: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
        try {    
            const data = {
              id: product.id,
              ...values,
            }

            addCard(data)
        } catch (error) {
          alert(error.message)
        }
    },
  });

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
          onSubmit={handleSubmit}
          sx={sx.form}
        >
          <Select 
            label="Storage"
            name="storageCode"
            options={storageDemo}
            value={values.storageCode}
            handleChange={handleChange}
            touched={touched}
            errors={errors}
          />
          <Select 
            label="Color"
            name="colorCode"
            options={colorsDemo}
            value={values.colorCode}
            handleChange={handleChange}
            touched={touched}
            errors={errors}
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