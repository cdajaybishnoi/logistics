// import React, { useState } from "react";

// import { Link } from "react-router-dom";
// import shiplogo from "../assets/shiplogo.jpeg";

// const Header: React.FC = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <header className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
//       <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
//         {/* Logo */}
//         <Link to="/" className="flex items-center space-x-2">
// {/* <MdEmojiTransportation /> */}

//           <img
//             src={shiplogo}
//             alt="Logistics Logo"
//             className="h-10 w-auto"
//           />
//           <span className="text-2xl font-semibold tracking-wide">
//             SHIP<span className="text-yellow-500"> MyCAR</span>
//           </span>
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex   space-x-8 font-medium">
//           <Link
//             to="/"
//             className="hover:text-yellow-400  hover:border-b-2 border-yellow-500 cursor-pointer border-b-3 transition-colors duration-200"
//           >
//             Home
//           </Link>
//           <Link
//             to={"/about"}
//             className="hover:text-yellow-400 hover:border-b-2 border-yellow-500 cursor-pointer transition-colors duration-200"
//           >
//             About
//           </Link>
//           <Link
//             to="/services"
//             className="hover:text-yellow-400 hover:border-b-2 border-yellow-500 cursor-pointer transition-colors duration-200"
//           >
//             Services
//           </Link>
//           <Link
//             to="/galleryimages"
//             className="hover:text-yellow-400  hover:border-b-2 border-yellow-500 cursor-pointertransition-colors duration-200"
//           >
//             Gallery
//           </Link>
//           <Link
//             to="/contact"
//             className="hover:text-yellow-400 hover:border-b-2 border-yellow-500 cursor-pointer  transition-colors duration-200"
//           >
//             Contact
//           </Link>
//         </nav>

//         {/* Mobile menu button */}
//         <button
//           onClick={toggleMobileMenu}
//           className="md:hidden text-3xl focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
//           aria-label="Toggle menu"
//         >
//           {isMobileMenuOpen ? "✕" : "☰"}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden bg-blue-900 transition-all duration-300 overflow-hidden ${
//           isMobileMenuOpen ? "max-h-60" : "max-h-0"
//         }`}
//       >
//         <nav className="flex flex-col items-center space-y-4 py-4">
//           <Link
//             to="/"
//             className="hover:text-yellow-400 text-lg transition-colors duration-200"
//             onClick={toggleMobileMenu}
//           >
//             Home
//           </Link>
//           <Link
//             to="/about"
//             className="hover:text-yellow-400 text-lg transition-colors duration-200"
//             onClick={toggleMobileMenu}
//           >
//             About
//           </Link>
//           <Link
//             to="/services"
//             className="hover:text-yellow-400 text-lg transition-colors duration-200"
//             onClick={toggleMobileMenu}
//           >
//             Services
//           </Link>
//           <Link
//             to="/galleryimages"
//             className="hover:text-yellow-400 text-lg transition-colors duration-200"
//             onClick={toggleMobileMenu}
//           >
//             Gallery
//           </Link>
//           <Link
//             to="/contact"
//             className="hover:text-yellow-400 text-lg transition-colors duration-200"
//             onClick={toggleMobileMenu}
//           >
//             Contact
//           </Link>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import shiplogo from "../assets/shiplogo.jpeg";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 🔥 Lock background scroll when menu open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={shiplogo}
            alt="ShipMyCar Logo"
            className="h-10 w-auto"
          />
          <span className="text-2xl font-semibold tracking-wide">
            SHIP<span className="text-yellow-500"> MyCAR</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-medium">
          <Link to="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-400 transition">
            About
          </Link>
          <Link to="/services" className="hover:text-yellow-400 transition">
            Services
          </Link>
          <Link to="/galleryimages" className="hover:text-yellow-400 transition">
            Gallery
          </Link>
          <Link to="/contact" className="hover:text-yellow-400 transition">
            Contact
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden text-3xl"
        >
          ☰
        </button>
      </div>

      {/* 🔥 GLASS POPUP MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md md:hidden">

          {/* Popup Card */}
          <div
            className="bg-gradient-to-br from-blue-900/90 to-blue-800/80 
                       backdrop-blur-lg rounded-3xl w-11/12 max-w-sm 
                       p-8 shadow-2xl animate-scaleIn"
          >
            {/* Close Button */}
            <div className="flex justify-end mb-6">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl"
              >
                ✕
              </button>
            </div>

            {/* Menu Links */}
            <nav className="flex flex-col items-center space-y-6 text-xl font-semibold">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative group"
              >
                Home
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative group"
              >
                About
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link
                to="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative group"
              >
                Services
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link
                to="/galleryimages"
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative group"
              >
                Gallery
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative group"
              >
                Contact
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
