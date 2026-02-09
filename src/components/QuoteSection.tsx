import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RequestQuote = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    from: "",
    to: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `
🚚 *New Moving Inquiry*

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone}
📦 From: ${formData.from}
📍 To: ${formData.to}

📝 Message:
${formData.message}
    `;

    const whatsappURL = `https://wa.me/918689049549?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl bg-white">

        {/* LEFT – FORM */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-10 text-white">
          <h2 className="text-3xl font-bold mb-2">Request a Quote</h2>
          <p className="text-gray-300 mb-6 text-sm">
            Fill in your details and get a quick response
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 rounded-lg text-gray-700"
              required
            />

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 rounded-lg text-gray-700"
            />

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Mobile Number"
              className="w-full p-3 rounded-lg text-gray-700"
              required
            />

            <input
              name="from"
              value={formData.from}
              onChange={handleChange}
              placeholder="Shifting From"
              className="w-full p-3 rounded-lg text-gray-700"
            />

            <input
              name="to"
              value={formData.to}
              onChange={handleChange}
              placeholder="Shifting To"
              className="w-full p-3 rounded-lg text-gray-700"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={3}
              className="w-full p-3 rounded-lg text-gray-700"
            />

            <div className="flex gap-4 pt-2">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold shadow-md"
              >
                Send on WhatsApp
              </button>

              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="bg-white text-gray-800 px-6 py-2 rounded-lg font-semibold shadow-md"
              >
                Contact Us
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT – CONTENT */}
        <div className="p-12 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50">
          <h3 className="text-4xl font-extrabold text-gray-800 mb-4">
            Move Smarter,<br /> Move Faster 🚚
          </h3>

          <p className="text-gray-600 mb-6">
            Reliable relocation services with safety, speed, and affordability.
          </p>

          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <div className="bg-white p-4 rounded-xl shadow-sm">📦 Packing</div>
            <div className="bg-white p-4 rounded-xl shadow-sm">🚛 Delivery</div>
            <div className="bg-white p-4 rounded-xl shadow-sm">📍 Tracking</div>
            <div className="bg-white p-4 rounded-xl shadow-sm">💰 Best Price</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RequestQuote;
