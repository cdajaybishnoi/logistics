import { HashRouter, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Services from "@/pages/Services";
import ContactMe from "@/pages/Contact";

import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import GalleryImages from "@/components/GalleryImages";
import HouseholdMoving from "@/components/HouseHoldMoving";
import CarTransportation from "@/components/CarTransportation";
import IntercityTransport from "@/pages/IntercityTransport";
import TermsAndConditions from "@/pages/TermsAndConditons";
import ScrollToTop from "@/components/ScrollToTop";

function App() {
  return (
    <HashRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/galleryimages" element={<GalleryImages />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/householdmoving" element={<HouseholdMoving />} />
          <Route path="/cartransportation" element={<CarTransportation />} />
          <Route path="/intercity-transport" element={<IntercityTransport />} />
          <Route path="/termsandconditons" element={<TermsAndConditions />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
export default App;

// import Layout from "@/components/Layout";
// import About from "@/pages/About";
// import ContactMe from "@/pages/Contact";
// import Home from "@/pages/Home";
// import Services from "@/pages/Services";

// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// const AppRoutes: React.FC = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route element={<Layout />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//                 <Route path="/contact" element={<ContactMe/>} />
//                       <Route path="/services" element={<Services/>} />
//           {/* <Route path="/contact" element={<Contact />} /> */}
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default AppRoutes;
