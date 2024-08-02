import React, { useEffect, useState } from "react";
import Navbar from "./homeComponents/Navbar";
import PhotoGraphSlider from "./homeComponents/PhotoGraphSlider";
import Footer from "./homeComponents/Footer";
import "../components/css/HomePage.css";
import { Nature1 } from "../assets/nature/index";
import { People1 } from "../assets/people";
import { Creative1 } from "../assets/creative";
import { StillLife1 } from "../assets/still life";
import { BackgroundImge , Macro1} from "../assets";

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
        <PhotoGraphSlider data={[Nature1, People1, Macro1, Creative1, StillLife1]} />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
