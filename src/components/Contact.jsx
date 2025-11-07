import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-slate-950 pb-24 pt-16 text-white">
      <div className="mx-auto max-w-3xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center font-display text-3xl font-semibold md:text-4xl"
        >
          Let’s build something great
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-3 max-w-xl text-center text-slate-300"
        >
          Whether you’re an educator, brand, or founder — I can help bring your AI content and products to life.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm text-slate-300">Name</label>
              <input
                className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-300">Email</label>
              <input
                type="email"
                className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-slate-300">Message</label>
            <textarea
              rows={5}
              className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
              placeholder="Tell me about your idea or project..."
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-5 py-3 font-medium text-slate-900 transition hover:bg-emerald-300"
          >
            <Send className="h-4 w-4" /> Send message
          </button>

          <p className="mt-3 flex items-center justify-center gap-2 text-center text-sm text-slate-400">
            <Mail className="h-4 w-4" /> Prefer email? hello@toni.dev
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
