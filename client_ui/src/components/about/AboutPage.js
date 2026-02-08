import React from 'react'
import AboutSection from './AboutSection';
import Try from '../Try';
import Joins from '../Joins';
import AboutText from './AboutText';
import PeopleSection from './PeopleSection';

function AboutPage() {
    return ( 
        <>
        <AboutSection/>
        <Try/>
        <AboutText/>
        <Joins/>
        <PeopleSection/>
        </>
     );
}

export default AboutPage;