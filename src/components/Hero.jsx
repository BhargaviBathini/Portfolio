import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, Info } from 'lucide-react';

export const Hero = () => {
  const { hero } = portfolioData;

  return (
    <section id="home" className="min-h-screen pt-28 pb-10 relative flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Clean Hero Billboard Banner */}
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-14 overflow-hidden bg-gradient-to-r from-black via-netflixGray/95 to-black/80 border border-white/10 shadow-2xl">
          
          {/* Subtle Red Glow */}
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-netflixRed/20 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-6 max-w-4xl">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-netflixRed/15 border border-netflixRed/40 text-xs font-mono font-bold text-netflixRed">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for SDE, AI/ML Engineering Opportunities</span>
            </div>

            {/* Header Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-tight text-white">
              {hero.name}
              <span className="block text-2xl sm:text-4xl lg:text-5xl mt-2 font-bold text-netflixRed">
                {hero.title}
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-lg sm:text-2xl font-semibold text-slate-200 leading-relaxed italic border-l-4 border-netflixRed pl-4">
              "{hero.tagline}"
            </p>

            {/* About Me Paragraphs */}
            <div className="space-y-4 text-slate-200 text-base sm:text-lg leading-relaxed">
              {hero.aboutParagraphs.map((para, idx) => (
                <p key={idx} className="bg-black/50 p-5 rounded-2xl border border-white/10 backdrop-blur-md">
                  {para}
                </p>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="px-8 py-4 rounded-xl bg-netflixRed hover:bg-netflixDarkRed text-white font-bold text-base shadow-netflix-red flex items-center gap-2.5 transition-all transform hover:scale-105"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#projects"
                className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-base flex items-center gap-2.5 transition-all backdrop-blur-md transform hover:scale-105"
              >
                <Info className="w-5 h-5 text-netflixRed" />
                <span>Explore Projects</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
