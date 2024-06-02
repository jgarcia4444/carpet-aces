import React from 'react';

import SectionTitle from '../../shared/text/SectionTitle';
import Service from './services/Service';

import carpet from '../../media/services/carpet.jpg';

const Services = () => {

    const renderServices = () => {
        const services = [
            {serviceName: "Carpet", img: carpet, details: ["Stain Removal", "Deep Clean", "Odor Elimination", "Allergy Control", "Quick Drying", "Eco-Friendly"]},
            {serviceName: "Tile", img: carpet, details: ["Grout Cleaning", "Stain Removal", "Deeb Scrubbing", "Sealant Application", "Mildew Removal", "Shine Restoration"]},
            {serviceName: "Upholstery", img: carpet, details: ["Upholstery Refresh", "Odor Elimination", "Fabric Protection", "Pet Hair Removal", "Deep Clean", "Stain Removal"]},
            {serviceName: "Car Interior", img: carpet, details: ["Dashboard Cleaning", "Odor Elimination", "Vacuuming", "Leather Conditioning", "Stain Removal", "Carpet Shampooing"]}
        ];
        return services.map((info, i) => <Service info={info} key={`${i}-${info.serviceName}`} />)
    }

    return (
        <div id="services" className="mt-24 flex flex-col px-2">
            <SectionTitle title={"Services"} />
            <div className="flex flex-col gap-12">
                {renderServices()}
            </div>
        </div>
    )
}

export default Services;