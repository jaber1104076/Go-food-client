import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blogs = () => {
    useTitle('Blog')
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold text-center mb-5 sm:text-4xl">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Difference between SQL and NoSQL?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). <strong>NoSQL is a class of DBMs that are non-relational and generally do not use SQL</strong>. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is JWT, and how does it work?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">JSON Web Token (JWT) is <strong>an open standard (RFC 7519) for securely transmitting information between parties as JSON object</strong>. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is the difference between javascript and NodeJS?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. <strong>NodeJS, on the other hand, is an interpreter or execution environment for the JavaScript programming language</strong>.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How does NodeJS handle multiple requests at the same time?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400"><strong>NodeJS receives multiple client requests and places them into EventQueue</strong>. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;