import React, { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import image from '../../assets/images/image.jpg'
import useTitle from '../../Hooks/useTitle';
import { FaGoogle } from 'react-icons/fa'
import { AuthContext } from '../../Context/ContextProvider';

const Login = () => {
    const { LogIn, googleSignIn } = useContext(AuthContext)
    const [error, setError] = useState()
    const navigate = useNavigate()
    const location = useLocation
    const from = location.state?.from?.pathname || "/";
    useTitle('login')
    const handleLogIn = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        LogIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
                form.reset()
                navigate(from, { replace: true })
            })
            .catch((err) => {
                console.log(err)
                setError(err.message)
            })

    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                console.log(user)
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className='mt-5 mb-5'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left w-1/2">
                        <img src={image} alt="" />
                    </div>
                    <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 w-1/2">
                        <h1 className="text-3xl font-bold text-center p-5">Login now!</h1>
                        <Form onSubmit={handleLogIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </Form>
                        {error && <span className='mx-auto text-red-600'>{error}</span>}
                        <span className='mx-auto'>Do not have account? <Link className='text-orange-500 text-lg' to='/signup'>Signup</Link></span>
                        <div className='mx-auto'>
                            <p className='text-blue-500 text-xl'>Or login with</p>
                            <button onClick={handleGoogleSignIn} className='text-2xl p-5' ><FaGoogle></FaGoogle></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;