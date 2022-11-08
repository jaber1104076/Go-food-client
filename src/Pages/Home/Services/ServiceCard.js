import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { serviceName, price, description, image } = service
    return (
        <div className='border-4 rounded-md'>
            <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline p-4">
                <img role="presentation" alt='' className="object-cover w-full rounded h-44 bg-gray-500" src={image} />
                <div className="p-6 space-y-2">
                    <h3 className="text-3xl font-semibold">{serviceName}</h3>
                    <span className="text-2xl dark:text-gray-400">${price}</span>
                    <p>{description.slice(0, 100) + "..."}</p>
                </div>
                <button className='btn btn-outline'>Details</button>
            </div>
        </div>
    );
};

export default ServiceCard;