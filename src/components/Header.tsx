// src/components/Header.tsx
"use client"; // Aggiungo "use client" per assicurarmi che il componente sia lato client

import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-primary text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-serif">Stefania Beninati</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-secondary">Home</Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-secondary">Progetti</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-secondary">Contatti</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
