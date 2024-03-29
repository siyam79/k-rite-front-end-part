import React from 'react';
import { TbMenuOrder } from "react-icons/tb";

const Filter = () => {
    return (
        <div className="relative md:py-2 lg:py-3 py-1">
        <div className='flex items-center bg-white gap-2 rounded-md shadow-md py-1 px-2   '>
           <TbMenuOrder  size={13} className="min-w-max"></TbMenuOrder >
            <button
                className=" flex items-center gap-1 font-medium whitespace-pre text-sm md:text-md"
               
            >
                Filter
            </button>

        </div>
    </div>
    );
};

export default Filter;