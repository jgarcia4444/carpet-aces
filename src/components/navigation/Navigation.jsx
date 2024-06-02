import React, {useState, useEffect} from 'react';
import { FiMenu, FiMinusCircle } from "react-icons/fi";

import carpetAces from '../../media/logo/carpet-aces.png'

const Navbar = () => {

    const [showMobileNav, setShowMobileNav] = useState(false);
    const [showFixedNav, setShowFixedNav] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') { 
          if (window.scrollY > 20) {
            setShowFixedNav(true); 
          } else if (window.scrollY < 21) { 
            setShowFixedNav(false);  
          }
          setLastScrollY(window.scrollY); 
        }
    };

    const renderLinks = () => {
        const links = ['Services', 'Gallery', 'Contact']
        return (
            <div className="bg-primary-blue absolute right-0 top-12 flex flex-col w-24 ">
                <FiMinusCircle onClick={() => setShowMobileNav(false)} size={28} className="text-primary-blue absolute bg-white rounded-full -right-2 -top-2 hover:cursor-pointer transition-all duration-300 hover:opacity-90 z-10" />
                {links.map((info, i) => {
                return (
            <a key={`${i}-${info}`} href={`#${info.toLowerCase()}`} className="py-1 pl-2 text-white border-white border-b-2 opacity-70 transition-all duration-300 hover:opacity-100">
                    {info}
                    </a>
                )
            })}
            </div>
        )
        
    }

    const dynamicMenuColor = showFixedNav === true ? "#fff" : "#2f3b69";

    const mobileNav = (
        <div className="md:hidden relative text-white">
            {showMobileNav === false ?
                <FiMenu onClick={() => setShowMobileNav(true)} color={dynamicMenuColor} size={32} className="hover:opacity-70 hover:cursor-pointer" />
            :
            <div className="bg-white flex flex-col">
                {renderLinks()}
            </div>
            }
        </div>
    );

    const navbarStyle = () => {
        let style = "flex flex-row top-0 left-0 w-full py-2 justify-between items-center px-4";
        if (showFixedNav === true) {
            style += " bg-primary-blue sticky"
        } else {
            style += " absolute";
        };
        return style;
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar)
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            }
        }
    },[lastScrollY]);

    return (
        <div className={`transition-all duration-300 ${navbarStyle()}`}>
            <div className="">
                <a href="#top" className="">
                    <img src={carpetAces} className="w-16 h-16 rounded-full " alt="logo" />
                </a>
            </div>
            {mobileNav}
        </div>
    )
}

export default Navbar;