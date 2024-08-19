import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-black p-4 flex flex-col sm:flex-row sm:justify-between items-center">
      <div className="flex justify-between w-full sm:w-auto">
        <Link to="/" className="text-xl font-bold no-underline font-roboto">
          <h1>THE CAREER COMPANY</h1>
        </Link>
        {/* Hamburger menu for small devices */}
        <div className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="cursor-pointer space-y-2">
            <div className="w-8 h-1 bg-black"></div>
            <div className="w-8 h-1 bg-black"></div>
            <div className="w-8 h-1 bg-black"></div>
          </div>
        </div>
      </div>

      {/* Menu items */}
      <div
        className={`${
          menuOpen ? 'block' : 'hidden'
        } sm:flex flex-col sm:flex-row gap-4 w-full sm:w-auto`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `no-underline ${
              isActive ? 'text-blue-600' : 'hover:text-gray-600'
            }`
          }
        >
          <h2 className="text-lg">Home</h2>
        </NavLink>
        <NavLink
          to="/find"
          className={({ isActive }) =>
            `no-underline ${
              isActive ? 'text-blue-600' : 'hover:text-gray-600'
            }`
          }
        >
          <h2 className="text-lg">Find Mentors</h2>
        </NavLink>
        <NavLink
          to="/resume"
          className={({ isActive }) =>
            `no-underline ${
              isActive ? 'text-blue-600' : 'hover:text-gray-600'
            }`
          }
        >
          <h2 className="text-lg">Build Resume</h2>
        </NavLink>
        <NavLink
          to="/review"
          className={({ isActive }) =>
            `no-underline ${
              isActive ? 'text-blue-600' : 'hover:text-gray-600'
            }`
          }
        >
          <h2 className="text-lg">Resume Review</h2>
        </NavLink>
        <NavLink
          to="/mentor"
          className={({ isActive }) =>
            `no-underline ${
              isActive ? 'text-blue-600' : 'hover:text-gray-600'
            }`
          }
        >
          <h2 className="text-lg">Join as Mentor</h2>
        </NavLink>
        <NavLink
          to="/tranie"
          className={({ isActive }) =>
            `no-underline ${
              isActive ? 'text-blue-600' : 'hover:text-gray-600'
            }`
          }
        >
          <h2 className="text-lg">Join as Traniee</h2>
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
