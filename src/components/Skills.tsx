import React from 'react';

const Skills: React.FC = () => {
  const skills = ['JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'MongoDB', 'Firebase', 'Figma', 'Postman', 'Git'];

  return (
    <section className="skills-section py-10 md:py-20 text-center mx-4 md:mx-0">
      <h2 className="text-4xl font-bold mb-6">Competenze</h2>
      <div className="flex justify-center flex-wrap gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white text-black font-semibold py-3 px-6 rounded-lg shadow-lg">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
