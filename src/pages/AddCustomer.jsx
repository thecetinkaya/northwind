import React, { useState } from 'react';

const AddCustomer = () => {
  const [customerData, setCustomerData] = useState({
    companyName: '',
    address: {
      street: '',
      city: '',
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Yeni müşteri verilerini API'ye gönder
    fetch('https://northwind.vercel.app/api/customers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customerData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Yeni müşteri eklendi:', data);
        // Yönlendirme işlemi burada yapılabilir
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name.includes('.')) {
      const [objKey, subKey] = name.split('.');
      setCustomerData((prevData) => ({
        ...prevData,
        [objKey]: {
          ...prevData[objKey],
          [subKey]: value,
        },
      }));
    } else {
      setCustomerData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-semibold mb-4">Add Customer</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <label className="block mb-2">
          Company Name:
          <input
            type="text"
            name="companyName"
            value={customerData.companyName}
            onChange={handleChange}
            className="form-input mt-1 border rounded-md focus:ring focus:border-blue-300 flex flex-col"
            required
          />
        </label>
        <label className="block mb-2">
          Street:
          <input
            type="text"
            name="address.street"
            value={customerData.address.street}
            onChange={handleChange}
            className="form-input mt-1 border rounded-md focus:ring focus:border-blue-300 flex flex-col"
            required
          />
        </label>
        <label className="block mb-4">
          City:
          <input
            type="text"
            name="address.city"
            value={customerData.address.city}
            onChange={handleChange}
            className="form-input mt-1 border rounded-md focus:ring focus:border-blue-300 flex flex-col"
            required
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 flex flex-col justify-center"
        >
          Add Customer
        </button>
      </form>
    </div>
  );
};

export default AddCustomer;
