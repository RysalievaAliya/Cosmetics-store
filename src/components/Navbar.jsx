import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import logo from '../assets/icons/logo.svg'
import { Button, Link } from '@mui/material';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ContactSupportIcon from '@mui/icons-material/ContactSupport';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function showSettings(event) {
  event.preventDefault();
}

export default function Navbar() {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar
        position="static"
        sx={{ backgroundColor: "black", width: "100vw" }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <IconButton>
              <img
                src={logo}
                alt="logo"
                style={{ width: "20vmin", minWidth: "40px", maxWidth: "90%" }}
              />
            </IconButton>
          </Typography>
          <Link
            href="/cart">
            <Button
              sx={{
                my: 1,
                color: "white",
                width: "100%",
                textTransform: "capitalize",
              }}
            >
              <ShoppingCartIcon/>
            </Button>
          </Link>
          <Link href="/register">
            <Button
              sx={{
                my: 1,
                color: "white",
                width: "100%",
                textTransform: "capitalize",
              }}
            >
              Register
            </Button>
          </Link>
          <Link href="/login">
            <Button
              sx={{
                my: 1,
                color: "white",
                width: "100%",
                textTransform: "capitalize",
              }}
            >
              Login
            </Button>
          </Link>
          <Link href="/contact">
            <ContactSupportIcon sx={{color:"white"}}/>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
