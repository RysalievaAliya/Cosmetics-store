import React from "react";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import '../styles/HomeStyle.css';

// import {
//   MDBCarousel,
//   MDBCarouselInner,
//   MDBCarouselItem,
//   MDBCarouselElement,
//   MDBCarouselCaption,
// } from "mdb-react-ui-kit";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Home/>
    </div>
  );
};

export default HomePage;
