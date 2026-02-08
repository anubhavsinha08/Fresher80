import React from "react";

function PeopleSection() {
  return (
    <section className="people-section">
      <h2 className="people-title">People</h2>

      <div className="people-container">
        {/* Left: Image */}
        <div className="people-image">
          <img
            src="media\images\ImgProfile.jpg"
            alt="Founder of freshers80"
          />
          <h3>Anubhav Kumar Sinha</h3>
          <span>Founder & CEO</span>
        </div>

        {/* Right: Content */}
        <div className="people-content">
          <p>
            <span className="fw-bold">Anubhav</span> started freshers80 with the vision of creating a
            platform where fresh talent could access real opportunities without
            traditional barriers.
          </p>

          <p>
            With a strong background in technology and product development, the
            focus has always been on building simple, transparent, and scalable
            solutions for freelancers and businesses alike.
          </p>

          <p>
            Today, freshers80 is growing into a trusted marketplace that
            connects creators, developers, and companies across multiple
            domains.
          </p>

          <p className="people-links">
            Connect on{" "}
            <a href="#" target="_blank" rel="noreferrer">
              LinkedIn
            </a>{" "}
            /{" "}
            <a href="#" target="_blank" rel="noreferrer">
              Twitter
            </a>{" "}
            /{" "}
            <a href="#" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default PeopleSection;
