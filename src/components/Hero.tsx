import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Cpu, Sparkles, Terminal, Code } from 'lucide-react';

interface HeroProps {
  onScrollToProjects: () => void;
}

export default function Hero({ onScrollToProjects }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const particles: Particle[] = [];
    const maxParticles = Math.min(60, Math.floor((width * height) / 15000));

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 1.5 + 1;
        this.color = Math.random() > 0.5 ? 'rgba(34, 211, 238, 0.3)' : 'rgba(168, 85, 247, 0.2)';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.fill();
      }
    }

    for (let i = 0; i < maxParticles; i++) {
      particles.push(new Particle());
    }

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        width = canvas.width = entry.contentRect.width;
        height = canvas.height = entry.contentRect.height;
      }
    });

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update();
        p1.draw(ctx);

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            const alpha = (1 - dist / 100) * 0.15;
            ctx.strokeStyle = `rgba(34, 211, 238, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Interactive Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0"
        id="hero-particles"
      />

      {/* Cyber ambient overlays */}
      <div className="absolute inset-0 cyber-grid z-0 opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none z-0 animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none z-0 animate-pulse duration-[6000ms]" />

      <div className="relative max-w-5xl mx-auto px-6 z-10 text-center flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Tagline Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold mb-8 tracking-widest uppercase backdrop-blur-md"
            id="hero-badge"
          >
            <Sparkles size={13} className="animate-spin duration-3000" />
            <span>Sistemas Inteligentes & Full-Stack</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-6xl md:text-8xl font-extrabold tracking-tighter leading-tight mb-4 text-white uppercase selection:bg-cyan-500/30"
            id="hero-title"
          >
            Matias<br/>
            <span className="gradient-text">
              Gil
            </span>
          </motion.h1>

          {/* Subtitle / Role */}
          <motion.h2
            variants={itemVariants}
            className="font-display text-2xl md:text-3xl font-light text-slate-400 mb-6 uppercase tracking-wide"
            id="hero-subtitle"
          >
            IA Software Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-base md:text-lg text-slate-400 font-sans font-light leading-relaxed mb-12"
            id="hero-description"
          >
            Especializado en diseñar e implementar{' '}
            <strong className="text-slate-100 font-medium">Soluciones inteligentes y Full-Stack performance</strong>.{' '}
            Apasionado por la optimización algorítmica, sistemas integrados autónomos y arquitecturas empresariales seguras de alta disponibilidad.
          </motion.p>

          {/* CTA Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16"
            id="hero-actions"
          >
            {/* Main Glow Button */}
            <button
              onClick={onScrollToProjects}
              className="relative group px-8 py-3.5 rounded-xl font-display font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.25)] hover:shadow-[0_0_35px_rgba(99,102,241,0.45)] hover:scale-[1.03] transition-all duration-300 cursor-pointer overflow-hidden"
              id="cta-projects"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
              <span className="relative z-10 flex items-center gap-2 transition-colors duration-300">
                Ver Proyectos
                <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform duration-300" />
              </span>
            </button>

            {/* Terminal Contact Button / Contact simulation */}
            <a
              href="https://www.linkedin.com/in/matiasgil222/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl font-display font-medium text-slate-300 border border-slate-800 hover:border-cyan-500/30 bg-slate-900/50 hover:bg-slate-900/90 hover:text-cyan-400 transition-all duration-300 backdrop-blur-sm flex items-center gap-2"
              id="cta-linkedin"
            >
              <Terminal size={16} />
              <span>Conectar en LinkedIn</span>
            </a>
          </motion.div>

          {/* Micro stats banner */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 pt-8 border-t border-white/5 w-full max-w-3xl"
            id="hero-stats"
          >
            <div className="flex flex-col items-center">
              <span className="text-xs uppercase tracking-wider font-mono text-cyan-500/70 mb-1 flex items-center gap-1.5 justify-center">
                <Cpu size={12} /> Performance
              </span>
              <span className="text-lg font-mono font-bold text-slate-100">Near-Zero Latency</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xs uppercase tracking-wider font-mono text-cyan-500/70 mb-1 flex items-center gap-1.5 justify-center">
                <Sparkles size={12} /> Inteligencia
              </span>
              <span className="text-lg font-mono font-bold text-slate-100">LLM & Agents</span>
            </div>
            <div className="flex flex-col items-center col-span-2 md:col-span-1">
              <span className="text-xs uppercase tracking-wider font-mono text-cyan-500/70 mb-1 flex items-center gap-1.5 justify-center">
                <Code size={12} /> Arquitectura
              </span>
              <span className="text-lg font-mono font-bold text-slate-100">Clean Code & RBAC</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
