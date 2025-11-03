import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const issues = [
  'Bad setup → wrong categories, weak SEO, zero trust',
  'Weak creatives → no hook, no retention, no sales',
  'No affiliates → no creator push, no organic conversions',
  'Random boosting → burning money with zero data',
  'Backend chaos → late responses, penalties, messy operations',
];

const fixes = [
  'High-converting shop setup (SEO, listings, trust indicators)',
  'Scroll-stopping UGC + ad creatives',
  'Affiliate/creator recruitment & management system',
  'Performance tracking + data-based scaling',
  'Operational cleanup to remove penalties + increase trust',
];

export default function Offer() {
  return (
    <section id="offer" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold sm:text-4xl">WHY YOUR SHOP ISN’T MAKING MONEY</h2>
            <p className="mt-3 text-white/80">Let’s not sugarcoat it. Your TikTok Shop isn’t struggling because of the algorithm — it’s struggling because your execution is weak.</p>
            <p className="mt-4 font-medium text-white/90">Here’s the real problem:</p>
            <ul className="mt-6 space-y-3">
              {issues.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
                  <span className="mt-0.5 text-[#FF0050]">❌</span>
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-white/90">You don’t have a product problem. You have a system problem.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-3xl font-bold sm:text-4xl">WHAT I DO (THE FIX)</h3>
            <p className="mt-3 text-white/80">I rebuild your TikTok Shop from the inside out. Every touchpoint. Every bottleneck. Every conversion killer.</p>
            <ul className="mt-6 space-y-3">
              {fixes.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[#00F2EA]" />
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-white/90">I don’t guess. I engineer sales.</p>

            <blockquote className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6 text-white/90">
              <p className="text-lg">“Our shop was dead for weeks. Haris rebuilt everything — listings, creators, ads — and within 7 days we hit consistent daily orders. Zero bullshit.”</p>
              <footer className="mt-3 text-sm text-white/60">— UK Brand Owner</footer>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
