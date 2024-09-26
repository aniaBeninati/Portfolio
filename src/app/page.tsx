// src/app/page.tsx
import Hero from '@components/Hero';
import ProjectCard from '@components/ProjectCard';
import Skills from '@components/Skills';
import projects from '@data/projects';

export default function HomePage() {
  return (
    <div className="container mx-auto py-8">
      <Hero />
      <section className="my-12">
        <h2 className="text-4xl font-bold text-center">I Miei Progetti</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      <Skills />
    </div>
  );
}
