import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-900 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Terms & Conditions
        </h1>
        <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
          Please read these terms carefully before using ShipMyCar services.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-16 space-y-10">
        
        {/* Introduction */}
        <section>
          <p className="text-gray-700 leading-relaxed">
            Welcome to <span className="font-semibold text-blue-900">ShipMyCar</span>.
            By accessing or using our website and services, you agree to comply
            with and be bound by these Terms and Conditions. If you do not agree
            with any part of these terms, please refrain from using our services.
          </p>
        </section>

        {/* About Services */}
        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            1. About Our Services
          </h2>
          <p className="text-gray-700 leading-relaxed">
            ShipMyCar provides logistics-related information and assistance for
            vehicle and goods transportation. Service availability, pricing,
            routes, and timelines may vary depending on location, requirements,
            and operational conditions.
          </p>
        </section>

        {/* Website Usage */}
        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            2. Use of Website
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>You agree to use this website only for lawful purposes</li>
            <li>You will not misuse, damage, or attempt to disrupt the website</li>
            <li>You will not provide false or misleading information</li>
          </ul>
        </section>

        {/* User Responsibilities */}
        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            3. User Responsibilities
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Users are responsible for providing accurate details related to
            shipments, vehicles, pickup, and delivery locations. ShipMyCar is
            not responsible for issues arising from incorrect or incomplete
            information provided by the user.
          </p>
        </section>

        {/* Payments */}
        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            4. Payments & Charges
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Any payments, charges, or quotes shared are subject to confirmation.
            Final pricing may vary based on service requirements, distance,
            and operational factors.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            5. Limitation of Liability
          </h2>
          <p className="text-gray-700 leading-relaxed">
            ShipMyCar shall not be held liable for delays, losses, or damages
            caused due to unforeseen circumstances such as traffic conditions,
            weather issues, regulatory actions, or force majeure events.
          </p>
        </section>

        {/* Media Credits */}
        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            6. Media Usage & Credits
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Some videos and visual media displayed on this website are sourced
            from public platforms such as YouTube and other media-sharing
            websites. These media assets are used strictly for design,
            presentation, and demonstration purposes only.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            We do not claim ownership of any third-party media. All rights and
            credits belong to their respective creators. There is no intention
            to harm, disrespect, or misuse any content or creator.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            If you are a content owner and believe your material has been used
            unintentionally, please contact us and we will take prompt action.
          </p>
        </section>

        {/* External Links */}
        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            7. External Links
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our website may contain links to third-party websites. ShipMyCar is
            not responsible for the content, policies, or practices of any
            external sites.
          </p>
        </section>

        {/* Changes */}
        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            8. Changes to Terms
          </h2>
          <p className="text-gray-700 leading-relaxed">
            ShipMyCar reserves the right to update or modify these Terms and
            Conditions at any time without prior notice. Continued use of the
            website implies acceptance of the updated terms.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            9. Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions regarding these Terms and Conditions,
            please reach out to us via our Contact page or official support
            channels.
          </p>
        </section>

      </div>
    </div>
  );
};

export default TermsAndConditions;
