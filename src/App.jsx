import { ThemeProvider } from '@mui/material';
import React from 'react';
import { RouterProvider } from "react-router-dom";
import { CartProvider } from './context/CartContext';
import { router } from './routes/Router';
import { theme } from './theme/theme';
import 'animate.css';


export const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ThemeProvider>
  )
}
