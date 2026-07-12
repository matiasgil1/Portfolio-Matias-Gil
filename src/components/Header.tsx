import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Cpu, Terminal, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Header({ onScrollToSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'habilidades', label: 'Habilidades' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['inicio', 'proyectos', 'habilidades'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    onScrollToSection(sectionId);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-900/30 py-4'
            : 'bg-transparent py-6'
        }`}
        id="navbar-header"
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Branding */}
          <button
            onClick={() => handleNavClick('inicio')}
            className="flex items-center gap-2 group cursor-pointer text-left"
            id="nav-logo"
          >
            <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 group-hover:border-cyan-400 group-hover:bg-cyan-500/20 transition-all duration-300 text-cyan-400">
              <Cpu size={16} />
            </div>
            <div>
              <span className="font-display font-bold text-sm text-white tracking-widest uppercase block">
                Matias Gil
              </span>
              <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest block -mt-0.5">
                Portfolio
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-950/40 p-1 rounded-xl border border-slate-900/60" id="desktop-nav">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    isActive ? 'text-cyan-400 font-semibold' : 'text-slate-400 hover:text-slate-100'
                  }`}
                  id={`nav-item-${item.id}`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-slate-900 border border-slate-900/40 rounded-lg -z-10"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Contact / Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/5493815026519"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-mono text-xs text-cyan-400 border border-cyan-500/20 hover:border-cyan-400/50 bg-cyan-500/5 hover:bg-cyan-500/10 transition-all duration-300"
              id="nav-whatsapp-cta"
            >
              <span>WhatsApp</span>
              <ArrowUpRight size={12} />
            </a>
          </div>

          {/* Mobile Menu Toggle button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900 transition-colors cursor-pointer"
            aria-label="Toggle Mobile Menu"
            id="btn-mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[73px] left-0 w-full bg-slate-950/95 border-b border-slate-900/30 z-30 md:hidden flex flex-col p-6 gap-4 backdrop-blur-md"
            id="mobile-nav-drawer"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left py-3 px-4 rounded-xl font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                      isActive
                        ? 'bg-slate-900 text-cyan-400 font-bold border border-cyan-500/10'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
                    }`}
                    id={`mobile-nav-item-${item.id}`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="border-t border-slate-900/30 pt-4 mt-2 flex flex-col gap-3">
              <a
                href="https://wa.me/5493815026519"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 rounded-xl font-mono text-xs text-slate-950 bg-cyan-400 font-bold hover:bg-cyan-300 transition-all"
                id="mobile-whatsapp-cta"
              >
                Enviame un mensaje
              </a>
              <a
                href="https://www.linkedin.com/in/matiasgil222/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 rounded-xl font-mono text-xs text-slate-400 border border-slate-900/30 hover:border-cyan-500/20 bg-slate-900/50 hover:bg-slate-900 hover:text-cyan-400 transition-all flex items-center justify-center gap-2"
                id="mobile-linkedin-cta"
              >
                <Terminal size={14} />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
