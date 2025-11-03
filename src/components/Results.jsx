import React from 'react';
import { CheckCircle2, Quote, Rocket, Settings, Gauge } from 'lucide-react';

export default function Results() {
  return (
    <section id="results" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* WHAT I DO (THE FIX) */}
        <h2 className="bg-gradient-to-r from-[#FF0050] to-[#00F2EA] bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
          WHAT I DO (THE FIX)
        </h2>

        <p className="mt-4 max-w-3xl text-white/80">I rebuild your TikTok Shop from the inside out. Every touchpoint. Every bottleneck. Every conversion killer.</p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-[#00F2EA]" /> High-converting shop setup (SEO, listings, trust indicators)</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-[#00F2EA]" /> Scroll-stopping UGC + ad creatives</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-[#00F2EA]" /> Affiliate/creator recruitment & management system</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-[#00F2EA]" /> Performance tracking + data-based scaling</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-[#00F2EA]" /> Operational cleanup to remove penalties + increase trust</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-start gap-3">
              <Quote className="h-6 w-6 text-[#FF0050]" />
              <p className="text-white/90 text-sm sm:text-base">“Our shop was dead for weeks. Haris rebuilt everything — listings, creators, ads — and within 7 days we hit consistent daily orders. Zero bullshit.”<br /> <span className="text-white/60">— UK Brand Owner</span></p>
            </div>
          </div>
        </div>

        {/* WHAT I’VE DONE */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-white">WHAT I’VE DONE</h3>
          <p className="mt-2 max-w-3xl text-white/70">I’ve managed multiple TikTok Shops across different niches: Private label, general stores, local suppliers, UK-based operations.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="mb-2 flex items-center gap-2 text-white/80"><Rocket className="h-4 w-4 text-[#00F2EA]" /> Turned 0-order shops into daily sellers</div>
              <div className="mb-2 flex items-center gap-2 text-white/80"><Settings className="h-4 w-4 text-[#FF0050]" /> Fixed broken listings that were killing conversions</div>
              <div className="mb-2 flex items-center gap-2 text-white/80"><Gauge className="h-4 w-4 text-[#00F2EA]" /> Rebuilt affiliate systems for profitable organic traffic</div>
              <div className="mb-2 flex items-center gap-2 text-white/80"><Rocket className="h-4 w-4 text-[#FF0050]" /> Scaled shops that other freelancers couldn’t handle</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-white/80">I don’t talk theory. I execute results.</p>
            </div>
          </div>
        </div>

        {/* WHY ME */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h3 className="text-xl font-semibold text-white">WHY ME</h3>
          <div className="mt-3 grid grid-cols-1 gap-2 text-white/80 md:grid-cols-2">
            <p>Because you’ve already tried “TikTok experts.” You’ve already wasted money on fancy videos and random ads.</p>
            <p>Now you need someone who actually knows what makes a TikTok Shop sell — daily.</p>
            <p>I don’t manage. I dominate.</p>
            <p>I don’t test. I scale.</p>
            <p>I don’t hope. I build systems.</p>
          </div>
          <p className="mt-4 text-white/90">📩 DM me — and I’ll turn your TikTok Shop into a sales engine.<br />Haris — TikTok Shop Growth Specialist</p>
          <p className="mt-2 text-white/70">⚡ “I fix what others mess up — and make it profitable.”</p>
        </div>
      </div>
    </section>
  );
}
