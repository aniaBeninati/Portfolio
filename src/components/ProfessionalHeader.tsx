"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

const ProfessionalHeader = () => {
  useEffect(() => {
    // Animazione del testo con effetto fade-in e slide-up
    gsap.fromTo(".header-text", {
      opacity: 0,
      y: 50,
    }, {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "power3.out",
      stagger: 0.3,
    });

    // Animazioni GSAP per le forme fluttuanti
    gsap.to(".floating-shape", {
      y: -30,
      duration: 4,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 0.5
    });
  }, []);

  return (
    <section className="relative text-center py-20 bg-gradient-to-r from-[#141c3a] to-[#1a223e] flex flex-col items-center space-y-6 overflow-hidden mx-4 md:mx-0">

      {/* Forme animate sullo sfondo - sinistra */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-shape bg-pink-500 w-12 h-12 rounded-full absolute top-20 left-10"></div>
        <div className="floating-shape bg-yellow-500 w-16 h-16 rounded-full absolute top-40 left-40"></div>
        <div className="floating-shape bg-green-500 w-10 h-10 rounded-full absolute top-60 left-80"></div>
      </div>

      {/* Forme animate sullo sfondo - destra */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-shape bg-blue-500 w-12 h-12 rounded-full absolute top-20 right-10"></div>
        <div className="floating-shape bg-purple-500 w-16 h-16 rounded-full absolute top-40 right-40"></div>
        <div className="floating-shape bg-red-500 w-10 h-10 rounded-full absolute top-60 right-80"></div>
      </div>

      {/* Testo principale con gradiente e ombra */}
      <h2 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 header-text shadow-lg mb-8 leading-tight">
        Dettagli che fanno la <span className="text-yellow-300">differenza</span>
      </h2>

      <p className="text-2xl mt-6 text-gray-300 header-text max-w-2xl">
        La mia passione per il <span className="text-yellow-300">design UX/UI</span> e lo sviluppo di <span className="text-yellow-300">siti web professionali</span> è ciò che trasforma le tue idee in esperienze digitali uniche.
      </p>

    </section>
  );
};

export default ProfessionalHeader;
