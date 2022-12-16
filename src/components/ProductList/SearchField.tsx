import { TextField, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { showToast } from '../../helpers/toast';
import { useData } from '../../hooks/useData';
import PropTypes from 'prop-types'

export const SearchField = ({isFirstRender, setProducts}) => {

  const { palette: { background, primary } } = useTheme()
  const { getProducts } = useData();

  const [search, setSearch] = useState('')

  useEffect(() => {
    (!isFirstRender) && getProducts()
      .then( products => {
        const filteredProducts = products.filter(product => 
          (product.brand && product.brand.toLowerCase().includes(search.toLowerCase())) ||
          (product.model && product.model.toLowerCase().includes(search.toLowerCase()))
        )
        setProducts(filteredProducts)
      })
      .catch( error => showToast(error.message, "error"))
  }, [search])

  const handleChangeSearch = (event) => {
    setSearch(event.target.value)
  }

  return (
    <TextField
      label="Search"
      value={search}
      onChange={handleChangeSearch}
      fullWidth
      sx={{
        background: background.paper,
        "& label.Mui-focused": {
          color: primary.contrastText,
        },
      }}
    />
  )
}

SearchField.protTypes = {
  isFirstRender: PropTypes.bool.isRequired,
  setProducts: PropTypes.func.isRequired,
}