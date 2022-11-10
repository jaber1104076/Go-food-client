import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Form, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/ContextProvider';

const PlaceReview = ({ service }) => {
    const { user } = useContext(AuthContext)
    const { serviceName } = service;
    const navigate = useNavigate()
    const data = new Date()
    const handlePlaceOrder = (event) => {
        event.preventDefault();
        const form = event.target;
        const service = serviceName || 'service not found'
        const photoURL = user?.photoURL || 'Not found';
        const rating = form.rating.value;
        const email = user?.email || 'unregisterd'
        const message = form.review.value;
        // console.log(service, email)
        const reviews = {
            serviceName: service,
            image: photoURL,
            rating: rating,
            email: email,
            description: message,
            time: data.getTime()
        }
        fetch('https://b6a11-service-review-server-side-jaber1104076.vercel.app/reviews', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged && user?.email) {
                    toast.success('service added succesfully')
                    navigate('/')
                }
                else {
                    toast.error('please first logIn')
                    navigate('/login')
                }
                console.log(data)
            })
    }
    return (
        <div>
            <div className='mt-5 mb-5'>
                <Form onSubmit={handlePlaceOrder}>
                    <h2 className="text-4xl mt-3 mb-3 text-center text-orange-600">Add your Review :</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                        <input name='service' type="text" placeholder="Service Name" className="input input-bordered input-primary w-full" defaultValue={serviceName} readOnly />
                        <input name='photoURL' type="text" placeholder="photo Url" className="input input-bordered input-primary w-full" defaultValue={user?.photoURL} readOnly />
                        <input name='rating' type="text" placeholder="Ratings" className="input input-bordered input-primary w-full" />
                        <input name='email' type="text" placeholder="Your Email" className="input input-bordered input-primary w-full" defaultValue={user?.email} readOnly />
                        <textarea name='review' className="textarea textarea-bordered h-24 w-full mt-5 mb-5" placeholder="Your Review"></textarea> <br />
                        <input type="submit" className='btn' value="Add Review" />
                    </div>
                </Form>

            </div>
        </div>
    );
};

export default PlaceReview;