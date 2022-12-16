import { Grid } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { Header } from '../components/Header/Header';
import { ProductListItem } from '../components/ProductList/ProductListItem';
import { SearchField } from '../components/ProductList/SearchField';
import { showToast } from '../helpers/toast';
import { useData } from '../hooks/useData';

export const ProductsList = () => {
  
  const { getProducts } = useData();

  const [products, setProducts] = useState([])
  const isFirstRender = useRef(true)

  useEffect(() => {
    getProducts()
      .then( products => setProducts(products))
      .catch( error => showToast(error.message, "error"))
      .finally(() => isFirstRender.current = false)
  }, [])

  return (
    <Header>
      <Grid 
        container 
        sx={sx.contSearch}
        component="section"
        spacing={1}
      >
        <Grid 
          item 
          xs={12} md={3} lg={2}
        >
          <SearchField 
            isFirstRender={isFirstRender.current}
            setProducts={setProducts}
          />
        </Grid>
      </Grid>

      <Grid 
        container 
        spacing={6}
        sx={sx.contProducts}
      >
        {
          products.map((product, index) => (
            <Grid 
              key={product.id + index}
              item 
              className="animate__animated animate__fadeIn"
              xs={12} md={4} lg={3}
            >
              <ProductListItem product={product} />
            </Grid>
          ))
        }
      </Grid>
    </Header>
  )
}

const sx = {
  contSearch: {
    justifyContent: "flex-end",
    marginBottom: 2,
  },
  contProducts: {
    padding: 2
  }
}
