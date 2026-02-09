import React, { useEffect, useState } from "react";
import shipmycar from "../assets/shipmycar.jpeg";
const images = [
  shipmycar,
  "https://i-media.vyaparify.com/vcards/blogs/103758/Secure-Car-Transport-Solutions.jpeg",
  "https://www.kcmpackers.com/assets/img/gallery/gallery3.jpg",
  "https://image.automotivelogistics.media/178244.webp?imageId=178244&width=960&height=640&format=jpg",
  "https://indiashippingnews.com/wp-content/uploads/2025/08/indian-logistics.webp",
  "https://www.globecargomovers.com/wp-content/uploads/2025/04/car-transport-service.png",
  "https://guidelogistics.in/wp-content/uploads/2024/02/20-1-1024x791.png",
];

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-xl mt-4 max-h-[500px]">
      {/* Slides container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className="w-full h-[500px] flex-shrink-0 object-cover" 
          />
        ))}
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-orange-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
