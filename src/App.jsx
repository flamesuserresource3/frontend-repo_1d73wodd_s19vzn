import React from 'react';
import Hero from './components/Hero';
import Offer from './components/Offer';
import Results from './components/Results';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="bg-gradient-to-r from-[#FF0050] via-white to-[#00F2EA] bg-clip-text text-lg font-extrabold tracking-tight text-transparent">
            Haris Amjad
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/70 sm:flex">
            <a href="#offer" className="hover:text-white">Offer</a>
            <a href="#results" className="hover:text-white">Results</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <Offer />
        <Results />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-8 text-center text-sm text-white/60">
        <div className="mx-auto max-w-6xl px-6">
          <p>
            © {new Date().getFullYear()} Haris Amjad — Built with a TikTok-inspired gradient aesthetic.
          </p>
        </div>
      </footer>
    </div>
  );
}
