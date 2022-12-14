import { mdiCartArrowDown } from '@mdi/js';
import { Box, Typography } from '@mui/material';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import * as yup from 'yup';
import { showToast } from '../../helpers/toast';
import { useData } from '../../hooks/useData';
import { Button } from '../UI/Button';
import { Select } from '../UI/Select';


const validationSchema = yup.object({
  storageCode: yup
      .string()
      .required('Color is required'),
  colorCode: yup
      .string()
      .required('Storage is required'),
});

export const ProductDetailActions = ({product}) => {

  const { addCart } = useData();
  
  const { values, errors, touched, isSubmitting, handleSubmit, handleChange } = useFormik({
    initialValues: {
      storageCode: '',
      colorCode: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
        try {    
            const data = {
              id: product.id,
              ...values,
            }

            await addCart(data)

            setSubmitting(false)
            
            showToast("Product added to cart", "success")
        } catch (error) {
          showToast(error.message, "error")
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
            options={product.storages}
            value={values.storageCode}
            handleChange={handleChange}
            touched={touched}
            errors={errors}
          />
          <Select 
            label="Color"
            name="colorCode"
            options={product.colors}
            value={values.colorCode}
            handleChange={handleChange}
            touched={touched}
            errors={errors}
          />
          <Button 
            icon={mdiCartArrowDown}
            text="Add to cart"
            type="submit"
            isLoading={isSubmitting}
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