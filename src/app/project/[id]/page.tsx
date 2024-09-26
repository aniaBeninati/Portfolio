// src/app/projects/[id]/page.tsx
import { notFound } from 'next/navigation';
import projects from '@data/projects';

type Props = {
  params: { id: string };
};

export default function ProjectDetailPage({ params }: Props) {
  const projectId = parseInt(params.id, 10);
  const project = projects.find((project) => project.id === projectId);

  if (!project) {
    return notFound();
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold">{project.title}</h1>
      <p className="mt-4">{project.description}</p>
      <img src={project.image} alt={project.title} className="mt-8 rounded-lg" />
    </div>
  );
}
