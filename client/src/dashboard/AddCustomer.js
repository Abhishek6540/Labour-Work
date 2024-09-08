import React, { useState } from 'react';

const AddCustomer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    status: 'Active',
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add form submission logic here
  };

  return (
    <div>
      <button
        onClick={() => setIsPopupOpen(true)}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-14"
      >
        Open Add Customer Popup
      </button>

      {/* Popup */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg p-6 transition-transform transform ${
          isPopupOpen ? 'translate-x-0' : 'translate-x-full'
        } w-80 z-50`}
      >
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
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
              placeholder="First Name"
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
              placeholder="Email"
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
              placeholder="Phone Number"
              maxLength="10"
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
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Save
          </button>
        </form>
      </div>

      {/* Overlay (optional) */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={() => setIsPopupOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default AddCustomer;
