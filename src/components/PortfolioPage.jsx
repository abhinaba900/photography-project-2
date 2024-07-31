import React, { useState } from "react";
import Navbar from "./homeComponents/Navbar";
import Footer from "./homeComponents/Footer";
import HeadSection from "./portfolioCommponents/HeadSection";
import BodySection from "./portfolioCommponents/BodySection";

function PortfolioPage() {
  const [BodySections, setBodySections] = useState("Wildlife");
  return (
    <div>
      <Navbar />
      <HeadSection BodySections={BodySections} setBodySections={setBodySections} />
      <BodySection BodySections={BodySections} />
      <Footer/>
    </div>
  );
}

export default PortfolioPage;
