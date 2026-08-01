import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GlassCard } from './GlassCard';
import { Terminal, ArrowRight } from 'lucide-react';

export const PhilosophyCode = () => {
  const { codePhilosophy } = portfolioData;

  return (
    <section id="code-philosophy" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-netflixRed font-bold">
            <Terminal className="w-4 h-4" />
            <span>Section 02 // Core Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
            C.O.D.E <span className="text-gradient-netflix">Mindset</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
            The four foundational pillars guiding engineering practice, collaboration, and continuous evolution.
          </p>
        </div>

        {/* 4 Clean Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {codePhilosophy.map((item, idx) => (
            <GlassCard
              key={idx}
              tiltFactor={12}
              className="p-7 relative group flex flex-col justify-between h-full min-h-[320px] border-white/10 hover:border-netflixRed/60"
            >
              {/* Giant Translucent Letter Overlay */}
              <div className="absolute top-2 right-4 text-8xl font-display font-black opacity-10 text-netflixRed select-none group-hover:scale-125 group-hover:opacity-25 transition-all duration-500">
                {item.letter}
              </div>

              {/* Card Content */}
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-netflixRed p-0.5 shadow-netflix-red">
                    <div className="w-full h-full bg-netflixGray rounded-[14px] flex items-center justify-center font-display font-black text-2xl text-white">
                      {item.letter}
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded text-xs font-mono font-bold bg-netflixRed/20 text-netflixRed border border-netflixRed/40">
                    PILLAR 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-white group-hover:text-netflixRed transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Bottom Decorative Line */}
              <div className="relative z-10 pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Pillar 0{idx + 1}</span>
                <ArrowRight className="w-4 h-4 text-netflixRed opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
};
