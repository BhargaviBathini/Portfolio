import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GlassCard } from './GlassCard';
import { Users, HeartHandshake, Sparkles, Award, Star } from 'lucide-react';

export const Leadership = () => {
  const { leadership } = portfolioData;

  return (
    <section id="leadership" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-netflixRed font-bold">
            <Users className="w-4 h-4" />
            <span>Section 09 // Community Lead</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-obsidian dark:text-white">
            Leadership & <span className="text-gradient-netflix">Community</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Empowering technical student chapters, mentoring learners, and building inclusive AI communities.
          </p>
        </div>

        {/* Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadership.map((item, idx) => (
            <GlassCard
              key={idx}
              tiltFactor={10}
              className="p-6 flex flex-col justify-between space-y-4 group relative border-white/10 hover:border-netflixRed/60"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded text-xs font-mono font-bold bg-netflixRed/20 text-netflixRed border border-netflixRed/30">
                    {item.badge}
                  </span>
                  <HeartHandshake className="w-4 h-4 text-netflixRed" />
                </div>

                <div>
                  <h3 className="text-lg font-display font-bold text-obsidian dark:text-white group-hover:text-netflixRed transition-colors">
                    {item.role}
                  </h3>
                  <p className="text-xs font-mono font-bold text-netflixRed mt-0.5">
                    {item.organization}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.highlight && (
                <div className="p-3 rounded-xl bg-netflixRed/10 border border-netflixRed/30 text-xs font-mono font-bold text-netflixRed flex items-center justify-between">
                  <span>Impact Highlight:</span>
                  <span>{item.highlight}</span>
                </div>
              )}
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
};
