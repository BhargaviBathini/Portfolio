import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { GlassCard } from './GlassCard';
import { FolderGit2, Github, ExternalLink, FileText, Network, Play, Sparkles, CheckCircle2 } from 'lucide-react';

export const Projects = () => {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...projects.map(p => p.category)];

  const displayedProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const getLinkIcon = (type) => {
    switch (type) {
      case 'github': return Github;
      case 'live': return ExternalLink;
      case 'docs': return FileText;
      case 'architecture': return Network;
      case 'demo': return Play;
      default: return ExternalLink;
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-netflixRed font-bold">
              <FolderGit2 className="w-4 h-4" />
              <span>Section 04 // Featured Engineering Work</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
              Featured <span className="text-gradient-netflix">Projects</span>
            </h2>
            <p className="text-slate-300 max-w-xl text-base sm:text-lg">
              Production-grade AI platforms, hyperbolic neural networks, and intelligent agentic systems.
            </p>
          </div>

          {/* Sub-Section Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-netflixRed text-white shadow-netflix-red'
                    : 'glass-panel text-slate-300 hover:border-netflixRed/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Categorized Grid */}
        <div className="space-y-12">
          {displayedProjects.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="h-4 w-1.5 rounded-full bg-netflixRed" />
                <h3 className="text-2xl font-display font-bold text-white tracking-tight">
                  {group.category}
                </h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {group.items.map((proj, projIdx) => (
                  <GlassCard
                    key={projIdx}
                    tiltFactor={8}
                    className="p-7 md:p-9 flex flex-col justify-between space-y-6 relative group border-white/10 hover:border-netflixRed/60"
                  >
                    <div className="space-y-4">
                      
                      {/* Title & Tagline */}
                      <div>
                        <h4 className="text-2xl font-display font-bold text-white group-hover:text-netflixRed transition-colors leading-snug">
                          {proj.title}
                        </h4>
                        {proj.tagline && (
                          <p className="text-sm font-mono font-bold text-netflixRed mt-1">
                            {proj.tagline}
                          </p>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                        {proj.description}
                      </p>

                      {/* Highlights & Metrics */}
                      {proj.highlights && proj.highlights.length > 0 && (
                        <div className="p-4 rounded-xl bg-netflixRed/10 border border-netflixRed/30 space-y-2">
                          <span className="text-xs font-mono font-bold uppercase text-netflixRed flex items-center gap-1.5">
                            <Sparkles className="w-4 h-4" /> Key Results & Metrics
                          </span>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-200 font-mono">
                            {proj.highlights.map((item, hIdx) => (
                              <li key={hIdx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {proj.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-black/60 text-slate-200 border border-white/15"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links Bar */}
                    <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2.5">
                      {proj.links.map((link, lIdx) => {
                        const LinkIcon = getLinkIcon(link.type);
                        const isPrimary = link.type === 'live' || link.type === 'demo';
                        return (
                          <a
                            key={lIdx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all transform hover:scale-105 ${
                              isPrimary
                                ? 'bg-netflixRed hover:bg-netflixDarkRed text-white shadow-netflix-red'
                                : 'glass-panel hover:border-netflixRed/50 text-white'
                            }`}
                          >
                            <LinkIcon className="w-4 h-4" />
                            <span>{link.label}</span>
                          </a>
                        );
                      })}
                    </div>
                  </GlassCard>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
