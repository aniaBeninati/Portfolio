// src/components/ContactForm.tsx
"use client"; // Aggiungo "use client" per assicurarmi che il componente sia lato client

import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
    // Aggiungi qui la logica per inviare i dati al server o un servizio esterno
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded-lg max-w-lg mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-2 p-2 border rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-2 p-2 border rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700">Messaggio</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="mt-2 p-2 border rounded w-full"
          rows={4}
          required
        />
      </div>
      <button type="submit" className="bg-primary text-white py-2 px-4 rounded">Invia</button>
    </form>
  );
};

export default ContactForm;
