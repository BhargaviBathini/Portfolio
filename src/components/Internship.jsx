import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GlassCard } from './GlassCard';
import { Briefcase, Calendar, Building2, CheckCircle2, TrendingUp, Play, Star } from 'lucide-react';

export const Internship = () => {
  const { internship } = portfolioData;

  return (
    <section id="internship" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-netflixRed font-bold">
            <Briefcase className="w-4 h-4" />
            <span>Section 05 // Featured Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-obsidian dark:text-white">
            Industry <span className="text-gradient-netflix">Spotlight</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Architecting Telugu-centric LLM pipelines, semantic search engines, and production transformer models.
          </p>
        </div>

        {/* High-Impact Experience Card */}
        <GlassCard tiltFactor={6} className="max-w-5xl mx-auto p-8 sm:p-10 space-y-8 border-netflixRed/30 hover:border-netflixRed/70">
          
          {/* Card Top Banner */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-netflixRed uppercase">
                <Building2 className="w-4 h-4" />
                <span>{internship.company}</span>
                <span className="bg-netflixRed text-white px-1.5 py-0.5 rounded text-[10px]">ORIGINAL</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-obsidian dark:text-white">
                {internship.role}
              </h3>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 border border-white/20 text-xs font-mono text-slate-300">
              <Calendar className="w-4 h-4 text-netflixRed" />
              <span>{internship.duration}</span>
            </div>
          </div>

          {/* Dynamic Netflix Red Metrics Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {internship.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-netflixRed/10 border border-netflixRed/30 text-center space-y-1"
              >
                <div className="text-3xl sm:text-4xl font-display font-black text-netflixRed drop-shadow-md">
                  {metric.prefix || ''}{metric.value}{metric.suffix}
                </div>
                <div className="text-xs font-mono font-bold text-slate-300">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Responsibilities */}
          <div className="space-y-4">
            <h4 className="text-sm font-mono font-bold uppercase text-netflixRed flex items-center gap-2">
              <TrendingUp className="w-4 h-4" /> Production Deliverables & Engineering Achievements
            </h4>

            <div className="grid grid-cols-1 gap-4">
              {internship.responsibilities.map((resp, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {resp}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </GlassCard>

      </div>
    </section>
  );
};
