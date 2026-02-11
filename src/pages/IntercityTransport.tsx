import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Truck,
  Clock,
  ShieldCheck,
  MapPin,
  PackageCheck,
  Headphones,
} from "lucide-react";

const IntercityTransport: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col ">
      <main className="flex-grow">
    
        <div className="relative h-[400px] flex items-center justify-center">
     
          <img
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075&auto=format&fit=crop"
            alt="Intercity Transport"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/80"></div>

          <div className="relative text-center text-white px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Seamless{" "}
              <span className="text-yellow-500">Intercity Transport</span>{" "}
              Solutions
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              Moving goods between cities has never been easier. We ensure your
              cargo reaches its destination safely, on time, and with complete
              transparency.
            </p>
          </div>
        </div>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Connecting Cities,{" "}
              <span className="text-yellow-500">Delivering Trust</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Whether you are moving your household, transporting a vehicle, or
              sending commercial consignments, our Intercity Transport service
              is designed to handle it all. We connect major cities across India
              with a robust logistics network, ensuring that distance is never a
              barrier to your business or personal needs.
            </p>
          </div>
        </section>

      
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900">
                Why Choose Our Service?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Clock className="w-10 h-10 text-yellow-500" />}
                title="On-Time Delivery"
                description="We value your time. Our optimized routes and efficient fleet management ensure strict adherence to delivery schedules."
              />
              <FeatureCard
                icon={<ShieldCheck className="w-10 h-10 text-yellow-500" />}
                title="Safe & Secure"
                description="Your goods are precious. We use high-quality packing materials and secure carriers to prevent any damage during transit."
              />
              <FeatureCard
                icon={<MapPin className="w-10 h-10 text-yellow-500" />}
                title="Pan-India Network"
                description="From metro cities to remote towns, our extensive network covers every corner of the country."
              />
              <FeatureCard
                icon={<Truck className="w-10 h-10 text-yellow-500" />}
                title="Modern Fleet"
                description="Our fleet comprises well-maintained, GPS-enabled trucks and carriers suitable for all types of cargo."
              />
              <FeatureCard
                icon={<PackageCheck className="w-10 h-10 text-yellow-500" />}
                title="Real-Time Tracking"
                description="Stay updated with the live status of your consignment through our advanced tracking systems."
              />
              <FeatureCard
                icon={<Headphones className="w-10 h-10 text-yellow-500" />}
                title="24/7 Support"
                description="Our dedicated customer support team is always available to answer your queries and resolve issues."
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-blue-900">
                Moving Cities.{" "}
                <span className="text-yellow-500">Building Trust.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                With years of experience in intercity logistics, our team
                ensures every shipment is handled with care, precision, and
                real-time visibility.
              </p>
              <p className="text-gray-600">
                From household goods to commercial cargo, our modern fleet and
                trained professionals deliver excellence every mile.
              </p>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=1200&auto=format&fit=crop"
                alt="Logistics Transport"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-blue-900 px-6 py-4 rounded-xl shadow-xl font-bold">
                Pan-India Delivery 🚚
              </div>
            </div>
          </div>
        </section>

        
        <section className="py-20  bg-blue-50  text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl text-blue-900 font-bold mb-6">
              Ready to Move Your Goods?
            </h2>
            <p className="text-xl text-grey mb-10">
              Get a free quote today and experience the best intercity transport
              service in India.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="px-10 py-4 text-xl font-bold rounded-full bg-yellow-500 text-blue-900 hover:bg-yellow-400 transition shadow-xl transform hover:scale-105"
            >
              Get a Free Quote
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-transparent hover:border-yellow-500">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-blue-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export default IntercityTransport;
