import React from 'react'
import Hero from './Hero';
import Search from './Search';
import Experts from './Experts';
import Guide from './Guide';
import Joins from '../Joins';
import Try from '../Try';


function HomePage() {
    
    return (
        <>
            <Hero />
            <Search />
            <Experts />
            <Try/>
            <Guide />
            <Joins />
        </>
    );
}

export default HomePage;