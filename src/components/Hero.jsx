import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Play, ShoppingBag, Sparkles, Share2, Camera } from 'lucide-react';

const FloatingIcon = ({ Icon, delay = 0, className = '' }) => (
  <motion.div
    initial={{ y: 0, opacity: 0.9 }}
    animate={{ y: [0, -12, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay }}
    className={`p-2 rounded-xl/2 bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg ${className}`}
  >
    <Icon className="w-4 h-4 text-white/80" />
  </motion.div>
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
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-28 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-wide text-white/80">
          <Sparkles className="h-3.5 w-3.5 text-[#00F2EA]" /> TikTok Shop Growth Specialist
        </span>

        <h1 className="mt-6 bg-gradient-to-r from-[#FF0050] via-white to-[#00F2EA] bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl">
          Haris Amjad
        </h1>

        <p className="mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
          I help ambitious brands turn attention into revenue on TikTok Shop with data-driven strategies,
          creator partnerships, and high-velocity catalog optimization.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF0050] to-[#00F2EA] px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-[#FF0050]/20">
            <Play className="h-4 w-4" /> Book a Call
          </a>
          <a
            href="#results"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
            <ShoppingBag className="h-4 w-4" /> See Results
          </a>
        </div>
      </div>

      {/* Floating Icons Overlay - non-blocking */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-6 top-24 hidden flex-col gap-3 sm:flex">
          <FloatingIcon Icon={Sparkles} delay={0.2} />
          <FloatingIcon Icon={Share2} delay={0.6} />
        </div>
        <div className="absolute right-6 top-40 hidden flex-col gap-3 md:flex">
          <FloatingIcon Icon={Camera} delay={0.4} />
          <FloatingIcon Icon={ShoppingBag} delay={0.9} />
        </div>
      </div>
    </section>
  );
}
