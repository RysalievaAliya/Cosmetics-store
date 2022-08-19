import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Box, IconButton, Rating, Stack } from "@mui/material";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { useCart } from "../../contexts/CartContextProvider";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../../styles/card.css";
import { useProducts } from "../../contexts/ProductContextProvider";

export default function ProductCard({ item }) {
  const { deleteProduct } = useProducts();
  const { addProductToCart, checkProductInCart } = useCart();

  const navigate = useNavigate();

  return (
    <Card sx={{ width: 300, m: 3 }} className="card">
      <CardMedia
        component="img"
        image={item.picture}
        alt="green iguana"
        className="card_img"
      />
      <CardContent>
        <Typography
          gutterBottom
          component="div"
          sx={{
            fontSize: "16px",
          }}
        >
          {item.type}
        </Typography>
        <Typography
          gutterBottom
          component="div"
          sx={{
            fontWeight: "700",
            fontSize: "24px",
          }}
        >
          $ {item.price}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            width: "60%",
            height: "20px",
            cursor: "pointer",
          }}
          onClick={() => navigate(`/products/${item.id}`)}
        >
          {item.description}
        </Typography>
      </CardContent>

      <Stack spacing={1} className="rating_button">
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      </Stack>

      <CardActions className={"button"}>
        <Button
          startIcon={<DeleteIcon />}
          onClick={() => deleteProduct(item.id)}
        >
          DELETE
        </Button>

        <Button
          startIcon={<EditIcon />}
          onClick={() => navigate(`/edit/${item.id}`)}
        >
          EDIT
        </Button>
        <Box>
          <IconButton
            variant="outlined"
            onClick={() => addProductToCart(item)}
            sx={{p: "5px",mb: "10px",}}>
            <ShoppingCartIcon
              color={checkProductInCart(item.id) ? "primary" : ""}
              sx={{ mr: "5px" }}
            />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
}
