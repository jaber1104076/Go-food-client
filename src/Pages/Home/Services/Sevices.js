import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Sevices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <h2 className='text-center text-3xl text-gray-800 font-semibold'>Services</h2>
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            services.map(service => <ServiceCard
                                key={service._id}
                                service={service}
                            ></ServiceCard>)
                        }
                    </div>
                    <div className="flex justify-center">
                        <Link to='/allservices'>
                            <button type="button" className="px-6 py-3 text-sm rounded-md  bg-gray-900 text-gray-400">Load more services...</button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Sevices;