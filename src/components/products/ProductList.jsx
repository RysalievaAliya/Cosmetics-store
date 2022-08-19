import { Box, Pagination, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import Spinner from "react-bootstrap/Spinner";
import { useProducts } from "../../contexts/ProductContextProvider";

const ProductList = () => {
  const { products, getProducts } = useProducts();

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);

  const [page, setPage] = useState(1);
  const itemsPerPage = 9;
  const count = Math.ceil(products.length / itemsPerPage);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getProducts();
    setPage(1);
  }, [searchParams]);

  const handlePage = (e, p) => {
    console.log(p);
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  }

  return (
    <Box
      sx={{
        display: "flex",
        mt: 2,
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {products ? (
          currentData().map((item) => <ProductCard item={item} key={item.id} />)
        ) : (
          <Spinner animation="grow" sx={{ justifyContent: "center" }} />
        )}
      </Box>
      <Stack spacing={2}>
        <Pagination
          count={count}
          page={page}
          variant="outlined"
          onChange={handlePage}
        />
      </Stack>
    </Box>
  );
};

export default ProductList;
