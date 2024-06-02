import React from 'react';

const GalleryCarousel = ({imgs, imgIndex}) => {

    console.log(imgs);

    const shownImages = imgs[imgIndex];

    const {before, after} = shownImages;

    return (
        <div className="w-full flex flex-row relative">
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-primary-blue z-20"></div>
            <div className="w-1/2 relative">
                <div className="absolute top-4 left-4 font-bold text-sm">Before</div>
                <img src={before} alt="" className="" />
            </div>
            <div className="w-1/2 relative">
                <div className="absolute top-4 left-4 font-bold text-sm">After</div>
                <img src={after} alt="" className="" />
            </div>
        </div>
    )
};

export default GalleryCarousel;