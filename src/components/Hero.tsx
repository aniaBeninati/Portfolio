"use client";
// src/components/Hero.tsx
import { useEffect } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  useEffect(() => {
    gsap.fromTo(
      '.hero-text',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.5 }
    );
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-primary text-white">
      <h1 className="hero-text text-4xl font-serif">Ciao, sono Stefania</h1>
      <p className="hero-text text-xl mt-4">Front-End Developer e Appassionata di UX.</p>
    </section>
  );
};

export default Hero;
