import React, { useState } from 'react';
import { FaBars, FaThumbtack, FaClipboard, FaCalendarAlt, FaCog, FaPinterest, FaFileAlt, FaChevronDown, FaChevronRight, FaDashcube } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleDropdownClick = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className={`w-20 h-auto z-10 bg-[#F13657] text-white p-4 flex flex-col justify-between transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>
            <div className="mb-8">
                <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl">
                    <FaBars />
                </button>
            </div>
            <ul className={`flex-grow ${isOpen ? 'space-y-4' : 'space-y-8'}`}>
            <NavLink
                    to="/dashboard"
                    className={({ isActive }) => `flex items-center space-x-2 p-2 rounded-lg ${isActive ? 'bg-#e85771' : ''} hover:bg-[#ff8197b3]`}
                >
                    <FaDashcube />
                    {isOpen && <span className="ml-2">Dashboard</span>}
                </NavLink>

                <NavLink
                    to="/dashboard/customers"
                    className={({ isActive }) => `flex items-center space-x-2 p-2 rounded-lg ${isActive ? 'bg-#e85771' : ''} hover:bg-[#ff8197b3]`}
                >
                    <FaThumbtack />
                    {isOpen && <span className="ml-2">Customers</span>}
                </NavLink>
                <NavLink
                    to="/dashboard/board"
                    className={({ isActive }) => `flex items-center space-x-2 p-2 rounded-lg ${isActive ? 'bg-#e85771' : ''} hover:bg-[#ff8197b3]`}
                >
                    <FaClipboard />
                    {isOpen && <span className="ml-2">Board</span>}
                </NavLink>
                
                {/* Schedule with Dropdown */}
                <li className="mb-0">
                    <div className="flex items-center p-2 cursor-pointer hover:bg-[#ff8197b3]" onClick={handleDropdownClick}>
                        <FaCalendarAlt className="mr-2" />
                        {isOpen && 'Schedule'}
                        {isOpen && (showDropdown ? <FaChevronDown className="ml-auto" /> : <FaChevronRight className="ml-auto" />)}
                    </div>
                    {showDropdown && isOpen && (
                        <ul className="pl-6">
                            <NavLink
                                to="/dashboard/upcoming-events"
                                className={({ isActive }) => `block p-2 rounded-lg ${isActive ? 'bg-#e85771' : ''} hover:bg-[#ff8197b3]`}
                            >
                                <li>Upcoming Events</li>
                            </NavLink>
                            <NavLink
                                to="/dashboard/past-events"
                                className={({ isActive }) => `block p-2 rounded-lg ${isActive ? 'bg-#e85771' : ''} hover:bg-[#ff8197b3]`}
                            >
                                <li>Past Events</li>
                            </NavLink>
                        </ul>
                    )}
                </li>

                <NavLink
                    to="/dashboard/settings"
                    className={({ isActive }) => `flex items-center space-x-2 p-2 rounded-lg ${isActive ? 'bg-#e85771' : ''} hover:bg-[#ff8197b3]`}
                >
                    <FaCog />
                    {isOpen && <span className="ml-2">Settings</span>}
                </NavLink>
                <NavLink
                    to="/dashboard/pinterest"
                    className={({ isActive }) => `flex items-center space-x-2 p-2 rounded-lg ${isActive ? 'bg-#e85771' : ''} hover:bg-[#ff8197b3]`}
                >
                    <FaPinterest />
                    {isOpen && <span className="ml-2">Pinterest</span>}
                </NavLink>
                <NavLink
                    to="/dashboard/templates"
                    className={({ isActive }) => `flex items-center space-x-2 p-2 rounded-lg ${isActive ? 'bg-#e85771' : ''} hover:bg-[#ff8197b3]`}
                >
                    <FaFileAlt />
                    {isOpen && <span className="ml-2">Templates</span>}
                </NavLink>
            </ul>
        </div>
    );
}

export default Sidebar;
