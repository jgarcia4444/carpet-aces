import React, {useState} from 'react';

import SectionTitle from '../../shared/text/SectionTitle';
import GalleryCarousel from './gallery/GalleryCarousel';
import GalleryButtons from './gallery/GalleryButtons';

import couchBefore1 from '../../media/gallery/couch/couch-before-1.jpg';
import couchBefore2 from '../../media/gallery/couch/couch-before-2.jpg';
import couchBefore3 from '../../media/gallery/couch/couch-before-3.jpg';
import couchAfter1 from '../../media/gallery/couch/couch-after-1.jpg';
import couchAfter2 from '../../media/gallery/couch/couch-after-2.jpg';
import couchAfter3 from '../../media/gallery/couch/couch-after-3.jpg';


const Gallery = () => {

    const [imgIndex, setImgIndex] = useState(0);

    const beforeAfters = [
        {before: couchBefore1, after: couchAfter1},
        {before: couchBefore2, after: couchAfter2},
        {before: couchBefore3, after: couchAfter3},
    ];

    const handleNextPress = () => {
        let nextIndex = imgIndex + 1; 
        if (nextIndex > beforeAfters.length - 1) {
            nextIndex = 0;
        };
        setImgIndex(nextIndex);
    }

    const handlePreviousPress = () => {
        let previousIndex = imgIndex - 1;
        if (previousIndex - 1 < 0) {
            previousIndex = beforeAfters.length - 1;
        }
        setImgIndex(previousIndex);
    }

    return (
        <div id="gallery" className="mt-24 px-2 flex flex-col gap-2">
            <SectionTitle title={"Gallery"}/>
            <GalleryCarousel imgs={beforeAfters} imgIndex={imgIndex} />
            <GalleryButtons nextPress={handleNextPress} previousPress={handlePreviousPress}/>
        </div>
    )
};

export default Gallery;