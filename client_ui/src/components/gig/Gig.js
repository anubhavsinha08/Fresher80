import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Gig() {
    const { id } = useParams();
    const [gig, setGig] = useState(null);


    useEffect(() => {
        const fetchGigs = async () => {
            try {
                const res = await fetch(`http://localhost:3001/api/gigs/${id}`);
                if (!res.ok) {
                    throw new Error("Gig not found");
                }
                const data = await res.json();
                setGig(data);

            } catch (err) {
                console.log(err);
            }
        };

        fetchGigs();
    }, [id]);

    if (!gig) {
        return <p>loading...</p>
    }


    return (
        <div className='container m-5 p-5'>

            <div className='row m-5 p-5'>
                <p >
                    <a href='/' style={{ color: "white", textDecoration: "none" }}><i class="fa-regular fa-house"></i></a> / <a href='/explore' style={{ color: "white", textDecoration: "none" }}>explore</a> / {gig.shortTitle}
                </p>

                <h1 className='my-2 mb-5'>{gig.title}</h1>

                <div className='my-5 py-3 fs-1'>
                    <span className='fs-2 px-3 py-2 text-center' style={{ backgroundColor: "#8f2345", borderRadius: "50%", marginRight: "1rem" }}>{gig.ownerName.split("")[0].toUpperCase()}</span> {gig.ownerName}
                </div>
                <img src={gig.cover} className='p-2 mb-5' style={{ width: "800px", border: "2px solid #FAF9F6" }} />
                <hr />
                <div>
                    <h1>About</h1>
                    <h2 className='fw-lighter my-3'>{gig.desc}</h2>
                    
                </div>
                <div className='my-5 d-flex ' style={{ gap: "15rem" }}>
                    <div>
                        <h1 className='text-muted my-3'>Service type</h1>
                        <h5>{gig.cat}</h5>
                    </div>
                    <div>
                        <h1 className='text-muted my-3'>Language</h1>
                        <h5>English</h5>
                    </div>
                </div>
                <div className='my-5 p-5 fs-3' style={{ border: "1px solid white" }}>
                    <h2><i class="fa-solid fa-circle-info my-2"></i> Delivery style preference</h2>
                    <p>Please inform the freelancer of any preferences or concerns regarding the use of AI tools in the completion and/or delivery of your order.</p>
                </div>
            </div>
        </div>
    )
}

export default Gig