import React from 'react'

function Services() {
    return (

        <div  >
            <h1 class="fw-medium" style={{fontSize:"50px"}}>Popular services</h1>

            <div class="d-flex gap-4 overflow-auto pb-3 scroll-row">

                <div class="card service-card flex-shrink-0 d-flex justify-content-around align-content-center">
                    <div class="card-body text-white">
                        <h4 className="mb-4">UGC Videos</h4>
                        <img src='media\images\UGC Video img.webp' style={{width:"100%", borderRadius:"2rem"}}/>
                    </div>
                </div>

                <div class="card service-card flex-shrink-0">
                    <div class="card-body text-white">
                        <h4 className="mb-4">Voice Over</h4>
                        <img src='media\images\services\voice-over.webp' style={{width:"100%", borderRadius:"2rem"}}/>
                    </div>
                </div>


                <div class="card service-card flex-shrink-0">
                    <div class="card-body text-white">
                        <h4 className="mb-4">Social Media Marketing</h4>
                        <img src='media\images\services\social-media-marketing.webp' style={{width:"100%", borderRadius:"2rem"}}/>
                    </div>
                </div>

                <div class="card service-card flex-shrink-0">
                    <div class="card-body text-white">
                        <h4 className="mb-4">AI Development</h4>
                        <img src='media\images\services\AI Development.webp' style={{width:"100%", borderRadius:"2rem"}}/>
                    </div>
                </div>

                <div class="card service-card flex-shrink-0">
                    <div class="card-body text-white">
                        <h4 className="mb-4">Logo design</h4>
                        <img src='media\images\services\logo-design.webp' style={{width:"100%", borderRadius:"2rem"}}/>

                    </div>
                </div>

                <div class="card service-card flex-shrink-0">
                    <div class="card-body text-white">
                        <h4 className="mb-4">Website design</h4>
                        <img src='media\images\services\website-development.webp' style={{width:"100%", borderRadius:"2rem"}}/>
                    </div>
                </div>

                <div class="card service-card flex-shrink-0">
                    <div class="card-body text-white">
                        <h4 className="mb-4">Vibe coding</h4>
                        <img src='media\images\services\vibe_coding.webp' style={{width:"100%", borderRadius:"2rem"}}/>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Services;