import React from "react";
import "./Explore.css";

function Explore() {
    const categories = [
        "Web Development",
        "AI & ML",
        "UI/UX Design",
        "Content Writing",
        "Video Editing",
        "Digital Marketing",
        "Voice Over",
        "Logo Design",
    ];

    return (
        <div className="explore-page">

            {/* Header */}
            <section className="explore-hero">
                <h1>Explore Services</h1>
                <p>Discover services from talented freelancers across all categories.</p>

                <div className="explore-search">
                    <input type="text" placeholder="Search for any service..." />
                    <button>Search</button>
                </div>
            </section>

            {/* Categories */}
            <section className="explore-categories">
                <h2>Browse by category</h2>

                <div className="category-grid">
                    {categories.map((cat, i) => (
                        <div className="category-card" key={i}>
                            {cat}
                        </div>
                    ))}
                </div>
            </section>


            <section className="explore-featured">
                <iframe width="1060" height="600" src="https://www.youtube.com/embed/90Vvoffk9XM?si=pm33lvskWyIF4Dz3" title="YouTube video player" frameborder="0" allow=" autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; " referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </section>

        </div>
    );
}

export default Explore;
