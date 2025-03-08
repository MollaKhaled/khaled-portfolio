import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-300 text-base-content text-sm p-4">
  {/* Logo Centered on Small Screens */}
  <div className=" text-center md:text-left text-gray-500">
      <h1>connecting through project</h1>
  </div>

  {/* Responsive Footer Content */}
  <div className="flex flex-col md:flex-row justify-between items-center mt-6 space-y-4 md:space-y-0">
    {/* Left Section */}
    <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
      <div>
        <Link
          to="https://www.facebook.com/artsensebd"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <span className="text-red-500">f</span>/<span className="text-red-500">k</span>ha
          <span className="text-red-500">l</span>ed
        </Link>
      </div>
      <div>
        <p>
          +880 1515 241413
          <span className="text-red-500"> | </span>khaledbalok@gmail.com
        </p>
      </div>
    </div>

    {/* Right Section */}
    <div className="flex flex-col md:flex-row items-center lg:gap-2 text-center md:text-left">
      <h1>
        &copy; 02.02.2024 by
        <span className="text-red-500"> k</span>ha
        <span className="text-red-500">l</span>ed
        <span className="text-red-500"> | </span>Powered By MH.Khaled
      </h1>
      
    </div>
  </div>
</footer>


  );
};

export default Footer;


