"use client";

import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: "SicilyPulse",
    description: "Esperienza interattiva dedicata alla cultura siciliana",
    image: "/SicilyPulse.png",
    link: "https://sicily-pulse.vercel.app/"
  },
  {
    id: 2,
    title: "Artist For Fun",
    description: "Progetto creativo per artisti",
    image: "/ArtistForFun.png",
    link: "https://artist-for-nh6udf7xj-stefania-beninatis-projects.vercel.app/"
  },
  {
    id: 3,
    title: "Panoramica dei Mille",
    description: "Vetrina digitale di una casa vacanza",
    image: "/PanoramicaDeiMille.png",
    link: "https://html-css-panoramica-dei-mille.vercel.app/"
  },
  {
    id: 4,
    title: "Thrillex",
    description: "Un progetto adrenalinico ispirato al mondo del cinema",
    image: "/Thrillex.png",
    link: "https://code-week-thrillex.vercel.app/"
  },
  {
    id: 5,
    title: "Gestionale profumi",
    description: "Gestionale intuitivo per semplificare l'organizzazione",
    image: "/GestionaleProfumi.png",
    link: "https://gestionale-amber.vercel.app/"
  },
  {
    id: 6,
    title: "Ai Story Teller",
    description: "Progetto per creare racconti unici con AI",
    image: "/AiStoryTeller.png",
    link: "https://ai-story-teller-xi.vercel.app/"
  }
];

const ProjectsLinks: React.FC = () => {
  return (
    <section className="projects-section py-20">
      {/* Griglia per i progetti */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {projects.map((project) => (
          <div key={project.id} className="project relative bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-out">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="relative">
                {/* Titolo sopra l'immagine */}
                <h2 className="absolute inset-x-0 top-2 text-2xl font-bold text-center text-white bg-black bg-opacity-60 py-1">{project.title}</h2>
                <Image 
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="project-image w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <p className="text-lg mt-4 text-center text-gray-400">{project.description}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsLinks;
