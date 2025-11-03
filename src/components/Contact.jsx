import React from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="bg-gradient-to-r from-[#FF0050] to-[#00F2EA] bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
          Let’s Build Your TikTok Shop Engine
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <a
            href="mailto:hello@harisamjad.co"
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-[#00F2EA]" />
              <h3 className="text-lg font-semibold">Email</h3>
            </div>
            <p className="mt-2 text-white/70">hello@harisamjad.co</p>
          </a>

          <a
            href="tel:+1234567890"
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-[#FF0050]" />
              <h3 className="text-lg font-semibold">Phone</h3>
            </div>
            <p className="mt-2 text-white/70">+1 (234) 567-890</p>
          </a>

          <a
            href="https://t.me/harisamjad"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
              <MessageSquare className="h-5 w-5 text-[#00F2EA]" />
              <h3 className="text-lg font-semibold">Telegram</h3>
            </div>
            <p className="mt-2 text-white/70">@harisamjad</p>
          </a>
        </div>
      </div>
    </section>
  );
}
