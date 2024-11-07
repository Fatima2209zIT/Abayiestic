"use client";

import Navbar from "../components/navbar"; // Make sure this path is correct
import "aos/dist/aos.css";
import AOS from 'aos';
import React, { useState, useEffect } from 'react';
import Loading from "../components/loading";

export default function Products() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
    // Simulate loading data
    setTimeout(() => {
      setLoading(false); // After 2 seconds, set loading to false
    }, 2000);
  }, []);

  // Array for your additional products with names
  const additionalProducts = [
    { src: "/abaya-3.webp", 
      name: "MANIFEST TILL MAGIC BEGINS ABAYA",
      price : "7,900RS"
     },
    { src: "/abaya-4.webp", 
      name: "REVIVE THE MOMENT ABAYA" ,
      price : "10,990RS"
     },
    { src: "/abaya-5.webp", 
      name: "GLORIA ABAYA",
      price : "9,900RS"  
    },
    { src: "/abaya-6.webp", 
      name: "MAGICAL RADIANCE ABAYA" ,
      price : "6,900RS" 
    },
    { src: "/abaya-7.webp", 
      name: "LILAC SHIMMER KIMONO",
      price : "25,600RS" 
     },
    { src: "/abaya-8.webp", 
      name: "METALLIC BRONZE KAFTAN",
      price : "48,00RS" 
     },
    { src: "/abaya-9.webp",
       name: "METALLIC ANTIQUE KIMONO",
       price : "41,00RS"  
      },
    { src: "/abaya-10.webp", 
      name: "METALLIC BLACK KAFTAN",
      price : "48,00RS"  
    },
    { src: "/abaya-11.webp",
       name: "SHIMMER SKY KIMONO" ,
       rice : "25,600RS" },
  ];
  if (loading) {
    return <Loading />; // Show the Loading component when loading is true
  }
  return (

    
    <div className="p-10 bg-white">
      <Navbar /> {/* Use the Navbar component */}
      <h1 data-aos="fade-down" className=" m-1 p-10 font-sans font-bold text-4xl flex items-center justify-center h-64 text-amber-800">OUR PRODUCTS</h1>
      <h2 data-aos="fade-down" className=" m-1 p-0 font-sans font-bold text-4xl flex items-center justify-center h-64 text-amber-800">SPECIALS</h2>
      <div className="flex justify-center space-x-10"> {/* Flex container for first two images */}
        <img 
          data-aos="fade-right" 
          src="/abaya-1.webp" 
          alt="Abaya" 
          className="shadow-black m-20 p-10 border-spacing-y-2" 
        />
        
        <img 
          data-aos="fade-left" 
          src="/abaya-2.webp" 
          alt="Abaya" 
          className="shadow-black m-20 p-10 border-spacing-y-2" 
        />
      </div>
     <h3 data-aos="fade-down" className=" m-1 p-0 font-sans font-bold text-4xl flex items-center justify-center h-64 text-amber-800" >MORE PRODUCTS</h3>
      {/* Grid for additional products with images and names */}
      <div className="grid grid-cols-3 gap-6 mt-10"> {/* 3 columns grid with spacing */}
        {additionalProducts.map((product, index) => (
          <div key={index} className="flex flex-col items-center"> {/* Flex column for image and text */}
            <img
              data-aos="fade-up" // Animation for the image
              src={product.src}
              alt={product.name} // Adjust the alt text accordingly
              className="shadow-xl border border-gray-200 transition-transform duration-300 hover:scale-105 mb-2" // Add hover effect
            />
            <h3 className="font-bold text-lg text-center text-black">{product.name}</h3> {/* Product name */}

            <p className="text-lg text-green-600 font-semibold">PRICE:{product.price}</p> {/* Product price */}
          </div>
        ))}
      </div>
    </div>
  );
}

