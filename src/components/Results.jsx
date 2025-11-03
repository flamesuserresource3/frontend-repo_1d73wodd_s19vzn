import React from 'react';
import { CheckCircle2, Quote, Rocket, Settings, Gauge } from 'lucide-react';

export default function Results() {
  return (
    <section id="results" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* WHAT I DO (THE FIX) */}
        <h2 className="bg-gradient-to-r from-[#FF0050] to-[#00F2EA] bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl drop-shadow-[0_6px_28px_rgba(0,0,0,0.6)]">
          WHAT I DO (THE FIX)
        </h2>

        <p className="mt-5 max-w-4xl text-white/95 text-lg sm:text-xl md:text-2xl leading-relaxed">I rebuild your TikTok Shop from the inside out. Every touchpoint. Every bottleneck. Every conversion killer.</p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 sm:p-8">
            <ul className="space-y-4 text-white/90 text-base sm:text-lg">
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-[#00F2EA]" /> High-converting shop setup (SEO, listings, trust indicators)</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-[#00F2EA]" /> Scroll-stopping UGC + ad creatives</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-[#00F2EA]" /> Affiliate/creator recruitment & management system</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-[#00F2EA]" /> Performance tracking + data-based scaling</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-[#00F2EA]" /> Operational cleanup to remove penalties + increase trust</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <Quote className="h-7 w-7 text-[#FF0050]" />
              <p className="text-white/95 text-base sm:text-lg">“Our shop was dead for weeks. Haris rebuilt everything — listings, creators, ads — and within 7 days we hit consistent daily orders. Zero bullshit.”<br /> <span className="text-white/70">— UK Brand Owner</span></p>
            </div>
          </div>
        </div>

        {/* WHAT I’VE DONE */}
        <div className="mt-14">
          <h3 className="text-2xl font-semibold text-white">WHAT I’VE DONE</h3>
          <p className="mt-3 max-w-4xl text-white/85 text-base sm:text-lg">I’ve managed multiple TikTok Shops across different niches: Private label, general stores, local suppliers, UK-based operations.</p>
          <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6">
              <div className="mb-2 flex items-center gap-2 text-white/90 text-base sm:text-lg"><Rocket className="h-5 w-5 text-[#00F2EA]" /> Turned 0-order shops into daily sellers</div>
              <div className="mb-2 flex items-center gap-2 text-white/90 text-base sm:text-lg"><Settings className="h-5 w-5 text-[#FF0050]" /> Fixed broken listings that were killing conversions</div>
              <div className="mb-2 flex items-center gap-2 text-white/90 text-base sm:text-lg"><Gauge className="h-5 w-5 text-[#00F2EA]" /> Rebuilt affiliate systems for profitable organic traffic</div>
              <div className="mb-2 flex items-center gap-2 text-white/90 text-base sm:text-lg"><Rocket className="h-5 w-5 text-[#FF0050]" /> Scaled shops that other freelancers couldn’t handle</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6">
              <p className="text-white/90 text-base sm:text-lg">I don’t talk theory. I execute results.</p>
            </div>
          </div>
        </div>

        {/* WHY ME */}
        <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.06] p-6 sm:p-8">
          <h3 className="text-2xl font-semibold text-white">WHY ME</h3>
          <div className="mt-4 grid grid-cols-1 gap-3 text-white/90 text-base sm:text-lg md:grid-cols-2">
            <p>Because you’ve already tried “TikTok experts.” You’ve already wasted money on fancy videos and random ads.</p>
            <p>Now you need someone who actually knows what makes a TikTok Shop sell — daily.</p>
            <p>I don’t manage. I dominate.</p>
            <p>I don’t test. I scale.</p>
            <p>I don’t hope. I build systems.</p>
          </div>
          <p className="mt-5 text-white/95 text-lg sm:text-xl">📩 DM me — and I’ll turn your TikTok Shop into a sales engine.<br />Haris — TikTok Shop Growth Specialist</p>
          <p className="mt-2 text-white/80">⚡ “I fix what others mess up — and make it profitable.”</p>
        </div>
      </div>
    </section>
  );
}
