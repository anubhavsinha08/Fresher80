import React from 'react'

function Try() {
    return ( 
        <div className='container-fluid ' style={{margin:"15rem 0"}}>
            <h1 className='m-5'>Make it all happen with freelancers</h1>
            <div className='row  text-center d-flex align-content' style={{margin:"10rem auto"}}>
                <div className='col-lg-3 col-sm-12 d-flex justify-content-center align-items-center flex-column' style={{marginBottom:"10rem"}}>
                    <h1><i class="fa-brands fa-slack fa-lg" style={{fontSize:"7rem"}}></i></h1>
                    <h5 className='fw-light mt-5'>Access a pool of top talent<br/>across 700 categories</h5>
                </div>
                <div className='col-lg-3 col-sm-12 d-flex justify-content-center align-items-center flex-column' style={{marginBottom:"10rem"}}>
                    <h1><i class="fa-brands fa-squarespace fa-lg" style={{fontSize:"7rem"}}></i></h1>
                    <h5 className='fw-light mt-5'>Enjoy a simple, easy-to-use<br/> matching experience</h5>
                </div>
                <div className='col-lg-3 col-sm-12 d-flex justify-content-center align-items-center flex-column' style={{marginBottom:"10rem"}}>
                    <h1><i class="fa-brands fa-stack-overflow fa-lg" style={{fontSize:"7rem"}}></i></h1>
                    <h5 className='fw-light mt-5'>Get quality work done quickly<br/> and within budget</h5>
                </div>
                <div className='col-lg-3 col-sm-12 d-flex justify-content-center align-items-center flex-column' style={{marginBottom:"10rem"}}>
                    <h1><i class="fa-solid fa-border-top-left fa-lg" style={{fontSize:"7rem"}}></i></h1>
                    <h5 className='fw-light mt-5'>Only pay when you’re happy</h5>
                </div>
            </div>
        </div>
     );
}

export default Try;