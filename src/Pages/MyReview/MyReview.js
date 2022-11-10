import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/ContextProvider';
import DetailReview from './DetailReview';

const MyReview = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    const [refresh, setRefresh] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://b6a11-service-review-server-side-jaber1104076.vercel.app/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email, refresh])

    const handleDelete = (id) => {
        fetch(`https://b6a11-service-review-server-side-jaber1104076.vercel.app/review/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('deleted succesfully')
                    setRefresh(!refresh)
                }
            })

    }

    const handleUpdate = (id) => {
        navigate(`/reviews/update/${id}`)
        //console.log(id)
    }

    return (
        <div>
            <h3 className='text-center text-2xl font-semibold text-indigo-600'>My review</h3>
            <div>
                {
                    reviews.sort((a, b) => b.time - a.time).map(review => <DetailReview
                        key={review._id}
                        review={review}
                        handleDelete={handleDelete}
                        handleUpdate={handleUpdate}
                    ></DetailReview>)
                }
            </div>
        </div>
    );
};

export default MyReview;