import React from 'react';
import { motion } from 'motion/react';
import { Code, Server, Brain, FileText, CheckCircle } from 'lucide-react';

export default function TechStack() {
  const categories = [
    {
      title: 'Frontend & UI/UX',
      icon: Code,
      color: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/5',
      skills: [
        { name: 'React 18 / 19', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS v4', level: 95 },
        { name: 'Framer Motion (motion/react)', level: 88 },
        { name: 'Vite', level: 92 },
        { name: 'Responsive UI/UX design', level: 90 },
      ],
    },
    {
      title: 'Backend & Security',
      icon: Server,
      color: 'text-purple-400 border-purple-500/20 bg-purple-500/5',
      skills: [
        { name: 'Node.js & Express', level: 88 },
        { name: 'Firebase & Firestore', level: 85 },
        { name: 'RBAC (Role Based Access)', level: 90 },
        { name: 'API REST Architecture', level: 92 },
        { name: 'Security Rules & Guarding', level: 88 },
        { name: 'Multer (File uploads)', level: 80 },
      ],
    },
    {
      title: 'IA & Integraciones',
      icon: Brain,
      color: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5',
      skills: [
        { name: 'Google GenAI SDK (Gemini)', level: 90 },
        { name: 'Model Tuning & Prompt Engineering', level: 92 },
        { name: 'Google Sheets API v4', level: 85 },
        { name: 'Google Apps Script', level: 80 },
        { name: 'JSON Structure Parser', level: 90 },
      ],
    },
    {
      title: 'Reportes & Herramientas',
      icon: FileText,
      color: 'text-amber-400 border-amber-500/20 bg-amber-500/5',
      skills: [
        { name: 'jspdf (PDF Generation)', level: 85 },
        { name: 'xlsx / SheetJS (Excel)', level: 88 },
        { name: 'Git & Version Control', level: 90 },
        { name: 'Vercel / Cloud Deployment', level: 88 },
        { name: 'Performance Optimization', level: 90 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="habilidades" className="relative py-24 px-6 md:px-12 bg-slate-950/80 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4 tracking-widest uppercase"
          >
            <CheckCircle size={12} />
            <span>Capacidades Técnicas</span>
          </motion.div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
            Habilidades & Tecnologías
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 font-light mt-4">
            Especialización profunda en el desarrollo de software moderno con alto rendimiento, inteligencia artificial y capas de seguridad empresarial robustas.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="p-6 md:p-8 rounded-2xl border border-slate-900 bg-slate-900/40 backdrop-blur-md hover:border-slate-800 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2.5 rounded-xl border ${cat.color}`}>
                    <Icon size={18} />
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-bold text-white uppercase tracking-wider">
                    {cat.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="group">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-slate-200 transition-colors mb-1.5">
                        <span className="font-medium text-slate-300">{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-900">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.1 }}
                          className={`h-full rounded-full bg-gradient-to-r ${
                            cat.title.includes('Frontend')
                              ? 'from-cyan-500 to-blue-400'
                              : cat.title.includes('Backend')
                              ? 'from-purple-500 to-indigo-400'
                              : cat.title.includes('IA')
                              ? 'from-emerald-500 to-teal-400'
                              : 'from-amber-500 to-yellow-400'
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
