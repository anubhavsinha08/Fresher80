import React from "react";
import { Link } from "react-router-dom";

function Navbar() {


  return (
    <nav
      id="navbar"
      className="navbar navbar-expand-lg fixed-top navbar-dark "
      style={{backgroundColor: "#131B20"}}
    >
      <div className="container py-2">
        {/* Logo */}
        <Link to="/" className="navbar-brand ms-3">
          <img
            src="media/images/image.png"
            alt="logo"
            style={{ height: "40px" }}
          />
        </Link>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
            <li className="nav-item">
              <Link to="/signup" className="nav-link">Buisness</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">Explore</Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">English</Link>
            </li>
            <li className="nav-item">
              <Link to="/pricing" className="nav-link">Become a seller</Link>
            </li>
            <li className="nav-item">
              <Link to="/support" className="nav-link">Sign in</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
