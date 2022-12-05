import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import {
  createBrowserRouter, Navigate, RouterProvider
} from "react-router-dom";
import { CartProvider } from './context/CartContext';
import { ProductDetail } from './routes/ProductDetail';
import { ProductsList } from './routes/ProductsList';

export const router = createBrowserRouter([
  {
    path: "product",
    element: <ProductsList />,
  },
  {
    path: "product/:id",
    element: <ProductDetail />,
  },
  {
    path: "*",
    element: <Navigate to="/product" />
  },
]);

const theme = createTheme({
  palette: {
    background: {
      default: "#f5f5f5",
    },
  },
});


export const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ThemeProvider>
  )
}
