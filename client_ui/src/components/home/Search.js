import React from 'react'
function Search() {
    return ( 
        <div className='container-fluid  p-2 px-lg-5' style={{margin:"15rem 0 "}}>
            <div className='row m-5'>
                <h1 style={{fontSize:"6vw"}} className='mb-5'>What service are <br/>you looking for today?</h1>
            <div className="mt-5 d-flex justify-content-between align-items-center rounded-4" style={{backgroundColor:"white", width:"80rem"}}>
                <input placeholder='Search for any service...' className='border-0 search fs-3' style={{width:"90rem", height:"6rem"}}></input>
                <span className='d-flex justify-content-center rounded-4 align-items-center px-5' style={{backgroundColor:"#962545", height:"60px", width:"70px"}}><i class="fa-solid fa-magnifying-glass fa-lg" style={{fontSize:"2rem"}}></i></span>
            </div>
            </div>
        </div>
     );
}

export default Search;