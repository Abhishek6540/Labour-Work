import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { BsSearch } from 'react-icons/bs';

const CustomerList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [editPopUp, setEditPopUp] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    status: 'Active',
  });
  const [editFormData, setEditFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    status: 'Active',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  const EditInputCustomer = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };

  const EditCustomer = (e) => {
    e.preventDefault();
    console.log('Form Data:', editFormData);
  };

  const customersPerPage = 5;
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

  const openAddCustomerPopup = () => {
    setIsPopupOpen(true);
    setEditPopUp(false);  // Ensure edit form is not open
  };

  const openEditCustomerPopup = (customer) => {
    setEditPopUp(true);
    setIsPopupOpen(false);  // Ensure add form is not open
    setEditFormData(customer); // Set the form data to edit
  };

  return (
    <>
      <div className="p-8">
        <div className="flex justify-between items-center mb-4 mt-14">
          <h1 className="text-2xl font-bold">Customers List</h1>
          <button onClick={openAddCustomerPopup} className="bg-[#F13657] text-white px-4 py-2 rounded-tl-[30px] rounded-tr-[30px] rounded-bl-[30px]">+ Add New Customer</button>
        </div>

        {/* Search Bar */}
        <div className="mb-4 flex items-center">
          <BsSearch className="mr-2 text-gray-600" />
          <input
            type="text"
            placeholder="Search..."
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
                  <button onClick={() => openEditCustomerPopup(customer)} className="text-[#F13657] mr-2">✏️</button>
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

      {/* Add Customer */}
      {isPopupOpen && (
        <>
          {/* Form Slide-In */}
          <div
            className={`fixed top-0 right-0 h-full bg-white shadow-lg p-6 transition-transform duration-300 transform ${
              isPopupOpen ? 'translate-x-0' : 'translate-x-full'
            } w-96 z-50`}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 close-button"
              onClick={() => setIsPopupOpen(false)}
            >
              &times;
            </button>

            <h2 className="text-2xl font-semibold mb-4">Add Customer</h2>
            <form onSubmit={handleSubmit} className='p-0 w-full'>
              <div className="mb-4 w-full">
                <label className="block text-gray-700 mb-1" htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="First"
                />
              </div>
              <div className="mb-4 w-full">
                <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="example@email.com"
                />
              </div>
              <div className="mb-4 w-full">
                <label className="block text-gray-700 mb-1" htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="1234567890"
                  maxLength={10}
                />
              </div>
              <div className="mb-4 w-full">
                <label className="block text-gray-700 mb-1" htmlFor="status">Status</label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-[#F13657] text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </form>
          </div>
        </>
      )}

      {/* Edit Customer */}
      {editPopUp && (
        <>
          {/* Form Slide-In */}
          <div
            className={`fixed top-0 right-0 h-full bg-white shadow-lg p-6 transition-transform duration-300 transform ${
              editPopUp ? 'translate-x-0' : 'translate-x-full'
            } w-96 z-50`}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 close-button"
              onClick={() => setEditPopUp(false)}
            >
              &times;
            </button>

            <h2 className="text-2xl font-semibold mb-4">Edit Customer</h2>
            <form onSubmit={EditCustomer} className='p-0 w-full'>
              <div className="mb-4 w-full">
                <label className="block text-gray-700 mb-1" htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={editFormData.firstName}
                  onChange={EditInputCustomer}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="First"
                />
              </div>
              <div className="mb-4 w-full">
                <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={editFormData.email}
                  onChange={EditInputCustomer}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="example@email.com"
                />
              </div>
              <div className="mb-4 w-full">
                <label className="block text-gray-700 mb-1" htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={editFormData.phone}
                  onChange={EditInputCustomer}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="1234567890"
                  maxLength={10}
                />
              </div>
              <div className="mb-4 w-full">
                <label className="block text-gray-700 mb-1" htmlFor="status">Status</label>
                <select
                  id="status"
                  name="status"
                  value={editFormData.status}
                  onChange={EditInputCustomer}
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-[#F13657] text-white px-4 py-2 rounded"
              >
                Update
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default CustomerList;
