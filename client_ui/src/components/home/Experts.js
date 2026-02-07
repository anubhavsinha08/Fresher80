import React from 'react'

function Experts() {
    


    return (
        <div className='container p-5 d-flex justify-content-between align-items-center' style={{ backgroundColor: "#962545", borderRadius: "2rem", margin:"15rem auto" }}>
            <div className='row'>
                <div className='col-lg-5 col-sm-12 px-5 d-flex flex-column justify-content-center mb-5'>
                    <h1 className='fw-light' style={{fontSize:"4rem"}}>Need help with Vibe coding?</h1>
                    <p className='fs-5'>Get matched with the right expert to keep building and marketing your project</p>
                    <button className='border-0 p-3 mt-4 fs-4' style={{backgroundColor:"cream", width:"50%", borderRadius:"0.5rem"}}>Find an expert</button>
                </div>
                <div className='col-lg-2 col-sm-0'></div>
                <div className='col-lg-5 col-sm-12'>
                    <video id="video" autoPlay
                        loop
                        muted style={{ width: "100%", borderRadius: "2rem" }}>
                        <source src="media\images\services\Vibe coding marketing banner loop.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    );
}

export default Experts;