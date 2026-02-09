import React from "react";


const steps = [
  {
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=200&q=80",
    title: "Make an Inquiry",
    description: "Use our smart cost calculator to get an instant estimate.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSskWxW-55StDl1xj3H_empYy0NSW5rtusQZQ&s",
    title: "In-House Appointment",
    description: "Schedule a visit for an accurate, personalized quote.",
  },
  {
    image:
      "https://cdn-1.webcatalog.io/catalog/messages/messages-icon-filled-256.png?v=1714775109980",
    title: "Free Quote",
    description: "Receive a transparent, no-obligation quotation.",
  },
  {
    image:
      "https://www.shutterstock.com/image-photo/happy-office-employee-giving-hand-260nw-2442530465.jpg",
    title: "Confirm & Hire Us",
    description: "Approve the quote and let us handle the planning.",
  },
  {
    image:
      "https://images.pexels.com/photos/7289733/pexels-photo-7289733.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Careful Packing",
    description: "Professional packing with premium-quality materials.",
  },
  {
    image:
      "https://www.shutterstock.com/image-vector/car-pin-phone-hands-auto-600nw-2492319943.jpg",
    title: "Moving Day",
    description: "Final checklist and smooth, stress-free delivery.",
  },
];

const WorkProcessSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-blue-50 via-white to-blue-50 overflow-hidden">

      {/* Decorative background blur */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
            Our <span className="text-yellow-500">Work Process</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A well-structured moving journey designed for clarity, safety, and peace of mind.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3"
            >
              {/* Step Number */}
              <div className="absolute -top-6 -right-6 w-14 h-14 rounded-full bg-gradient-to-br from-blue-900 to-blue-700 text-white flex items-center justify-center text-lg font-bold shadow-lg group-hover:scale-110 transition">
                {index + 1}
              </div>

              {/* Image instead of icon */}
              <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-6 shadow-lg group-hover:scale-105 transition transform">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-blue-900 mb-3 group-hover:text-blue-700 transition">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>

              {/* Bottom Glow Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 to-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-3xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;



