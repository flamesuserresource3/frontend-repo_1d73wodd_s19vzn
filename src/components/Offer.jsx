import React from 'react';
import { AlertTriangle, XCircle } from 'lucide-react';

export default function Offer() {
  return (
    <section id="offer" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="bg-gradient-to-r from-[#FF0050] to-[#00F2EA] bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
          WHY YOUR SHOP ISN’T MAKING MONEY
        </h2>

        <p className="mt-4 max-w-3xl text-white/80">
          Let’s not sugarcoat it. Your TikTok Shop isn’t struggling because of the algorithm — it’s struggling because your execution is weak.
        </p>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <div className="mb-4 flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-[#FF0050]" />
            <h3 className="text-lg font-semibold">Here’s the real problem:</h3>
          </div>
          <ul className="space-y-3 text-white/80">
            <li className="flex items-start gap-2"><XCircle className="mt-0.5 h-4 w-4 text-[#FF0050]" /> Bad setup → wrong categories, weak SEO, zero trust</li>
            <li className="flex items-start gap-2"><XCircle className="mt-0.5 h-4 w-4 text-[#FF0050]" /> Weak creatives → no hook, no retention, no sales</li>
            <li className="flex items-start gap-2"><XCircle className="mt-0.5 h-4 w-4 text-[#FF0050]" /> No affiliates → no creator push, no organic conversions</li>
            <li className="flex items-start gap-2"><XCircle className="mt-0.5 h-4 w-4 text-[#FF0050]" /> Random boosting → burning money with zero data</li>
            <li className="flex items-start gap-2"><XCircle className="mt-0.5 h-4 w-4 text-[#FF0050]" /> Backend chaos → late responses, penalties, messy operations</li>
          </ul>
        </div>

        <p className="mt-6 text-white/90">
          You don’t have a product problem.<br className="hidden sm:block" /> You have a system problem.
        </p>
      </div>
    </section>
  );
}
