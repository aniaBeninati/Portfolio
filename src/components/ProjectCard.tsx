// src/components/ProjectCard.tsx
"use client"; // Aggiungo "use client" per assicurarmi che il componente sia lato client

import Link from 'next/link';

type ProjectCardProps = {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 m-4">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg" />
      <h3 className="text-2xl font-bold my-2">{project.title}</h3>
      <p className="text-gray-700">{project.description}</p>
      <Link href={`/projects/${project.id}`} className="text-primary font-semibold mt-2 block">
        Scopri di più
      </Link>
    </div>
  );
};

export default ProjectCard;
