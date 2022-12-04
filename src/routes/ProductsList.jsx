import { Grid, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header/Header';
import { ProductListItem } from '../components/ProductList/ProductListItem';
import { useData } from '../hooks/useData';

export const ProductsList = () => {

  const { getProducts } = useData();

  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    setProducts(getProducts())
  }, [])

  useEffect(() => {
    const filteredProducts = getProducts().filter(product => 
      (product.brand && product.brand.toLowerCase().includes(search.toLowerCase())) ||
      (product.model && product.model.toLowerCase().includes(search.toLowerCase()))
    )
    setProducts(filteredProducts)
  }, [search])

  const handleChangeSearch = (event) => {
    setSearch(event.target.value)
  }

  return (
    <Header>
      <Grid 
        container 
        sx={sx.contSearch}
      >
        <Grid 
          item 
          xs={6} md={3} lg={2}
        >
          <TextField
            label="Search"
            value={search}
            onChange={handleChangeSearch}
            fullWidth
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
              xs={6} md={4} lg={3}  
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
