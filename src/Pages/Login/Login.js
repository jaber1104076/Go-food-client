import React from 'react';
import { Form, Link } from 'react-router-dom';
import image from '../../assets/images/image.jpg'

const Login = () => {
    return (
        <div className='mt-5 mb-5'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left w-1/2">
                        <img src={image} alt="" />
                    </div>
                    <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 w-1/2">
                        <h1 className="text-3xl font-bold text-center p-5">Login now!</h1>
                        <Form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;