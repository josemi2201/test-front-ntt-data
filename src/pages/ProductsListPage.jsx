import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Header } from "../components/Header/Header";
import { ProductListItem } from "../components/ProductList/ProductListItem";
import { SearchField } from "../components/ProductList/SearchField";
import { LoadingIcon } from "../components/UI/LoadingIcon";
import { EMPTY } from "../global/vars";
import { useProducts } from "../hooks/useProducts";

const NO_PRODUCTS = "NO PRODUCTS";

export const ProductsListPage = () => {

  const { products, getProducts, isFirstRender, isLoading } = useProducts();

  return (
    <Header>
      <Grid
        component="section"
        container
        spacing={1}
        sx={sx.contSearch}
      >
        <Grid
          item
          lg={2}
          md={3}
          xs={12}
        >
          <SearchField
            getProducts={getProducts}
            isFirstRender={isFirstRender.current}
          />
        </Grid>
      </Grid>
      {
        products.length !== EMPTY && !isLoading
          ? (
            <Grid
              container
              spacing={6}
              sx={sx.contProducts}
            >
              {
                products.map((product) => (
                  <Grid
                    className="animate__animated animate__fadeIn"
                    item
                    key={product.id}
                    lg={3}
                    md={4}
                    xs={12}
                  >
                    <ProductListItem product={product} />
                  </Grid>
                ))
              }
            </Grid>
          )
          : (
            <Box
              sx={sx.contNotProduct}
            >
              {
                isLoading
                  ? (
                    <LoadingIcon size={5} />
                  )
                  : (
                    <Typography
                      variant="h4"
                    >
                      {NO_PRODUCTS}
                    </Typography>
                  )
              }
            </Box>
          )
      }

    </Header>
  );

};

const sx = {
  contNotProduct: {
    alignItems: "center",
    display: "flex",
    height: "100%",
    justifyContent: "center",
    width: "100%"
  },
  contProducts: {
    padding: 2
  },
  contSearch: {
    justifyContent: "flex-end",
    marginBottom: 2
  }
};
