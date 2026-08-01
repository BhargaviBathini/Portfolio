import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GlassCard } from './GlassCard';
import { Trophy, Rocket, Medal, Cloud, Globe, Code, Sparkles, Star } from 'lucide-react';

const iconMap = {
  Trophy,
  Rocket,
  Medal,
  Cloud,
  Globe,
  Code
};

export const Achievements = () => {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-netflixRed font-bold">
            <Trophy className="w-4 h-4" />
            <span>Section 07 // Key Honors</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
            Honors & <span className="text-gradient-netflix">Achievements</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
            National rank recognitions, competitive hackathon trophies, and global scholar cohorts.
          </p>
        </div>

        {/* Highlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => {
            const Icon = iconMap[item.icon] || Trophy;
            return (
              <GlassCard
                key={idx}
                tiltFactor={12}
                className="p-7 flex flex-col justify-between space-y-4 relative group border-white/10 hover:border-netflixRed/60"
              >
                <div className="space-y-4">
                  
                  {/* Icon & Tag */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="p-3 rounded-2xl bg-netflixRed text-white shadow-netflix-red">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded text-xs font-mono font-bold bg-netflixRed/20 text-netflixRed border border-netflixRed/30">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl font-display font-bold text-white leading-snug group-hover:text-netflixRed transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 mt-2.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Decorative Indicator */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-end text-xs font-mono text-slate-400">
                  <Sparkles className="w-4 h-4 text-netflixRed opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </GlassCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};
