import React from 'react';
import { AlertTriangle, LineChart, Users, Sparkles } from 'lucide-react';

export default function Offer() {
  return (
    <section id="offer" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="bg-gradient-to-r from-[#FF0050] to-[#00F2EA] bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
          Why Your TikTok Shop Isn’t Printing Money (Yet)
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="mb-4 flex items-center gap-3">
              <AlertTriangle className="h-5 w-5 text-[#FF0050]" />
              <h3 className="text-lg font-semibold">What’s Holding You Back</h3>
            </div>
            <ul className="space-y-3 text-white/70">
              <li>• Disconnected catalog with weak discovery signals</li>
              <li>• Creators not converting into real revenue</li>
              <li>• Improper attribution and offer structure</li>
              <li>• Slow creative testing and iteration cycles</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="mb-4 flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-[#00F2EA]" />
              <h3 className="text-lg font-semibold">What I Do About It</h3>
            </div>
            <ul className="space-y-3 text-white/70">
              <li>• Rebuild your catalog architecture for discovery</li>
              <li>• Recruit and manage high-converting creators</li>
              <li>• Craft irresistible offers and viral hooks</li>
              <li>• Scale winners fast with rapid feedback loops</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <LineChart className="h-5 w-5 text-[#00F2EA]" />
            <p className="mt-3 text-sm text-white/70">Data-led playbooks tailored to your vertical and AOV.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <Users className="h-5 w-5 text-[#FF0050]" />
            <p className="mt-3 text-sm text-white/70">Creator network with proven performance history.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <Sparkles className="h-5 w-5 text-[#00F2EA]" />
            <p className="mt-3 text-sm text-white/70">Conversion-first creatives that sell while they entertain.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
