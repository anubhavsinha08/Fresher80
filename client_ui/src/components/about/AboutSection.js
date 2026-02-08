import React from "react";
import "./AboutSection.css";

function AboutSection() {
  return (
    <section className="about-section my-5">
      <div className="about-container">

        {/* Left content */}
        <div className="about-text">
          

          <p>
            freshers80 is a modern freelance marketplace designed to connect
            fresh talent with businesses and creators worldwide.
          </p>

          <p>
            We focus on simplicity, speed, and trust — helping clients find the
            right experts and enabling freelancers to grow their careers with
            confidence.
          </p>

          <p>
            From design and development to AI and marketing, freshers80 brings
            the future of work together in one place.
          </p>

          <div className="about-stats">
            <div>
              <h3>10K+</h3>
              <span>Freelancers</span>
            </div>
            <div>
              <h3>5K+</h3>
              <span>Projects</span>
            </div>
            <div>
              <h3>120+</h3>
              <span>Categories</span>
            </div>
          </div>
        </div>

        {/* Right visual */}
        <div className="about-visual">
          <div className="about-card text-center d-flex align-items-center justify-content-center">
            <h1  style={{fontSize:"10rem"}}>80.</h1>
          </div>
          <div className="about-card small text-center d-flex align-items-center justify-content-center"><h1  style={{fontSize:"2rem"}}>Freshers</h1></div>
        </div>

      </div>
    </section>
  );
}

export default AboutSection;
