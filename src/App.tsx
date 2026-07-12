/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import TechStack from './components/TechStack';
import Footer from './components/Footer';

export default function App() {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* Background Matrix/Grid Style */}
      <div className="absolute inset-0 grid-overlay z-0 opacity-20 pointer-events-none" />

      {/* Main Header */}
      <Header onScrollToSection={scrollToSection} />

      {/* Hero Section */}
      <main className="relative z-10">
        <Hero onScrollToProjects={() => scrollToSection('proyectos')} />

        {/* Detailed Projects Showcase */}
        <ProjectsSection />

        {/* Technical TechStack section */}
        <TechStack />
      </main>

      {/* Footer copyright */}
      <Footer />
    </div>
  );
}
