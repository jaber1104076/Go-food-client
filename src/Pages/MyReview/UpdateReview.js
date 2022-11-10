import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Form, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../Context/ContextProvider';

const UpdateReview = () => {
    const [reviews, setReviews] = useState([])
    const { user } = useContext(AuthContext)
    const router = useParams()
    const { id } = router;
    const navigate = useNavigate()
    // console.log(id)

    useEffect(() => {
        fetch(`https://b6a11-service-review-server-side-jaber1104076.vercel.app/myreviews/${id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })

    }, [id])

    const handlePlaceOrder = (event) => {
        event.preventDefault();
        const form = event.target;
        const service = form.service.value;
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
            description: message
        }
        // console.log(reviews)
        fetch(`https://b6a11-service-review-server-side-jaber1104076.vercel.app/review/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success(`succesfully updated`)
                    navigate('/myreview')
                }

            })
    }

    return (
        <div>
            <div className='mt-5 mb-5'>
                <Form onSubmit={handlePlaceOrder}>
                    <h2 className="text-4xl mt-3 mb-3 text-center font-bold text-indigo-700">Update your Review :</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                        <input name='service' type="text" placeholder="Service Name" className="input input-bordered input-primary w-full" defaultValue={reviews.serviceName} readOnly />
                        <input name='photoURL' type="text" placeholder="photo Url" className="input input-bordered input-primary w-full" defaultValue={user?.photoURL} readOnly />
                        <input name='rating' type="text" placeholder="Ratings" className="input input-bordered input-primary w-full" defaultValue={reviews.rating} />
                        <input name='email' type="text" placeholder="Your Email" className="input input-bordered input-primary w-full" defaultValue={user?.email} readOnly />
                        <textarea name='review' className="textarea textarea-bordered h-24 w-full mt-5 mb-5" placeholder="Your Review" defaultValue={reviews.description}></textarea> <br />
                        <input type="submit" className='btn' value="Update" />
                    </div>
                </Form>

            </div>
        </div>
    );
};

export default UpdateReview;