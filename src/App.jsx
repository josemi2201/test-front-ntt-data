import { ThemeProvider } from '@mui/material';
import 'animate.css';
import React from 'react';
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from './context/CartContext';
import { router } from './routes/Router';
import { theme } from './theme/theme';



export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </CartProvider>
    </ThemeProvider>
  )
}
