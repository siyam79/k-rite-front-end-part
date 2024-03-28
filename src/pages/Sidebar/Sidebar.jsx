import { useEffect, useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

// * React icons
import { IoIosArrowBack } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { FaConnectdevelop , FaUserFriends , FaCode } from "react-icons/fa";
import { Fa7  } from "react-icons/fa6";
import { RiBuilding3Line } from "react-icons/ri";
import { LuHelpingHand  } from "react-icons/lu";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";

import { FaChartLine } from "react-icons/fa";





import { NavLink, useLocation, useRoutes } from "react-router-dom";
import SubMenu from "../SubMenu/SubMenu";

const Sidebar = () => {
    let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
    const [open, setOpen] = useState(isTabletMid ? false : true);
    const sidebarRef = useRef();
    const { pathname } = useLocation();

    useEffect(() => {
        if (isTabletMid) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    }, [isTabletMid]);

    useEffect(() => {
        isTabletMid && setOpen(false);
    }, [pathname]);

    const Nav_animation = isTabletMid
        ? {
            open: {
                x: 0,
                width: "16rem",
                transition: {
                    damping: 40,
                },
            },
            closed: {
                x: -250,
                width: 0,
                transition: {
                    damping: 40,
                    delay: 0.15,
                },
            },
        }
        : {
            open: {
                width: "16rem",
                transition: {
                    damping: 40,
                },
            },
            closed: {
                width: "4rem",
                transition: {
                    damping: 40,
                },
            },
        };

    const subMenusList = [
        {
            name: "Products",
            icon: RiBuilding3Line,
            menus: ["Roadmap", "Feedback", "performance", "Team", "Analytics"],
        },
        {
            name: "Team",
            icon: FaConnectdevelop,
            menus: ["dashboard", "realtime", "events"],
        },
    ];

    return (
        <div>
            <div
                onClick={() => setOpen(false)}
                className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${open ? "block" : "hidden"
                    } `}
            ></div>
            <motion.div
                ref={sidebarRef}
                variants={Nav_animation}
                initial={{ x: isTabletMid ? -250 : 0 }}
                animate={open ? "open" : "closed"}
                className=" bg-white text-gray shadow-xl z-[999] max-w-[16rem]  w-[16rem] 
            overflow-hidden md:relative fixed  min-h-screen"
            >
                <div className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300  mx-2">
                    <img
                        src="https://i.ibb.co/1MMyL36/technology-removebg-preview.png"
                        width={35}
                        alt=""
                    />
                    <div>
                        <p> INC </p>
                        <span className="text-xl whitespace-pre  font-semibold ">InnobadedHub</span>
                    </div>
                </div>

                <div className="flex flex-col  h-full">
                    <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
                        <li>
                            <NavLink to={"/"} className="p-2.5 flex rounded-md gap-6 items-center md:cursor-pointer duration-300 font-medium">
                                <AiOutlineAppstore size={23} className="min-w-max" />
                                Design Team
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/marketing_team"} className="p-2.5 flex rounded-md gap-6 items-center md:cursor-pointer duration-300 font-medium">
                                <BsPerson size={23} className="min-w-max" />
                                Marketing Team
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/stroage"} className="p-2.5 flex rounded-md gap-6 items-center md:cursor-pointer duration-300 font-medium">
                                <FaChartLine size={23} className="min-w-max" />
                                Development Team
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/stroage"} className="p-2.5 flex rounded-md gap-6 items-center md:cursor-pointer duration-300 font-medium">
                                <FaCode size={23} className="min-w-max" />
                                Development Team
                            </NavLink>
                        </li>

                        {(open || isTabletMid) && (
                            <div className="border-y py-5 border-slate-300 ">
                                <p className="pl-3 text-slate-500 inline-block mb-2 text-xl font-medium border-2 border-gray-200 w-full ">
                                    Folders
                                </p>
                                {subMenusList?.map((menu) => (
                                    <div key={menu.name} className="flex flex-col gap-1">
                                        <SubMenu data={menu} />
                                    </div>
                                ))}
                            </div>
                        )}
                        <li>
                            <NavLink to={"/settings"} className="p-2.5 flex rounded-md gap-6 items-center md:cursor-pointer duration-300 font-medium">
                                <SlSettings size={23} className="min-w-max" />
                                Settings
                            </NavLink>
                        </li>
                    </ul>
                    {open && (
                        <div className="flex-1 text-sm z-50  max-h-48 my-auto  whitespace-pre   w-full  font-medium  ">
                            <div className="flex border-y border-slate-300 p-4 items-center justify-between">
                                <div>
                                    <ul>
                                        <li>
                                            <NavLink to={"/settings"} className="p-2.5 flex rounded-md gap-6 items-center md:cursor-pointer duration-300 font-medium">
                                                <FaUserFriends  size={23} className="min-w-max" />
                                                Invite Teammates
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={"/settings"} className="p-2.5 flex rounded-md gap-6 items-center md:cursor-pointer duration-300 font-medium">
                                                <LuHelpingHand   size={23} className="min-w-max" />
                                                Help Center 
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={"/settings"} className="p-2.5 flex rounded-md gap-6 items-center md:cursor-pointer duration-300 font-medium">
                                                <Fa7    size={23} className="min-w-max" />
                                               Days Left On trial
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <p className="text-teal-600 py-1.5 px-3 mr-6 text-xs bg-teal-50 rounded-xl">
                                    Upgrade
                                </p>
                            </div>
                        </div>
                    )}
                </div>
                <motion.div
                    onClick={() => {
                        setOpen(!open);
                    }}
                    animate={
                        open
                            ? {
                                x: 0,
                                y: 0,
                                rotate: 0,
                            }
                            : {
                                x: -10,
                                y: -200,
                                rotate: 180,
                            }
                    }
                    transition={{ duration: 0 }}
                    className="absolute w-fit h-fit md:block z-50 hidden right-2 bottom-3 cursor-pointer"
                >
                    <IoIosArrowBack size={25} />
                </motion.div>
            </motion.div>
            <div className="m-3 md:hidden  " onClick={() => setOpen(true)}>
                <MdMenu size={25} />
            </div>
        </div>
    );
};

export default Sidebar;
