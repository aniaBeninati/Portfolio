"use client";

import { useEffect } from "react";
import Image from 'next/image'; 
import { gsap } from "gsap";

const StyledAvatar = () => {
  useEffect(() => {
    // Effetto di animazione con GSAP
    gsap.fromTo(
      ".profile-image",
      { opacity: 0, scale: 0.8, rotateY: 180 },
      { opacity: 1, scale: 1, rotateY: 0, duration: 1.5, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="relative text-center">
      {/* Sovrapposizione di forma geometrica */}
      <div className="absolute top-0 left-10 w-80 h-80 bg-orange-500 rounded-xl z-0"></div>

      {/* Sovrapposizione di puntini */}
      <div className="absolute top-10 left-0 w-32 h-32 bg-white rounded-full opacity-50 z-10"></div>

      {/* Immagine dell'avatar */}
      <Image
        src="/Ania_16.jpg" 
        alt="Stefania Beninati"
        width={400}
        height={500}
        className="profile-image relative z-20 rounded-lg shadow-lg mx-4 md:mx-0" // Aggiunto margine per mobile
      />

      {/* Sovrapposizione di codice */}
      <div className="absolute bottom-10 right-10 text-left text-white z-30 opacity-60">
        <pre>
          <span className="block ml-4 md:ml-0">const</span> {/* Aggiunto margine per mobile */}
          {' Stefania = () => {'}
          <br />
          <span className="ml-10">console.log('Front-End Developer');</span>
          <br />
          {'};'}
        </pre>
      </div>
    </div>
  );
};

export default StyledAvatar;
