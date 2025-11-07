import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white backdrop-blur"
        >
          <a href="#" className="font-display text-lg font-semibold tracking-tight">
            Toni <span className="text-emerald-300">Aditya</span>
          </a>

          <div className="hidden items-center gap-6 sm:flex">
            <a href="#about" className="text-sm text-slate-300 hover:text-white">About</a>
            <a href="#projects" className="text-sm text-slate-300 hover:text-white">Projects</a>
            <a href="#contact" className="text-sm text-slate-300 hover:text-white">Contact</a>
          </div>

          <a
            href="#contact"
            className="hidden rounded-lg bg-emerald-400 px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-emerald-300 sm:block"
          >
            Let’s talk
          </a>
        </motion.nav>
      </div>
    </header>
  );
};

export default Navbar;
