import React from 'react';

const ServiceDetail = ({detail}) => {

    return (
        <div className="px-8 inline-block py-2 rounded bg-primary-blue text-xl font-bold text-white text-center flex-shrink-0 shadow-black shadow">
            {detail}
        </div>
    )
}

export default ServiceDetail;