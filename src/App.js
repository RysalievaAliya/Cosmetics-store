import Navbar from "./components/Navbar";
import AuthContextProvider from "./contexts/AuthContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MainRoutes from "./MainRoutes";
import { Box } from "@mui/material";
import CartContextProvider from "./contexts/CartContextProvider";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <AuthContextProvider>
        <ProductContextProvider>
          <CartContextProvider>
            <Box
              sx={{
                width: "100%",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Box sx={{ width: "100%" }}>
                <MainRoutes />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  bottom: "0",
                  width: "100%",
                  zIndex: "2000",
                }}
              >
                <Footer />
              </Box>
            </Box>
          </CartContextProvider>
        </ProductContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
