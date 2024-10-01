"use client";

import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-6 bg-[#141c3a] text-center text-white">
      <p className="text-lg">Connettiti con me</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="https://www.linkedin.com/in/stefania-beninati" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-8 h-8" />
        </a>
        <a href="https://github.com/aniaBeninati" target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-8 h-8" />
        </a>
      </div>
      {/* Aggiungi il link mailto per aprire Outlook o qualsiasi client di posta */}
      <p className="mt-4">
        📧 Email:{" "}
        <a href="mailto:beninatistefania@gmail.com?subject=Contatto dal portfolio" className="underline">
          beninatistefania@gmail.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
