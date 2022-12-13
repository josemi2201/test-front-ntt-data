import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { ProductDetail } from "./ProductDetail";
import { ProductsList } from "./ProductsList";

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