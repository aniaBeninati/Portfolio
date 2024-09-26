// src/app/contact/page.tsx
import ContactForm from '@components/ContactForm';

export default function ContactPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Contattami</h1>
      <ContactForm />
    </div>
  );
}
