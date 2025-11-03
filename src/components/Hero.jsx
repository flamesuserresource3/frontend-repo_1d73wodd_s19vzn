import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for contrast (does not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-start justify-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="mb-3 inline-block bg-gradient-to-r from-[#FF0050] to-[#00F2EA] bg-clip-text text-sm font-semibold uppercase tracking-widest text-transparent">
            TikTok Shop Growth Specialist
          </p>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">
            I’m <span className="text-[#00F2EA]">Haris</span>.
          </h1>
          <p className="mt-4 text-xl text-white/90 sm:text-2xl">
            The guy brands call when their TikTok Shop stops selling — or never started.
          </p>
          <div className="mt-8 space-y-3 text-white/85">
            <p>Not a “TikTok manager.”</p>
            <p>Not a “VA.”</p>
            <p>Not another freelancer who posts random videos.</p>
          </div>
          <p className="mt-6 max-w-2xl text-lg text-white/90">
            I fix broken TikTok Shops — and make them profitable. Fast, aggressively, and with systems that don’t fail.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#FF0050] px-6 py-3 font-semibold text-white shadow-lg shadow-[#FF0050]/30 transition hover:scale-[1.02] hover:bg-[#ff2a6e]"
            >
              Work With Me
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a
              href="#offer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              See How I Fix Shops
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
