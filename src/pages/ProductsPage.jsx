import { Box } from "@mui/material";
import React from "react";
import ProductList from "../components/products/ProductList";
import SideBar from "../components/SideBar";

const ProductsPage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <ProductList />
    </Box>
  );
};

export default ProductsPage;
