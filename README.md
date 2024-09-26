portfolio-website/
│
├── public/
│   ├── images/  # Inserisci le tue foto e le immagini del progetto qui
│   └── favicon.ico
│
├── src/
│   ├── app/ 
│   │   ├── layout.tsx     # Layout principale del sito
│   │   ├── page.tsx       # Homepage
│   │   ├── projects/
│   │   │   ├── page.tsx   # Pagina per visualizzare i progetti
│   │   │   └── [id]/page.tsx # Pagina dinamica per i dettagli del progetto
│   │   └── contact/
│   │       └── page.tsx   # Pagina di contatto
│   │
│   ├── components/
│   │   ├── Header.tsx     # Header con navigazione
│   │   ├── Footer.tsx     # Footer con i contatti
│   │   ├── Hero.tsx       # Sezione iniziale con animazioni GSAP
│   │   ├── ProjectCard.tsx # Card per ogni progetto
│   │   ├── Skills.tsx     # Sezione delle competenze
│   │   └── ContactForm.tsx # Form di contatto
│   │
│   ├── styles/
│   │   ├── globals.css    # Stili globali con Tailwind
│   │   └── custom.css     # Eventuali stili personalizzati
│   │
│   ├── types/
│   │   └── project.d.ts   # Tipi TypeScript per i progetti
│   │
│   ├── utils/
│   │   └── gsapAnimations.ts # Funzioni GSAP
│   │
│   └── data/
│       └── projects.ts    # Dati finti dei progetti
│
├── .gitignore
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
