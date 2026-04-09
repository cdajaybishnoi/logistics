import React from "react";
import {
  MessageCircle,
  CalendarCheck,
  FileText,
  CheckCircle,
  Package,
  Truck,
} from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Make an Inquiry",
    description: "Use our smart cost calculator to get an instant estimate.",
  },
  {
    icon: CalendarCheck,
    title: "In-House Appointment",
    description: "Schedule a visit for an accurate, personalized quote.",
  },
  {
    icon: FileText,
    title: "Free Quote",
    description: "Receive a transparent, no-obligation quotation.",
  },
  {
    icon: CheckCircle,
    title: "Confirm & Hire Us",
    description: "Approve the quote and let us handle the planning.",
  },
  {
    icon: Package,
    title: "Careful Packing",
    description: "Professional packing with premium-quality materials.",
  },
  {
    icon: Truck,
    title: "Moving Day",
    description: "Final checklist and smooth, stress-free delivery.",
  },
];

const WorkProcessSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-blue-50 via-white to-blue-50 overflow-hidden">
      
      {/* Background blur */}
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
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3"
              >
                {/* Step Number */}
                <div className="absolute -top-6 -right-6 w-14 h-14 rounded-full bg-gradient-to-br from-blue-900 to-blue-700 text-white flex items-center justify-center text-lg font-bold shadow-lg group-hover:scale-110 transition">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-20 h-20 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-6 shadow-lg group-hover:scale-105 transition transform">
                  <Icon className="w-10 h-10 text-blue-900" />
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;