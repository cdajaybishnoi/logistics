// import React, { useState } from "react";
// import { Mail, Phone, MapPin, Send, Facebook, Instagram } from "lucide-react";

// const ContactMe: React.FC = () => {
//   const whatsappNumber = "918689049549"; // My WhatsApp number

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleWhatsAppSend = (e: React.FormEvent) => {
//     e.preventDefault();

//     const whatsappMessage = `
// Hello Ship MyCar 👋

// Name: ${formData.name}
// Email: ${formData.email}
// Phone: ${formData.phone}

// Message:
// ${formData.message}
//     `;

//     const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
//       whatsappMessage,
//     )}`;

//     window.open(whatsappUrl, "_blank");
//   };
// return (
//   <section
//     id="contactme"
//     className="relative bg-gradient-to-b from-blue-50 via-white to-blue-100 py-24 overflow-hidden"
//   >
//     {/* Background decorative blobs */}
//     <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
//     <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-200 rounded-full blur-3xl opacity-30"></div>

//     <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       {/* Heading */}
//       <div className="text-center mb-20">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
//           Contact <span className="text-yellow-500">Us</span>
//         </h1>

//         <p className="text-gray-600 max-w-2xl mx-auto text-lg">
//           Have questions or need a logistics quote? Our team is always ready to
//           help you move your vehicle safely and quickly.
//         </p>
//       </div>

//       <div className="grid md:grid-cols-2 gap-14 items-start">

//         {/* FORM */}
//         <div className="bg-white/70 backdrop-blur-lg border border-white/40 rounded-3xl shadow-2xl p-10 hover:shadow-blue-200 transition">

//           <h2 className="text-2xl font-semibold text-blue-900 mb-8">
//             Send Us a Message
//           </h2>

//           <form className="space-y-6" onSubmit={handleWhatsAppSend}>

//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition"
//             />

//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition"
//             />

//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone Number"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//               className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition"
//             />

//             <textarea
//               name="message"
//               placeholder="Your Message"
//               rows={4}
//               value={formData.message}
//               onChange={handleChange}
//               required
//               className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition"
//             />

//             <button
//               type="submit"
//               className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl transition font-medium w-full shadow-lg hover:scale-105"
//             >
//               Send on WhatsApp <Send size={18} />
//             </button>
//           </form>
//         </div>


//         {/* CONTACT INFO */}
//         <div className="space-y-6">

//           <InfoCard
//             icon={<MapPin />}
//             title="Main Office"
//             text="📍 Plot no.11 Near Shani Mandir, Carter Puri Marg, Near Maruti Gate 2, Gurugram, 122015"
//           />

//           <InfoCard
//             icon={<MapPin />}
//             title="Office 2nd Branch"
//             text="📍 Hisar (Assist), 125001, India"
//             altText="📞 +91 8690309300"
//           />

//           <InfoCard
//             icon={<Phone />}
//             title="Phone"
//             text="📞 +91 8689049549"
//           />

//           <InfoCard
//             icon={<Mail />}
//             title="Email"
//             text={
//               <a
//                 href="mailto:shipmycar42@gmail.com"
//                 className="text-blue-600 hover:underline"
//               >
//                 📧 shipmycar42@gmail.com
//               </a>
//             }
//             altText="Feel free to email us for any inquiries!"
//           />

//           {/* Working hours */}
//           <div className="bg-blue-900 text-white rounded-3xl p-6 shadow-lg hover:scale-[1.02] transition">
//             <h3 className="text-xl font-semibold mb-2">Working Hours</h3>

//             <p className="text-blue-100">
//               Monday – Saturday
//               <br />
//               9:00 AM – 7:00 PM
//             </p>
//           </div>


//           {/* SOCIAL */}
//           <div className="bg-white rounded-3xl shadow-lg p-6 flex items-center justify-center gap-8 hover:shadow-xl transition">

//             <a
//               href="https://www.facebook.com/share/1Ht99jnaHp/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white hover:scale-110 transition shadow"
//             >
//               <Facebook size={24} />
//             </a>

//             <a
//               href="https://www.instagram.com/ship.my.car?igsh=MXBtdnZkYXptaG0yaQ=="
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white hover:scale-110 transition shadow"
//             >
//               <Instagram size={24} />
//             </a>

//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// );
//   // return (
//   //   <section
//   //     id="contactme"
//   //     className="bg-gradient-to-b from-blue-50 to-white py-20"
//   //   >
//   //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//   //       <div className="text-center mb-16">
//   //         <h1 className="text-4xl font-extrabold text-blue-900 mb-4">
//   //           Contact <span className="text-yellow-500">Us</span>
//   //         </h1>
//   //         <p className="text-gray-600 max-w-2xl mx-auto">
//   //           Have questions or need a logistics quote? We’re here to help you
//   //           move forward.
//   //         </p>
//   //       </div>

//   //       <div className="grid md:grid-cols-2 gap-12">
//   //         <div className="bg-white rounded-2xl shadow-xl p-8">
//   //           <h2 className="text-2xl font-semibold text-blue-900 mb-6">
//   //             Send Us a Message
//   //           </h2>

//   //           <form className="space-y-5" onSubmit={handleWhatsAppSend}>
//   //             <input
//   //               type="text"
//   //               name="name"
//   //               placeholder="Your Name"
//   //               value={formData.name}
//   //               onChange={handleChange}
//   //               required
//   //               className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//   //             />

//   //             <input
//   //               type="email"
//   //               name="email"
//   //               placeholder="Your Email"
//   //               value={formData.email}
//   //               onChange={handleChange}
//   //               required
//   //               className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//   //             />

//   //             <input
//   //               type="tel"
//   //               name="phone"
//   //               placeholder="Phone Number"
//   //               value={formData.phone}
//   //               onChange={handleChange}
//   //               required
//   //               className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//   //             />

//   //             <textarea
//   //               name="message"
//   //               placeholder="Your Message"
//   //               rows={4}
//   //               value={formData.message}
//   //               onChange={handleChange}
//   //               required
//   //               className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//   //             />

//   //             <button
//   //               type="submit"
//   //               className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition font-medium w-full"
//   //             >
//   //               Send on WhatsApp <Send size={18} />
//   //             </button>
//   //           </form>
//   //         </div>

//   //         {/* Contact Info */}
//   //         <div className="space-y-6">
//   //           <InfoCard
//   //             icon={<MapPin />}
//   //             title="Main Office"
//   //             text="📍 Plot no.11 Near Shani Mandir, Carter Puri Marg, Near Maruti Gate 2, Gurugram, 122015"
//   //           />

//   //           <InfoCard
//   //             icon={<MapPin />}
//   //             title="Office 2nd Branch"
//   //             text="📍 Hisar (Assist), 125001, India"
//   //             altText="📞 +91 8690309300"
//   //           />

//   //           <InfoCard icon={<Phone />} title="Phone" text="📞 +91 8689049549" />
//   //           <InfoCard
//   //             icon={<Mail />}
//   //             title="Email"
//   //             text={
//   //               <a
//   //                 href="mailto:shipmycar42@gmail.com"
//   //                 className="text-blue-600 hover:underline"
//   //               >
//   //                 📧 shipmycar42@gmail.com
//   //               </a>
//   //             }
//   //             altText="Feel free to email us for any inquiries!"
//   //           />

//   //           <div className="bg-blue-900 text-white rounded-2xl p-6">
//   //             <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
//   //             <p className="text-blue-100">
//   //               Monday – Saturday
//   //               <br />
//   //               9:00 AM – 7:00 PM
//   //             </p>
//   //           </div>

//   //           <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center gap-6 hover:shadow-xl transition">
//   //             <a
//   //               href="https://www.facebook.com/share/1Ht99jnaHp/"
//   //               target="_blank"
//   //               rel="noopener noreferrer"
//   //               className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white hover:scale-110 transition"
//   //               aria-label="Facebook"
//   //             >
//   //               <Facebook size={22} />
//   //             </a>

//   //             <a
//   //               href="https://www.instagram.com/ship.my.car?igsh=MXBtdnZkYXptaG0yaQ=="
//   //               target="_blank"
//   //               rel="noopener noreferrer"
//   //               className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white hover:scale-110 transition"
//   //               aria-label="Instagram"
//   //             >
//   //               <Instagram size={22} />
//   //             </a>
//   //           </div>
//   //         </div>
//   //       </div>
//   //     </div>
//   //   </section>
//   // );
// };

// const InfoCard = ({
//   icon,
//   title,
//   text,
//   altText,
// }: {
//   icon: React.ReactNode;
//   title: string;
//   text: React.ReactNode;
//   altText?: string;
// }) => (
//   <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4 hover:shadow-xl transition">
//     <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
//       {icon}
//     </div>
//     <div>
//       <h3 className="font-semibold text-blue-900">{title}</h3>
//       <p className="text-gray-600">{text}</p>
//       {altText && <p className="text-gray-500 mt-1">{altText}</p>}
//     </div>
//   </div>
// );

// export default ContactMe;


import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Truck } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ContactMe: React.FC = () => {
  const whatsappNumber = "918689049549";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");

    setSuccess(true);
  };

  return (
    <section
      id="contactme"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-100 via-white to-yellow-50"
    >
      {/* background glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-300 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-extrabold text-blue-900 mb-4">
            Contact <span className="text-yellow-500">Us</span>
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or need a logistics quote? We're here to help you
            move forward.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* FORM */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
           className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-6 h-fit"
          >
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">
              Send Us a Message💬
            </h2>

            <form className="space-y-5" onSubmit={handleWhatsAppSend}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition font-medium w-full hover:scale-105"
              >
                Send on WhatsApp <Send size={18} />
              </button>
            </form>
            

             {/* MAP SECTION UNDER FORM */}
          <div className="md:col-span-1 mt-8 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=Plot%20no.11%20Near%20Shani%20Mandir%20Carter%20Puri%20Marg%20Gurugram&output=embed"
              width="100%"
              height="300"
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
            
          </motion.div>




          {/* CONTACT INFO */}
          <div className="space-y-6">

            <InfoCard
              icon={<MapPin />}
              title="Main Office"
              text="📍 Plot no.11 Near Shani Mandir, Carter Puri Marg, Near Maruti Gate 2, Gurugram, 122015"
            />

            <InfoCard
              icon={<MapPin />}
              title="Office 2nd Branch"
              text="📍 Hisar (Assist), 125001, India"
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

            {/* Working hours */}
            <div className="bg-blue-900 text-white rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
              <p className="text-blue-100">
                Monday – Saturday
                <br />
                9:00 AM – 7:00 PM
              </p>
            </div>

            {/* Social */}
            <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center gap-6">
              <a
                href="https://www.facebook.com/share/1Ht99jnaHp/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white hover:scale-110 transition"
              >
                <Facebook size={22} />
              </a>

              <a
                href="https://www.instagram.com/ship.my.car?igsh=MXBtdnZkYXptaG0yaQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white hover:scale-110 transition"
              >
                <Instagram size={22} />
              </a>
            </div>

          </div>

       
          {/* filler for second column */}
          <div className="md:col-span-1"></div>
        </div>

        {/* LOGISTICS TIMELINE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            How Your Vehicle Moves
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <TimelineStep
              icon={<Phone />}
              title="Book Order"
              text="Contact us and confirm your shipment details."
            />

            <TimelineStep
              icon={<Truck />}
              title="Pickup"
              text="Our team collects the vehicle from your location."
            />

            <TimelineStep
              icon={<Truck />}
              title="Safe Transport"
              text="Vehicle transported safely with professional carriers."
            />

            <TimelineStep
              icon={<MapPin />}
              title="Delivery"
              text="Vehicle delivered safely to your destination."
            />

          </div>
        </motion.div>

      </div>
      {/* SUCCESS POPUP */}
      {success && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white p-8 rounded-xl shadow-xl text-center">
            <h2 className="text-xl font-bold text-green-600 mb-2">
              Message Ready!
            </h2>

            <p className="text-gray-600">
              Your message has been prepared. Please send it on WhatsApp.
            </p>

            <button
              onClick={() => setSuccess(false)}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
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
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4"
  >
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
      {icon}
    </div>

    <div>
      <h3 className="font-semibold text-blue-900">{title}</h3>
      <p className="text-gray-600">{text}</p>
      {altText && <p className="text-gray-500 mt-1">{altText}</p>}
    </div>
  </motion.div>
);

const TimelineStep = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition">
    <div className="flex justify-center mb-3 text-blue-600">{icon}</div>

    <h3 className="font-semibold text-blue-900">{title}</h3>

    <p className="text-gray-600 text-sm mt-2">{text}</p>
  </div>
);

export default ContactMe;