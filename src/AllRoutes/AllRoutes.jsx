import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../components/HomePage";
import AboutPage from "../components/AboutPage";
import ContactPage from "../components/ContactPage";
import PortfolioPage from "../components/PortfolioPage";
function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
