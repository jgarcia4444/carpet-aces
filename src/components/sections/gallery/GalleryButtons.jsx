import React from 'react';
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

const GalleryButtons = ({nextPress, previousPress}) => {

    const iconColor = "#fff";
    const iconSize = 24;

    const buttons = [
        {icon: <FiArrowLeft color={iconColor} size={iconSize} />, onClick: previousPress},
        {icon: <FiArrowRight color={iconColor} size={iconSize}/>, onClick: nextPress}
    ];

    const renderButtons = () => {
        return buttons.map((info, i) => (
            <div key={i} className="bg-primary-blue rounded p-2 transition-all duration-300 hover:cursor-pointer hover:opacity-90" onClick={info.onClick}>
                {info.icon}
            </div>
        ))
    }

    return (
        <div className="flex flex-row w-full justify-between">
            {renderButtons()}
        </div>
    )
}

export default GalleryButtons;