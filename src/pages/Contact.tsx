import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Facebook, Instagram } from "lucide-react";

const ContactMe: React.FC = () => {
  const whatsappNumber = "918689049549"; // My WhatsApp number

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `
Hello Ship MyCar 👋

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}
    `;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="contactme"
      className="bg-gradient-to-b from-blue-50 to-white py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-blue-900 mb-4">
            Contact <span className="text-yellow-500">Us</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or need a logistics quote? We’re here to help you
            move forward.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-5" onSubmit={handleWhatsAppSend}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition font-medium w-full"
              >
                Send on WhatsApp <Send size={18} />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <InfoCard
              icon={<MapPin />}
              title="Main Office"
              text="📍 Plot no.11 Near Shani Mandir, Carter Puri Marg, Near Maruti Gate 2, Gurugram, 122015"
            />

            <InfoCard
              icon={<MapPin />}
              title="Office 2nd Branch"
              text="📍 Hisar, 125001, India"
              altText="📞 +91 8690309300"
            />

            <InfoCard icon={<Phone />} title="Phone" text="📞 +91 8689049549" />
            <InfoCard
              icon={<Mail />}
              title="Email"
              text={
                <a
                  href="mailto:shipmycar42@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  📧 shipmycar42@gmail.com
                </a>
              }
              altText="Feel free to email us for any inquiries!"
            />

            <div className="bg-blue-900 text-white rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
              <p className="text-blue-100">
                Monday – Saturday
                <br />
                9:00 AM – 7:00 PM
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center gap-6 hover:shadow-xl transition">
              <a
                href="https://www.facebook.com/share/1Ht99jnaHp/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white hover:scale-110 transition"
                aria-label="Facebook"
              >
                <Facebook size={22} />
              </a>

              <a
                href="https://www.instagram.com/ship.my.car?igsh=MXBtdnZkYXptaG0yaQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white hover:scale-110 transition"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoCard = ({
  icon,
  title,
  text,
  altText,
}: {
  icon: React.ReactNode;
  title: string;
  text: React.ReactNode;
  altText?: string;
}) => (
  <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4 hover:shadow-xl transition">
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-blue-900">{title}</h3>
      <p className="text-gray-600">{text}</p>
      {altText && <p className="text-gray-500 mt-1">{altText}</p>}
    </div>
  </div>
);

export default ContactMe;
