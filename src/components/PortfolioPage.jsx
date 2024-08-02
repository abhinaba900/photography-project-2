import React, { useEffect, useState } from "react";
import Navbar from "./homeComponents/Navbar";
import Footer from "./homeComponents/Footer";
import HeadSection from "./portfolioCommponents/HeadSection";
import BodySection from "./portfolioCommponents/BodySection";

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
