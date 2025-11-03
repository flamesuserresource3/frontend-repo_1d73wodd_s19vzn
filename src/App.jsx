import React from 'react';
import Hero from './components/Hero';
import Offer from './components/Offer';
import Results from './components/Results';
import Contact from './components/Contact';
import { Play, ShoppingBag, Sparkles, Share2, Camera } from 'lucide-react';
import { motion } from 'framer-motion';

function FloatingIcons() {
  const icons = [
    { Comp: Play, color: '#FF0050', size: 22, top: '10%', left: '8%', delay: 0 },
    { Comp: ShoppingBag, color: '#00F2EA', size: 26, top: '25%', left: '85%', delay: 0.4 },
    { Comp: Sparkles, color: '#ffffff', size: 18, top: '60%', left: '12%', delay: 0.2 },
    { Comp: Share2, color: '#FF0050', size: 20, top: '72%', left: '70%', delay: 0.1 },
    { Comp: Camera, color: '#00F2EA', size: 24, top: '35%', left: '45%', delay: 0.3 },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 z-40">
      {icons.map(({ Comp, color, size, top, left, delay }, i) => (
        <motion.div
          key={i}
          className="absolute opacity-60"
          style={{ top, left }}
          initial={{ y: 0, rotate: 0, opacity: 0.5 }}
          animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: 'easeInOut', delay }}
        >
          <Comp size={size} color={color} />
        </motion.div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white antialiased">
      {/* Floating icons overlay across the website */}
      <FloatingIcons />

      {/* Top nav (minimal) */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-[#FF0050]" />
            <span className="inline-block h-3 w-3 rounded-full bg-white" />
            <span className="inline-block h-3 w-3 rounded-full bg-[#00F2EA]" />
          </div>
          <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
            <a href="#offer" className="hover:text-white">The Fix</a>
            <a href="#results" className="hover:text-white">Results</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20">Work With Me</a>
        </div>
      </header>

      <main>
        <Hero />
        <Offer />
        <section id="results"><Results /></section>
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-black/80 py-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Haris — TikTok Shop Growth Specialist
      </footer>
    </div>
  );
}

export default App;
