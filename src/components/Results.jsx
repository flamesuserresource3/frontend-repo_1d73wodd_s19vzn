import { Rocket, TrendingUp, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const bullets = [
  {
    icon: Rocket,
    title: 'Turned 0-order shops into daily sellers',
    desc: 'Engineered end-to-end fixes to unblock conversions and kickstart daily sales.',
  },
  {
    icon: Star,
    title: 'Fixed broken listings that killed conversions',
    desc: 'Rebuilt SEO, creative, and trust stack to raise CVR across categories.',
  },
  {
    icon: TrendingUp,
    title: 'Scaled shops others couldn’t handle',
    desc: 'Systems for affiliates, ads, ops, and data — built to scale reliably.',
  },
];

export default function Results() {
  return (
    <section className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 md:grid-cols-2"
        >
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">WHAT I’VE DONE</h2>
            <p className="mt-3 max-w-2xl text-white/80">
              I’ve managed multiple TikTok Shops across different niches: Private label, general stores, local suppliers, UK-based operations. I don’t talk theory. I execute results.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {bullets.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <Icon className="h-6 w-6 text-[#00F2EA]" />
                  <h3 className="mt-3 font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-white/70">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#FF0050]/10 via-transparent to-[#00F2EA]/10 p-6">
            <h3 className="text-3xl font-bold">WHY ME</h3>
            <ul className="mt-5 space-y-3 text-white/90">
              <li>Because you’ve already tried “TikTok experts.” You’ve already wasted money on fancy videos and random ads.</li>
              <li>Now you need someone who actually knows what makes a TikTok Shop sell — daily.</li>
              <li>I don’t manage. I dominate. I don’t test. I scale. I don’t hope. I build systems.</li>
            </ul>
            <p className="mt-6 text-lg text-white/95">⚡ “I fix what others mess up — and make it profitable.”</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
