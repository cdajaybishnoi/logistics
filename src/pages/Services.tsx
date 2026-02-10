import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Truck,
  Package,
  Globe,
  Warehouse,
  ShieldCheck,
} from "lucide-react";

const Services: React.FC = () => {
  const navigate = useNavigate();

  const deliveryCities = [
    "Gurgaon",
    "Agra",
    "Ahmedabad",
    "Ambala",
    "Amritsar",
    "Bangalore",
    "Bathinda",
    "Bhopal",
    "Bhuj",
    "Bhubaneswar",
    "Chandigarh",
    "Kota",
    "Mysore",
    "Nagpur",
    "Nashik",
    "Noida",
    "Udaipur",
    "Vijayawada",
    "Surat",
    "Salem",
    "Raurkela",
    "Chennai",
    "Coimbatore",
    "Dehradun",
    "Delhi (NCR)",
    "Faridabad",
    "Ghaziabad",
    "Goa",
    "Guwahati",
    "Haridwar",
    "Hisar",
    "Hyderabad", "Rajgarh",
    "Jammu",
    "Jamshedpur",
    "Jodhpur",
    "Kanpur",
    "Karnal",
    "Kerala",
    "Kochi",
    "Kolkata",
    "Kurnool",
    "Lucknow",
    "Ludhiana",
    "Madurai",
    "Mandi Dabwali",
    "Manesar",
    "Mangalore",
    "Meerut",
    "Mohali",
    "Mumbai",
    "Raipur",
    "Rohtak",
    "Shimla",
    "Rajkot",
    "Ranchi",
    "Varanasi",
    "Patna",
    "Indore",
    "Jaipur",
    "Palampur",
    "Panaji",
    "Panipat",
    "Panvel",
    "Patalganga",
    "Pune",
    "Zirakpur",
    "Ujjain",
   
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white">
      <div className="relative h-[350px] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7"
          alt="Logistics Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/70"></div>

        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl font-extrabold mb-4">Our Services</h1>
          <p className="max-w-2xl mx-auto text-lg text-blue-100">
            Reliable logistics solutions designed for speed, safety, and trust.
            Specializing in premium car and vehicle transportation across India.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div
          
           onClick={() => navigate("/cartransportation")}
            style={{ cursor: "pointer" }}>
          <ServiceCard
            icon={<ShieldCheck />}
            title="Vehicle Transportation"
            description="Our main focus is safe, reliable, and fully insured transportation of cars, bikes, and luxury vehicles. We use specialized carriers, real-time tracking, and experienced drivers to ensure your vehicles reach their destination securely, on time, and damage-free. Whether it’s intercity or nationwide, we provide professional logistics tailored for automobiles."
            image="https://images.unsplash.com/photo-1502877338535-766e1452684a"
            badges={["Popular","Active"]}
          />
          </div>
          <div
            onClick={() => navigate("/householdmoving")}
            style={{ cursor: "pointer" }}
          >
            <ServiceCard
              icon={<Truck />}
              title="Household Moving"
              description="End-to-end moving solutions for homes and offices across cities, ensuring complete safety and timely delivery.Moving homes is more than shifting belongings—it’s about moving memories, comfort, and trust.Whether you’re moving across the city or to a new destination, our experienced team ensures your household goods reach your new home safely."
              image="https://images.unsplash.com/photo-1600518464441-9154a4dea21b"
              badges={["Active","Popular"]}
            />
          </div>

          <div
            onClick={() => navigate("/intercity-transport")}
            style={{ cursor: "pointer" }}
          >
          <ServiceCard
            icon={<Globe />}
            title="Intercity Transport"
            description="Intercity transport requires reliability, precision, and trust—and that’s exactly what we deliver. We provide safe and efficient transportation solutions designed to move your goods seamlessly between cities. Whether it’s household belongings, commercial consignments, or valuable cargo, our services ensure secure handling at every stage of the journey."
            image="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
            badges={["Active"]}
          />
          </div>

          <ServiceCard
            icon={<Package />}
            title="Packing & Unpacking"
            description="High-quality packing materials and expert handling ensure damage-free movement for both personal and commercial shipments."
            image="https://images.unsplash.com/photo-1586864387789-628af9feed72"
            badges={["Coming Soon"]}
          />

          <ServiceCard
            icon={<Warehouse />}
            title="Warehousing & Storage"
            description="Secure, monitored, and flexible storage solutions for short-term and long-term needs, keeping your goods safe and organized."
            image="https://images.pexels.com/photos/257636/pexels-photo-257636.jpeg?cs=srgb&dl=pexels-pixabay-257636.jpg&fm=jpg"
            badges={["Coming Soon"]}
          />
        </div>

        <div className="text-center mt-20">
          <button
            onClick={() => navigate("/contact")}
            className="px-10 py-4 text-xl font-bold rounded-full bg-blue-900 text-white hover:bg-blue-800 transition shadow-xl"
          >
            Contact Us for Vehicle Transport Quote
          </button>
        </div>

        <div className="mt-24">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-6 text-center">
            Our Car Transportation Coverage in India
          </h2>
          <p className="text-gray-700 max-w-4xl mx-auto text-center mb-12 text-lg">
            We proudly provide vehicle transportation services across these
            cities in India:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {deliveryCities.map((city, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg p-4 flex flex-col items-center justify-center text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl group"
              >
                <div className="text-blue-500 mb-2">
                  <Truck className="w-6 h-6 group-hover:animate-bounce" />
                </div>

                <div className="font-semibold text-gray-800 group-hover:text-blue-900">
                  {city}
                </div>

                <div className="absolute top-2 right-2 bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded-full group-hover:bg-blue-200 transition">
                  Available
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-700 max-w-4xl mx-auto text-center mb-12 text-lg">
              Not your city in list? Don't worry! Click on the button below to
              check vehicle transport availability in your city.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="px-10 py-4 text-xl font-bold rounded-full bg-blue-900 text-white hover:bg-blue-800 transition shadow-xl"
            >
              Check Vehicle Transport Availability in Your City
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({
  icon,
  title,
  description,
  image,
  badges = [],
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  badges: Array<"Active" | "Popular" | "Coming Soon">;
}) => (
  <div className="group relative bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2">
    <div className="relative h-48 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-blue-900/20"></div>

      {badges.includes("Popular") && (
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-red-400 text-white shadow-md animate-pulse">
          Popular
        </div>
      )}

      {badges.includes("Active") && (
        <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold bg-green-500 text-white shadow-md">
          Active
        </div>
      )}

      {badges.includes("Coming Soon") && (
        <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold bg-yellow-400 text-gray-800 shadow-md">
          Coming Soon
        </div>
      )}
    </div>

    <div className="p-6">
      <div className="flex items-center gap-3 mb-3 text-blue-900">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

export default Services;
