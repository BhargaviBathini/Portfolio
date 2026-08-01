import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Layers3, Terminal, BookOpen, FolderGit2, Briefcase, Award, Trophy, Compass, Users, Mail } from 'lucide-react';

export const Navbar = ({ activeTab, onSelectTab }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Sparkles },
    { id: 'tech-stack', label: 'Tech Stack', icon: Layers3 },
    { id: 'code-philosophy', label: 'C.O.D.E', icon: Terminal },
    { id: 'education', label: 'Education', icon: BookOpen },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'internship', label: 'Experience', icon: Briefcase },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'co-curriculars', label: 'Activities', icon: Compass },
    { id: 'leadership', label: 'Leadership', icon: Users },
    { id: 'contact', label: 'Contact & Profiles', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (id) => {
    setMobileMenuOpen(false);
    onSelectTab(id);

    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-netflixVoid/95 backdrop-blur-md shadow-2xl py-4 border-b border-white/10' : 'bg-gradient-to-b from-black/90 to-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button
          onClick={() => handleTabClick('home')}
          className="flex items-center gap-3 group text-left shrink-0"
        >
          <div className="w-9 h-9 rounded-full bg-netflixRed flex items-center justify-center text-white font-extrabold text-base shadow-netflix-red group-hover:scale-105 transition-transform">
            B
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-white group-hover:text-netflixRed transition-colors">
              Bhargavi <span className="text-netflixRed">Bathini</span>
            </span>
            <span className="text-[11px] sm:text-xs tracking-wider uppercase font-mono text-slate-400 font-medium">
              AI & Machine Learning Enthusiast
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-2 overflow-x-auto">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap ${
                  isActive
                    ? 'text-white bg-netflixRed shadow-netflix-red'
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right Mobile Menu Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md bg-white/10 text-white"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-w-7xl mx-auto px-4 mt-2">
          <div className="bg-netflixGray/95 border border-white/10 rounded-xl p-4 space-y-1 shadow-2xl backdrop-blur-xl max-h-[80vh] overflow-y-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`w-full px-4 py-3 rounded-lg text-base font-bold flex items-center gap-3 transition-colors ${
                    isActive
                      ? 'bg-netflixRed text-white'
                      : 'text-slate-200 hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-5 h-5 text-netflixRed" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
