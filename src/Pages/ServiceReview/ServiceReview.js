import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ClientReview from './ClientReview';
import PlaceReview from './PlaceReview';
import ServiceDetailCard from './ServiceDetailCard';

const ServiceReview = () => {
    const [services, setServices] = useState([])
    const [reviews, setReviews] = useState([])
    const router = useParams()
    const { id } = router;

    useEffect(() => {
        fetch(`https://b6a11-service-review-server-side-jaber1104076.vercel.app/services/${id}`)
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [id])


    useEffect(() => {
        fetch('https://b6a11-service-review-server-side-jaber1104076.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <section>
                    {
                        services.map(service => <ServiceDetailCard
                            key={service._id}
                            service={service}
                        ></ServiceDetailCard>)
                    }
                </section>
                <section>
                    {
                        services.map(service => <PlaceReview
                            key={service._id}
                            service={service}
                        ></PlaceReview>)
                    }
                </section>
            </div>
            <section className='mt-5'>
                <h2 className="mb-4 text-2xl font-semibold text-center text-indigo-600">Customer Reviews</h2>
                {
                    reviews.sort((a, b) => b.time - a.time).map(review => <ClientReview
                        key={review._id}
                        review={review}
                    ></ClientReview>)
                }
            </section>
        </div>
    );
};

export default ServiceReview;