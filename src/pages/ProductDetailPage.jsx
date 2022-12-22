import { Box, Grid, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header/Header";
import {
  ProductDetailActions
} from "../components/ProductDetail/ProductDetailActions";
import {
  ProductDetailInfo
} from "../components/ProductDetail/ProductDetailInfo";
import { LoadingIcon } from "../components/UI/LoadingIcon";
import { NotFound } from "../components/UI/NotFound";
import { showToast } from "../helpers/toast";
import { useProduct } from "../hooks/useProduct";

export const ProductDetailPage = () => {

  const { palette: { background } } = useTheme();
  const { id } = useParams();
  const { getProduct } = useProduct();

  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const {
    id: productId,
    imgUrl
  } = product;

  useEffect(() => {

    getProduct(id).
      then((newProduct) => setProduct(newProduct)).
      catch((error) => showToast(error.message,
        "error")).
      finally(() => setIsLoading(false));

  },
  []);

  return (
    <Header>
      {
        (productId && !isLoading) &&
          <Grid
            container
            sx={sx.contProduct}
          >
            <Grid
              component="section"
              item
              sm={6}
              sx={sx.contImg}
              xs={12}
            >
              <Box
                className="animate__animated animate__fadeIn"
                component="img"
                src={imgUrl}
                sx={sx.img}
              />
            </Grid>
            <Grid
              component="section"
              item
              sm={6}
              sx={sx.gridInfo}
              xs={12}
            >
              <Box
                sx={{
                  ...sx.module,
                  backgroundColor: background.paper
                }}
              >
                <ProductDetailInfo product={product} />
              </Box>
              <Box
                sx={{
                  ...sx.module,
                  backgroundColor: background.paper
                }}
              >
                <ProductDetailActions product={product} />
              </Box>
            </Grid>
          </Grid>
      }
      {
        isLoading
          ? <LoadingIcon size={5} />
          : !productId && <NotFound />
      }
    </Header>
  );

};

const sx = {
  contProduct: {
    height: "100%"
  },
  gridInfo: {
    display: "flex",
    flexDirection: "column",
    gap: 4
  },
  img: {
    borderRadius: 1,
    width: "100%"
  },
  module: {
    border: "1px solid grey",
    borderRadius: 1,
    margin: {
      sm: "0 32px",
      xs: "0px"
    },
    padding: "32px"
  }
};

