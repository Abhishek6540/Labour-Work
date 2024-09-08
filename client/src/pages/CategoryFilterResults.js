import React from 'react';
import { FaCheckCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const CategoryFilterResults = () => {
  const [selectedOption, setSelectedOption] = React.useState('Date: Old to new');
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="p-4 md:p-5">    
      <div className="justify-between p-4 border rounded-lg mb-6 shadow-lg bg-white flex flex-col md:flex-row">
        <div className="content-center mb-4 md:mb-0">
          <h4 className="text-lg md:text-xl text-[#242424]-500">Found 213 Results</h4>
        </div>

        <div className="w-full md:w-1/3 lg:w-1/4 content-center ">
        <div className="relative inline-block w-64 right-24">
          <select
          className="block appearance-none cursor-pointer bg-white border border-gray-300 w-full hover:border-gray-500 px-4 py-2 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline"
          value={selectedOption}
          onChange={handleSelectChange}
          onClick={() => setIsOpen(!isOpen)} 
        >
          <option>Sort by</option>
          <option>Date: Old to new</option>
          <option>Date: New to old</option>
        </select>

        {/* Chevron Icon */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          {isOpen ? (
            <FaChevronUp className="text-[#F13657] transition-transform duration-300 ease-in-out" />
          ) : (
            <FaChevronDown className="text-[#F13657] transition-transform duration-300 ease-in-out" />
          )}
            </div>
          </div>
        </div>
      </div>

      {/* Project Card */}
      <div className="border rounded-lg p-5 shadow-lg bg-white">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <FaCheckCircle className='fill-green-400 mr-2 text-lg border-none'/>
            <div>
              <h3 className="text-[#242424] text-lg md:text-lg">Sandeep</h3>
            </div>
          </div>
          <div className="text-right">
            <p className='text-lg md:text-xl font-500 text-[#242424] tracking-[1px]'> ₹700.00 </p>
            <span className='text-sm font-500 text-[#242424]'>(Fixed)</span>
          </div>
        </div>

        <h3 className="text-lg md:text-xl text-[#242424]">Project On Stock Market Insights Using Django...</h3>

        {/* Categories */}
        <div className="mt-2 flex space-x-2">
          <span className="bg-[#ed5b7640] text-[#f13657] px-3 py-1 content-center text-nowrap text-sm">Backend Developer</span>
          <span className="bg-[#ed5b7640] text-[#f13657] px-3 py-1 content-center text-nowrap text-sm">Front end developer</span>
          <span className="bg-[#ed5b7640] text-[#f13657] px-3 py-1 content-center text-nowrap text-sm">Website Development/Web Apps Development</span>
        </div>

        {/* Description */}
        <div className='border-b-[1px] w-full'>
          <p className="text-gray-600 mt-3 mb-5 text-sm">
            We are looking for a skilled developer who can help us complete our project on stock insights. The project involves building a web application using...
          </p>
        </div>

        <div className="additional-info">
          <div className="flex flex-wrap justify-between mt-4">
            <div className="text-sm text-gray-600">
              <p className="text-[#242424] mb-2">Expiry</p>
              <p> 47 DAYS LEFT</p>
            </div>
            <div className="text-sm text-gray-600 addition-info">
              <p className="text-[#242424] mb-2">Proposals</p>
              <p> 0 Received</p>
            </div>
            <div className="text-sm text-gray-600 addition-info">
              <p className="text-[#242424] mb-2">Location</p>
              <p> India</p>
            </div>
          </div>

          <div className="mt-4 flex justify-between items-center">
            <button className="text-gray-500 mr-4 hover:text-red-600">
              <i className="fas fa-heart"></i>
            </button>
            <button className="bg-[#F13657] text-white px-4 py-2 hover:bg-[#ed5b76] text-sm">Send Proposal</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilterResults;
