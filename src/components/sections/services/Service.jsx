import React from 'react';

const Service = ({info}) => {

    const {serviceName} = info;

    return (
        <div className="">
            {serviceName}
        </div>
    )
}

export default Service