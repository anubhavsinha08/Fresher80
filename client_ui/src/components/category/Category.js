import React from "react";
import "./Category.css";

function Category() {
  return (
    <div className="category-wrapper">

      {/* HERO SEARCH */}
      <section className="category-hero">
        <h1>What service are you looking for today?</h1>

        <div className="category-search">
          <input placeholder="Search for any service..." />
          <button ><i class="fa-solid fa-magnifying-glass fa-lg" style={{fontSize:"2rem"}}></i></button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="category-features">
        <div className="feature">
          <span>⚡</span>
          <p>Access a pool of top talent across categories</p>
        </div>
        <div className="feature">
          <span>🔗</span>
          <p>Simple and easy-to-use matching experience</p>
        </div>
        <div className="feature">
          <span>🚀</span>
          <p>Get quality work done quickly and within budget</p>
        </div>
        <div className="feature">
          <span>💳</span>
          <p>Only pay when you’re happy</p>
        </div>
      </section>

      {/* CATEGORY GRID */}
      <section className="category-grid">

        <div className="grid-large">Video Editing</div>

        <div className="grid-small">Content Writing</div>
        <div className="grid-small">Logo Design</div>

        <div className="grid-wide">Web Development</div>

        <div className="grid-small">AI Services</div>
        <div className="grid-small">Marketing</div>

        <div className="grid-wide">UI / UX Design</div>

      </section>

    </div>
  );
}

export default Category;
