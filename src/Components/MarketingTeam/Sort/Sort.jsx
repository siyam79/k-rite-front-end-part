import React from 'react';
import { FaSortAlphaDown } from "react-icons/fa";

const Sort = () => {
    return (
        <div className="relative md:py-2 lg:py-3 py-1">
            <div className='flex items-center bg-white justify-center gap-2 rounded-md shadow-md py-1 px-1   '>
               <FaSortAlphaDown size={13} className="min-w-max"></FaSortAlphaDown>
                <button
                    className=" flex items-center gap-1 font-medium whitespace-pre text-sm md:text-md"

                >
                    Sort
                </button>

            </div>
        </div>
    );
};

export default Sort;