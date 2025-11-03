import React from 'react';
import { Trophy, Star, Rocket, BarChart3, ThumbsUp } from 'lucide-react';

export default function Results() {
  return (
    <section id="results" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="bg-gradient-to-r from-[#FF0050] to-[#00F2EA] bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
          Proven Results
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center gap-3">
              <Trophy className="h-5 w-5 text-[#FF0050]" />
              <h3 className="text-lg font-semibold">Shop Revenue</h3>
            </div>
            <p className="mt-3 text-white/70">Scaled multiple shops from 0 to consistent five figures/month in 60 days.</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center gap-3">
              <Rocket className="h-5 w-5 text-[#00F2EA]" />
              <h3 className="text-lg font-semibold">Creator Velocity</h3>
            </div>
            <p className="mt-3 text-white/70">Activated 100+ creators with >4% CTR and repeat commission wins.</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center gap-3">
              <BarChart3 className="h-5 w-5 text-[#FF0050]" />
              <h3 className="text-lg font-semibold">Offer Conversion</h3>
            </div>
            <p className="mt-3 text-white/70">Doubled PDP CVR with messaging + bundle optimization.</p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <div className="flex items-center gap-3">
            <Star className="h-5 w-5 text-[#00F2EA]" />
            <h3 className="text-lg font-semibold">Why Work With Me</h3>
          </div>
          <ul className="mt-3 grid grid-cols-1 gap-3 text-white/70 md:grid-cols-2">
            <li>• Clear dashboards, simple KPIs, ruthless prioritization</li>
            <li>• Fast creative cycles: brief, test, iterate, scale</li>
            <li>• Partners-first approach for long-term wins</li>
            <li>• I own the outcomes and communicate daily</li>
          </ul>
          <div className="mt-4 flex items-center gap-2 text-sm text-white/60">
            <ThumbsUp className="h-4 w-4" /> References available upon request
          </div>
        </div>
      </div>
    </section>
  );
}
