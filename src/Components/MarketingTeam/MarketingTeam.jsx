import React from 'react';

// react icons
import { TiMessages } from "react-icons/ti";
import { CiSettings } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { SiGooglemeet } from "react-icons/si";
import { MdLabelImportantOutline  } from "react-icons/md";
import AllBrand from './AllBrand/AllBrand';
import Desk from './Desk/Desk';
import Tags from './Tags/Tags';
import Sort from './Sort/Sort';
import Filter from './Filter/Filter';


const MarketingTeam = () => {





    return (
        <div className=' bg-white min-h-screen rounded-md px-2 md:px-3 lg:px-4 shadow-sm '>

            {/* Header section */}
            <div className='flex items-center justify-between py-4 shadow-sm  '>
                <h1 className='md:font-medium lg:text-xl text-sm mr-2'> Products </h1>
                <div className=' flex items-center md:gap-4 gap-2 '>


                    <div class="relative w-full">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">

                        </div>
                        <input type="text" id="search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-4 p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Search..." />
                        <button type="button" class="absolute inset-y-0 end-0 flex items-center pe-3">
                            <IoIosSearch size={23} className="min-w-max" ></IoIosSearch>
                        </button>
                    </div>

                    <div className='bg-white shadow-md rounded-md '>
                        <button> <TiMessages size={20} className="min-w-max  w-10 mx-auto hidden md:block" ></TiMessages> </button>

                    </div>
                    <div className='bg-white shadow-md rounded-md '>
                        <button> <CiSettings size={20} className="min-w-max  w-10 mx-auto" ></CiSettings> </button>

                    </div>

                </div>
            </div>

            {/* title key word section  */}

            <div className='flex item-cenmter justify-between shadow-md mt-2'>
                <div className='flex items-center gap-2 md:gap-3 lg:gap-4 py-2 px-2'>

                    {/* All Brand Components  */}
                    <AllBrand></AllBrand>

                    {/* Desk Components  */}
                    <Desk></Desk>

                    {/* Tags Components  */}
                    <Tags></Tags>

                    {/* Sort Components  */}

                    <Sort></Sort>

                    {/* Filter Components  */}

                    <Filter></Filter>
                </div>
                <div className='flex items-center gap-1 md:gap-2 lg:gap-4 px-2'>
                    <div className="relative md:py-2 lg:py-3 py-1">
                        <div className='flex items-center bg-white gap-2 rounded-md shadow-md py-1 px-3   '>
                            <SiGooglemeet size={18} className="min-w-max" ></SiGooglemeet >
                            <button
                                className=" flex items-center gap-1 font-medium "
                                id="options-menu"

                                aria-haspopup="true"
                                aria-expanded="true"
                            >
                                Meeting
                            </button>

                        </div>
                    </div>
                    <div className="relative md:py-2 lg:py-3 py-1">
                        <div className='flex items-center bg-white gap-2 rounded-md shadow-md py-1 px-3   '>
                            <MdLabelImportantOutline  size={23} className="min-w-max" ></MdLabelImportantOutline  >
                            <button
                                className=" flex items-center gap-1 font-medium "
                                id="options-menu"

                                aria-haspopup="true"
                                aria-expanded="true"
                            >
                                Import/Export
                            </button>

                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default MarketingTeam;