import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GlassCard } from './GlassCard';
import { GraduationCap, School, Award, MapPin, Calendar, BookOpen, Star } from 'lucide-react';

const iconMap = {
  GraduationCap,
  School,
  Award
};

export const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-netflixRed font-bold">
            <BookOpen className="w-4 h-4" />
            <span>Section 03 // Academic Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
            Education & <span className="text-gradient-netflix">Qualifications</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
            Academic foundation demonstrating consistent excellence and theoretical rigor across engineering disciplines.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Solid Glowing Red Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-1.5 bg-netflixRed transform -translate-x-1/2 z-0 shadow-[0_0_20px_rgba(229,9,20,1)] rounded-full" />

          <div className="space-y-8">
            {education.map((edu, idx) => {
              const Icon = iconMap[edu.icon] || GraduationCap;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10 w-10 h-10 rounded-full bg-netflixRed p-0.5 shadow-netflix-red">
                    <div className="w-full h-full bg-netflixGray rounded-full flex items-center justify-center text-white">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Card Container */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <GlassCard tiltFactor={10} className="p-7 space-y-4 border-white/10 hover:border-netflixRed/60">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="px-3 py-1 rounded text-xs font-mono font-bold bg-netflixRed/20 text-netflixRed border border-netflixRed/40">
                          {edu.badge}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300">
                          <Calendar className="w-4 h-4 text-netflixRed" />
                          <span>{edu.duration}</span>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-display font-bold text-white leading-snug">
                          {edu.degree}
                        </h3>
                        <p className="text-base font-semibold text-netflixRed mt-1">
                          {edu.institution}
                        </p>
                        <div className="flex items-center gap-1 text-xs sm:text-sm text-slate-400 mt-1">
                          <MapPin className="w-4 h-4 text-slate-400" />
                          <span>{edu.location}</span>
                        </div>
                      </div>

                      {/* Score Highlight Box */}
                      <div className="p-3.5 rounded-xl bg-netflixRed/10 border border-netflixRed/30 flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-mono text-slate-200 flex items-center gap-1.5 font-bold">
                          <Star className="w-4 h-4 text-amber-400 fill-amber-400" /> {edu.metricLabel} Score:
                        </span>
                        <span className="text-lg sm:text-xl font-display font-black text-netflixRed">
                          {edu.metricValue}
                        </span>
                      </div>
                    </GlassCard>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
