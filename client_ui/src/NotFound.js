import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="signin-wrapper">
      <div className="signin-card d-flex flex-column">

        <div className="signin-right">
          <div className="signin-illustration">
            <h1 style={{ color: "#fff", opacity: 0.8 }}>Oops!</h1>
          </div>
        </div>


        {/* Left Section */}
        <div className="signin-left d-flex flex-column justify-content-center align-items-center">
          <h1>404</h1>
          <p>
            Sorry, the page you are looking for does not exist or has been moved.
          </p>

          <Link to="/" style={{ textDecoration: "none" }}>
            <button className="signin-form button btn btn-light px-4 py-2">
              Go Back Home
            </button>
          </Link>

          <span className="signin-footer">
            Lost your way? <Link to="/">Return to homepage</Link>
          </span>
        </div>

      </div>
    </div>
  );
}

export default NotFound;
