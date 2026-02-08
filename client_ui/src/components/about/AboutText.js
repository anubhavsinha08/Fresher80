import React from "react";
import "./AboutSection.css";

function AboutText() {
  return (
    <section className="about-freshers" style={{marginBottom:"10rem"}}>
      <div className="about-header">
        <h2>
          We’re building a platform where fresh talent meets real opportunities.
        </h2>
        <p>
          freshers80 is focused on breaking barriers in hiring, freelancing, and
          digital collaboration using simple, accessible technology.
        </p>
      </div>

      <hr className="about-divider" />

      {/* Two-column content */}
      <div className="about-content">
        <div className="about-left">
          <p>
            freshers80 was started with a simple idea — to help freshers,
            students, and early-career professionals showcase their skills and
            find meaningful work without unnecessary complexity.
          </p>

          <p>
            We aim to remove traditional barriers such as lack of experience,
            limited access, and unclear pricing by creating a transparent and
            supportive marketplace.
          </p>

          <p>
            Today, freshers80 connects freelancers and clients across multiple
            domains including development, design, AI, content, and digital
            marketing.
          </p>
        </div>

        <div className="about-right">
          <p>
            In addition to our marketplace, we actively support learning and
            growth through community-driven initiatives, guides, and practical
            resources.
          </p>

          <p>
            Our long-term vision is to empower the next generation of builders
            and creators by providing tools that are reliable, affordable, and
            easy to use.
          </p>

          <p>
            We’re just getting started — and we’re building freshers80 openly,
            thoughtfully, and with our users at the center of everything.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutText;
