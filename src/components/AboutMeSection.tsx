"use client";

import { FaLaptopCode, FaPaintBrush, FaGlobe, FaMapMarkerAlt, FaSwimmer, FaGraduationCap } from 'react-icons/fa'; // Import delle icone React Icons
import { useEffect } from "react";
import { gsap } from "gsap";

const AboutMeSection = () => {
  useEffect(() => {
    // GSAP Animazioni per le icone
    gsap.fromTo(
      ".icon-animation",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, stagger: 0.3, duration: 1.5, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="py-20 text-center bg-[#141c3a] text-white mx-4 md:mx-0">
      <h2 className="text-4xl font-bold mb-8">Chi Sono</h2>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg mb-6">🐱 Benvenuta/o! Sono Ania, una sviluppatrice frontend con un occhio per il design e una passione per creare interfacce belle e intuitive. Unisco la precisione della programmazione con l'arte del design, creando esperienze uniche.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left icon-animation">
          
          <div className="flex items-start space-x-4">
            <FaLaptopCode className="text-4xl text-yellow-400" />
            <div>
              <h3 className="text-2xl font-bold">Maghetta del Codice</h3>
              <p>Trasformo problemi complessi in soluzioni semplici con JS, HTML, CSS, React e Next. Almeno ci provo! 😄</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaPaintBrush className="text-4xl text-red-400" />
            <div>
              <h3 className="text-2xl font-bold">Amante dell’UX</h3>
              <p>Combino estetica e funzionalità per creare esperienze utente visivamente accattivanti e intuitive.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaGlobe className="text-4xl text-green-400" />
            <div>
              <h3 className="text-2xl font-bold">Appassionata delle API</h3>
              <p>Amo integrare diverse API per arricchire le funzionalità dei miei progetti, collegando il codice al mondo esterno.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaMapMarkerAlt className="text-4xl text-blue-400" />
            <div>
              <h3 className="text-2xl font-bold">Posizione</h3>
              <p>Palermo è la mia base, ma lavoro da remoto, portando creatività ovunque ci sia una connessione.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaSwimmer className="text-4xl text-purple-400" />
            <div>
              <h3 className="text-2xl font-bold">Surfista del Codice</h3>
              <p>Affronto i bug e le sfide del codice con equilibrio e pazienza, cavalcando ogni progetto fino alla soluzione perfetta.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaGraduationCap className="text-4xl text-teal-400" />
            <div>
              <h3 className="text-2xl font-bold">Istruzione & Certificazioni</h3>
              <p>Coding Bootcamp - Edgemony, Laurea Magistrale in Tecnologie della Comunicazione - Link Campus University.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
