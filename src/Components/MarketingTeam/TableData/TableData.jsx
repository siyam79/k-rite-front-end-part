import React from 'react';

const TableData = () => {


    const wishlistProduct = [
        {
            "title": "siyam Ahmed"
        },
        {
            "title": "siyam Ahmed"
        },
        {
            "title": "siyam Ahmed"
        },
        {
            "title": "siyam Ahmed"
        },
        {
            "title": "siyam Ahmed"
        },
    ]


    return (
        <div>
            <div className="overflow-x-auto py-10 ">
                <table className="w-full divide-y ">
                    <thead className="bg-white ">
                        <tr className='text-slate-500 font-medium  border-2 '>
                            <th className="py-2 px-2  border-2 flex items-center  gap-2">
                                <input type="checkbox" name="" id="" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
                                Brand
                            </th>
                            <th className="py-2 px-4 border-2"> Description </th>
                            <th className="py-2 px-4 border-2"> Members </th>
                            <th className="py-2 px-4 border-2"> Categories </th>
                            <th className="py-2 px-4 border-2"> Tags</th>
                            <th className="py-2 px-4 border-2">Next Meeting</th>
                            <th className="py-2 px-4 border-2">+</th>

                        </tr>
                    </thead>
                    <tbody className="divide-y bg-white border-2 ">
                        {
                            wishlistProduct?.map((product, i) => (
                                <tr key={i} className="py-4 border-2 ">

                                    
                                    <td className="py-2  border-2 px-2 ">


                                        <div className='flex items-center gap-1'>
                                            <input type="checkbox" name="" id="" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />

                                            <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{product?.title}</label>

                                           
                                        </div>





                                    </td>
                                    <td className="py-2  border-2 px-2 ">{product?.title}</td>
                                    <td className="py-2  border-2 px-2 ">{product?.title}</td>
                                    <td className="py-2  border-2 px-2 ">{product?.title}</td>
                                    <td className="py-2  border-2 px-2 ">{product?.title}</td>
                                    <td className="py-2  border-2 px-2 ">{product?.title}</td>
                                    <td className="py-2  border-2 px-2 ">  </td>
                                </tr>
                            ))}
                    </tbody>
                </table>

            </div>

        </div>
    );
};

export default TableData;