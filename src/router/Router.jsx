import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { ProductDetailPage } from "../pages/ProductDetailPage";
import { ProductsListPage } from "../pages/ProductsListPage";

export const router = createBrowserRouter([
  {
    element: <ProductsListPage />,
    path: "product"
  },
  {
    element: <ProductDetailPage />,
    path: "product/:id"
  },
  {
    element: <Navigate to="/product" />,
    path: "*"
  }
]);
