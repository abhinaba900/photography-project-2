import React, { useEffect, useState } from "react";
import Navbar from "./homeComponents/Navbar";
import Footer from "./homeComponents/Footer";
import HeadSection from "./portfolioCommponents/HeadSection";
import BodySection from "./portfolioCommponents/BodySection";
import { FacebookLogo, InstagramLogo,  YoutubeLogo } from "../assets";

function PortfolioPage() {
  const [BodySections, setBodySections] = useState("Wildlife");
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
    <div
      className={`portfolio-page-main-container ${
        scrollBackground ? "scroll" : ""
      }`}
    >
      <Navbar />
      <section className="social-container social-container-mobile">
        <a href="https://www.facebook.com/AyaNPhotography" target="_blank">
          <img src={FacebookLogo} className="cursor" alt="facebook logo" />
        </a>
        <a href="https://www.instagram.com/ayan_hore/" target="_blank">
          <img src={InstagramLogo} className="cursor" alt="instagram logo" />
        </a>
        <a href="https://www.youtube.com/user/AyaNPhotography" target="_blank">
          <img src={YoutubeLogo} className="cursor" alt="youtube logo" />
        </a>
      </section>
      <HeadSection
        BodySections={BodySections}
        setBodySections={setBodySections}
      />
      <BodySection BodySections={BodySections} />
      <Footer />
    </div>
  );
}

export default PortfolioPage;
