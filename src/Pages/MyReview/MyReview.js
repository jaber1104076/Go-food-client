import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/ContextProvider';
import DetailReview from './DetailReview';

const MyReview = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email, refresh])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/review/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('dleted succesfully')
                    setRefresh(!refresh)
                }
            })

    }

    const handleUpdate = (id) => {
        console.log(id)
    }

    return (
        <div>
            <h3 className='text-center text-2xl font-semibold text-indigo-600'>My review</h3>
            <div>
                {
                    reviews.map(review => <DetailReview
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