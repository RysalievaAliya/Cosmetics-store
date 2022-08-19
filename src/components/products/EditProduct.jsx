import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";

const EditProduct = () => {
  const { getProductDetails, productDetails, saveEditedProduct } =
    useProducts();

  const [product, setProduct] = useState(productDetails);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  useEffect(() => {
    getProductDetails(id);
  }, []);

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  return (
    <Box
      sx={{
        bgcolor: "black",
        width: "40vw",
        margin: "10vh auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" sx={{ m: 2 }}>
        Edit product
      </Typography>
      <TextField
        sx={{ m: 1 }}
        id="standard-basic"
        label="Name"
        variant="outlined"
        color="red"
        fullWidth
        name="name"
        onChange={handleInp}
        value={product.name || ""}
        focused
      />
      <TextField
        sx={{ m: 1 }}
        id="standard-basic"
        label="Description"
        variant="outlined"
        color="red"
        fullWidth
        name="description"
        onChange={handleInp}
        value={product.description || ""}
        focused
      />
      <TextField
        sx={{ m: 1 }}
        id="standard-basic"
        label="Price"
        variant="outlined"
        color="red"
        fullWidth
        name="price"
        onChange={handleInp}
        value={product.price || ""}
        focused
      />
      <TextField
        sx={{ m: 1 }}
        id="standard-basic"
        label="Picture"
        variant="outlined"
        color="red"
        fullWidth
        name="picture"
        onChange={handleInp}
        value={product.picture || ""}
        focused
      />
      <TextField
        sx={{ m: 1 }}
        id="standard-basic"
        label="Type"
        variant="outlined"
        color="red"
        fullWidth
        name="type"
        onChange={handleInp}
        value={product.type || ""}
        focused
      />
      <Button
        sx={{
          m: 1,
          bgcolor: "black",
          color: "#fff",
          "&:hover": { bgcolor: "#8125DC" },
        }}
        variant="outlined"
        fullWidth
        size="large"
        onClick={() => {
          saveEditedProduct(product);
          navigate("/products");
        }}
      >
        SAVE PRODUCT
      </Button>
    </Box>
  );
};

export default EditProduct;
