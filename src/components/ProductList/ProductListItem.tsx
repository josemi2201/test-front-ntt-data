import React from 'react'
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Avatar, Card, Typography, CardMedia, CardContent } from '@mui/material';

export const ProductListItem = ({product}) => {

  const { id, description, priceDescription, imgUrl} = product


  const handleClickProduct = () => {
    alert(`You clicked on product ${id}`)
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

ProductListItem.prototype = {
  product: PropTypes.object.isRequired
}
