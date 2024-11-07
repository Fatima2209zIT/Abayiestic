"use client";

import Navbar from "../components/navbar"; // Make sure this path is correct
import "aos/dist/aos.css";


export default function About() {
    return (
        <div className="p-10 bg-white">
          <Navbar /> {/* Use the Navbar component */}
          <h1 data-aos="fade-down" className=" m-1 p-10 font-sans font-bold text-4xl flex items-center justify-center h-64 text-amber-800">ABOUT US</h1>
          <div className="flex justify-center mb-10"> {/* Flex container for centering the image */}
        <img 
          src="/about-image.webp" // Replace with the correct path to your image
          alt="About Us Image"
          className=" w-50 h-50 object-cover" // Add styles as needed
          data-aos="fade-up" // AOS animation
        />
      </div>
          
          <p style= {{fontFamily:"cursive",}}data-aos="fade-down" className=" m-1 p-0 font-sans text-xl flex items-center justify-center h-64 text-amber-800">
          At Abayiestic, we celebrate the beauty and elegance of traditional attire while embracing contemporary fashion. Our passion for abayas and hijabs drives us to curate a stunning collection that reflects the values of modesty and grace. We believe that every piece tells a story, and we are dedicated to providing our customers with high-quality garments that empower them to express their individuality. Our mission is to blend tradition with modern design, allowing women to honor their heritage while feeling confident and stylish. Join us on this journey as we redefine modest fashion, offering a diverse range of styles to suit every occasion and personal taste. Welcome to the Abayiestic family, where tradition meets elegance!
          </p>
          <div className="flex justify-center space-x-10"> {/* Flex container for first two images */}
            </div>
            </div>
    )
}