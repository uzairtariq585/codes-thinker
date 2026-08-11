import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-[#0033a1]  shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <img
            src="https://codesthinker.com/companylogo.png"
            alt="CodeTinker Logo"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="text-gray-300 font-mono   hover:text-[#021642] transition duration-300"
          >
            <b>Home</b>
          </Link>

          <Link
            to="/about"
            className="text-gray-300 font-mono  hover:text-[#021642] transition duration-300"
          >
            <b>About</b>
          </Link>

          <Link
            to="/services"
            className="text-gray-300 font-mono   hover:text-[#021642] transition duration-300"
          >
            <b>Services</b>
          </Link>

          <Link
            to="/contact"
            className="text-gray-300 font-mono  hover:text-[#021642] transition duration-300"
          >
            <b>Contact</b>
          </Link>
        </div>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="bg-[#002158] font-mono  hover:bg-[#010d27] text-white px-5 py-2.5 rounded-md transition duration-300"
        >
          <b>Get Started</b>
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;

