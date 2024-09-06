import React, { useState } from 'react';
import { FaUserCircle, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar toggle state
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown toggle state

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <div className="flex justify-between items-center p-4 bg-gray-100 fixed right-0 w-full">
                <button className="text-2xl" onClick={toggleSidebar}>
                    {/* Sidebar toggle button */}
                </button>
                <div className="relative">
                    <FaUserCircle
                        className="text-3xl mr-2 fill-[#F13657] cursor-pointer"
                        onClick={toggleDropdown}
                    />
                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10">
                                 <NavLink to="/profile" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                                <FaUser className="mr-2" />
                                Profile
                            </NavLink>
                            <NavLink to="/settings" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                                <FaCog className="mr-2" />
                                Settings
                            </NavLink>
                            <NavLink to="/logout" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                                <FaSignOutAlt className="mr-2" />
                                Logout
                            </NavLink>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Navbar;
