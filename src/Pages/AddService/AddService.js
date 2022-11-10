import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Form } from 'react-router-dom';
import { AuthContext } from '../../Context/ContextProvider';
import useTitle from '../../Hooks/useTitle';

const AddService = () => {
    const { user } = useContext(AuthContext)
    useTitle('Add Service')
    const data = new Date()
    const handlePlaceOrder = (event) => {
        event.preventDefault();
        const form = event.target;
        const service = form.service.value;
        const photoURL = form.photoURL.value;
        const price = form.price.value;
        const email = user?.email || 'unregisterd'
        const message = form.message.value;

        const serviceCollection = {
            serviceName: service,
            image: photoURL,
            price: price,
            email: email,
            description: message,
            time: data.getTime()
        }
        fetch('https://b6a11-service-review-server-side-jaber1104076.vercel.app/service', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(serviceCollection)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('service added succesfully')
                }
                console.log(data)
            })
    }
    return (
        <div>
            <div className='mt-5 mb-5'>
                <Form onSubmit={handlePlaceOrder}>
                    <h2 className="text-4xl mt-3 mb-3 text-center text-orange-600">Add your required service :</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                        <input name='service' type="text" placeholder="Service Name" className="input input-bordered input-primary w-full" />
                        <input name='photoURL' type="text" placeholder="photo Url" className="input input-bordered input-primary w-full" />
                        <input name='price' type="text" placeholder="Service Price" className="input input-bordered input-primary w-full" />
                        <input name='email' type="text" placeholder="Your Email" className="input input-bordered input-primary w-full" defaultValue={user?.email} readOnly />
                        <textarea name='message' className="textarea textarea-bordered h-24 w-full mt-5 mb-5" placeholder="Your Message"></textarea> <br />
                        <input type="submit" className='btn' value="Add service" />
                    </div>
                </Form>

            </div>
        </div>
    );
};

export default AddService;