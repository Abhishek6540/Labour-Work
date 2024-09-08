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
                    {/* <FaBars /> */}
                    <svg className='border-[3px] border-white-500/10' width="40" height="40" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M45.9167 36.25H12.0834C10.7542 36.25 9.66675 35.1625 9.66675 33.8333C9.66675 32.5041 10.7542 31.4166 12.0834 31.4166H45.9167C47.2459 31.4166 48.3334 32.5041 48.3334 33.8333C48.3334 35.1625 47.2459 36.25 45.9167 36.25ZM45.9167 41.0833H12.0834C10.7542 41.0833 9.66675 42.1708 9.66675 43.5C9.66675 44.8291 10.7542 45.9166 12.0834 45.9166H45.9167C47.2459 45.9166 48.3334 44.8291 48.3334 43.5C48.3334 42.1708 47.2459 41.0833 45.9167 41.0833ZM36.2501 26.5833L47.3184 18.7291C47.9467 18.27 48.3334 17.545 48.3334 16.7716C48.3334 14.8141 46.1101 13.6541 44.5151 14.79L36.2501 20.6625L24.1667 12.0833L10.8267 20.2033C10.1017 20.6625 9.66675 21.4358 9.66675 22.2816C9.66675 24.1666 11.7209 25.3266 13.3401 24.3358L23.9734 17.8591L36.2501 26.5833Z" fill="#FEFAFA" />
                    </svg>

                </button>
            </div>
            <ul className={`flex-grow ${isOpen ? 'space-y-4' : 'space-y-8'}`}>
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) => `flex items-center space-x-2 p-2 rounded-tl-[30px] rounded-tr-[30px] rounded-bl-[30px] ${isActive ? 'bg-[#FF5F8F]' : ''} hover:bg-[#ff8197b3]`}
                >
                    <FaDashcube />
                    {isOpen && <span className="ml-2">Dashboard</span>}
                </NavLink>

                <NavLink
                    to="/dashboard/customers"
                    className={({ isActive }) => `flex items-center space-x-2 p-2 rounded-tl-[30px] rounded-tr-[30px] rounded-bl-[30px] ${isActive ? 'bg-[#FF5F8F]' : ''} hover:bg-[#ff8197b3]`}
                >
                    <FaThumbtack />
                    {isOpen && <span className="ml-2">Customers</span>}
                </NavLink>
                <NavLink
                    to="/dashboard/board"
                    className={({ isActive }) => `flex items-center space-x-2 p-2 rounded-tl-[30px] rounded-tr-[30px] rounded-bl-[30px] ${isActive ? 'bg-[#FF5F8F]' : ''} hover:bg-[#ff8197b3]`}
                >
                    <FaClipboard />
                    {isOpen && <span className="ml-2">Board</span>}
                </NavLink>

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
                                className={({ isActive }) => `block p-2 rounded-tl-[30px] rounded-tr-[30px] rounded-bl-[30px] ${isActive ? 'bg-[#FF5F8F]' : ''} hover:bg-[#ff8197b3]`}
                            >
                                <li>Upcoming Events</li>
                            </NavLink>
                            <NavLink
                                to="/dashboard/past-events"
                                className={({ isActive }) => `block p-2 rounded-tl-[30px] rounded-tr-[30px] rounded-bl-[30px] ${isActive ? 'bg-[#FF5F8F]' : ''} hover:bg-[#ff8197b3]`}
                            >
                                <li>Past Events</li>
                            </NavLink>
                        </ul>
                    )}
                </li>

                <NavLink
                    to="/dashboard/settings"
                    className={({ isActive }) => `flex items-center space-x-2 p-2 rounded-tl-[30px] rounded-tr-[30px] rounded-bl-[30px] ${isActive ? 'bg-[#FF5F8F]' : ''} hover:bg-[#ff8197b3]`}
                >
                    <FaCog />
                    {isOpen && <span className="ml-2">Settings</span>}
                </NavLink>
                <NavLink
                    to="/dashboard/pinterest"
                    className={({ isActive }) => `flex items-center space-x-2 p-2 rounded-tl-[30px] rounded-tr-[30px] rounded-bl-[30px] ${isActive ? 'bg-[#FF5F8F]' : ''} hover:bg-[#ff8197b3]`}
                >
                    <FaPinterest />
                    {isOpen && <span className="ml-2">Pinterest</span>}
                </NavLink>
                <NavLink
                    to="/dashboard/templates"
                    className={({ isActive }) => `flex items-center space-x-2 p-2 rounded-tl-[30px] rounded-tr-[30px] rounded-bl-[30px] ${isActive ? 'bg-[#FF5F8F]' : ''} hover:bg-[#ff8197b3]`}
                >
                    <FaFileAlt />
                    {isOpen && <span className="ml-2">Templates</span>}
                </NavLink>
            </ul>
        </div>
    );
}

export default Sidebar;
