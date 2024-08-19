import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const MentorLogin = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const userName = "Mentor";
    const PassWord = "PASS@123";
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle login logic here
        if(name === userName && password === PassWord) {
           alert("Login Sucessfull");
           navigate('/mdash');
        } else {
            alert("Please recheck your Username or Password");
        }
      console.log(`Name: ${name}, Password: ${password}`);
    };
  return (
    <>
        <h1 className='bg-gray-100'>Mentor Please Login Here</h1>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>

    </>
  )
}

export default MentorLogin
