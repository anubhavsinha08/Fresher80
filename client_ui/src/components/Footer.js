import React from 'react'

function Footer() {
    return ( 
        <div className='container-fluid p-5' style={{backgroundColor:"#131B20", marginTop:"10rem"}}>
            <div className='row border-top  p-5'>
                <div className='col-lg-4 col-sm-12 p-5'>
                    <img src='media\images\image.png' style={{width:"80%"}}/>
                    <p>© Freshers80. International Ltd. 2026</p>
                    <div className='d-flex flex-row mt-5'>
                        <img src='media\images\appstoreBadge.svg' className='mx-2'/>
                        <img src='media\images\googlePlayBadge.svg'/>
                    </div>
                </div>
                <div className='col-lg-2 col-sm-12'>
                    <h3 className="mb-5">Categories</h3>

                     <p>Graphics & </p>
                     <p>Digital Marketing</p>
                     <p>Writing & Translation</p>
                     <p>Video & Animation</p>
                     <p>Music & Audio</p>
                     <p>Programming & Tech</p>
                     <p>AI Services</p>
                     <p>Consulting</p>
                     <p>Data</p>
                     <p>Business</p>
                     <p>Personal Growth & Hobbies</p>
                     <p>Photography</p>
                     <p>Finance</p>
                     <p>End-to-End Projects</p>
                     <p>Service Catalog</p>
                </div>
                <div className='col-lg-2 col-sm-12'>
                    <h3 className="mb-5">For Clients</h3>

                     <p>How Fiverr Works</p>
                     <p>Customer Success Stories</p>
                     <p>Quality Guide</p>
                     <p>Freshers Guides</p>
                     <p>Freshers Answers</p>
                     <p>Browse Freelance By Skill</p>
                </div>
                <div className='col-lg-2 col-sm-12'>
                    <h3 className="mb-5">Business Solutions</h3>

                     <p>Fiverr Pro</p>
                     <p>Project Management Service</p>
                     <p>Expert Sourcing Service</p>
                     <p>ClearVoice - Content Marketing</p>
                     <p>AutoDS - Dropshipping Tool</p>
                     <p>Digis - Software Development</p>
                     <p>AI store builder</p>
                     <p>Fiverr Logo Maker</p>
                     <p>Contact Sales</p>
                </div>
                <div className='col-lg-2 col-sm-12'>
                    <h3 className="mb-5">Company</h3>

                       <p>About Fiverr</p>
                       <p>Help Center</p>
                       <p>Trust & Safety</p>
                       <p>Social Impact</p>
                       <p>Careers</p>
                       <p>Terms of Service</p>
                       <p>Privacy Policy</p>
                       <p>Partnerships</p>
                       <p>Creator Network</p>
                       <p>Affiliates</p>
                       <p>Invite a Friend</p>
                       <p>Press & News</p>
                       <p>Investor Relations</p>
                </div>
            </div>
        </div>
     );
}

export default Footer;