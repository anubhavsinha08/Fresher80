import React from "react";
import { Link } from "react-router-dom";

function Navbar() {


  return (
    <nav
      id="navbar"
      className="navbar navbar-expand-lg fixed-top navbar-dark"
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
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/explore" className="nav-link">Explore</Link>
            </li>
            <li className="nav-item">
              <Link to="/category" className="nav-link">Category</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
