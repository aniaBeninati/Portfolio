"use client";

import HeroSection from "@/components/HeroSection"; 
import ProjectsLinks from "@/components/ProjectsLinks"; 
import Skills from "@/components/Skills"; 
import AboutMeSection from "@/components/AboutMeSection"; 
import ProfessionalHeader from '@/components/ProfessionalHeader'; 
import BackgroundAnimations from "@/components/BackgroundAnimations";


export default function HomePage() {
  return (
    <div className="relative"> {/* Assicurati che sia relative */}
      <BackgroundAnimations /> {/* Aggiungi le animazioni qui */}
      <HeroSection />
      
      <ProfessionalHeader />
      <AboutMeSection />
      <ProjectsLinks />
      <Skills />
    </div>
  );
}
