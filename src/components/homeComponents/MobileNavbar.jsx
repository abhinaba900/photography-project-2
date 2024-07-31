import React from "react";
import { MainLogo } from "../../assets";
import { useNavigate, Link } from "react-router-dom";

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
        <i className="fa fa-times fs-3 cursor close-btn" onClick={() => setOpen(!open)}></i>
        <Link to={"/portfolio"}>Portfolio</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>
    </div>
  );
}

export default MobileNavbar;
