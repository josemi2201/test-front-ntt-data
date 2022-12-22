import { Grid } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Header } from "../components/Header/Header";
import { ProductListItem } from "../components/ProductList/ProductListItem";
import { SearchField } from "../components/ProductList/SearchField";
import { showToast } from "../helpers/toast";
import { useProducts } from "../hooks/useProducts";

export const ProductsListPage = () => {

  const { getProducts } = useProducts();

  const [products, setProducts] = useState([]);
  const isFirstRender = useRef(true);

  useEffect(() => {

    getProducts().
      then((newProducts) => setProducts(newProducts)).
      catch((error) => showToast(error.message,
        "error")).
      finally(() => {

        isFirstRender.current = false;

      });

  }, []);

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
    </Header>
  );

};

const sx = {
  contProducts: {
    padding: 2
  },
  contSearch: {
    justifyContent: "flex-end",
    marginBottom: 2
  }
};
