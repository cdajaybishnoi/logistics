import React from "react";
import WelcomeSection from "../components/WelcomeSection";
import RequestQuote from "../components/QuoteSection";

import WorkProcessSection from "@/components/WorkProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OurGallery from "@/components/OurGallery";
import InstagramSection from "@/components/InstagramSection";

const Home: React.FC = () => {
  return (
    <>
      <WelcomeSection />
      <RequestQuote />
      <OurGallery/>
      <WorkProcessSection/>
      <InstagramSection/>
      <TestimonialsSection/>
    </>
  );
};

export default Home;
