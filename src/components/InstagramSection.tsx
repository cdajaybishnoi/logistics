import React from "react";
import { FaInstagram } from "react-icons/fa";
import profilephoto from "../assets/shiplogo.webp";

const InstagramSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 flex justify-center">
      <div className="w-full max-w-4xl mx-auto px-4">
        
        <div className="bg-blue-900 rounded-2xl p-8 shadow-lg border border-zinc-800 flex flex-col md:flex-row items-center gap-6">

          {/* Profile Image */}
          <img
            src={profilephoto}
            alt="Instagram Profile"
            className="w-28 h-28 rounded-full border-4 border-pink-500 object-cover"
          />

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-white">
              ShipMyCar
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Car Transportation | House Moving | Shiping ✨
            </p>

            {/* Stats */}
            <div className="flex justify-center md:justify-start gap-6 mt-4 text-sm text-gray-300">
              <span><b>2.4K</b> Followers</span>
              <span><b>172</b> Following</span>
            </div>
          </div>

          {/* Button */}
          <a
            href="https://instagram.com/ship.my.car"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-200  text-blue-900 px-5 py-2 rounded-full transition"
          >
            <FaInstagram />
            Follow
          </a>
        </div>

      </div>
    </section>
  );
};

export default InstagramSection;