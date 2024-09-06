import React, { useState } from 'react';
import { FaBars, FaUserCircle, FaThumbtack, FaUsers, FaClipboard, FaCalendarAlt, FaCog, FaPinterest, FaFileAlt } from 'react-icons/fa';
import ReactPaginate from 'react-paginate'; // Import pagination
import { BsSearch } from 'react-icons/bs'; // Search Icon
import { NavLink } from 'react-router-dom';

const CustomerList = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state for Schedule
  const [currentPage, setCurrentPage] = useState(0); // State for pagination
  const [searchTerm, setSearchTerm] = useState(''); // Search term state
  // const [isOpen, setIsOpen] = useState(true);

  const customersPerPage = 5; // Number of customers per page
  const allCustomers = [
    { name: 'Sher Singh', email: 'sher@gmail.com', phone: '8977649333', status: 'Active' },
    { name: 'Alex Singh', email: 'alex@gmail.com', phone: '9977649333', status: 'Inactive' },
    { name: 'John Doe', email: 'john@gmail.com', phone: '8577649333', status: 'Active' },
    { name: 'Jane Doe', email: 'jane@gmail.com', phone: '8777649333', status: 'Active' },
    { name: 'Chris Smith', email: 'chris@gmail.com', phone: '8077649333', status: 'Inactive' },
    { name: 'Amy Wine', email: 'amy@gmail.com', phone: '9377649333', status: 'Active' },
    { name: 'Sam Wilson', email: 'sam@gmail.com', phone: '8977649333', status: 'Inactive' },
  ];

  // Filter customers based on the search term
  const filteredCustomers = allCustomers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle pagination
  const pageCount = Math.ceil(filteredCustomers.length / customersPerPage);
  const displayCustomers = filteredCustomers.slice(currentPage * customersPerPage, (currentPage + 1) * customersPerPage);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  return (
    <>
      {/* Sidebar */}
    

  

        {/* Customer List */}
        <div className="p-8">
          <div className="flex justify-between items-center mb-4 mt-14">
            <h1 className="text-2xl font-bold">Customers List</h1>
            <button className="bg-[#F13657] text-white px-4 py-2 rounded-lg">+ Add New Customer</button>
          </div>

          {/* Search Bar */}
          <div className="mb-4 flex items-center">
            <BsSearch className="mr-2 text-gray-600" />
            <input
              type="text"
              placeholder="Search customers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border p-2 rounded w-full"
            />
          </div>

          {/* Customer Table */}
          <table className="min-w-full bg-white border rounded-lg shadow">
            <thead>
              <tr className="text-left bg-gray-100">
                <th className="p-2 border-b">Name</th>
                <th className="p-2 border-b">Email</th>
                <th className="p-2 border-b">Phone Number</th>
                <th className="p-2 border-b">Status</th>
                <th className="p-2 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {displayCustomers.map((customer, index) => (
                <tr key={index} className="text-left">
                  <td className="p-2 border-b">{customer.name}</td>
                  <td className="p-2 border-b">{customer.email}</td>
                  <td className="p-2 border-b">{customer.phone}</td>
                  <td className="p-2 border-b">
                    <span className={customer.status === 'Active' ? 'text-green-500' : 'text-[#F13657]'}>{customer.status}</span>
                  </td>
                  <td className="p-2 border-b">
                    <button className="text-[#F13657] mr-2">✏️</button>
                    <button className="text-[#F13657]">🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="mt-4">
            <ReactPaginate
              previousLabel={'← Previous'}
              nextLabel={'Next →'}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName={'flex justify-center'}
              pageClassName={'mx-1 px-3 py-1 rounded-lg'}
              previousLinkClassName={'px-3 py-1 bg-[#F13657] text-white rounded-lg'}
              nextLinkClassName={'px-3 py-1 bg-[#F13657] text-white rounded-lg'}
              activeClassName={'bg-[#F13657] text-white'}
            />
          </div>
        </div>

        {/* Footer */}
        
    </>
  );
};

export default CustomerList;
