import React from "react";
import Navbar from "./homeComponents/Navbar";
import PhotoGraphSlider from "./homeComponents/PhotoGraphSlider";
import Footer from "./homeComponents/Footer";
import "../components/css/HomePage.css"; // Import the CSS file
import {
  SliderImage1,
  SliderImage2,
  SliderImage3,
  BackgroundImge,
} from "../assets";

function HomePage() {
  return (
    <div className="background">
      <img
        src={BackgroundImge}
        className=" background-image"
        alt="background image"
      />
      <div className="content">
        <Navbar />
        <PhotoGraphSlider data={[SliderImage1, SliderImage2, SliderImage3]} />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
