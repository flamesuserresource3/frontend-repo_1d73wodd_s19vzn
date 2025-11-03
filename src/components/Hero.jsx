import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Play, ShoppingBag, Sparkles } from 'lucide-react';

const FloatingBadge = ({ children }) => (
  <motion.span
    initial={{ y: 0, opacity: 0.95 }}
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm tracking-wide text-white/90 backdrop-blur-sm"
  >
    <Sparkles className="h-4 w-4 text-[#00F2EA]" /> {children}
  </motion.span>
);

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/igThmltzmqv5hkWo/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay - non-blocking */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-28 text-center">
        <FloatingBadge>TikTok Shop Growth Specialist</FloatingBadge>

        <h1 className="mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl drop-shadow-[0_6px_28px_rgba(0,0,0,0.6)]">
          <span className="bg-gradient-to-r from-[#FF0050] via-white to-[#00F2EA] bg-clip-text text-transparent">I’m Haris.</span>
        </h1>

        <p className="mt-6 max-w-4xl text-balance text-white/95 text-xl sm:text-2xl md:text-3xl leading-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
          The guy brands call when their TikTok Shop stops selling — or never started.
        </p>

        <div className="mt-6 space-y-1.5 text-white/85 text-base sm:text-lg md:text-xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
          <p>Not a “TikTok manager.”</p>
          <p>Not a “VA.”</p>
          <p>Not another freelancer who posts random videos.</p>
        </div>

        <p className="mt-8 max-w-4xl text-pretty text-white/95 text-lg sm:text-xl md:text-2xl leading-relaxed drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
          I fix broken TikTok Shops — and make them profitable.
          <br className="hidden sm:block" />
          Fast, aggressively, and with systems that don’t fail.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF0050] to-[#00F2EA] px-6 py-3.5 text-sm sm:text-base font-semibold text-black shadow-xl shadow-[#FF0050]/20"
          >
            <Play className="h-5 w-5" /> DM Me Now
          </a>
          <a
            href="#offer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3.5 text-sm sm:text-base font-semibold text-white/95 hover:bg-white/15"
          >
            <ShoppingBag className="h-5 w-5" /> Why You’re Not Selling
          </a>
        </div>
      </div>
    </section>
  );
}
