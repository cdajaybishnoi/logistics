// src/components/WelcomeSection.tsx
 
import React from 'react';
import ImageSlider from './ImageSlider';
import { useNavigate } from 'react-router-dom';


 
const WelcomeSection: React.FC = () => {
   const navigate = useNavigate();
  return (
<>

    <section
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
     
      style={{ backgroundImage: "url('https://i.pinimg.com/736x/da/53/86/da53869395aa62dfa9ed5372ae628f6d.jpg')" }}
    >
     
      <div className="absolute inset-0 bg-black/60"></div>
 
     
      <div className="relative z-10 text-center text-white p-8">
        
        {/* Text: "Welcome to" */}
        <p className="text-xl md:text-2xl mb-2 font-light">
          Welcome to
        </p>
 
     <h1 className="text-5xl md:text-7xl font-bold mb-3 underline decoration-4 underline-offset-8" 
     >SHIP</h1>
        <h1 className="text-5xl md:text-7xl font-bold mb-3 underline decoration-4 underline-offset-8 text-yellow-500">
          
         My CAR
        </h1>
 
        {/* Text: "Your Trusted Logistics Partner" */}
        <p className="text-2xl md:text-3xl font-semibold mb-8">
          Your Trusted Logistics Partner
        </p>
 
      {/* Button Container:
        */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          
          <button 
           onClick={() => navigate("/services")}
          className="bg-red-600 text-white py-3 px-8 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors duration-300">
            Our Services
          </button>
 
         
          <button
           onClick={() => navigate("/contact")}
          className="bg-white text-gray-900 py-3 px-8 rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors duration-300">
            Contact us
          </button>
 
        </div>
        <br>
        </br>
         <br>
        </br>
         <br>
        </br>
         <br>
        </br>

<ImageSlider/>

{/* <MagicBento 
  textAutoHide={true}
  enableStars={true}
  enableSpotlight={true}
  enableBorderGlow={true}
  enableTilt={true}
  enableMagnetism={true}
  clickEffect={true}
  spotlightRadius={300}
  particleCount={12}
  glowColor="132, 0, 255"
/> */}
        
      </div>


    </section>
   



    
</>
  );
};
 
export default WelcomeSection;