import React from 'react'
function Search() {
    return ( 
        <div className='container my-5 p-5 mx-5 px-5'>
            <div className='row m-5 p-5'>
                <h1 style={{fontSize:"5rem"}} className='mb-5'>What service are <br/>you looking for today?</h1>
            <div className="mt-5 d-flex justify-content-between align-items-center" style={{backgroundColor:"white", width:"80rem"}}>
                <input placeholder='Search for any service...' className='border-0 search fs-3' style={{width:"85rem", height:"6rem"}}></input>
                <span className='d-flex justify-content-center align-items-center' style={{backgroundColor:"#962545", height:"5rem", width:"5rem"}}><i class="fa-solid fa-magnifying-glass fa-lg" style={{fontSize:"2rem"}}></i></span>
            </div>
            </div>
        </div>
     );
}

export default Search;