import React from 'react';

const ServiceDetailCard = ({ service }) => {
    const { serviceName, price, description, image } = service
    return (
        <div>
            <div>
                <div className="bg-base-200 shadow-xl max-w-sm mx-auto group mt-10">
                    <img role="presentation" alt='' className="p-1 object-cover w-full rounded h-44 bg-gray-500" src={image} />
                    <div className="p-6 space-y-2">
                        <h3 className="text-3xl font-semibold">{serviceName}</h3>
                        <span className="text-2xl dark:text-gray-400">${price}</span>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailCard;