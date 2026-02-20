import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LogoutButton from "./LogoutButton";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";



function Navbar() {
  let navigate = useNavigate();
  const location = useLocation();

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  const isActive = (path) => location.pathname === path;

  const token = localStorage.getItem("token");
  // const userName = localStorage.getItem("userName");
  const { user } = useContext(AuthContext);
  console.log(user);



  return (
    <nav
      className="navbar navbar-expand-lg fixed-top navbar-dark"
      style={{ backgroundColor: "#131B20" }}
    >
      <div className="container-fluid py-2">
        <Link to="/" className="navbar-brand ms-3">
          <img
            src="media/images/image.png"
            alt="logo"
            style={{ height: "40px" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto fs-5">

            <li className="nav-item">
              <Link to="/" className="nav-link">
                <p className={isActive("/") ? activeMenuClass : menuClass}>
                  Home
                </p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <p className={isActive("/about") ? activeMenuClass : menuClass}>
                  About
                </p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/explore" className="nav-link">
                <p className={isActive("/explore") ? activeMenuClass : menuClass}>
                  Explore
                </p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/category" className="nav-link">
                <p className={isActive("/category") ? activeMenuClass : menuClass}>
                  Category
                </p>
              </Link>
            </li>

            <li className="nav-item">
              {token ? (
                <Link className="nav-link">

                  <div class="dropdown" style={{ marginRight: "5rem", marginTop:"-0.4rem" }}>
                    <p class="menuClass btn active border-0 dropdown-toggle " role="button" data-bs-toggle="dropdown" aria-expanded="false"
                    style={{fontSize:"1.4rem"}}>
                    {user?.User.UserName}
                    </p>

                    <ul class="dropdown-menu" >
                      <li><p

                        className="dropdown-item"
                        style={{ cursor: "pointer" }}
                      >
                        <LogoutButton />
                      </p></li>
                    </ul>
                  </div>

                </Link>
              ) : (
                <Link to="/login" className="nav-link">
                  <p className={isActive("/login") ? activeMenuClass : menuClass}>
                    Login
                  </p>
                </Link>
              )}

            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
