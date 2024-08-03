import React from "react";
import {
  FacebookLogo,
  InstagramLogo,
  MainLogo,
  YoutubeLogo,
} from "../../assets";
import { useNavigate, Link } from "react-router-dom";
import { FaHome, FaInfo, FaEnvelope, FaImages } from "react-icons/fa";
function MobileNavbar() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  return (
    <div className=" navbar-mobile-container">
      <section className="p-1 cursor" onClick={() => navigate("/")}>
        <img src={MainLogo} alt="main logo" />
      </section>
      <section>
        <i className="fa fa-bars fs-3" onClick={() => setOpen(!open)}></i>
      </section>

      <div className={`nav-links-container-mobile ${open ? "visible" : ""}`}>
        <i
          className="fa fa-times fs-3 cursor close-btn"
          onClick={() => setOpen(!open)}
        ></i>
        <Link to={"/portfolio"}>
          <FaImages /> Portfolio
        </Link>
        <Link>
          <FaInfo /> About
        </Link>
        <Link>
          <FaEnvelope /> Contact
        </Link>

        <section>
          <p className="social-links mt-5 poppins-bold fs-5">Social Links :-</p>
          <section className="social-container">
            <a href="https://www.facebook.com/" target="_blank">
              <img src={FacebookLogo} className="cursor" alt="facebook logo" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <img
                src={InstagramLogo}
                className="cursor"
                alt="instagram logo"
              />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
            >
              <img src={YoutubeLogo} className="cursor" alt="youtube logo" />
            </a>
          </section>
        </section>
      </div>
    </div>
  );
}

export default MobileNavbar;
