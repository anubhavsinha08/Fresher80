import React from "react";

function Hero() {
  return (
    <div className="smoky-wrapper hero" style={{marginBottom:"7rem"}}>
      <img
        src="media/images/hero1.jpg"
        alt="hero"
        className="hero-img smoky-img"
      />

      <div className="hero-content p-5 m-5">
        <h1>Our freelancers<br /> will take it from here</h1>
        <div className="d-flex flex-row">
          <button className='border-0 p-3 fs-4 mx-5' style={{backgroundColor:"#962545",
          color:"white", width:"20%", borderRadius:"0.5rem", marginTop:"5rem"}}>Hire a Freelancer .</button>
          <button className='border-0 p-3 fs-4 transparentBorder' style={{ width:"20%", borderRadius:"0.5rem", marginTop:"5rem"}}>Earn money freelancing .</button>
        </div>
        
      </div>
    </div>
  );
}

export default Hero;
