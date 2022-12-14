import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { serviceName, price, description, image, _id } = service
    return (
        <div className='border-4 rounded-md'>
            <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline p-4">
                <PhotoProvider>
                    <PhotoView src={image}>
                        <img role="presentation" alt='' className="object-cover w-full rounded h-44 bg-gray-500" src={image} />
                    </PhotoView>
                </PhotoProvider>
                <div className="p-6 space-y-2">
                    <h3 className="text-3xl font-semibold">{serviceName}</h3>
                    <span className="text-2xl dark:text-gray-400">${price}</span>
                    <p>{description.slice(0, 100) + "..."}</p>
                </div>
                <div className='text-center p-4'>
                    <Link to={`/services/${_id}`}><button className='btn btn-success'>Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;