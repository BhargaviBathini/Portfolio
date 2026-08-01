import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { MouseGlow } from './components/MouseGlow';
import { Background3DCanvas } from './components/Background3DCanvas';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { PhilosophyCode } from './components/PhilosophyCode';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Internship } from './components/Internship';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { CoCurriculars } from './components/CoCurriculars';
import { Leadership } from './components/Leadership';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AskBhargaviAI } from './components/AskBhargaviAI';
import { Layers } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const showSection = (tabId) => {
    return activeTab === 'all' || activeTab === 'home' || activeTab === tabId;
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-ambient-dark text-slate-100 selection:bg-netflixRed selection:text-white">
      {/* 3D WebGL Background Canvas */}
      <Background3DCanvas theme="dark" />

      {/* Mouse Follow Ambient Glow Trail */}
      <MouseGlow />

      {/* Sticky Navbar */}
      <Navbar activeTab={activeTab} onSelectTab={setActiveTab} />

      {/* Ask Bhargavi AI Floating Assistant */}
      <AskBhargaviAI />

      {/* Floating Return Button when filtering a single section */}
      {activeTab !== 'all' && activeTab !== 'home' && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setActiveTab('all')}
            className="px-5 py-3 rounded-full bg-netflixRed text-white font-bold text-xs sm:text-sm shadow-netflix-red flex items-center gap-2 transition-all transform hover:scale-105 border border-white/20"
          >
            <Layers className="w-4 h-4" />
            <span>Show Full Portfolio</span>
          </button>
        </div>
      )}

      {/* Main Portfolio Content */}
      <main className="relative z-10 space-y-16 pt-4">
        {showSection('home') && <Hero />}
        {showSection('tech-stack') && <TechStack />}
        {showSection('code-philosophy') && <PhilosophyCode />}
        {showSection('education') && <Education />}
        {showSection('projects') && <Projects />}
        {showSection('internship') && <Internship />}
        {showSection('certifications') && <Certifications />}
        {showSection('achievements') && <Achievements />}
        {showSection('co-curriculars') && <CoCurriculars />}
        {showSection('leadership') && <Leadership />}
        {showSection('contact') && <Contact />}
      </main>

      {/* Spatial Footer */}
      <Footer />
    </div>
  );
}

export default App;
