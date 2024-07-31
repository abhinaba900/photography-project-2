import React from "react";
import Navbar from "./homeComponents/Navbar";
import PhotoGraphSlider from "./homeComponents/PhotoGraphSlider";
import Footer from "./homeComponents/Footer";
import "../components/css/HomePage.css"; // Import the CSS file
import { SliderImage1, SliderImage2, SliderImage3 } from "../assets";

function HomePage() {
  return (
    <div className="background">
      <div className="content">
        <Navbar />
        <PhotoGraphSlider data={[SliderImage1, SliderImage2, SliderImage3]} />
      </div>
      <div className="empty-section-container">
        <div className="empty-section-1"></div>
        <div className="empty-section-2"></div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
