import React from 'react';

const DetailReview = ({ review, handleDelete, handleUpdate }) => {
    const { description, rating, serviceName, email, _id, } = review
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
                                    <label htmlFor="Toggle3" className="inline-flex items-center p-2 rounded-md cursor-pointer text-gray-800">
                                        <input id="Toggle3" type="checkbox" className="hidden peer" />
                                        <span onClick={() => handleDelete(_id)} className="px-4 py-2 rounded-l-md bg-violet-400 peer-checked:dark:bg-gray-300">Delete</span>
                                        <span onClick={() => handleUpdate(_id)} className="px-4 py-2 rounded-r-md bg-gray-300 peer-checked:dark:bg-violet-400">Update</span>
                                    </label>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DetailReview;