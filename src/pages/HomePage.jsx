import React from "react";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import '../styles/HomeStyle.css';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Home/>
    </div>
  );
};

export default HomePage;
