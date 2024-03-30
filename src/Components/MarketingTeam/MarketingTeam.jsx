

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IoIosSearch } from 'react-icons/io';
import { TiMessages } from 'react-icons/ti';
import { CiSettings } from 'react-icons/ci';
import { SiGooglemeet } from 'react-icons/si';
import { MdLabelImportantOutline } from 'react-icons/md';
import AllBrand from './AllBrand/AllBrand';
import Desk from './Desk/Desk';
import Tags from './Tags/Tags';
import Sort from './Sort/Sort';


const MarketingTeam = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedProfession, setSelectedProfession] = useState('All');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/data.json');
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);



    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };


    const filteredData = data
        ? data.filter(
            (product) =>
                product?.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product?.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : [];


    const handleProfessionChange = (e) => {
        setSelectedProfession(e.target.value);
    };


//  profession data filtering

    const filteredDataByProfession =
        selectedProfession !== 'All'
            ? filteredData?.filter((product) => product?.profession === selectedProfession)
            : filteredData;

    return (
        <>
            <div className='bg-white min-h-screen rounded-md px-2 md:px-3 lg:px-4 shadow-sm'>
                {/* Header section */}
                <div className='flex items-center justify-between py-4 shadow-sm'>
                    <h1 className='md:font-medium lg:text-xl text-sm mr-2 text-gray-500'> Products </h1>
                    <div className='flex items-center gap-4'>
                        <div className='relative w-full'>
                            <input
                                value={searchQuery}
                                onChange={handleSearchChange}
                                type='text'
                                id='search'
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-4 p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
                                placeholder='Search...'
                            />
                            <button type='button' className='absolute inset-y-0 end-0 flex items-center pe-3'>
                                <IoIosSearch size={23} className='min-w-max' />
                            </button>
                        </div>
                        <div className='bg-white shadow-md rounded-md'>
                            <button>
                                <TiMessages size={20} className='min-w-max w-10 mx-auto hidden md:block' />
                            </button>
                        </div>
                        <div className='bg-white shadow-md rounded-md'>
                            <button>
                                <CiSettings size={20} className='min-w-max w-10 mx-auto' />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Title keyword section */}
                <div className='flex item-cenmter justify-between shadow-md mt-2'>
                    <div className='flex items-center gap-2 md:gap-3 lg:gap-4 py-2 px-2'>
                        {/* All Brand Components */}
                        <AllBrand />
                        {/* Desk Components */}
                        <Desk />
                        {/* Tags Components */}
                        <Tags />
                        {/* Sort Components */}
                        <Sort />

                        {/* profession Filter */}
                        <div className='py-2 px-2'>
                            <select
                                value={selectedProfession}
                                onChange={handleProfessionChange}
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'>
                                <option value='All'>All</option>
                                <option value='Data_Science'>Data_Science</option>
                                <option value='Web_Developer'>Web_Developer</option>
                                <option value='App_Developer'>App_Developer</option>
                                <option className='pb-2' value='Programmer'>Programmer</option>
                            </select>
                        </div>

                    </div>

                    {/* meeting section */}
                    <div className='flex items-center gap-1 md:gap-2 lg:gap-4 px-2'>
                        <div className='relative md:py-2 lg:py-3 py-1'>
                            <div className='flex items-center bg-white gap-2 rounded-md shadow-md py-1 px-3'>
                                <SiGooglemeet size={13} className='min-w-max' />
                                <button className='flex items-center gap-1 font-medium whitespace-pre text-sm md:text-md text-gray-500'>
                                    Meeting
                                </button>
                            </div>
                        </div>
                        <div className='relative md:py-2 lg:py-3 py-1'>
                            <div className='flex items-center bg-white gap-2 rounded-md shadow-md py-1 px-3'>
                                <MdLabelImportantOutline size={18} className='min-w-max' />
                                <button className='flex items-center gap-1 font-medium whitespace-pre text-sm md:text-md text-gray-500'>
                                    Import/Export
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Data table */}
                <div>
                    <div className='overflow-x-auto py-10'>
                        {filteredDataByProfession?.length > 0 ? (
                            <table className='w-full divide-y'>
                                <thead className='bg-white'>

                                    {/* table  */}
                                    <tr className='text-gray-500 font-medium border-2'>
                                        <th className='py-2 px-2 border-2 flex items-center gap-2'>
                                            <input
                                                type='checkbox'
                                                name=''
                                                id=''
                                                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                                            />
                                            Brand
                                        </th>
                                        <th className='py-2 px-4 border-2'> Description </th>
                                        <th className='py-2 px-4 border-2'> Members </th>
                                        <th className='py-2 px-4 border-2'> Categories </th>
                                        <th className='py-2 px-4 border-2'> Tags</th>
                                        <th className='py-2 px-4 border-2'>Next Meeting</th>
                                        <th className='py-2 px-4 border-2'>+</th>
                                    </tr>
                                </thead>
                                <tbody className='divide-y bg-white border-2'>
                                    {filteredDataByProfession?.map((product, i) => (
                                        <tr key={i} className='py-4 border-2'>
                                            <td className='py-2 border-2 px-2'>
                                                <div className='flex items-center gap-2'>
                                                    <input
                                                        type='checkbox'
                                                        name=''
                                                        id=''
                                                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                                                    />
                                                    <img
                                                        src={product?.icon}
                                                        alt=''
                                                        className='w-6 h-6 rounded-full'
                                                    />
                                                    <label
                                                        htmlFor='link-checkbox'
                                                        className='text-sm font-medium text-gray-900 dark:text-gray-300'>
                                                        {product?.brand}
                                                    </label>
                                                </div>
                                            </td>

                                            {/* description */}
                                            <td className='py-2 border-2 px-1'>
                                                <div className='truncate text-[12px]'>
                                                    {product?.description?.split(' ').slice(0, 4).join(' ')}.....
                                                </div>
                                            </td>


                                            {/* image section */}
                                            <td className='py-2 border-2 px-2 flex l'>
                                                <div className='flex -space-x-4 rtl:space-x-reverse relative group'>
                                                    {product?.member_image.length > 0 ? (
                                                        <img
                                                            className='w-10 h-10 border-2 border-white rounded-full dark:border-gray-800'
                                                            src={product?.member_image[0]}
                                                            alt=''
                                                        />
                                                    ) : (
                                                        <div className='hidden'></div>
                                                    )}
                                                    {product?.member_image.length > 1 ? (
                                                        <img
                                                            className='w-10 h-10 border-2 border-white rounded-full dark:border-gray-800'
                                                            src={product?.member_image[1]}
                                                            alt=''
                                                        />
                                                    ) : (
                                                        <div className='hidden'></div>
                                                    )}
                                                    {product?.member_image.length > 2 ? (
                                                        <img
                                                            className='w-10 h-10 border-2 border-white rounded-full dark:border-gray-800'
                                                            src={product?.member_image[2]}
                                                            alt=''
                                                        />
                                                    ) : (
                                                        <div className='hidden'></div>
                                                    )}
                                                    {product?.member_image.length > 4 ? (
                                                        <p className='flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800 cursor-pointer'>
                                                            +99
                                                        </p>
                                                    ) : (
                                                        <div className='hidden'></div>
                                                    )}

                                                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white text-center opacity-0 group-hover:opacity-100 p-1 rounded-md">
                                                        {product.user_name}
                                                    </div>

                                                </div>
                                            </td>


                                            {/* caterories */}
                                            <td className='py-2 border-2 px-2'>
                                                {product?.categories?.market_place && (
                                                    <p className=' py-0.5 px-2 bg-sky-200 text-sky-700 uppercase border text-center rounded-full text-[10px]'>
                                                        {product?.categories?.market_place}
                                                    </p>
                                                )}
                                                {product?.categories?.authentication && (
                                                    <p className='py-0.5 px-2 bg-green-300 text-green-600 uppercase border text-center rounded-full text-[10px] mt-1'>
                                                        {product?.categories?.authentication}
                                                    </p>
                                                )}
                                                {product?.categories?.web_service && (
                                                    <p className='py-0.5 px-2 bg-purple-200 text-purple-600 uppercase border text-center rounded-full text-[10px]'>
                                                        {product?.categories?.web_service}
                                                    </p>
                                                )}
                                                {product?.categories?.brand && (
                                                    <p className='py-0.5 px-2 bg-yellow-200 mt-1 text-yellow-600 uppercase border text-center rounded-full text-[10px]'>
                                                        {product?.categories?.brand}
                                                    </p>
                                                )}
                                            </td>

                                            {/* tags */}
                                            <td className='py-2 border-2 px-2'>
                                                {product?.tags.map((tag, index) => (
                                                    <p key={index} className='text-[10px] font-medium border text-left px-2 py-0.5'>
                                                        #{tag}{' '}
                                                    </p>
                                                ))}
                                            </td>

                                            {/*  meet ing time  */}

                                            <td className='py-2 border-2 px-2'>
                                                {product?.meeting_time?.yesterday && (
                                                    <p className='py-0.5 px-2 bg-yellow-200 text-yellow-700 uppercase border text-center rounded-full text-[10px]'>
                                                        {product?.meeting_time?.yesterday}
                                                    </p>
                                                )}
                                                {product?.meeting_time?.to_day && (
                                                    <p className='py-0.5 px-2 bg-blue-300 text-blue-700 uppercase border text-center rounded-full text-[10px]'>
                                                        {product?.meeting_time?.to_day}
                                                    </p>
                                                )}
                                                {product?.meeting_time?.tomorrow && (
                                                    <p className='py-0.5 px-2 bg-green-300 text-green-700 uppercase border text-center rounded-full text-[10px]'>
                                                        {product?.meeting_time?.tomorrow}
                                                    </p>
                                                )}
                                                {product?.meeting_time?.reject && (
                                                    <p className='py-0.5 px-2 bg-red-300 text-red-700 uppercase border text-center rounded-full text-[10px]'>
                                                        {product?.meeting_time?.reject}
                                                    </p>
                                                )}
                                            </td>

                                            <td className='py-2 border-2 px-2'> </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <div className='text-center mt-4 text-gray-500'>Not Found</div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MarketingTeam;
