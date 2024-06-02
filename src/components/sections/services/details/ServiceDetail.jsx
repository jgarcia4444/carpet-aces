import React from 'react';

const ServiceDetail = ({detail}) => {

    return (
        <div className="px-8 inline-block py-2 rounded-full border-4 border-primary-blue text-xl font-bold text-center flex-shrink-0 my-1 text-primary-blue">
            {detail}
        </div>
    )
}

export default ServiceDetail;