import React from 'react';
import { useState, useEffect } from 'react';

const MentorDashboard = () => {
    const [trainees, setTrainees] = useState([]);

  useEffect(() => {
    const storedTrainees = JSON.parse(localStorage.getItem('trainees')) || [];
    setTrainees(storedTrainees);
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 text-center md:text-left">Mentor Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-700">Profile Overview</h2>
            <p className="text-gray-600 mt-2">View and edit your profile details.</p>
            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">Edit Profile</button>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-700">My Sessions</h2>
            <p className="text-gray-600 mt-2">Manage your upcoming mentoring sessions.</p>
            <button className="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition">View Sessions</button>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-700">Earnings</h2>
            <p className="text-gray-600 mt-2">Track your earnings and payments.</p>
            <button className="mt-4 w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition">View Earnings</button>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-700">Messages</h2>
            <p className="text-gray-600 mt-2">Check your messages and notifications.</p>
            <button className="mt-4 w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition">View Messages</button>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-700">Resources</h2>
            <p className="text-gray-600 mt-2">Access helpful resources and materials.</p>
            <button className="mt-4 w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition">View Resources</button>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-700">Settings</h2>
            <p className="text-gray-600 mt-2">Manage your account settings.</p>
            <button className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition">Account Settings</button>
          </div>
        </div>
      </div>
      <div className='text-3xl ml-[60px] font-bold'>
        Traniee Registered:
      </div>
      <div className="mt-4 ml-[60px]">
        {trainees.length > 0 ? (
          <ul className="space-y-4">
            {trainees.map((trainee, index) => (
              <li key={index} className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-700">{trainee.name}</h3>
                <p className="text-gray-600">Email: {trainee.email}</p>
                <p className="text-gray-600">Phone: {trainee.phone}</p>
                <p className="text-gray-600">Skills: {trainee.skills}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No trainees registered yet.</p>
        )}
      </div>
    </div>
  );
};

export default MentorDashboard;
