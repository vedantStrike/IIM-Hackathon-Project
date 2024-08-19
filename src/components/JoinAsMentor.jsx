import React, { useState, useEffect } from 'react';

const JoinAsMentor = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    highestQualification: '',
    totalExperience: '',
    currentProfile: '',
    currentCompany: '',
    domainExpertise: '',
    sectorExpertise: '',
    mentorType: '',
    instituteType: '',
    availabilityDay: '',
    availabilityTime: '',
    timeCommitment: '',
    linkedin: '',
    github: '',
    summary: '',
  });

  const [mentors, setMentors] = useState([]);

  // Load data from localStorage when component mounts
  useEffect(() => {
    const savedMentors = JSON.parse(localStorage.getItem('mentorsData')) || [];
    setMentors(savedMentors);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prevData) => ({
        ...prevData,
        image: imageUrl,
      }));
    }
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const resumeUrl = URL.createObjectURL(file);
      setFormData((prevData) => ({
        ...prevData,
        resume: resumeUrl,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMentors = [...mentors, formData];
    setMentors(newMentors);
    localStorage.setItem('mentorsData', JSON.stringify(newMentors));

    // Reset form fields after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      highestQualification: '',
      totalExperience: '',
      currentProfile: '',
      currentCompany: '',
      domainExpertise: '',
      sectorExpertise: '',
      mentorType: '',
      instituteType: '',
      availabilityDay: '',
      availabilityTime: '',
      timeCommitment: '',
      linkedin: '',
      github: '',
      summary: '',
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
    <p>you will see your entry in Find mentor</p>
      <h2 className="text-3xl font-semibold text-center mb-6 text-blue-700">Join as a Mentor</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Highest Qualification</label>
          <input
            type="text"
            name="highestQualification"
            value={formData.highestQualification}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your highest qualification"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Total Experience</label>
          <input
            type="text"
            name="totalExperience"
            value={formData.totalExperience}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your total experience"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Current Profile</label>
          <input
            type="text"
            name="currentProfile"
            value={formData.currentProfile}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your current profile"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Current Company</label>
          <input
            type="text"
            name="currentCompany"
            value={formData.currentCompany}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your current company"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Domain Expertise</label>
          <input
            type="text"
            name="domainExpertise"
            value={formData.domainExpertise}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your domain expertise"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Sector Expertise</label>
          <input
            type="text"
            name="sectorExpertise"
            value={formData.sectorExpertise}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your sector expertise"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Mentor Type</label>
          <select
            name="mentorType"
            value={formData.mentorType}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Mentor Type</option>
            <option value="career">Career Mentor</option>
            <option value="technical">Technical Mentor</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Institute Type</label>
          <input
            type="text"
            name="instituteType"
            value={formData.instituteType}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter institute type"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Availability Day</label>
          <input
            type="text"
            name="availabilityDay"
            value={formData.availabilityDay}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter availability day"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Availability Time</label>
          <input
            type="text"
            name="availabilityTime"
            value={formData.availabilityTime}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter availability time"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Time Commitment</label>
          <input
            type="text"
            name="timeCommitment"
            value={formData.timeCommitment}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter time commitment"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">LinkedIn Profile</label>
          <input
            type="text"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter LinkedIn profile URL"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">GitHub Profile</label>
          <input
            type="text"
            name="github"
            value={formData.github}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter GitHub profile URL"
          />
        </div>
        <div className="flex flex-col sm:col-span-2">
          <label className="text-gray-700 font-medium">Summary</label>
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Brief summary about yourself"
            rows="4"
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Upload Resume</label>
          <input
            type="file"
            name="resume"
            onChange={handleResumeUpload}
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formData.resume && (
            <a
              href={formData.resume}
              download
              className="text-blue-600 mt-2 underline"
            >
              Download Resume
            </a>
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Upload Image</label>
          <input
            type="file"
            name="image"
            onChange={handleImageUpload}
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formData.image && (
            <img
              src={formData.image}
              alt="Uploaded"
              className="mt-2 h-32 w-32 object-cover rounded-lg"
            />
          )}
        </div>
        <div className="sm:col-span-2 text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default JoinAsMentor;
