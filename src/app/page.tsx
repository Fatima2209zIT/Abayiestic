"use client";

import Navbar from "./components/navbar"; // Make sure this path is correct
import React, { useState, useEffect } from 'react';
import "aos/dist/aos.css";
import AOS from 'aos';
export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  useEffect(() => {
    AOS.init({
      duration: 1000, // Customize animation duration if needed
    });
  }, []);
  // Slide data
  const slides: string[] = [
    "home-abaya-1.webp",
    "home-abaya-2.webp",
  ];

  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [slides.length]);

 

  return (
    <div className="p-10 bg-white">
      
      <Navbar />
      <div className="home">
        <h1 data-aos= "fade-left" className="transition-transform hover:-translate-y-2 m-2 font-sans font-bold text-7xl flex items-center justify-center h-64 text-amber-800">
          ABAYIESTIC
        </h1>

        <div className="relative w-full h-72 overflow-hidden">
          {slides.map((src, index) => (
            <img
              key={index}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
              src={src}
              alt={`Slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex justify-center mt-4">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
                index === activeIndex ? "bg-gray-800" : "bg-gray-400"
              }`}
              onClick={() => handleSlideChange(index)}
            ></div>
          ))}
        </div>

        <p
          data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"
          className="flex space-x-2 p-20 m-15 font-sans font-semibold text-xl text-center h-25 text-amber-700"
        >
           In Islam, the abaya and hijab are deeply rooted in principles of modesty, serving as expressions of faith and devotion. The abaya, a long, flowing robe, is traditionally worn to cover a woman’s figure in public, aligning with the Quranic encouragement for modest attire. The hijab, or headscarf, frames the face while covering the hair, symbolizing humility and dedication to spiritual values. For many Muslim women, these garments are not only personal commitments to Islamic teachings but also reflections of inner strength and dignity. Blending tradition with modern elegance, abayas and hijabs bridge faith and fashion, allowing women to honor their beliefs while embracing their individuality.
        </p>
      </div>
    </div>
  );
}
