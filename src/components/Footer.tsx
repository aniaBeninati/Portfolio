// src/components/Footer.tsx
"use client"; // Aggiungo "use client" per assicurarmi che il componente sia lato client

const Footer = () => {
  return (
    <footer className="bg-primary text-white p-4 mt-8">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Stefania Beninati. Tutti i diritti riservati.</p>
        <ul className="flex space-x-4">
          <li>
            <a href="https://github.com/aniaBeninati" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/stefania-beninati-208577202" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:beninatistefania@gmail.com" className="hover:text-secondary">Email</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
