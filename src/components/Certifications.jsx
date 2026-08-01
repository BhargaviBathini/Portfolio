import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { GlassCard } from './GlassCard';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';

export const Certifications = () => {
  const { certifications } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...certifications.map(c => c.category)];

  const displayedCertifications = activeCategory === 'All'
    ? certifications
    : certifications.filter(c => c.category === activeCategory);

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-netflixRed font-bold">
              <Award className="w-4 h-4" />
              <span>Section 06 // Verified Credentials</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
              Professional <span className="text-gradient-netflix">Certifications</span>
            </h2>
            <p className="text-slate-300 max-w-xl text-base sm:text-lg">
              Official verified credentials from Google Cloud, AWS, Udacity, Cisco, Oracle, Coursera, and Zscaler.
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

        {/* Categorized Certification Groups */}
        <div className="space-y-12">
          {displayedCertifications.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="h-4 w-1.5 rounded-full bg-netflixRed" />
                <h3 className="text-2xl font-display font-bold text-white">
                  {group.category}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.items.map((cert, certIdx) => (
                  <GlassCard
                    key={certIdx}
                    tiltFactor={10}
                    className="p-7 flex flex-col justify-between space-y-4 group border-white/10 hover:border-netflixRed/60"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="px-3 py-1 rounded text-xs font-mono font-bold bg-netflixRed/20 text-netflixRed border border-netflixRed/30">
                          {cert.type || 'Verified'}
                        </span>
                        <ShieldCheck className="w-5 h-5 text-emerald-400" />
                      </div>

                      <h4 className="text-base sm:text-lg font-display font-bold text-white leading-snug group-hover:text-netflixRed transition-colors">
                        {cert.title}
                      </h4>

                      <p className="text-xs sm:text-sm font-mono text-slate-400">
                        Issuer: {cert.issuer}
                      </p>
                    </div>

                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 hover:bg-netflixRed text-xs sm:text-sm font-bold text-white flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-netflix-red"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="w-4 h-4 text-white" />
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
