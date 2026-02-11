import React from "react";
import {
  ShieldCheck,
  Scale,
  Truck,
  FileWarning,
  Image,
  Mail,
  LockKeyhole,
  ShieldUser,
} from "lucide-react";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* 🔥 WATERMARK BACKGROUND */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h1 className="text-[120px] md:text-[200px] font-extrabold text-white opacity-5 tracking-widest rotate-[-20deg]">
          SHIPMYCAR
        </h1>
      </div>

      {/* HERO SECTION */}
      <section className="relative py-32 text-center bg-gradient-to-br from-blue-900 via-black to-blue-950">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold">ShipMyCar</h1>
          <p className="mt-4 text-yellow-400 text-xl uppercase tracking-widest">
            Official Terms & Conditions
          </p>
          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            This document defines the official operational standards,
            responsibilities, and governing principles applicable to all
            ShipMyCar services.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="relative max-w-6xl mx-auto px-6 py-24 space-y-20 z-10">
        <Block icon={<Truck />} title="1. Our Commitment">
          ShipMyCar operates as a professional logistics coordination platform
          providing structured assistance for vehicle and goods transportation.
          Our mission is to deliver transparency, reliability, and operational
          efficiency across all supported locations.
          <br />
          <br />
          While we strive to maintain high service standards, all commitments,
          delivery timelines, route confirmations, and operational arrangements
          remain subject to availability, feasibility, carrier conditions, and
          regulatory requirements.
        </Block>

        <Block icon={<ShieldCheck />} title="2. User Responsibility">
          Customers are solely responsible for providing complete and accurate
          information related to vehicle details, pickup and delivery locations,
          contact information, and any special handling requirements.
          <br />
          <br />
          ShipMyCar shall not be liable for delays, additional costs, or
          complications arising due to inaccurate or incomplete information
          provided by the customer.
        </Block>

        <Block icon={<Scale />} title="3. Booking & Pricing Terms">
          All service requests are considered booking inquiries until formally
          confirmed. Pricing provided through the website, email, or phone
          remains indicative and subject to final operational verification.
          <br />
          <br />
          Final charges may vary based on distance, vehicle type, fuel costs,
          toll charges, route deviations, and logistical conditions.
        </Block>

        <Block icon={<FileWarning />} title="4. Limitation of Liability">
          ShipMyCar shall not be held responsible for delays or disruptions
          caused by circumstances beyond reasonable control, including but not
          limited to traffic congestion, weather conditions, natural disasters,
          regulatory actions, mechanical breakdowns, or force majeure events.
          <br />
          <br />
          Transport operations inherently involve external risk factors, and
          while we aim for safe and timely service, absolute guarantees cannot
          be provided.
        </Block>

        <Block icon={<Image />} title="5. Media Usage & Content Credits">
          Certain videos, images, and visual elements displayed on this website
          may be sourced from public platforms such as YouTube or other
          media-sharing websites.
          <br />
          <br />
          These materials are used strictly for presentation, demonstration, and
          design enhancement purposes. ShipMyCar does not claim ownership of
          third-party media. All intellectual property rights remain with their
          respective creators.
          <br />
          <br />
          If any rightful content owner requests removal, appropriate action
          will be taken promptly upon verification.
        </Block>

        <Block icon={<ShieldCheck />} title="6. Intellectual Property">
          All original content, branding elements, logos, text, and website
          design structure are the intellectual property of ShipMyCar unless
          otherwise stated.
          <br />
          <br />
          Unauthorized reproduction, redistribution, or commercial use of
          original ShipMyCar content is strictly prohibited without prior
          written permission.
        </Block>

        <Block icon={<LockKeyhole/>} title="7. Data Protection & Security">
          Security ShipMyCar takes reasonable technical and organizational
          measures to safeguard user data from:
          <br />
          <br />
          Unauthorized access, Data loss, Misuse, Disclosure While we implement
          security practices, no digital transmission method is 100% secure.
          Users share data at their own discretion.
        </Block>

        <Block icon={<ShieldUser />} title="8.How We Use Your Information">
           Your information may be used for:
          Processing service inquiries and bookings Contacting you regarding
          shipment updates 
          <br />
          <br />
          Improving website functionality, Enhancing customer
          support, Internal record keeping, Preventing fraud or misuse. We do not
          sell or rent your personal data to third parties.
        </Block>

        <Block icon={<Scale />} title="9. Policy Modifications">
          ShipMyCar reserves the right to update, revise, or modify these Terms
          & Conditions at any time without prior notice.
          <br />
          <br />
          Continued use of the ShipMyCar website or services after updates
          indicates acceptance of the revised terms.
        </Block>

        {/* ✍ SIGNATURE FOOTER */}
        <div className="mt-24 border-t border-gray-700 pt-12 text-center">
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-10 rounded-3xl shadow-2xl inline-block">
            <Mail className="mx-auto mb-4 w-8 h-8 text-yellow-400" />
            <p className="text-blue-100 text-lg">
              For legal or policy-related inquiries, please contact our official
              support team.
              <br></br>
              <a
                href="mailto:shipmycar42@gmail.com"
                className="text-white hover:underline hover:text-yellow-400 transition-colors"
              >
                ✉ shipmycar42@gmail.com
              </a>
            </p>
          </div>

          <div className="mt-16">
            <p className="text-yellow-400 font-semibold tracking-widest uppercase">
              Official Policy Document
            </p>

            <h2 className="text-3xl font-extrabold mt-4">
              ShipMyCar Logistics
            </h2>

            <p className="text-gray-400 mt-3">
              Effective Date: {new Date().toLocaleDateString()}
            </p>

            <p className="text-gray-500 mt-3">
              © {new Date().getFullYear()} ShipMyCar. All Rights Reserved.
            </p>

            <div className="mt-6 text-gray-600 text-sm italic">
              This document represents the official service terms governing
              ShipMyCar operations and platform usage.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;

/* 🔥 REUSABLE CONTENT BLOCK */
const Block = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="border-l-4 border-yellow-400 pl-8">
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 flex items-center justify-center bg-yellow-400 text-black rounded-xl">
        {icon}
      </div>
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
    </div>
    <p className="text-gray-300 text-lg leading-relaxed">{children}</p>
  </div>
);
