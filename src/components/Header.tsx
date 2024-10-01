"use client";

import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex items-center justify-between py-4 px-8 bg-[#141c3a] text-white">
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <Image
          src="/Sogoportfolio.png" // Assicurati che il percorso del logo sia corretto
          alt="Logo Portfolio"
          width={80}
          height={80}
          className="logo"
        />
        {/* Scritta accanto al logo */}
        <div>
          <h1 className="text-3xl font-bold">Front-End Developer</h1>
          <p className="text-sm text-gray-300">Appassionata di UX e design</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
