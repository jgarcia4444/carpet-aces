import React from 'react';

import ServiceDetail from './details/ServiceDetail';

const Service = ({info}) => {

    const {serviceName, img, details} = info;

    const renderDetails = () => {
        return details.map((detail, i) => <ServiceDetail detail={detail} key={`${i}-${detail}`} />)
    }

    return (
        <div className="flex flex-col justify-center">
            <img src={img} alt="" className="rounded" />
            <h3 className="text-3xl my-1 font-serif">{serviceName}</h3>
            <div className="w-full flex flex-row no-wrap overflow-x-auto gap-12">
                {renderDetails()}
            </div>
        </div>
    )
}

export default Service