import React from "react";

function Hero() {
  return (
   <div className="smoky-wrapper hero">
  <img
    src="media/images/hero1.jpg"
    alt="hero"
    className="hero-img smoky-img"
  />

  <div className="hero-content">
    <h1>
      Our freelancers <br /> will take it from here
    </h1>

    <div className="hero-buttons">
      <button className="hero-btn primary-btn">
        Hire a Freelancer
      </button>

      <button className="hero-btn secondary-btn">
        Earn money freelancing
      </button>
    </div>
  </div>
</div>

  );
}

export default Hero;
