import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { GlassCard } from './GlassCard';
import { Compass, ExternalLink, Film } from 'lucide-react';

export const CoCurriculars = () => {
  const { coCurriculars } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...coCurriculars.map(c => c.category)];

  const displayedGroups = activeCategory === 'All'
    ? coCurriculars
    : coCurriculars.filter(c => c.category === activeCategory);

  const getActionLabel = (type) => {
    switch (type) {
      case 'LinkedIn Highlight': return 'View LinkedIn Highlight';
      case 'Submission': return 'View Submission';
      case 'Folder': return 'View Folder';
      case 'Presentation': return 'View Presentation';
      case 'Document': return 'View Document';
      default: return 'View Certificate/Document';
    }
  };

  return (
    <section id="co-curriculars" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-netflixRed font-bold">
              <Film className="w-4 h-4" />
              <span>Section 08 // Limited Technical Events</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-obsidian dark:text-white">
              Workshops & <span className="text-gradient-netflix">Hackathons</span>
            </h2>
            <p className="text-slate-400 max-w-xl text-sm sm:text-base">
              National immersion programs, technical hackathon submissions, and architecture workshops.
            </p>
          </div>

          {/* Category Tabs */}
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

        {/* Categorized Groups */}
        <div className="space-y-12">
          {displayedGroups.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="h-4 w-1.5 rounded-full bg-netflixRed" />
                <h3 className="text-xl font-display font-bold text-obsidian dark:text-white">
                  {group.category}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.items.map((item, itemIdx) => (
                  <GlassCard
                    key={itemIdx}
                    tiltFactor={10}
                    className="p-6 flex flex-col justify-between space-y-4 group border-white/10 hover:border-netflixRed/60"
                  >
                    <div className="space-y-3">
                      <h4 className="text-base font-display font-bold text-obsidian dark:text-white group-hover:text-netflixRed transition-colors">
                        {item.title}
                      </h4>

                      {item.description && (
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>

                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-4 py-2.5 rounded-lg bg-white/10 hover:bg-netflixRed text-xs sm:text-sm font-bold text-white flex items-center justify-center gap-2 transition-all transform hover:scale-105"
                    >
                      <span>View Certificate</span>
                      <ExternalLink className="w-3.5 h-3.5 text-white" />
                    </a>
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
