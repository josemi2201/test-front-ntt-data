import React from 'react';
import {
  createBrowserRouter, Navigate, RouterProvider
} from "react-router-dom";
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

export const App = () => {

  return (
    <RouterProvider router={router} />
  )
}
