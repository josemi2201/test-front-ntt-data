import { Box, Grid, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../components/Header/Header'
import { ProductDetailActions } from '../components/ProductDetail/ProductDetailActions'
import { ProductDetailInfo } from '../components/ProductDetail/ProductDetailInfo'
import { LoadingIcon } from '../components/UI/LoadingIcon'
import { NotFound } from '../components/UI/NotFound'
import { showToast } from '../helpers/toast'
import { useData } from '../hooks/useData'

export const ProductDetail = () => {

  const { palette: { background } } = useTheme()
  const { id } = useParams()
  const { getProduct } = useData();
  
  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  
  const {
    id: productId,
    imgUrl,
  } = product

  useEffect(() => {
    getProduct(id)
      .then( product => setProduct(product))
      .catch( error => showToast(error.message, "error"))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <Header>
      {
        !productId 
          ? isLoading ? <LoadingIcon size={5}/> : <NotFound />
          : (
            <Grid
              container
              sx={sx.contProduct}
            >
              <Grid
                item
                xs={12} sm={6}
                sx={sx.contImg}
                component="section"
                >
                <Box
                  className='animate__animated animate__fadeIn'
                  component="img"
                  src={imgUrl}
                  sx={sx.img}
                />
              </Grid>
              <Grid
                item
                xs={12} sm={6}
                sx={sx.gridInfo}
                component="section"
              >
                <Box
                  sx={{
                    ...sx.module,
                    backgroundColor: background.paper,
                  }}
                >
                  <ProductDetailInfo product={product} />
                </Box>
                <Box
                  sx={{
                    ...sx.module,
                    backgroundColor: background.paper,
                  }}
                >
                  <ProductDetailActions product={product} />
                </Box>
              </Grid>
            </Grid>
          )
      }
    </Header>
  )
}

const sx = {
  contProduct: {
    height: "100%",
  },
  img: {
    width: "100%",
    borderRadius: 1,
  },
  gridInfo: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  module:{
    border: "1px solid grey",
    borderRadius: 1,
    margin: {xs:"0px", sm:"0 32px"},
    padding: "32px",
  }
}

