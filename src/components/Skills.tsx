// src/components/Skills.tsx
const Skills = () => {
    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'GSAP', 'SCSS'];
  
    return (
      <section className="py-8 bg-secondary text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Competenze</h2>
        <ul className="flex flex-wrap justify-center gap-4">
          {skills.map(skill => (
            <li key={skill} className="bg-white text-primary py-2 px-4 rounded-lg shadow-lg">
  // src/components/Skills.tsx
          {skill}
        </li>
      ))}
    </ul>
  </section>
  );
};

export default Skills;
