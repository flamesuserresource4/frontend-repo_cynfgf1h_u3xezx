import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, GraduationCap, Code2 } from 'lucide-react';

const items = [
  {
    icon: BrainCircuit,
    title: 'AI Storytelling',
    desc: 'I design interactive lessons and content that make complex AI topics feel approachable and fun.',
  },
  {
    icon: GraduationCap,
    title: 'Educator',
    desc: 'I’ve taught thousands through workshops, courses, and content — blending visuals, analogies, and hands‑on practice.',
  },
  {
    icon: Code2,
    title: 'Full‑Stack Dev',
    desc: 'I build modern web apps with delightful UX — from prototypes to production‑ready products.',
  },
];

const About = () => {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center font-display text-3xl font-semibold md:text-4xl"
        >
          What I Do
        </motion.h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6 backdrop-blur hover:border-white/20"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
