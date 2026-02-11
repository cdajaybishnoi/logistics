import {
  Truck,
  Users,
  Target,
  Eye,
  Heart,
  Award,
  Star,
  ThumbsUp,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold text-blue-900 mb-4">
            About <span className="text-yellow-500">SHIP MyCAR</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Delivering trust, speed, and excellence in transportation logistics
            for over a decade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Our Journey
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to{" "}
              <strong>
                <span className="text-yellow-500">SHIP MyCAR</span>
              </strong>
              , an established shifting firm with more than Six years of
              experience in the transportation industry. Founded in Gurugram, we
              have grown into a multinational logistics company.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, we proudly serve over <strong>10,000 happy clients</strong>
              , offering reliable, technology-driven logistics solutions across
              India and beyond.
            </p>
          </div>

       
          <div className="grid grid-cols-2 gap-6">
            <StatCard icon={<Users />} value="10,000+" label="Happy Clients" />
            <StatCard
              icon={<Truck />}
              value="6,000+"
              label="Active Customers"
            />
            <StatCard icon={<Target />} value="6+ Years" label="Experience" />
            <StatCard icon={<Heart />} value="100%" label="Commitment" />
          </div>
        </div>

     
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <InfoCard
            icon={<Eye />}
            title="Vision"
            text="To be an expert in transportation logistics with unmatched quality in delivery."
          />
          <InfoCard
            icon={<Target />}
            title="Mission"
            text="To create national standards for excellence, uniformity, and dedication in the logistics industry."
          />
          <InfoCard
            icon={<Heart />}
            title="Values"
            text="To satisfy present and future clients using a transparent and Win-Win approach."
          />
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-900 to-blue-700 text-white p-12 mb-20">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_white,_transparent)]"></div>
          <h2 className="text-3xl font-bold mb-4">Transportation Solutions</h2>
          <p className="max-w-6xl leading-relaxed text-blue-100">
            If you are looking for safe and dependable car or bike
            transportation anywhere in India, you are in the right place.{" "}
            <strong>
              <span className="text-yellow-500">SHIP MyCAR</span>
            </strong>{" "}
            connects you with trusted and experienced vehicle transport
            professionals across the country. From pickup to final delivery, we
            ensure that your vehicle is handled with care, transparency, and
            responsibility. Our platform provides verified information and real
            customer experiences, helping you choose the most suitable vehicle
            transportation service with confidence. Relocating to a new city for
            a job, marriage, or personal reasons often comes with many
            challenges—and transporting your vehicle shouldn’t be one of them.
            Having your own car or bike at your new location makes daily travel
            easier and more comfortable. At{" "}
            <strong>
              <span className="text-yellow-500">SHIP MyCAR</span>
            </strong>
            , we focus on expert vehicle handling, clear communication, and
            customer-centric service for every car shipment in India. Since
            vehicle relocation requires trust and reliability, we work only with
            verified partners to make your move smooth, secure, and stress-free
            for you and your family.
          </p>
        </div>

        <div className="mb-20 text-center">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-8">
            Awards & Achievements
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <AchievementCard
              icon={<Award />}
              title="Best Logistics Startup 2022"
              description="Recognized nationally for innovative vehicle transport solutions."
            />
            <AchievementCard
              icon={<Star />}
              title="Top Customer Satisfaction"
              description="Over 95% positive feedback from our clients across India."
            />
            <AchievementCard
              icon={<ThumbsUp />}
              title="Trusted by Thousands"
              description="Thousands of customers trust us for safe and timely vehicle transport."
            />
          </div>
        </div>

        <div className="mb-20 text-center">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-8">
            Why Choose <span className="text-yellow-500">SHIP MyCAR</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <USPCard
              title="Reliable & Secure"
              description="We guarantee the safety of your vehicles with specialized carriers and insurance coverage."
            />
            <USPCard
              title="Fast & Transparent"
              description="Real-time tracking ensures you always know where your shipment is."
            />
            <USPCard
              title="Expert Team"
              description="Professional drivers and logistics experts handle your vehicles with care."
            />
          </div>
        </div>

        <div className="mb-20 text-center">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-8">
            What Our Clients Say
          </h2>

          <div className="overflow-x-auto flex gap-6 py-6 px-4 scroll-smooth snap-x snap-mandatory">
            <Testimonial
              name="Rohit Sharma"
              feedback="Ship MyCar handled my luxury BMW car transportation flawlessly. Highly recommend!"
            />
            <Testimonial
              name="Anita Verma"
              feedback="Professional team and excellent service. My car reached on time and safely. Must give a chance to SHIP MYCAR!"
            />
            <Testimonial
              name="Sanjay Patel"
              feedback="Transparent, reliable, and trustworthy logistics company. A+ experience!"
            />
            <Testimonial
              name="Priya Singh"
              feedback="Very smooth experience. My car was delivered safely and ahead of schedule!"
            />
            <Testimonial
              name="Vikram Reddy"
              feedback="Excellent service and communication. Totally reliable!"
            />
          </div>
        </div>

     
        <div className="text-center">
          <button
            onClick={() => navigate("/contact")}
            className="px-12 py-4 text-xl font-bold rounded-full bg-blue-900 text-white hover:bg-blue-800 transition shadow-xl"
          >
            Get a Quote Today
          </button>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) => (
  <div className="bg-white/80 backdrop-blur p-6 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-1 text-center">
    <div className="flex justify-center text-blue-900 mb-2">{icon}</div>
    <h3 className="text-2xl font-bold text-blue-900">{value}</h3>
    <p className="text-gray-600">{label}</p>
  </div>
);

const InfoCard = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => (
  <div className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition transform hover:-translate-y-2">
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-900 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
    <p className="text-gray-700 leading-relaxed">{text}</p>
  </div>
);

const AchievementCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition transform hover:-translate-y-2 text-center">
    <div className="flex justify-center text-blue-900 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

const USPCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition transform hover:-translate-y-2 text-center">
    <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

const Testimonial = ({
  name,
  feedback,
}: {
  name: string;
  feedback: string;
}) => (
  <div className="min-w-[300px] flex-shrink-0 bg-white rounded-2xl p-6 shadow hover:shadow-2xl transition-transform transform hover:scale-105 snap-start">
    <p className="text-gray-700 italic mb-4">"{feedback}"</p>
    <h4 className="text-blue-900 font-semibold">{name}</h4>
  </div>
);

export default About;
