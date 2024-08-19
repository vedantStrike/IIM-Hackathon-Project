import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  const createZoom = () => {
    navigate('/zoom');
  };

  return (
    <div className="bg-gray-100 min-h-screen">
 
    

      
      <section className="bg-blue-600 text-white text-center py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Shape Your Future with Professional Career Counseling</h1>
          <p className="text-lg mb-8">We help you find the right career path and achieve your professional goals with personalized guidance.</p>
          <button className="py-3 px-6 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100" onClick={createZoom}>Get Started</button>
        </div>
      </section>

      
      <section id="services" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Career Coaching</h3>
              <p className="text-gray-600">One-on-one coaching to help you identify your strengths and choose the right career path.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Resume Writing</h3>
              <p className="text-gray-600">Professional resume writing services to help you stand out in the job market.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Interview Preparation</h3>
              <p className="text-gray-600">Prepare for interviews with expert advice and mock interview sessions.</p>
            </div>
          </div>
        </div>
      </section>

     
      <section id="testimonials" className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 mb-4">"The career coaching sessions were a game-changer for me. I now have a clear direction for my future!"</p>
              <p className="font-semibold">- Sarah L.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 mb-4">"The resume writing service helped me land my dream job. Highly recommend CareerCounsel!"</p>
              <p className="font-semibold">- John D.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 mb-4">"The interview preparation sessions gave me the confidence I needed. Thank you!"</p>
              <p className="font-semibold">- Emily R.</p>
            </div>
          </div>
        </div>
      </section>

      
      <section id="contact" className="py-16 bg-blue-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg mb-8">Ready to take the next step in your career? Contact us today!</p>
          <a href="mailto:info@careercounsel.com" className="py-3 px-6 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100">Contact Us</a>
        </div>
      </section>

      
      
    </div>
  );
};

export default Home;
