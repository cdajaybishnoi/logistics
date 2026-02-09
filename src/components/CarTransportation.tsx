import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Car,
  ShieldCheck,
  Truck,
  Star,
  IndianRupee,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CarTransportation = () => {
  const navigate = useNavigate();
  const pageRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".fade-up").forEach((el: any) => {
        gsap.from(el, {
          y: 80,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      });

      gsap.to(".reviews-track", {
        xPercent: -50,
        duration: 35,
        repeat: -1,
        ease: "linear",
      });
    }, pageRef);

    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="text-blue-900 overflow-hidden">

      <section className="relative min-h-screen flex items-center overflow-hidden">

        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/videoplayback_2.mp4" type="video/mp4" />
        </video>

       
        <div className="absolute inset-0 bg-blue-900/75"></div>

        <div className="relative z-10 w-full px-4 sm:px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

            <div className="fade-up text-white text-center md:text-left">
              <h1 className="font-extrabold leading-tight text-3xl sm:text-4xl md:text-6xl">
                Car Transportation
                <br />
                <span className="text-yellow-400">On the Highway</span>
              </h1>

              <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-blue-100 max-w-xl mx-auto md:mx-0">
                Professional, insured & damage-free car transportation across
                India. Built for highways, long routes and premium vehicles.
              </p>

              <button
                onClick={() => navigate("/contact")}
                className="mt-6 sm:mt-8 px-8 sm:px-10 py-3 sm:py-4
                rounded-full bg-yellow-500 text-blue-900 font-bold
                text-sm sm:text-base md:text-lg hover:scale-105 transition"
              >
                Get Car Transport Quote
              </button>
            </div>

            <div className="hidden md:block fade-up">
              <img
                src="https://images.unsplash.com/photo-1502877338535-766e1452684a"
                alt="Car transport"
                className="rounded-3xl shadow-2xl"
              />
            </div>

          </div>
        </div>
      </section>

      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-8">
          <Info value="9345+" label="Cars Transported" />
          <Info value="100%" label="Insured Moves" />
          <Info value="40+" label="Cities Covered" />
          <Info value="0%" label="Damage Record" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-40">
        <h2 className="text-4xl font-extrabold text-center mb-20">
          Car Transportation Pricing (By Vehicle Type)
        </h2>

        <div className="grid md:grid-cols-3 gap-14">
          <PriceCard
            icon={<Car />}
            type="Hatchback"
            price="₹6,000 – ₹12,000"
            text="Swift, i10, Alto & similar cars"
          />
          <PriceCard
            icon={<Truck />}
            type="Sedan / SUV"
            price="₹8,000 – ₹18,000"
            text="City, Creta, Nexon, Scorpio"
            popular
          />
          <PriceCard
            icon={<ShieldCheck />}
            type="Luxury / Sports"
            price="₹15,000 – ₹35,000"
            text="BMW, Audi, Mercedes (covered carrier)"
          />
        </div>
      </section>

      <section className="bg-gradient-to-b from-blue-50 to-white py-32 overflow-hidden">
        <h2 className="text-4xl font-extrabold text-center mb-16">
          What Car Owners Say
        </h2>

        <div className="relative overflow-hidden">
          <div className="flex gap-10 reviews-track mb-10 w-[200%]">
            {reviews.map((r, i) => (
              <ReviewCard key={i} {...r} />
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-32 text-grey text-center ">
        <h2 className="text-5xl font-extrabold mb-6">
          Ready to Move Your Car?
        </h2>
        <p className="text-blue-600 text-lg mb-10">
          Highway-ready logistics trusted by thousands of car owners.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="px-16 py-5 rounded-full bg-yellow-500 text-blue-900 font-bold text-xl hover:scale-105 transition"
        >
          Book Car Transportation
        </button>
      </section>
    </div>
  );
};



const Info = ({ value, label }: { value: string; label: string }) => (
  <div>
    <h3 className="text-3xl font-extrabold">{value}</h3>
    <p className="text-blue-200 mt-1">{label}</p>
  </div>
);

const PriceCard = ({
  icon,
  type,
  price,
  text,
  popular,
}: {
  icon: React.ReactNode;
  type: string;
  price: string;
  text: string;
  popular?: boolean;
}) => (
  <div className="fade-up bg-white rounded-3xl shadow-2xl p-10 text-center hover:-translate-y-2 transition relative">
    {popular && (
      <div className="absolute top-4 right-4 bg-yellow-400 text-blue-900 px-3 py-1 text-xs font-bold rounded-full">
        Most Booked
      </div>
    )}
    <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-blue-900 text-white flex items-center justify-center">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-2">{type}</h3>
    <p className="flex justify-center items-center gap-1 text-xl font-extrabold text-yellow-600 mb-3">
      <IndianRupee className="w-5 h-5" /> {price}
    </p>
    <p className="text-gray-600">{text}</p>
  </div>
);

const ReviewCard = ({
  name,
  car,
  review,
}: {
  name: string;
  car: string;
  review: string;
}) => (
  <div className="min-w-[320px] bg-white rounded-3xl shadow-xl p-8">
    <div className="flex gap-1 text-yellow-500 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-500" />
      ))}
    </div>
    <p className="text-gray-700 mb-4">“{review}”</p>
    <h4 className="font-bold">{name}</h4>
    <p className="text-sm text-gray-500">{car}</p>
  </div>
);

const reviews = [
  {
    name: "Rohit Sharma",
    car: "Hyundai Creta",
    review: "Car reached Bangalore safely. Excellent tracking & support.",
  },
  {
    name: "Ankit Verma",
    car: "BMW 5 Series",
    review: "Covered carrier, zero damage. Very professional.",
  },
  {
    name: "Priya Singh",
    car: "Maruti Swift",
    review: "Affordable pricing and on-time delivery.",
  },
  {
    name: "Vikram Patel",
    car: "Audi A4",
    review: "Smooth experience with regular updates.",
  },
];

export default CarTransportation;
