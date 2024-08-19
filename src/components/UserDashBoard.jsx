import React from 'react';

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 text-center md:text-left">User Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-700">Profile Information</h2>
            <p className="text-gray-600 mt-2">Update your personal details and settings.</p>
            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">Edit Profile</button>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-700">My Mentors</h2>
            <p className="text-gray-600 mt-2">View and connect with your mentors.</p>
            <button className="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition">View Mentors</button>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-700">My Sessions</h2>
            <p className="text-gray-600 mt-2">Manage and review your mentoring sessions.</p>
            <button className="mt-4 w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition">View Sessions</button>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-700">Notifications</h2>
            <p className="text-gray-600 mt-2">Stay updated with the latest notifications.</p>
            <button className="mt-4 w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition">View Notifications</button>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-700">Resources</h2>
            <p className="text-gray-600 mt-2">Access learning materials and resources.</p>
            <button className="mt-4 w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition">View Resources</button>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-700">Account Settings</h2>
            <p className="text-gray-600 mt-2">Manage your account and privacy settings.</p>
            <button className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition">Settings</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
