// src/data/projects.ts
export type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
  };
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'SiciliPulse',
      description: 'Una webapp per valorizzare il patrimonio culturale siciliano.',
      image: '/images/siciliPulse.png',
    },
    {
      id: 2,
      title: 'Artist-For-Fun',
      description: 'Un progetto creativo per gli artisti.',
      image: '/images/artistForFun.png',
    },
    {
      id: 3,
      title: 'AI Story Teller',
      description: 'Un\'applicazione per raccontare storie usando l\'intelligenza artificiale.',
      image: '/images/aiStoryTeller.png',
    },
    // Aggiungi altri progetti se necessario...
  ];
  
  export default projects;
  