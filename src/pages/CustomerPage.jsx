import React, { useState, useEffect } from 'react';

const CustomerPage = () => {
  const [customers, setCustomers] = useState([]);
  const [sortedCustomers, setSortedCustomers] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [displayCount, setDisplayCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSortOrder = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);

    const sorted = sortedCustomers.slice().sort((a, b) => {
      const nameA = a.companyName.toUpperCase();
      const nameB = b.companyName.toUpperCase();

      if (newSortOrder === 'asc') {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });

    setSortedCustomers(sorted);
  };

  useEffect(() => {
    fetch('https://northwind.vercel.app/api/customers')
      .then((response) => response.json())
      .then((data) => {
        setCustomers(data);
        setSortedCustomers(data);
        setDisplayCount(data.length);
      });
  }, []);

  const handleDisplayCountChange = (count) => {
    setDisplayCount(count);
  };

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchQuery(value);

    const filtered = customers.filter((customer) => {
      return customer.companyName.toLowerCase().includes(value.toLowerCase());
    });

    setSortedCustomers(filtered);
  };

  return (
    <div>
      <div className="container mx-auto p-5">
        <h1 className="text-2xl mb-4">Customers</h1>
        <input
          type="text"
          name="searchQuery"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search..."
          className="form-input mt-1 border rounded-md focus:ring focus:border-blue-300 mb-4"
        />
        <div className="mb-4">
          <button
            onClick={() => handleDisplayCountChange(customers.length)}
            className={`mr-2 px-3 py-2 rounded ${
              displayCount === customers.length ? 'bg-blue-500 text-white' : 'bg-gray-300'
            }`}
          >
            All
          </button>
          <button
            onClick={() => handleDisplayCountChange(5)}
            className={`mr-2 px-3 py-2 rounded ${
              displayCount === 5 ? 'bg-blue-500 text-white' : 'bg-gray-300'
            }`}
          >
            5
          </button>
          <button
            onClick={() => handleDisplayCountChange(10)}
            className={`mr-2 px-3 py-2 rounded ${
              displayCount === 10 ? 'bg-blue-500 text-white' : 'bg-gray-300'
            }`}
          >
            10
          </button>
          <button
            onClick={() => handleDisplayCountChange(15)}
            className={`mr-2 px-3 py-2 rounded ${
              displayCount === 15 ? 'bg-blue-500 text-white' : 'bg-gray-300'
            }`}
          >
            15
          </button>
        </div>
      </div>

      <div className="container mx-auto p-5 flex justify-center">
        <table className="table-auto">
          <thead>
            <tr>
              <th>
                <button onClick={toggleSortOrder}>
                  Company Name({sortOrder === 'asc' ? 'A to Z' : 'Z to A'})
                </button>
              </th>
              <th className="px-4 py-2">Street</th>
              <th className="px-4 py-2">City</th>
            </tr>
          </thead>
          <tbody>
            {sortedCustomers&&sortedCustomers.slice(0, displayCount).map((customer) => (
              <tr key={customer.id}>
                <td className="border px-4 py-2">{customer?.companyName}</td>
                <td className="border px-4 py-2">{customer?.address?.street}</td>
                <td className="border px-4 py-2">{customer?.address?.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

  export default CustomerPage;