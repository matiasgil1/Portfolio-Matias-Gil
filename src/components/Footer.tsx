import React from 'react';
import { Github, Linkedin, Terminal, MessageCircle, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = 2026; // Static copyright year matching prompt specification (2026)

  return (
    <footer className="relative bg-slate-950 border-t border-slate-900 py-12 px-6 overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-cyan-500/20 via-purple-500/10 to-transparent" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        {/* Name and Tag */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-display font-bold text-lg text-white uppercase tracking-wider">
              Matias Gil
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest">
              Dev
            </span>
          </div>
          <p className="text-xs text-slate-500 font-mono">
            Soluciones inteligentes y Full-Stack performance
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {/* GitHub link */}
          <a
            href="https://github.com/matiasgil1?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-slate-900 border border-slate-900 hover:border-cyan-500/30 text-slate-400 hover:text-cyan-400 transition-all duration-300"
            aria-label="GitHub Profile"
            id="footer-github-link"
          >
            <Github size={18} />
          </a>

          {/* LinkedIn link */}
          <a
            href="https://www.linkedin.com/in/matiasgil222/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-slate-900 border border-slate-900 hover:border-cyan-500/30 text-slate-400 hover:text-cyan-400 transition-all duration-300"
            aria-label="LinkedIn Profile"
            id="footer-linkedin-link"
          >
            <Linkedin size={18} />
          </a>

          {/* WhatsApp link */}
          <a
            href="https://wa.me/5493815026519"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-slate-900 border border-slate-900 hover:border-cyan-500/30 text-slate-400 hover:text-cyan-400 transition-all duration-300"
            aria-label="WhatsApp Contact"
            id="footer-whatsapp-link"
          >
            <MessageCircle size={18} />
          </a>
        </div>

        {/* Copyright Text */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right gap-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest font-mono">Available for Projects</span>
          </div>
          <p className="text-xs text-slate-500 font-mono">
            Matias Gil © {currentYear}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
