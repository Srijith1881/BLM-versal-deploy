import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Employeedashboard = () => {
  
  const [requests, setRequests] = useState([]);
  const [bloodInventory, setBloodInventory] = useState({
    'A+': 10,
    'A-': 5,
    'B+': 8,
    'B-': 4,
    'AB+': 6,
    'AB-': 3,
    'O+': 12,
    'O-': 7,
  });

  useEffect(() => {
    
    axios
      .get('https://66e526de5cc7f9b6273c6b41.mockapi.io/report')
      .then((response) => {
        setRequests(response.data);
      })
      .catch((error) => console.error('Error fetching requests:', error));
  }, []);

  const handleAccept = (id) => {
    console.log(`Request ${id} accepted.`);
  };

  const handleReject = (id) => {
    console.log(`Request ${id} rejected.`);
  };

  return (
    <div className="min-h-screen w-screen bg-white p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Employee Dashboard</h1>

      {/*Inventory Cards*/}
      <div className="grid grid-cols-4 gap-4 mb-10">
        {Object.entries(bloodInventory).map(([group, units]) => (
          <div key={group} className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-xl font-bold text-gray-800">{group}</h2>
            <p className="text-gray-600">Available Units: {units}</p>
          </div>
        ))}
      </div>

      {/*Table*/}
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Blood Requests</h2>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Emergency</th>
              <th className="border px-4 py-2">Location</th>
              <th className="border px-4 py-2">Age</th>
              <th className="border px-4 py-2">Blood Group</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request.id}>
                <td className="border px-4 py-2">{request.name}</td>
                <td className="border px-4 py-2">{request.emergency ? 'Yes' : 'No'}</td>
                <td className="border px-4 py-2">{request.location}</td>
                <td className="border px-4 py-2">{request.age}</td>
                <td className="border px-4 py-2">{request.bloodgroup}</td>
                <td className="border px-4 py-2">
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
                    onClick={() => handleAccept(request.id)}
                  >
                    Accept
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                    onClick={() => handleReject(request.id)}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employeedashboard;
