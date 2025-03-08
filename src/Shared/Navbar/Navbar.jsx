import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleOptionClick = () => {
    setDropdownOpen(false);
  };

  const navOptions = (
    <>
      <div className="flex lg:flex-row flex-col items-center gap-2">
        <li>
          <Link to="/" onClick={handleOptionClick}>Home</Link>
        </li>
        <span className="hidden lg:inline-block text-red-500">|</span>
        <li>
          <Link to="/projects" onClick={handleOptionClick}>Projects</Link>
        </li>
        <span className="hidden lg:inline-block text-red-500">|</span>
        <li>
          <Link to="/about" onClick={handleOptionClick}>About</Link>
        </li>
        <span className="hidden lg:inline-block text-red-500">|</span>
        <li>
          <Link to="/contact" onClick={handleOptionClick}>Contact</Link>
        </li>
      </div>
    </>
  );

  return (
    <div className="navbar  top-0 z-10 bg-opacity-30 max-w-screen-xl mx-auto px-4 py-2  ">
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <div className="text-2xl">
          <Link to="/">
            <h1>Molla Khaled Hossain</h1>
          </Link>

        </div>


        {/* Desktop Navigation */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
          {/* Divider - Show only on Desktop */}

        </div>



        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="p-2 rounded-md focus:outline-none focus:ring"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      {dropdownOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md p-4 z-50">
          <ul className="flex flex-col gap-3">{navOptions}</ul>
        </div>
      )}
      
    </div>
  );
};

export default Navbar;
