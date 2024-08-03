import React, { useEffect, useState } from "react";
import Navbar from "./homeComponents/Navbar";
import PhotoGraphSlider from "./homeComponents/PhotoGraphSlider";
import Footer from "./homeComponents/Footer";
import "../components/css/HomePage.css";
import { Creative1, Creative3 } from "../assets/creative";
import { BackgroundImge, Macro1, Macro2 } from "../assets";

function HomePage() {
  const [scrollBackground, setScrollBackground] = useState(
    window.innerHeight <= 744
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 744) {
        setScrollBackground(true);
      } else {
        setScrollBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`background ${scrollBackground ? "scroll" : ""}`}>
      <img
        src={BackgroundImge}
        className={`background-image`}
        alt="background image"
      />
      <div className="content">
        <Navbar />
        <PhotoGraphSlider data={[Macro1, Creative1, Macro2, Creative3]} />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
