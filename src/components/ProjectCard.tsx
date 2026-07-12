import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Layers, ShieldCheck, Database, FileSpreadsheet, Server, ChevronDown, ChevronUp, Radio } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
  key?: string;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isEcosystemExpanded, setIsEcosystemExpanded] = useState(true);

  // Animation variants
  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 15,
        delay: index * 0.15,
      },
    },
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'ai':
        return 'from-cyan-500/10 to-blue-500/5 border-cyan-500/20 text-cyan-400';
      case 'enterprise':
        return 'from-purple-500/10 to-indigo-500/5 border-purple-500/20 text-purple-400';
      case 'ecosystem':
        return 'from-emerald-500/10 to-teal-500/5 border-emerald-500/20 text-emerald-400';
      default:
        return 'from-slate-800/50 to-slate-900/50 border-slate-800 text-slate-400';
    }
  };

  const getBorderLeftColor = (category: string) => {
    switch (category) {
      case 'ai':
        return 'border-l-4 border-l-cyan-500';
      case 'enterprise':
        return 'border-l-4 border-l-indigo-500';
      case 'ecosystem':
        return 'border-l-4 border-l-slate-400';
      default:
        return 'border-l-4 border-l-slate-700';
    }
  };

  const getGlowColor = (category: string) => {
    switch (category) {
      case 'ai':
        return 'group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:border-cyan-500/30';
      case 'enterprise':
        return 'group-hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:border-indigo-500/30';
      case 'ecosystem':
        return 'group-hover:shadow-[0_0_30px_rgba(148,163,184,0.15)] hover:border-slate-400/30';
      default:
        return 'group-hover:shadow-lg border-slate-800';
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{ y: -8, scale: 1.01 }}
      className={`group relative flex flex-col rounded-2xl p-6 md:p-8 transition-all duration-300 card-glass overflow-hidden ${getBorderLeftColor(
        project.category
      )} ${getGlowColor(project.category)}`}
      id={`project-card-${project.id}`}
    >
      {/* Visual cyber lines on cards */}
      <div className="absolute top-0 right-0 w-24 h-[1px] bg-gradient-to-l from-cyan-500/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-24 h-[1px] bg-gradient-to-r from-purple-500/40 to-transparent" />

      {/* Header Info */}
      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
        <div>
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">
            {project.subtitle}
          </span>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight group-hover:text-cyan-200 transition-colors duration-300">
            {project.title}
          </h3>
        </div>

        {/* Category Badge */}
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono border font-medium uppercase tracking-wider ${getCategoryColor(
            project.category
          )}`}
          id={`category-badge-${project.id}`}
        >
          <Radio size={12} className="animate-pulse" />
          {project.category === 'ai' ? 'AI Full-Stack' : project.category === 'enterprise' ? 'Enterprise' : 'Ecosistema'}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed mb-6">
        {project.description}
      </p>

      {/* Technology Segmentation Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 pt-6 border-t border-slate-900">
        {/* Frontend Layer */}
        {project.technologies.frontend.length > 0 && (
          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-900/60">
            <h4 className="text-xs font-mono text-cyan-400 flex items-center gap-1.5 mb-2 uppercase tracking-wider font-semibold">
              <Layers size={13} /> Frontend & UX
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.frontend.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded bg-slate-900 text-[11px] font-mono text-slate-300 border border-slate-800/80 hover:border-cyan-500/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Backend Layer */}
        {project.technologies.backend.length > 0 && (
          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-900/60">
            <h4 className="text-xs font-mono text-purple-400 flex items-center gap-1.5 mb-2 uppercase tracking-wider font-semibold">
              <Server size={13} /> Backend & AI Engine
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.backend.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded bg-slate-900 text-[11px] font-mono text-slate-300 border border-slate-800/80 hover:border-purple-500/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Integrations & Security */}
        {project.technologies.integrations.length > 0 && (
          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-900/60">
            <h4 className="text-xs font-mono text-amber-400 flex items-center gap-1.5 mb-2 uppercase tracking-wider font-semibold">
              <Database size={13} /> DB e Integraciones
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.integrations.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded bg-slate-900 text-[11px] font-mono text-slate-300 border border-slate-800/80 hover:border-amber-500/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Reports or Extra Tech */}
        {project.technologies.reports && project.technologies.reports.length > 0 && (
          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-900/60">
            <h4 className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 mb-2 uppercase tracking-wider font-semibold">
              <FileSpreadsheet size={13} /> Reportes & Exportación
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.reports.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded bg-slate-900 text-[11px] font-mono text-slate-300 border border-slate-800/80 hover:border-emerald-500/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ECOSYSTEM SECTION FOR PROJECT 3 */}
      {project.ecosystem && project.ecosystem.length > 0 && (
        <div className="mt-2 mb-6 border border-emerald-500/20 rounded-xl bg-slate-950/40 p-4 md:p-6" id="ecosystem-container">
          <button
            onClick={() => setIsEcosystemExpanded(!isEcosystemExpanded)}
            className="flex items-center justify-between w-full text-slate-300 hover:text-emerald-300 font-display font-medium text-sm md:text-base uppercase tracking-wider border-b border-slate-900 pb-2 mb-4 cursor-pointer"
            id="btn-ecosystem-toggle"
          >
            <span className="flex items-center gap-2 text-emerald-400 font-mono text-xs">
              <ShieldCheck size={14} className="animate-bounce" />
              Ecosistema Digital Integrado
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-mono">
                {isEcosystemExpanded ? 'Ocultar' : 'Mostrar'} ({project.ecosystem.length})
              </span>
              {isEcosystemExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
          </button>

          {isEcosystemExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3"
              id="ecosystem-grid"
            >
              {project.ecosystem.map((subItem) => (
                <a
                  key={subItem.name}
                  href={subItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/item flex flex-col p-3 rounded-lg bg-slate-900/40 border border-slate-900 hover:border-emerald-500/30 hover:bg-slate-900/90 transition-all duration-300 cursor-pointer"
                  id={`ecosystem-link-${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-mono font-medium text-slate-100 group-hover/item:text-emerald-300 transition-colors">
                      {subItem.name}
                    </span>
                    <ExternalLink size={11} className="text-slate-600 group-hover/item:text-emerald-400 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all" />
                  </div>
                  <p className="text-[11px] text-slate-500 group-hover/item:text-slate-400 transition-colors leading-relaxed">
                    {subItem.description}
                  </p>
                </a>
              ))}
            </motion.div>
          )}
        </div>
      )}

      {/* Launch CTA */}
      <div className="mt-auto pt-4 flex items-center justify-between">
        <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping" />
          Producción Estable
        </span>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium tracking-wide transition-all duration-300 border backdrop-blur-md cursor-pointer ${
            project.category === 'ai'
              ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500 hover:text-slate-950 hover:shadow-[0_0_15px_rgba(34,211,238,0.25)]'
              : project.category === 'enterprise'
              ? 'bg-purple-500/10 text-purple-300 border-purple-500/30 hover:bg-purple-500 hover:text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.25)]'
              : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500 hover:text-slate-950 hover:shadow-[0_0_15px_rgba(16,185,129,0.25)]'
          }`}
          id={`launch-link-${project.id}`}
        >
          <span>Acceder a la App</span>
          <ExternalLink size={12} />
        </a>
      </div>
    </motion.div>
  );
}
