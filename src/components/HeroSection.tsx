"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { FaCode, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode } from 'react-icons/fa';
import StyledAvatar from './StyledAvatar';

const HeroSection = () => {
  useEffect(() => {
    // Animazioni GSAP per le icone esistenti
    gsap.fromTo(
      ".dynamic-code-symbol",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 1.5,
        ease: "power3.out",
        repeat: -1,
        yoyo: true,
      }
    );

    // Animazione per nuovi elementi grafici sullo sfondo
    gsap.to(".floating-shape", {
      y: -30,
      duration: 4,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 0.5
    });

    // Animazione per il testo con un effetto di apparizione più dinamico
    gsap.from(".hero-text", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power3.out",
      onComplete: () => {
        gsap.set(".hero-text", { opacity: 1 });
      }
    });
  }, []);

  return (
    <section className="relative text-center bg-[#141c3a] py-20 overflow-hidden">
      <div className="flex items-center justify-center space-x-6">
        {/* Usa il nuovo componente StyledAvatar per l'immagine */}
        <StyledAvatar />
        {/* Contenitore per le icone animate */}
        <div className="dynamic-elements-container">
          <FaCode className="dynamic-code-symbol text-6xl text-white" />
          <FaHtml5 className="dynamic-code-symbol text-6xl text-white" />
          <FaCss3Alt className="dynamic-code-symbol text-6xl text-white" />
          <FaJs className="dynamic-code-symbol text-6xl text-white" />
          <FaReact className="dynamic-code-symbol text-6xl text-white" />
          <FaNode className="dynamic-code-symbol text-6xl text-white" />
        </div>
      </div>

      {/* Aggiunta di forme fluttuanti sullo sfondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-shape bg-pink-500 w-12 h-12 rounded-full absolute top-20 left-10"></div>
        <div className="floating-shape bg-yellow-500 w-16 h-16 rounded-full absolute top-40 left-40"></div>
        <div className="floating-shape bg-green-500 w-10 h-10 rounded-full absolute top-60 left-80"></div>
      </div>

    </section>
  );
};

export default HeroSection;
