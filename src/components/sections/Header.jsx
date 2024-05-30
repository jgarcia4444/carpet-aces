import React from 'react';

import logo from '../../media/logo/carpet-aces.png'

const Header = () => {

    return (
        <div className="flex flex-col h-full">
            <img src={logo} className="w-3/4 mx-auto mt-20" alt="logo" />
        </div>
    )
}

export default Header;