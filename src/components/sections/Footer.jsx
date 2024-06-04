import React from 'react';

const Footer = () => {

    return (
        <div className="w-full bg-primary-blue fixed bottom-0 left-0 text-sm text-white py-1 flex flex-row justify-between px-2">
            <div className="">
                Carpet Aces &copy; 2024
            </div> 
            <div className="">
                Website by <a target="_blank" href="https://code-wizards.vercel.app" className=" opacity-20">Code Wizards</a>
            </div>
        </div>
    )
}

export default Footer;