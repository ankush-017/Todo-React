import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import navimg from '../../assets/Taskify.gif';
import newImage from '../../assets/image.png'; // Import new image

function Nav() {
    const [played, setPlayed] = useState(true);
    const [logo, setLogo] = useState(navimg); // Initialize with the imported image
    const [menu, setMenu] = useState("hidden");
    const [isIconVisible, setIsIconVisible] = useState(true);

    const handleClick = () => {
        if (!played) {
            setLogo(navimg);
            setPlayed(true);
        } else {
            setPlayed(false);
            setLogo(newImage); // Use the imported new image
        }
    }

    const handleMenu = () => {
        setMenu(menu === "hidden" ? "flex" : "hidden");
        setIsIconVisible(!isIconVisible);
    }

    return (
        <div className='w-full bg-black py-4 rounded-lg shadow sticky z-50 top-0'> 
            <nav className='flex md:justify-evenly justify-between'>
                <div className='ml-[12px]'>
                    <Link to="/" >
                        <img src={logo} alt="Taskify" width={200} height={200} onClick={handleClick} style={{ cursor: 'pointer' }} />
                    </Link>
                </div>

                {/* Nav Bar For Mobile */}
                {isIconVisible && (
                    <FontAwesomeIcon
                        icon={faBars}
                        className="md:hidden text-white text-[29px] mt-7 flex mr-7"
                        onClick={handleMenu}
                    />
                )}
                <div className={`${menu} flex flex-col`}>
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) =>
                                `block rounded-md ${isActive ? "text-orange-700 bg-white px-3 py-1 font-semibold" : "text-white px-3 py-1"} duration-[0.5s] pr-4 pl-3 text-[18px] font-semibold border-b border-gray-100 lg:border-0`
                            }
                            onClick={() => {
                                setMenu("hidden");
                                setIsIconVisible(true);
                            }}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `block ${isActive ? "text-orange-700 bg-white px-3 py-1 font-semibold" : "text-white px-3 py-1"} text-[18px] pr-4 pl-3 rounded-md font-semibold duration-[0.5s] border-b border-gray-100 lg:border-0`
                            }
                            onClick={() => {
                                setMenu("hidden");
                                setIsIconVisible(true);
                            }}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `block rounded-md ${isActive ? "text-orange-700 bg-white font-semibold px-3 py-1" : "text-white px-3 py-1"} pr-4 font-semibold text-[18px] pl-3 duration-[0.5s] border-b border-gray-100 lg:border-0`
                            }
                            onClick={() => {
                                setMenu("hidden");
                                setIsIconVisible(true);
                            }}
                        >
                            Contact
                        </NavLink>
                    </li>
                </div>

                {/* Nav Bar For Desktop */}
                <div className='gap-11 md:flex hidden'>
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) =>
                                `block rounded-md ${isActive ? "text-orange-700 bg-white px-3 py-1 font-semibold" : "text-white px-3 py-1"} duration-[0.5s] pr-4 pl-3 text-[18px] font-semibold border-b border-gray-100 lg:border-0`
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `block ${isActive ? "text-orange-700 bg-white px-3 py-1 font-semibold" : "text-white px-3 py-1"} text-[18px] pr-4 pl-3 rounded-md font-semibold duration-[0.5s] border-b border-gray-100 lg:border-0`
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `block rounded-md ${isActive ? "text-orange-700 bg-white font-semibold px-3 py-1" : "text-white px-3 py-1"} pr-4 font-semibold text-[18px] pl-3 duration-[0.5s] border-b border-gray-100 lg:border-0`
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
