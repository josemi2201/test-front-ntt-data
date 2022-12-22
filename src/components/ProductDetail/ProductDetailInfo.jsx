import { Box, Typography, useTheme } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { PropertyView } from "../UI/PropertyView";

export const ProductDetailInfo = ({product}) => {

  const {
    brand,
    model,
    priceDescription,
    processor,
    ram,
    so,
    screenResolution,
    battery,
    cameras,
    dimensions,
    weight
  } = product;

  const { palette: { secondary } } = useTheme();

  return (
    <Box>
      <Typography
        variant="h4"
      >
        {model}
      </Typography>
      <Typography
        sx={{
          color: secondary.light
        }}
      >
        {brand}
      </Typography>
      <Typography
        variant="h5"
        sx={sx.price}
      >
        {priceDescription}
      </Typography>

      <Box component="hr" />
      <Box
        component="ul"
      >
        <PropertyView
          description="model"
          value={model}
        />
        <PropertyView
          description="processor"
          value={processor}
        />
        <PropertyView
          description="RAM"
          value={ram}
        />
        <PropertyView
          description="S.O."
          value={so}
        />
        <PropertyView
          description="screen resolution"
          value={screenResolution}
        />
        <PropertyView
          description="battery"
          value={battery}
        />
        <PropertyView
          description="cameras"
          value={cameras}
        />
        <PropertyView
          description="dimensions"
          value={dimensions}
        />
        <PropertyView
          description="weight"
          value={weight}
        />
      </Box>
    </Box>
  );

};

const sx = {
  price: {
    fontWeight: "bold"
  }
};

ProductDetailInfo.propTypes = {
  product: PropTypes.object.isRequired
};
