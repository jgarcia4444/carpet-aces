import React, {useState} from 'react';
import { FiMenu } from "react-icons/fi";

import carpetAces from '../../media/logo/carpet-aces.png'

const Navbar = () => {

    const [showMobileNav, setShowMobileNav] = useState(false);

    const renderLinks = () => {
        const links = ['Services', 'Gallery', 'Contact']
        return links.map((info, i) => {
            return (
                <a href="" className="">
                    
                </a>
            )
        })
    }

    const mobileNav = (
        <div className="md:hidden">
            {showMobileNav === false ?
                <FiMenu color={'#fff'} size={32} />
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
                <img src={carpetAces} className="w-16 h-16 rounded-full" alt="logo" />
            </div>
            {mobileNav}
        </div>
    )
}

export default Navbar;