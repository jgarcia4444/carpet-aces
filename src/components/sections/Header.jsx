import React from 'react';

import logo from '../../media/logo/carpet-aces.png'

const Header = () => {

    return (
        <div id="/" className="flex flex-col h-full pt-20">
            <img src={logo} className="w-3/4 mx-auto " alt="logo" />
        </div>
    )
}

export default Header;