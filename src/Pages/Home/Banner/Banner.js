import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../assets/images/banner.png'
const Banner = () => {
    return (
        <div className='mt-5 mb-5'>
            <section className="bg-gray-800 text-gray-100 rounded-lg">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">Go Food service
                            <span className="dark:text-violet-400"></span> for all Ages
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Go food provide with all kinds home made-
                            <br className="hidden md:inline lg:hidden" />food with different test from restuarent
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Subscribe</Link>
                            <Link rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">About us</Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={banner} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;