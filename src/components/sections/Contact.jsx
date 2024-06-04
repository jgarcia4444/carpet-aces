import React from 'react';
import { FiMail, FiPhone } from "react-icons/fi";

import SectionTitle from '../../shared/text/SectionTitle';

const Contact = () => {

    const iconColor = "#fff";
    const iconSize = 32;

    return (
        <div id="contact" className="mt-24 px-2 flex flex-col gap-4 mb-8">
            <SectionTitle title="Contact"/>
            <div className="flex flex-row items-center">
                <div className="mr-12 p-2 rounded-full bg-primary-blue">
                    <FiMail size={iconSize} color={iconColor} />
                </div>
                <div className="">
                    <a href="mailto:carpetaces8@gmail.com" className="">carpetaces8@gmail.com</a>
                </div>
            </div>
            <div className="flex flex-row items-center">
                <div className="mr-12 p-2 rounded-full bg-primary-blue">
                    <FiPhone size={iconSize} color={iconColor}/>
                </div>
                <div className="flex flex-row">
                    <div className="mr-2">
                        <a href="tel:2087034922" className="">(208)703-4922</a>
                    </div>
                    |
                    <div className="ml-2">
                        <a href="tel:8318097087" className="">(831)809-7087</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contact;