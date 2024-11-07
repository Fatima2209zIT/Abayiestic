"use client";


import "aos/dist/aos.css";



export default function Contact() {
  // Throwing the error without the need to import 'Error'
  throw new Error("Contact page can not be processed");

  // The following code won't execute because of the thrown error
  return (
    <div>
      {/* Your other content */}
    </div>
  );
}
