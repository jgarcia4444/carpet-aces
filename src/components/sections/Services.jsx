import React from 'react';

import SectionTitle from '../../shared/text/SectionTitle';
import Service from './services/Service';

const Services = () => {

    const renderServices = () => {
        const services = [
            {serviceName: "Carpet", img: "", details: ["", "", "", ""]},
            {serviceName: "Tile", img: "", details: ["", "", "", ""]},
            {serviceName: "Upholstery", img: "", details: ["", "", "", ""]},
            {serviceName: "Car Interior", img: "", details: ["", "", "", ""]}
        ];

        return services.map((info, i) => <Service info={info} key={`${i}-${info.serviceName}`} />)
    }

    return (
        <div id="services" className="pt-24 flex flex-col px-2">
            <SectionTitle title={"Services"} />
            {renderServices()}
        </div>
    )
}

export default Services;