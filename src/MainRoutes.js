import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import CartPage from "./pages/CartPage";
import EditProductPage from "./pages/EditProductPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductsPage from "./pages/ProductsPage";
import RegistrationPage from "./pages/RegistrationPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/admin",
      element: <AdminPage />,
      id: 2,
    },
    {
      link: "/cart",
      element: <CartPage />,
      id: 3,
    },
    {
      link: "/edit/:id",
      element: <EditProductPage />,
      id: 4,
    },
    {
      link: "/products/:id",
      element: <ProductDetailsPage />,
      id: 5,
    },
    {
      link: "/products",
      element: <ProductsPage />,
      id: 6,
    },
    {
      link: "/login",
      element: <LoginPage />,
      id: 7,
    },
    {
      link: "/register",
      element: <RegistrationPage />,
      id: 8,
    },
    {
      link: "*",
      element: <NotFoundPage />,
      id: 9,
    },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
