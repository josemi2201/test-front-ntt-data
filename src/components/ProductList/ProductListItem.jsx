import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ProductListItem = ({product}) => {

  const { id, description, priceDescription, imgUrl} = product
  
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
          <Typography>
            {description}
          </Typography>
          <Typography sx={sx.price}>
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
  },
  price: {
    fontWeight: "bold"
  }
}

ProductListItem.propTypes = {
  product: PropTypes.object.isRequired
}
