import React, { useEffect, useState } from "react";
import "./Explore.css";

function Explore() {

    const [gigs, setGigs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGigs = async () => {
            try {
                const res = await fetch("http://localhost:3001/api/gigs/");
                const data = await res.json();

                setGigs(data);
                setLoading(false);

            } catch (err) {
                setError("Failed to fetch gigs");
                setLoading(false);
            }
        };

        fetchGigs();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (gigs.length === 0) return <p>No gigs found</p>;

    return (
        <div className="container d-flex gap-5" style={{margin:"10rem auto"}}>
            {gigs.map((gig) => (
                <div className="card" style={{width:"25rem"}} key={gig._id} >
                    <img src={gig.cover} style={{ margin:"0.7rem", borderRadius:'1rem'}}/>
                    <div className="card-body">
                        <h4 className="card-title"><i class="fa-regular fa-circle-user fa-lg"></i> {gig.ownerName}</h4>
                        <hr></hr>
                        <h3 className="card-title">{gig.shortTitle}</h3>
                        <p className="card-text">{gig.shortDesc}</p>
                        <p className="card-text">From: ₹{gig.price}</p>
                    </div>

                </div>
            ))}
        </div>
    );
}

export default Explore;
