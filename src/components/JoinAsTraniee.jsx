import React, { useState } from 'react';

const JoinAsTrainee = () => {
  const [trainee, setTrainee] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrainee({
      ...trainee,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let trainees = JSON.parse(localStorage.getItem('trainees')) || [];
    trainees.push(trainee);
    localStorage.setItem('trainees', JSON.stringify(trainees));

    // Clear the form
    setTrainee({
      name: '',
      email: '',
      phone: '',
      skills: '',
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 lg:p-12">
    <p>you will see your entry in mentor dashboard. first login then you will find this</p>
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Join as Trainee</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={trainee.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={trainee.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone</label>
            <input
              type="text"
              name="phone"
              value={trainee.phone}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700">Skills</label>
            <input
              type="text"
              name="skills"
              value={trainee.skills}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinAsTrainee;
