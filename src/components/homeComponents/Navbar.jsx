import React from "react";
import {
  MainLogo,
  InstagramLogo,
  FacebookLogo,
  YoutubeLogo,
} from "../../assets";

import { Link, useLocation, useNavigate } from "react-router-dom";
import "../css/Navbar.css";
import MobileNavbar from "./MobileNavbar";
function Navbar() {
  const location = useLocation();

  const navigate = useNavigate();

  const [mobile, setMobile] = React.useState(window.innerWidth < 1200);

  React.useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 1200);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <>
        <div className="container navbar-container-home">
          <section className="nav-links-container">
            <Link
              to={"/portfolio"}
              className={location.pathname === "/portfolio" ? "active" : ""}
            >
              Portfolio
            </Link>
            <Link
              className={location.pathname === "/about" ? "active" : ""}
            >
              About
            </Link>
            <Link
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </section>
          <section
            className="logo-container cursor"
            onClick={() => navigate("/")}
          >
            <img src={MainLogo} alt="main logo" />
          </section>

          <section className="social-container">
            <img src={FacebookLogo} className="cursor" alt="facebook logo" />
            <img src={InstagramLogo} className="cursor" alt="instagram logo" />
            <img src={YoutubeLogo} className="cursor" alt="youtube logo" />
          </section>
        </div>
      </>
      <MobileNavbar />
    </>
  );
}

export default Navbar;
