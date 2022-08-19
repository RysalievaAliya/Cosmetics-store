import { Box } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import ProductList from "../components/products/ProductList";
import SideBar from "../components/SideBar";

const ProductsPage = () => {
  return (
    <Box>
      <Box sx={{ display: "absolute" }}>
        <Navbar />
      </Box>
      <Box sx={{display: "flex"}}>
        <SideBar />
        <ProductList />
      </Box>
    </Box>
  );
};

export default ProductsPage;
