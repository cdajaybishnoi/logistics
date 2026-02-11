import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import shiplogo from "../assets/shiplogo.jpeg";
import { MailPlus } from "lucide-react";

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-blue-900 text-white rounded-b-xl py-10 mt-auto shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src={shiplogo} alt="Swift Logistics" className="h-10 w-auto" />
            <h2 className="text-2xl font-semibold">
              Ship My<span className="text-yellow-400">Car</span>
            </h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Reliable, efficient, and fast delivery solutions across the nation.
            We move your world — one shipment at a time.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link
                to="/"
                className="hover:text-yellow-400 hover:underline transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-yellow-400 hover:underline transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-yellow-400 hover:underline transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-yellow-400 hover:underline transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">
            Our Services
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li
              onClick={() => navigate("/cartransportation")}
              className="cursor-pointer hover:text-yellow-400 hover:underline"
            >
              Car Transportation
            </li>

            <li
              onClick={() => navigate("/householdmoving")}
              className="cursor-pointer hover:text-yellow-400 hover:underline"
            >
              House Moving
            </li>
            <li
              onClick={() => navigate("/intercity-transport")}
              className="cursor-pointer hover:text-yellow-400 hover:underline"
            >
              Intercity Transports
            </li>

            <br></br>

            <li className="relative group cursor-not-allowed text-gray-400">
              Express Delivery
              <span
                className="absolute left-1/2 -translate-x-1/2 -top-8
      whitespace-nowrap rounded-md bg-black px-3 py-1 text-xs text-white
      opacity-0 group-hover:opacity-100 transition"
              >
                This is not available
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">
            Contact Us
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              📍 Plot no.11 Near Shani Mandir, Carter Puri Marg, Near Maruti
              Gate 2, Gurugram, 122015
            </li>
            <li>📞 +91 (868904)-9549</li>
            <a
              href="mailto:shipmycar42@gmail.com"
              className="text-white hover:underline hover:text-yellow-400 transition-colors"
            >
               📨shipmycar42@gmail.com
               
            </a>
          </ul>

          <div className="flex justify-center space-x-4 mt-4 text-2xl">
            <a
              href="https://www.facebook.com/share/1Ht99jnaHp/"
              className="hover:text-yellow-400 transition-transform transform hover:scale-110"
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.instagram.com/ship.my.car?igsh=MXBtdnZkYXptaG0yaQ=="
              className="hover:text-yellow-400 transition-transform transform hover:scale-110"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-700 mt-10"></div>

      <div className="text-center py-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} Ship Mycar. All rights reserved.
        <li
          onClick={() => navigate("/termsandconditons")}
          className="cursor-pointer hover:text-yellow-400 hover:underline transition-colors inline-block ml-4"
        >
          Terms and Conditons
        </li>
      </div>
    </footer>
  );
};
