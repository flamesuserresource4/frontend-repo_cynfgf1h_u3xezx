import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Course Builder AI',
    subtitle: 'Generate, structure, and publish curricula with AI assistance',
    stack: ['Next.js', 'FastAPI', 'OpenAI', 'Stripe'],
    link: '#',
    repo: '#',
    gradient: 'from-emerald-400/15 to-cyan-400/10',
  },
  {
    title: 'Interactive Notebook',
    subtitle: 'A web notebook for teaching ML through visual, playful demos',
    stack: ['React', 'Vite', 'Pyodide', 'D3'],
    link: '#',
    repo: '#',
    gradient: 'from-blue-400/15 to-indigo-400/10',
  },
  {
    title: 'Creators Toolkit',
    subtitle: 'Templates, prompts, and utilities for content creators',
    stack: ['Remix', 'Cloudflare', 'Postgres'],
    link: '#',
    repo: '#',
    gradient: 'from-fuchsia-400/15 to-rose-400/10',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center font-display text-3xl font-semibold md:text-4xl"
        >
          Featured Projects
        </motion.h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b ${p.gradient} p-6`}
            >
              <div className="min-h-[170px]">
                <h3 className="font-semibold text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-300">{p.subtitle}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((s, i) => (
                    <span key={i} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-200">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex items-center gap-4">
                <a href={p.link} className="inline-flex items-center gap-1 text-sm text-emerald-300 hover:text-emerald-200">
                  <ExternalLink className="h-4 w-4" /> Live
                </a>
                <a href={p.repo} className="inline-flex items-center gap-1 text-sm text-slate-300 hover:text-white">
                  <Github className="h-4 w-4" /> Code
                </a>
              </div>

              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl transition-opacity group-hover:opacity-70" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
