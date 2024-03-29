import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { RiListSettingsFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";


const AllBrand = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className=" md:py-2 lg:py-3 py-1 w-[140px]">
                <div className='flex items-center bg-white lg:gap-2 rounded-md shadow-md py-1 px-2 lg:w-[140px]  '>
                    <RiListSettingsFill size={15} className="min-w-max" />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center gap-1  "
                       
                    >
                        <span className='font-medium whitespace-pre text-sm md:text-md'>  All Brands</span> <IoIosArrowDown className={` ${isOpen && "rotate-180"} duration-200 `}></IoIosArrowDown>
                    </button>

                </div>


                {isOpen && (
                    <div
                        className=" absolute  w-40 my-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                    >
                        <div className="py-1" role="none">

                            <NavLink to={'/'}

                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                            >
                                View
                            </NavLink>

                            <NavLink to={'/'}

                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                            >
                                Edit
                            </NavLink>
                            <NavLink to={'/'}

                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                            >
                                Delete
                            </NavLink>


                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllBrand;