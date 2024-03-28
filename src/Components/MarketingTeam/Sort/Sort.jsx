import React from 'react';
import { FaSortAlphaDown } from "react-icons/fa";

const Sort = () => {
    return (
        <div className="relative md:py-2 lg:py-3 py-1">
            <div className='flex items-center bg-white gap-2 rounded-md shadow-md py-1 px-3   '>
               <FaSortAlphaDown ></FaSortAlphaDown>
                <button
                    className=" flex items-center gap-1 font-medium "
                    id="options-menu"

                    aria-haspopup="true"
                    aria-expanded="true"
                >
                    Sort
                </button>

            </div>
        </div>
    );
};

export default Sort;