import React, { useState } from "react";

import { Link } from "react-router-dom";
import shiplogo from "../assets/shiplogo.jpeg";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
{/* <MdEmojiTransportation /> */}

          <img
            src={shiplogo}
            alt="Logistics Logo"
            className="h-10 w-auto"
          />
          <span className="text-2xl font-semibold tracking-wide">
            SHIP<span className="text-yellow-500"> MyCAR</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex   space-x-8 font-medium">
          <Link
            to="/"
            className="hover:text-yellow-400  hover:border-b-2 border-yellow-500 cursor-pointer border-b-3 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="hover:text-yellow-400 hover:border-b-2 border-yellow-500 cursor-pointer transition-colors duration-200"
          >
            About
          </Link>
          <Link
            to="/services"
            className="hover:text-yellow-400 hover:border-b-2 border-yellow-500 cursor-pointer transition-colors duration-200"
          >
            Services
          </Link>
          <Link
            to="/galleryimages"
            className="hover:text-yellow-400  hover:border-b-2 border-yellow-500 cursor-pointertransition-colors duration-200"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="hover:text-yellow-400 hover:border-b-2 border-yellow-500 cursor-pointer  transition-colors duration-200"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-3xl focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-blue-900 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center space-y-4 py-4">
          <Link
            to="/"
            className="hover:text-yellow-400 text-lg transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-yellow-400 text-lg transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            About
          </Link>
          <Link
            to="/services"
            className="hover:text-yellow-400 text-lg transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            Services
          </Link>
          <Link
            to="/galleryimages"
            className="hover:text-yellow-400 text-lg transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="hover:text-yellow-400 text-lg transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
