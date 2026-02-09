import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ClipboardList, PackageCheck, Truck, Home as HomeIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const HouseholdMoving = () => {
  const navigate = useNavigate();
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero", {
        y: 120,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });

      gsap.utils.toArray(".count").forEach((el: any) => {
        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: el.dataset.value,
            duration: 2,
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
            },
          }
        );
      });

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
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={pageRef}
      className="bg-gradient-to-b from-blue-50 to-white text-blue-900 overflow-hidden"
    >

  
      <section className="relative min-h-screen flex items-center overflow-hidden">

        
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/videoplayback (1).mp4" type="video/mp4" />
        </video>

       
        <div className="absolute inset-0 bg-blue-900/70"></div>

        
        <div className="relative z-10 w-full px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center hero">

            <div className="text-white">
              <h1 className="text-6xl font-extrabold leading-tight">
                Household <span className="text-yellow-400">Moving</span>
                <br /> Reimagined
              </h1>

              <p className="mt-6 text-lg text-blue-100 max-w-xl">
                A premium household moving & domestic relocation experience built
                for families who value safety, comfort and trust.
              </p>

              <button
                onClick={() => navigate("/contact")}
                className="mt-10 px-14 py-4 rounded-full bg-yellow-500 text-blue-900 text-lg font-bold hover:scale-105 transition"
              >
                Get Free Quote
              </button>
            </div>

            <div className="hidden md:block">
              <img
                src="https://hometriangle.com/blogs/content/images/2023/02/AdobeStock_458017513.jpeg"
                alt="Household Moving"
                className="rounded-3xl shadow-2xl"
              />
            </div>

          </div>
        </div>
      </section>

       <div className="-mt-32 relative z-10">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl grid grid-cols-2 md:grid-cols-4 text-center py-14">
          <Stat value="3968" label="Houses Shifted" />
          <Stat value="6" label="Years Experience" />
          <Stat value="28" label="Cities Covered" />
          <Stat value="100" label="Safety %" />
        </div>
      </div>

      <div className="relative py-48 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/60 via-transparent to-yellow-100/40 blur-3xl" />
        <div className="relative max-w-7xl mx-auto grid md:grid-cols-3 gap-14">
          <StoryCard
            index="01"
            title="Not Just Moving Boxes"
            highlight="We Move Memories"
            text="Every household item carries emotion. We treat your belongings with care, precision and respect."
          />
          <StoryCard
            index="02"
            title="Designed For Families"
            highlight="Comfort Comes First"
            text="From fragile crockery to heavy furniture, everything is managed by trained professionals."
            offset
          />
          <StoryCard
            index="03"
            title="Pan-India Reliability"
            highlight="Trusted Nationwide"
            text="Intercity or interstate, we ensure smooth, safe and on-time household relocation."
          />
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto px-6 py-40">
        <h2 className="text-4xl font-extrabold text-center mb-20">
          Step-by-Step Guide to a Stress-Free
          <span className="text-yellow-500"> Household Move</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-14">
          <StepCard
            step="01"
            title="Planning the Move"
            icon={<ClipboardList className="w-7 h-7" />}
            points={[
              "Create a checklist of all items",
              "Schedule the move with our team",
              "Discuss your specific requirements",
            ]}
          />
          <StepCard
            step="02"
            title="Packing with Care"
            icon={<PackageCheck className="w-7 h-7" />}
            points={[
              "Fragile items packed separately",
              "Systematic packing of clothes & electronics",
              "Clear labeling for easy unpacking",
            ]}
          />
          <StepCard
            step="03"
            title="Safe Transportation"
            icon={<Truck className="w-7 h-7" />}
            points={[
              "GPS-enabled trucks",
              "Careful handling during transit",
              "Strict safety standards followed",
            ]}
          />
          <StepCard
            step="04"
            title="Unpacking & Settling In"
            icon={<HomeIcon className="w-7 h-7" />}
            points={[
              "Unpacking assistance provided",
              "All items verified after delivery",
              "Furniture setup as per preference",
            ]}
          />
        </div>
      </div>

    
      <div className="pb-40 text-center fade-up">
        <h2 className="text-5xl font-extrabold mb-6">
          Ready To Shift Your House?
        </h2>
        <p className="text-gray-600 text-lg mb-10">
          Experience stress-free household moving with SHIP MYCAR.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="px-16 py-5 rounded-full bg-yellow-500 text-blue-900 font-bold text-xl hover:scale-105 transition shadow-xl"
        >
          Book Household Move
        </button>
      </div>
    </div>
  );
};



const Stat = ({ value, label }: { value: string; label: string }) => (
  <div>
    <h3 className="count text-4xl font-extrabold" data-value={value}>
      0
    </h3>
    <p className="text-gray-600 mt-2">{label}</p>
  </div>
);

const StoryCard = ({
  index,
  title,
  highlight,
  text,
  offset,
}: {
  index: string;
  title: string;
  highlight: string;
  text: string;
  offset?: boolean;
}) => (
  <div
    className={`fade-up group relative backdrop-blur-xl bg-white/70 border border-white/40
    rounded-3xl p-10 shadow-2xl hover:-translate-y-6 transition-all duration-500
    ${offset ? "md:mt-24" : ""}`}
  >
    <div className="absolute -top-6 -right-6 w-14 h-14 rounded-full bg-blue-900 text-white flex items-center justify-center font-extrabold shadow-xl">
      {index}
    </div>
    <div className="h-1 w-16 bg-yellow-500 rounded-full mb-6" />
    <h3 className="text-3xl font-extrabold">{title}</h3>
    <p className="mt-3 text-xl font-bold text-yellow-600">{highlight}</p>
    <p className="mt-6 text-gray-700 text-lg">{text}</p>
  </div>
);

const StepCard = ({
  step,
  title,
  points,
  icon,
}: {
  step: string;
  title: string;
  points: string[];
  icon: React.ReactNode;
}) => (
  <div className="fade-up bg-white rounded-3xl shadow-xl p-10 hover:-translate-y-2 transition text-center">
    <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-blue-900 text-white flex items-center justify-center shadow-lg">
      {icon}
    </div>
    <div className="mx-auto w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold mb-6">
      {step}
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <ul className="space-y-3 text-gray-700 text-left max-w-sm mx-auto">
      {points.map((p, i) => (
        <li key={i}>✔ {p}</li>
      ))}
    </ul>
  </div>
);

export default HouseholdMoving;
