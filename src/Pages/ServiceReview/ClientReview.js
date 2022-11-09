import React, { useEffect, useState } from 'react';

const ClientReview = ({ review }) => {
    const { description, rating, serviceName, email } = review
    return (
        <div>
            <div className="container p-2 mx-auto sm:p-4 text-gray-100">
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <thead className="bg-gray-700">
                            <tr className="text-left">
                                <th className="p-3">Service Name</th>
                                <th className="p-3">Description</th>
                                <th className="p-3">Email</th>
                                <th className="p-3">Ratings</th>
                                <th className="p-3">Status</th>
                            </tr>
                        </thead>
                        {/* <div>
                            {
                                reviews.map(review => <SingleReview
                                    key={review._id}
                                    review={review}
                                ></SingleReview>)
                            }
                        </div> */}
                        <tbody>
                            <tr className="border-b border-opacity-20 border-gray-700 bg-gray-900">
                                <td className="p-3">
                                    <p>{serviceName}</p>
                                </td>
                                <td className="p-3">
                                    <p>{description}</p>
                                </td>
                                <td className="p-3">
                                    <p>{email}</p>
                                </td>
                                <td className="p-3">
                                    <p>{rating}</p>
                                </td>
                                <td className="p-3 text-right">
                                    <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
                                        <span>Pending</span>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ClientReview;