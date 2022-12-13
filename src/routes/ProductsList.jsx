import { useTheme } from '@emotion/react';
import { Grid, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header/Header';
import { ProductListItem } from '../components/ProductList/ProductListItem';
import { useData } from '../hooks/useData';

export const ProductsList = () => {
  
  const { palette: { background, primary } } = useTheme()
  const { getProducts } = useData();

  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    getProducts()
      .then( products => setProducts(products))
      .catch( error => console.error(error.message))    
  }, [])

  useEffect(() => {
    getProducts()
      .then( products => {
        const filteredProducts = products.filter(product => 
          (product.brand && product.brand.toLowerCase().includes(search.toLowerCase())) ||
          (product.model && product.model.toLowerCase().includes(search.toLowerCase()))
        )
        setProducts(filteredProducts)
      })
      .catch( error => console.error(error.message))
  }, [search])

  const handleChangeSearch = (event) => {
    setSearch(event.target.value)
  }

  return (
    <Header>
      <Grid 
        container 
        sx={sx.contSearch}
        component="section"
      >
        <Grid 
          item 
          xs={12} md={3} lg={2}
        >
          <TextField
            label="Search"
            value={search}
            onChange={handleChangeSearch}
            fullWidth
            InputLabelProps={{
              style: { color: primary.contrastText },
            }}
            sx={{
              background: background.paper,
              color: "red",
            }}
          />
        </Grid>
      </Grid>

      <Grid 
        container 
        spacing={6}
        sx={sx.contProducts}
      >
        {
          products.map(product => (
            <Grid 
              key={product.id}
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
