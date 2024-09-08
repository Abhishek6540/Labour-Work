import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const LeftSidebar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
  return (
    <>
           <div className="left-sidebar">
                    <div className="imp-links">
                        <a href="#"><img src="/images/news.png" alt="News" />Latest News</a>
                        <a href="#"><img src="/images/friends.png" alt="Friends" />Friends</a>
                        <a href="#"><img src="/images/group.png" alt="Groups" />Groups</a>
                        <a href="#"><img src="/images/marketplace.png" alt="Marketplace" />Marketplace</a>
                        <a href="#"><img src="/images/watch.png" alt="Watch" />Watch</a>
                        <a href="#">See More</a>
                    </div>
                    <div className="shortcut-links">
                   
                        <div className="shortcut-links">
                            <div className="flex justify-between border-[#ccc] border-b-[1px]">
                                <p className="mb-0 mt-0 pt-4 pb-4">Search Filters</p>
                                <button className="mb-0 mt-0 pt-4 pb-4">Clear Result</button>
                            </div>
                            <div className="shortcut-links">
                                <div
                                    className={`flex justify-between items-center cursor-pointer transition-all duration-500 ${isOpen ? 'border-transparent' : 'border-b-[1px] border-[#ccc]'}`}
                                    onClick={toggleDropdown}
                                >
                                    <p className="text-[#626262] mb-0 mt-0 pt-4 pb-4">Category</p>
                                    {isOpen ? (
                                        <FaChevronUp className="text-[#F13657] transition-transform duration-300 ease-in-out" />
                                    ) : (
                                        <FaChevronDown className="text-[#F13657] transition-transform duration-300 ease-in-out" />
                                    )}
                                </div>

                                {/* Dropdown Content */}
                                <div
                                    className={`absolute top-full left-0 w-full overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 border-b-[1px] border-[#ccc]' : 'max-h-0 opacity-0'}`}
                                    style={{ transitionProperty: 'max-height, opacity', transformOrigin: 'top' }}
                                >
                                    <div className="bg-[#efefef] border-none pl-5">
                                        {['Content Writing', 'Data Entry', 'Graphic Designing', 'IT & Programming', 'Motion Graphics', 'Other'].map((category, index) => (
                                            <label
                                                key={index}
                                                className="block cursor-pointer text-[#626262] mb-2 items-center transition-all duration-300 ease-out transform hover:translate-x-2 hover:text-[#F13657]"
                                            >
                                                <input 
                                                    type="checkbox"
                                                    className="mr-2 w-4 h-4 cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 checked:bg-blue-500 checked:border-transparent rounded border-[#ccc]"
                                                />
                                                <span className="text-[15px]">{category} ({Math.floor(Math.random() * 150)})</span>
                                            </label>
                                        ))}
                                        {/* <div className='apply-filter'>
                                             <button onClick={()=>navigate(`/category-result/:slug`)} className="block w-full text-white text-center bg-[#F13657]">
                                                 Apply Filters
                                             </button>
                                        </div> */}
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
    </>
  )
}

export default LeftSidebar
