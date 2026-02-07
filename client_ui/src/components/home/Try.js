import React from 'react'

function Try() {
    return ( 
        <div className='container ' style={{margin:"10rem auto"}}>
            <h1 className='mb-5'>Make it all happen with freelancers</h1>
            <div className='row py-5 text-center' style={{marginTop:"7rem"}}>
                <div className='col-3'>
                    <h1><i class="fa-brands fa-slack fa-lg" style={{fontSize:"7rem"}}></i></h1>
                    <h5 className='fw-light mt-5'>Access a pool of top talent<br/>across 700 categories</h5>
                </div>
                <div className='col-3'>
                    <h1><i class="fa-brands fa-squarespace fa-lg" style={{fontSize:"7rem"}}></i></h1>
                    <h5 className='fw-light mt-5'>Enjoy a simple, easy-to-use<br/> matching experience</h5>
                </div>
                <div className='col-3'>
                    <h1><i class="fa-brands fa-stack-overflow fa-lg" style={{fontSize:"7rem"}}></i></h1>
                    <h5 className='fw-light mt-5'>Get quality work done quickly<br/> and within budget</h5>
                </div>
                <div className='col-3'>
                    <h1><i class="fa-solid fa-border-top-left fa-lg" style={{fontSize:"7rem"}}></i></h1>
                    <h5 className='fw-light mt-5'>Only pay when you’re happy</h5>
                </div>
            </div>
        </div>
     );
}

export default Try;