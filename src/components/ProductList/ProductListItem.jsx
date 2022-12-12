import { Card, CardContent, CardMedia, Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ProductListItem = ({product}) => {

  const { id, brand, model, description, priceDescription, imgUrl} = product
  
  const { palette: { secondary } } = useTheme()
  const navigate = useNavigate();

  const handleClickProduct = () => {
    navigate(`/product/${id}`);
  }

  return (
    <Box>
      <Card 
        sx={sx.card}
        onClick={handleClickProduct}
      >
        <CardMedia
          component="img"
          alt={description}
          src={imgUrl}
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
            variant="h5"
            sx={sx.price}
          >
            {priceDescription}
          </Typography>
        </CardContent>
      </Card> 
    </Box>
  )
}

const sx = {
  card: {
    minHeight: "250px",
    cursor: "pointer",
    borderRadius: "0px",
  },
  price: {
    fontWeight: "bold"
  }
}

ProductListItem.propTypes = {
  product: PropTypes.object.isRequired
}
