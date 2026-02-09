import React from "react";

// Testimonial data
const testimonials = [
  {
    name: "Prakhar",
    location: "Kanpur",
    message:
      "Hi, my name is Prakhar. I used SHIP-MYCAR services a few days back. The company is professional and excellent in their work. They made it so easy to move my stuff. Charges are affordable. I'm a fully satisfied and happy customer. Highly recommend it!",
  },
  {
    name: "Mohan Goyal",
    location: "Chennai",
    message:
      "Thank you so much for your support, you are doing a great job to achieve fast and safe delivery.",
  },
  {
    name: "Sammy",
    location: "Kerala",
    message:
      "SHIP-MYCAR did a great job delivering my new car to my hometown safely. I was looking for someone reliable, and they proved themselves. Big thanks to SHIP-MYCAR!",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
            Testimonials From <span className="text-yellow-500">Satisfied Customers</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            See what our happy customers have to say about our services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-3 relative"
            >
              <div className="mb-6">
                <p className="text-gray-700 italic leading-relaxed">
                  "{testimonial.message}"
                </p>
              </div>

              {/* Customer Info */}
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-blue-900">
                  {testimonial.name}
                </h4>
                <p className="text-yellow-500 font-medium">{testimonial.location}</p>
              </div>

              {/* Decorative Quote */}
              <div className="absolute -top-6 -left-6 text-yellow-500 text-5xl opacity-20 select-none">
                ❝
              </div>
              <div className="absolute -bottom-6 -right-6 text-yellow-500 text-5xl opacity-20 select-none">
                ❞
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
