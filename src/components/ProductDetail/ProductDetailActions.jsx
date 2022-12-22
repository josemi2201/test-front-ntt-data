import { mdiCartArrowDown } from "@mdi/js";
import { Box, Typography } from "@mui/material";
import { useFormik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import * as yup from "yup";
import { showToast } from "../../helpers/toast";
import { useCart } from "../../hooks/useCart";
import { Button } from "../UI/Button";
import { Select } from "../UI/Select";

const TITLE_MODULE = "Options";

const validationSchema = yup.object({
  colorCode: yup.
    string().
    required("Storage is required"),
  storageCode: yup.
    string().
    required("Color is required")
});

export const ProductDetailActions = ({product}) => {

  const { addCart } = useCart();

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleSubmit,
    handleChange
  } = useFormik({
    initialValues: {
      colorCode: "",
      storageCode: ""
    },
    onSubmit: async (valuesForm, { setSubmitting }) => {

      try {

        const data = {
          id: product.id,
          ...valuesForm
        };

        await addCart(data);

        setSubmitting(false);

        showToast(
          "Product added to cart",
          "success"
        );

      } catch (error) {

        const errorMessage = error.response?.data?.error
          ? error.response.data.error
          : error.message;

        showToast(errorMessage, "error");

      }

    },
    validationSchema
  });

  return (
    <Box>
      <Typography
        sx={sx.title}
        variant="h4"
      >
        {TITLE_MODULE}
      </Typography>
      <Box component="hr" />
      <Box>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={sx.form}
        >
          <Select
            errors={errors}
            handleChange={handleChange}
            label="Storage"
            name="storageCode"
            options={product.storages}
            touched={touched}
            value={values.storageCode}
          />
          <Select
            errors={errors}
            handleChange={handleChange}
            label="Color"
            name="colorCode"
            options={product.colors}
            touched={touched}
            value={values.colorCode}
          />
          <Button
            icon={mdiCartArrowDown}
            isLoading={isSubmitting}
            text="Add to cart"
            type="submit"
          />
        </Box>
      </Box>
    </Box>
  );

};

const sx = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
    marginTop: 3
  }
};

ProductDetailActions.propTypes = {
  product: PropTypes.object.isRequired
};
