import React, { useEffect, useState } from "react";
import Navbar from "./homeComponents/Navbar";
import PhotoGraphSlider from "./homeComponents/PhotoGraphSlider";
import Footer from "./homeComponents/Footer";
import "../components/css/HomePage.css";
import { Creative1, Creative3 } from "../assets/creative";
import {
  BackgroundImge,
  Macro1,
  Macro2,
  FacebookLogo,
  InstagramLogo,
  MainLogo,
  YoutubeLogo,
} from "../assets";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [scrollBackground, setScrollBackground] = useState(
    window.innerHeight <= 744
  );
  const navigate = useNavigate();

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
      {/* <img
        src={BackgroundImge}
        className={`background-image`}
        alt="background image"
      /> */}
      <div className="content">
        <Navbar />

        <section className="social-container social-container-mobile">
          <a href="https://www.facebook.com/AyaNPhotography" target="_blank">
            <img src={FacebookLogo} className="cursor" alt="facebook logo" />
          </a>
          <a href="https://www.instagram.com/ayan_hore/" target="_blank">
            <img src={InstagramLogo} className="cursor" alt="instagram logo" />
          </a>
          <a
            href="https://www.youtube.com/user/AyaNPhotography"
            target="_blank"
          >
            <img src={YoutubeLogo} className="cursor" alt="youtube logo" />
          </a>
        </section>
        <div id="navigation-menu">
          <p
            className={`portfolio-head-titles portfolio-head-titles-active`}
            onClick={() => navigate("/portfolio")}
          >
            Portfolio
          </p>
          <p className={`portfolio-head-titles portfolio-head-titles-active`}>
            About
          </p>
          <p className={`portfolio-head-titles portfolio-head-titles-active`}>
            Contact
          </p>
        </div>
        <PhotoGraphSlider data={[Macro1, Creative1, Macro2, Creative3]} />
        {/* <img src={BackgroundImge} alt="" className="background-image" /> */}
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
