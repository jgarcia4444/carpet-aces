import React from 'react';

const FloatingContactUsButton = () => {

    return (
        <div className="fixed bottom-8 right-4 bg-primary-blue py-2 px-4 text-white rounded-3xl hover:cursor-pointer transition-all duration-300 animate-pulse hover:animate-none hover:scale-105 active:opacity-80">
            <a href="mailto:carpetaces8@gmail.com" className="">
                Contact Us
            </a>
        </div>
    )
}

export default FloatingContactUsButton;