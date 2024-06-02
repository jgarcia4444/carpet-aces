import React, {useState} from 'react';

import SectionTitle from '../../shared/text/SectionTitle';
import GalleryCarousel from './gallery/GalleryCarousel';

const Gallery = () => {

    const [imgIndex, setImgIndex] = useState(0);

    const beforeAfters = [
        {before: "", after: ""},
        {before: "", after: ""},
        {before: "", after: ""},
    ];

    const handleNextPress = () => {
        let nextIndex = imgIndex + 1; 
    }

    const handlePreviousPress = () => {

    }

    return (
        <div id="gallery" className="mt-24 px-2">
            <SectionTitle title={"Gallery"}/>
            <GalleryCarousel img={beforeAfters}/>
            <GalleryButtons nextPress={handleNextPress} previousPress={handlePreviousPress/>
        </div>
    )
};

export default Gallery;