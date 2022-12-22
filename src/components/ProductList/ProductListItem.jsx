import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  useTheme
} from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { useNavigate } from "react-router-dom";

const DEFAULT_IMAGE =
  "https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311_960_720.jpg";

export const ProductListItem = ({product}) => {

  const {
    id,
    brand,
    model,
    description,
    priceDescription,
    imgUrl
  } = product;

  const { palette: { secondary } } = useTheme();
  const navigate = useNavigate();

  const handleClickProduct = () => {

    navigate(`/product/${id}`);

  };

  return (
    <Box>
      <Card
        onClick={handleClickProduct}
        sx={sx.card}
      >
        <CardMedia
          alt={description}
          component="img"
          loading="lazy"
          onError={({target}) => {

            target.onError = null;
            target.src = DEFAULT_IMAGE;

          }}
          src={imgUrl}
          sx={sx.img}
        />
        <CardContent>
          <Typography
            variant="h5"
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
            sx={sx.price}
            variant="h5"
          >
            {priceDescription}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );

};

const sx = {
  card: {
    borderRadius: "0px",
    cursor: "pointer",
    minHeight: "250px"
  },
  img: {
    height: "274px"
  },
  price: {
    fontWeight: "bold"
  }
};

ProductListItem.propTypes = {
  product: PropTypes.object.isRequired
};
