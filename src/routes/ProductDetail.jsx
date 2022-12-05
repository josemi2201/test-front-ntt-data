import { Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../components/Header/Header'
import { ProductDetailActions } from '../components/ProductDetail/ProductDetailActions'
import { ProductDetailInfo } from '../components/ProductDetail/ProductDetailInfo'
import { useData } from '../hooks/useData'

export const ProductDetail = () => {

  const { getProduct } = useData();

  const { id } = useParams()
  const [product, setProduct] = useState({})

  const { 
    imgUrl,
  } = product

  useEffect(() => {
    getProduct(id)
      .then( product => setProduct(product))
      .catch( error => alert(error.message))
  }, [])

  return (
    <Header>
      <Grid
        container
        sx={sx.contProduct}
      >
        <Grid
          item
          xs={6}
          sx={sx.contImg}
          component="section"
          >
          <Box
            component="img"
            src={imgUrl}
            sx={sx.img}
          />
        </Grid>
        <Grid
          item
          xs={6}
          sx={sx.gridInfo}
          component="section"
        >
          <Box
            sx={sx.module}
          >
            <ProductDetailInfo product={product} />
          </Box>
          <Box
            sx={sx.module}
          >
            <ProductDetailActions product={product} />
          </Box>
        </Grid>
      </Grid>
    </Header>
  )
}

const PADDING_INFO = 32

const sx = {
  contProduct: {
    height: "100%",
  },
  img: {
    width: "100%",
    borderRadius: 2,
  },
  gridInfo: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  module:{
    border: "1px solid grey",
    borderRadius: 2,
    margin: "0 32px",
    padding: `${PADDING_INFO}px`,
    backgroundColor: "white",
  }
}

