import React from 'react';
import { AlertTriangle, XCircle } from 'lucide-react';

export default function Offer() {
  return (
    <section id="offer" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="bg-gradient-to-r from-[#FF0050] to-[#00F2EA] bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl drop-shadow-[0_6px_28px_rgba(0,0,0,0.6)]">
          WHY YOUR SHOP ISN’T MAKING MONEY
        </h2>

        <p className="mt-5 max-w-4xl text-white/95 text-lg sm:text-xl md:text-2xl leading-relaxed">
          Let’s not sugarcoat it. Your TikTok Shop isn’t struggling because of the algorithm — it’s struggling because your execution is weak.
        </p>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.06] p-6 sm:p-8">
          <div className="mb-5 flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-[#FF0050]" />
            <h3 className="text-2xl font-semibold">Here’s the real problem:</h3>
          </div>
          <ul className="space-y-4 text-white/90 text-base sm:text-lg">
            <li className="flex items-start gap-2"><XCircle className="mt-0.5 h-5 w-5 text-[#FF0050]" /> Bad setup → wrong categories, weak SEO, zero trust</li>
            <li className="flex items-start gap-2"><XCircle className="mt-0.5 h-5 w-5 text-[#FF0050]" /> Weak creatives → no hook, no retention, no sales</li>
            <li className="flex items-start gap-2"><XCircle className="mt-0.5 h-5 w-5 text-[#FF0050]" /> No affiliates → no creator push, no organic conversions</li>
            <li className="flex items-start gap-2"><XCircle className="mt-0.5 h-5 w-5 text-[#FF0050]" /> Random boosting → burning money with zero data</li>
            <li className="flex items-start gap-2"><XCircle className="mt-0.5 h-5 w-5 text-[#FF0050]" /> Backend chaos → late responses, penalties, messy operations</li>
          </ul>
        </div>

        <p className="mt-8 text-white/95 text-xl sm:text-2xl">
          You don’t have a product problem.<br className="hidden sm:block" /> You have a system problem.
        </p>
      </div>
    </section>
  );
}
