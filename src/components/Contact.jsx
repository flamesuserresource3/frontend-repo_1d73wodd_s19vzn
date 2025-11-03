import React from 'react';
import { Mail, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="bg-gradient-to-r from-[#FF0050] to-[#00F2EA] bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
          My contact information
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <a
            href="tel:+923070791011"
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-[#FF0050]" />
              <h3 className="text-lg font-semibold">Contact number</h3>
            </div>
            <p className="mt-2 text-white/80">+923070791011</p>
          </a>

          <a
            href="mailto:harris.amjadd@gmail.com"
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-[#00F2EA]" />
              <h3 className="text-lg font-semibold">Email</h3>
            </div>
            <p className="mt-2 text-white/80">harris.amjadd@gmail.com</p>
          </a>

          <a
            href="https://www.facebook.com/share/1Z2Gn4eD2L/"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
              <Facebook className="h-5 w-5 text-[#00F2EA]" />
              <h3 className="text-lg font-semibold">Facebook</h3>
            </div>
            <p className="mt-2 text-white/80 break-all">facebook.com/share/1Z2Gn4eD2L/</p>
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <a
            href="https://www.instagram.com/iam.harizz?igsh=bm5sdXR2ZmkyOTI="
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
              <Instagram className="h-5 w-5 text-[#FF0050]" />
              <h3 className="text-lg font-semibold">Instagram</h3>
            </div>
            <p className="mt-2 text-white/80 break-all">instagram.com/iam.harizz</p>
          </a>

          <a
            href="https://www.linkedin.com/in/haris-amjad-377b5435b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
              <Linkedin className="h-5 w-5 text-[#00F2EA]" />
              <h3 className="text-lg font-semibold">LinkedIn</h3>
            </div>
            <p className="mt-2 text-white/80 break-all">linkedin.com/in/haris-amjad-377b5435b</p>
          </a>
        </div>
      </div>
    </section>
  );
}
