import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FolderGit2, Cpu, Grid, Sparkles, Server } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  const [filter, setFilter] = useState<'all' | 'ai' | 'enterprise' | 'ecosystem'>('all');

  const categories = [
    { id: 'all', label: 'Todos los Proyectos', icon: Grid },
    { id: 'ai', label: 'IA & Automatización', icon: Sparkles },
    { id: 'enterprise', label: 'Enterprise / RBAC', icon: Server },
    { id: 'ecosystem', label: 'Ecosistemas / Hubs', icon: Cpu },
  ] as const;

  const filteredProjects = projectsData.filter(
    (project) => filter === 'all' || project.category === filter
  );

  return (
    <section id="proyectos" className="relative py-24 px-6 md:px-12 bg-slate-950 overflow-hidden">
      {/* Visual cyber design details */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4 tracking-widest uppercase"
            id="projects-section-tag"
          >
            <FolderGit2 size={12} />
            <span>Portafolio Técnico</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase"
            id="projects-section-title"
          >
            Proyectos de Impacto Real
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-slate-400 font-light mt-4"
            id="projects-section-desc"
          >
            Sistemas robustos de producción construidos con el stack web moderno. Automatización inteligente, control de accesos estricto y optimizaciones de latencia near-zero.
          </motion.p>
        </div>

        {/* Filters bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12 bg-slate-900/40 p-2 rounded-2xl border border-slate-900/60 max-w-2xl mx-auto backdrop-blur-sm"
          id="projects-filter-bar"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = filter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-medium uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(34,211,238,0.25)]'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/80'
                }`}
                id={`filter-btn-${cat.id}`}
              >
                <Icon size={12} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Project cards container */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8" id="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </AnimatePresence>
        </div>

        {/* Architectural metrics banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-cyan-500/10 text-center relative overflow-hidden"
          id="projects-tech-standards"
        >
          <div className="absolute top-0 left-0 w-1/3 h-[1px] bg-gradient-to-r from-cyan-500/20 to-transparent" />
          <div className="absolute bottom-0 right-0 w-1/3 h-[1px] bg-gradient-to-l from-purple-500/20 to-transparent" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border-r border-slate-900/80 last:border-0">
              <div className="text-cyan-400 text-2xl font-mono font-bold mb-1">STABLE PROD</div>
              <p className="text-xs text-slate-400 font-mono">
                Sistemas desplegados y auditados con persistencia en la nube y optimización continua.
              </p>
            </div>
            <div className="p-4 border-r border-slate-900/80 last:border-0">
              <div className="text-purple-400 text-2xl font-mono font-bold mb-1">AI-READY</div>
              <p className="text-xs text-slate-400 font-mono">
                Modelos de lenguaje (LLM) integrados de forma nativa para el análisis inteligente de datos.
              </p>
            </div>
            <div className="p-4">
              <div className="text-emerald-400 text-2xl font-mono font-bold mb-1">99.9% SECURITY</div>
              <p className="text-xs text-slate-400 font-mono">
                Reglas estrictas de control de accesos basados en roles para total hermetismo de datos.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
