import { Mail, Phone, Linkedin, Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-8"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">Let’s Build Your Sales Engine</h2>
          <p className="mt-3 max-w-2xl text-white/80">
            DM me — and I’ll turn your TikTok Shop into a sales engine.
            Haris — TikTok Shop Growth Specialist
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <a href="tel:+923070791011" className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
              <Phone className="h-5 w-5 text-[#00F2EA]" />
              <span className="font-medium">+923070791011</span>
            </a>
            <a href="mailto:harris.amjadd@gmail.com" className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
              <Mail className="h-5 w-5 text-[#00F2EA]" />
              <span className="font-medium">harris.amjadd@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/haris-amjad-377b5435b" target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
              <Linkedin className="h-5 w-5 text-[#00F2EA]" />
              <span className="font-medium">LinkedIn Profile</span>
            </a>
            <a href="https://www.instagram.com/iam.harizz" target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
              <Instagram className="h-5 w-5 text-[#00F2EA]" />
              <span className="font-medium">Instagram</span>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
              <Facebook className="h-5 w-5 text-[#00F2EA]" />
              <span className="font-medium">Facebook</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
