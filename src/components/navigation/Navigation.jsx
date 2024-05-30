import React, {useState} from 'react';
import { FiMenu, FiMinusCircle } from "react-icons/fi";

import carpetAces from '../../media/logo/carpet-aces.png'

const Navbar = () => {

    const [showMobileNav, setShowMobileNav] = useState(false);

    const renderLinks = () => {
        const links = ['Services', 'Gallery', 'Contact']
        return (
            <div className="bg-primary-blue absolute right-0 top-12 flex flex-col w-24">
                <FiMinusCircle onClick={() => setShowMobileNav(false)} size={28} className="text-primary-blue absolute bg-white rounded-full -right-2 -top-2 hover:cursor-pointer transition-all duration-300 hover:opacity-90" />
                {links.map((info, i) => {
                return (
            <a key={`${i}-${info}`} href={`#${info.toLowerCase()}`} className="py-1 pl-2 text-white border-white border-b-2">
                    {info}
                    </a>
                )
            })}
            </div>
        )
        
    }

    const mobileNav = (
        <div className="md:hidden relative text-white">
            {showMobileNav === false ?
                <FiMenu onClick={() => setShowMobileNav(true)} color={'#fff'} size={32} className="hover:opacity-70 hover:cursor-pointer" />
            :
            <div className="bg-white flex flex-col">
                {renderLinks()}
            </div>
            }
        </div>
    )

    return (
        <div className="flex flex-row absolute sticky top-0 left-0 w-screen  bg-black py-2 bg-primary-blue  justify-between items-center px-4 ">
            <div className="">
                <a href="/" className="">
                    <img src={carpetAces} className="w-16 h-16 rounded-full " alt="logo" />
                </a>
            </div>
            {mobileNav}
        </div>
    )
}

export default Navbar;