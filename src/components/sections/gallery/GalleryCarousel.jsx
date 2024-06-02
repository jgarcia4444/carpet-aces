import React from 'react';

const GalleryCarousel = ({imgs}) => {

    return (
        <div className="w-full flex flex-col gap-2">
            <div className="">
                <div className="w-1/2 relative">
                    <div className="absolute top-4 left-4">Before</div>
                </div>
                <div className="w-1/2 relative">
                    <div className="absolute top-4 left-4">After</div>
                </div>
            </div>
        </div>
    )
};

export default GalleryCarousel;