import React from 'react'
import { useNavigate } from 'react-router-dom'

const ZoomLink = () => {
  const navigate = useNavigate();

  const handleLoginMentor = () => {
    navigate('/login');
  }

  const handleLoginUser = () => {
    navigate('/Ulogin');
  }

  return (
    <>
      <div className='flex flex-col lg:flex-row gap-5 items-center justify-center h-full lg:h-[80vh] p-4'>
        {/* Mentor and Trainee info section */}
        <div className='flex flex-col lg:flex-row gap-5'>
          <div className='text-center lg:text-left'>
            <h1 className='text-lg md:text-xl lg:text-2xl font-semibold'>For Mentor login</h1>
            <p className='text-sm md:text-base lg:text-lg'>Username: Mentor</p>
            <p className='text-sm md:text-base lg:text-lg'>Password: PASS@123</p>
          </div>
          <div className='text-center lg:text-left'>
            <h1 className='text-lg md:text-xl lg:text-2xl font-semibold'>For Trainee login</h1>
            <p className='text-sm md:text-base lg:text-lg'>Username: User</p>
            <p className='text-sm md:text-base lg:text-lg'>Password: PASS@123</p>
          </div>
        </div>

        {/* Login as Mentor */}
        <div className='h-auto w-full md:w-96 bg-gray-100 rounded-md shadow-md flex flex-col items-center p-4'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center'>Login as Mentor</h1>
          <div className='flex flex-col font-semibold text-gray-700 mt-6 text-center'>
            <p>1. "Mentor guidance turns dreams into reality."</p>
            <p>2. "A mentor makes success achievable."</p>
            <p>3. "Mentor inspires greatness with every word."</p>
            <p>4. "Mentor wisdom is a gift that keeps on giving."</p>
          </div>
          <h2 className='font-roboto italic font-medium text-gray-500 mt-7 text-center'>**Please First Join as Mentor Then Login...**</h2>
          <button className='p-2 bg-blue-500 text-white rounded-lg mt-4' onClick={handleLoginMentor}>Login</button>
        </div>

        {/* Login as Trainee */}
        <div className='h-auto w-full md:w-96 bg-gray-100 rounded-md shadow-md flex flex-col items-center p-4 mt-5 lg:mt-0'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center'>Login as Trainee</h1>
          <div className='flex flex-col font-semibold text-gray-700 mt-6 text-center'>
            <p>1. "Eager to learn and grow every day."</p>
            <p>2. "Continuous improvement."</p>
            <p>3. "Dedicated to mastering new skills."</p>
            <p>4. "Adaptable and ready for challenges."</p>
          </div>
          <h2 className='font-roboto italic font-medium text-gray-500 mt-7 text-center'>**Please Login here...**</h2>
          <button className='p-2 bg-blue-500 text-white rounded-lg mt-4' onClick={handleLoginUser}>Login</button>
        </div>
      </div>
    </>
  )
}

export default ZoomLink;
