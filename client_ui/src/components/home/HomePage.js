import React from 'react'
import Hero from './Hero';
import Search from './Search';
import Experts from './Experts';
import Guide from './Guide';
import Services from './Services';
import Librarys from './Librarys'
import Joins from './Joins';
import Try from './Try';


function HomePage() {
    const images = [
        "media/images/services/video-editing.webp",
        "media/images/services/book_publishing.webp",
        "media/images/services/logo-design.webp",
        "media/images/hero1.jpg",
        "media/images/services/software-development.webp",
        "media/images/services/website-development.webp",
        "media/images/services/social-media-marketing.webp",
        "media/images/services/architecture-design.webp",
        "media/images/services/voice-over.webp",
        "media/images/services/logo-design.webp",
        
    ];
    return (
        <>
            <Hero />
            <Search />
            <Services />
            <Experts />
            <Try/>
            <Librarys images={images} />
            <Guide />
            <Joins />
        </>
    );
}

export default HomePage;