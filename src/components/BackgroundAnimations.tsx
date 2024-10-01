"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

const BackgroundAnimations = () => {
  useEffect(() => {
    // Animazioni GSAP per gli elementi grafici fluttuanti
    gsap.to(".floating-icon", {
      y: -20,
  duration: 3,  // Maggiore durata
  ease: "power2.inOut",  // Smoothing migliorato
  repeat: -1,
  yoyo: true,
  stagger: 0.5, 
    });
  }, []);

  return (
<div className="absolute inset-0 z-10 pointer-events-none">
  <div className="floating-icon bg-red-400 w-12 h-12 rounded-full absolute top-20 left-10 z-20"></div>
  <div className="floating-icon bg-blue-400 w-16 h-16 rounded-full absolute top-40 left-40 z-20"></div>
  <div className="floating-icon bg-green-400 w-10 h-10 rounded-full absolute top-60 left-80 z-20"></div>
</div>


  );
};

export default BackgroundAnimations;
