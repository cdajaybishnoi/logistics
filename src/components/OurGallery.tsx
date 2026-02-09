import { useNavigate } from "react-router-dom";
import  car2 from "../assets/car2.png";
import  car3 from "../assets/car3.png";
import  car4 from "../assets/car4.png";
import  car5 from "../assets/car5.png";
import  car6 from "../assets/car6.png";
import  car7 from "../assets/car7.png";
import  car8 from "../assets/car8.png";
import car1 from "../assets/car1.png";
import car11 from "../assets/car11.jpeg";
const carGallery = [

  {
    src: car3,
    title: "Premium Vehicle Handling",
  },

   {
    src: car1,
    title: "Luxury Car Transport",
  },
  {
    src: car2,
    title: "Covered Car Carriers",
  },

  {
    src: car4,
    title: "Safe & Secure Delivery",
  },
  {
    src: car5,
    title: "Covered Car Carriers",
  },
  {
    src: car6,
    title: "Nationwide Transport",
  },

 {
    src: car7,
    title: "Nationwide Transport",
  },

   {
    src: car8,
    title: "Nationwide Transport",
  },

  {
    src: car11,
    title: "Premium Vehicle Handling",
  },

];

export default function OurGallery() {

  const navigate = useNavigate();
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
            Featured <span className="text-yellow-500">Car Gallery</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A glimpse of our premium car transportation services and professional handling.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {carGallery.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              {/* Image */}
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Text */}
              <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition duration-500">
                <h3 className="text-white text-xl font-bold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button 
        onClick={() => navigate("/galleryimages")}    
        className="px-12 py-4 text-lg font-bold rounded-full bg-blue-900 text-white hover:bg-blue-800 transition shadow-xl">
            View More Vehicles
          </button>
        </div>

      </div>
    </section>
  );
}
