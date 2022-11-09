import React, { useEffect, useState } from 'react';
import useTitle from '../../../Hooks/useTitle';
import ServiceCard from './ServiceCard';

const AllService = () => {
    const [services, setServices] = useState([])
    useTitle("All Services")
    useEffect(() => {
        fetch('http://localhost:5000/all-services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])
    return (
        <div>
            <div className='mt-5'>
                <section className="dark:bg-gray-800 dark:text-gray-100">
                    <h2 className='text-center text-3xl text-gray-800 font-semibold'>All Services</h2>
                    <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {
                                services.map(service => <ServiceCard
                                    key={service._id}
                                    service={service}
                                ></ServiceCard>)
                            }
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AllService;