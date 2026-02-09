import React, { useState } from "react";
import { X } from "lucide-react";

import carsecond from "../assets/car2.1.jpeg";
import carthree from "../assets/car2.2.jpeg";
import carfour from "../assets/car2.3.jpeg";
import carfive from "../assets/car2.4.jpeg";
import carsix from "../assets/car2.5.jpeg";
import carseven from "../assets/car2.6.jpeg";
import careight from "../assets/car2.7.jpeg";
import carnine from "../assets/car2.8.jpeg";
import carten from "../assets/car2.9.jpeg";
import careleven from "../assets/car2.10.jpeg";
import cartwlave from "../assets/car2.11.jpeg";
import car12 from "../assets/car12.jpeg";
import car13 from "../assets/car13.jpeg";
import car14 from "../assets/car14.jpeg";
import car15 from "../assets/car15.jpeg";
import car16 from "../assets/car16.jpeg";
import car17 from "../assets/car17.jpeg";
import car18 from "../assets/car18.jpeg";
import car19 from "../assets/car19.jpeg";
import car20 from "../assets/car20.jpeg";
import car21 from "../assets/car21.jpeg";
import car22 from "../assets/car22.jpeg";
import car23 from "../assets/car23.jpeg";
import car24 from "../assets/car24.jpeg";
import car25 from "../assets/car25.jpeg";



const images: string[] = [
  carsecond,
  carthree,
  carfour,
  carfive,
  carsix,
  carseven,
  careight,
  carnine,
  carten,
  careleven,
  cartwlave,
  car12,
    car13,
    car14,
    car15,
    car16,
    car17,
    car18,
    car19,
    car20,
    car21,
    car22,
    car23,
    car24,
    car25,

  
];

const GalleryImages: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-gray-50 to-slate-100 py-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400/20 blur-3xl rounded-full" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-yellow-400/20 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Content */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-blue-900 via-blue-600 to-yellow-500 bg-clip-text text-transparent">
              Our Logistics Gallery
            </span>
          </h2>

          <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            Discover how we deliver excellence in vehicle transportation.
            Our gallery showcases real operations, a modern fleet, and our
            commitment to safe, timely, and professional logistics services
            across India.
          </p>

          {/* Trust Highlights */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm font-medium">
            <span className="px-5 py-2 rounded-full bg-white shadow text-blue-900">
              🚚 5000+ Vehicles Delivered
            </span>
            <span className="px-5 py-2 rounded-full bg-white shadow text-blue-900">
              🛡 Fully Insured Transport
            </span>
            <span className="px-5 py-2 rounded-full bg-white shadow text-blue-900">
              📍 Pan-India Coverage
            </span>
            <span className="px-5 py-2 rounded-full bg-white shadow text-blue-900">
              ⭐ Trusted by Leading Brands
            </span>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(img)}
              className="group relative cursor-pointer rounded-3xl overflow-hidden
                         bg-white/60 backdrop-blur-md border border-white/40
                         shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={img}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-700 ease-out
                           group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent
                              opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* View Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0
                                 transition-all duration-500 text-white font-semibold
                                 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full border border-white/30">
                  View Image
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-yellow-400 transition"
            onClick={() => setSelectedImage(null)}
          >
            <X size={44} />
          </button>

          <img
            src={selectedImage}
            alt="Full view"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GalleryImages;
