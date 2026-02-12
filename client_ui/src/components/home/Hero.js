import React from "react";

function Hero() {
  return (
    <div className="container-fluid smoky-wrapper hero" style={{ margin: "6rem 0", backgroundColor: "#500c1fea", height: "100vh" }}>

      <div className="row my-5">
        <div className="col-lg-6 col-sm-12 d-flex flex-column justify-content-center align-items-center order-2 text-center">
          <h1  style={{fontSize:"4vw"}} className="my-5">
            From idea to bestseller,<br/> we’ve got you covered.
          </h1>
          <p className="fs-4 fw-lighter">End-to-end publishing made easy. Work with top experts, all in one place.</p>

          <div className="hero-buttons">
            <button className="hero-btn primary-btn">
              Hire a Freelancer
            </button>

            <button className="hero-btn secondary-btn">
              Earn money freelancing
            </button>
          </div>
        </div>
        <div className="my-5 col-lg-6 col-sm-12 d-flex justify-content-center align-items-center order-1">
          <img src="media\images\main.webp" style={{width:"95%", margin:"auto"}}/>
        </div>
      </div>
    </div>
  );
}

export default Hero;
