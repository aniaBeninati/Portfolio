// src/app/layout.tsx
import '../styles/globals.css';
import Header from '@components/Header';
import Footer from '@components/Footer';

export const metadata = {
  title: 'Stefania Beninati - Portfolio',
  description: 'Il portfolio personale di Stefania Beninati, Front-End Developer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className="bg-background text-foreground">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
