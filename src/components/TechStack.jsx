import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { GlassCard } from './GlassCard';
import { 
  Sparkles, Code2, Coffee, Cpu, Terminal, Binary,
  Brain, MessageSquareText, SearchCode, Bot, Workflow, GitFork, Users, Zap,
  Flame, Layers, Eye, Atom, Globe, Server, Network, FileCode, Layout, Palette,
  Component, Database, HardDrive, FileSpreadsheet, Boxes, Cloud, Wrench, GitBranch,
  Github, Send, Figma, BarChart3, LineChart, PieChart, AreaChart, TrendingUp, Activity,
  BookOpen, Box, Wifi, BarChart4, Filter, Layers3
} from 'lucide-react';

const iconMap = {
  Code2, Coffee, Cpu, Terminal, Binary, Brain, MessageSquareText, SearchCode, Bot,
  Workflow, GitFork, Users, Zap, Flame, Layers, Eye, Atom, Globe, Server, Network,
  FileCode, Layout, Palette, Component, Database, HardDrive, FileSpreadsheet, Boxes,
  Cloud, Wrench, GitBranch, Github, Send, Figma, BarChart3, LineChart, PieChart,
  AreaChart, TrendingUp, Activity, BookOpen, Sparkles, Box, Wifi, BarChart4
};

export const TechStack = () => {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skills.items
    : skills.items.filter(item => item.category === activeCategory);

  return (
    <section id="tech-stack" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-netflixRed font-bold">
            <Layers3 className="w-4 h-4" />
            <span>Section 01 // Technical Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
            Tech Stack & <span className="text-gradient-netflix">Domain Expertise</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
            Production-grade frameworks, machine learning architectures, cloud platforms, and developer tooling. Hover any skill card for production context!
          </p>
        </div>

        {/* Category Filter Bar */}
        <div className="flex items-center justify-center gap-2 flex-wrap pb-2">
          <Filter className="w-4 h-4 text-netflixRed shrink-0 mr-1" />
          {skills.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-netflixRed text-white shadow-netflix-red scale-105'
                  : 'glass-panel text-slate-300 hover:border-netflixRed/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Responsive Skill Grid with Full Text Wrapping */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => {
            const Icon = iconMap[skill.icon] || Code2;
            return (
              <div key={index} className="relative group">
                <GlassCard tiltFactor={8} className="p-4.5 flex items-center gap-3.5 border-white/10 hover:border-netflixRed/60 cursor-pointer min-h-[72px]">
                  <div className="p-2.5 rounded-xl bg-netflixRed/15 text-netflixRed group-hover:scale-110 transition-transform shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs sm:text-sm font-bold text-white leading-snug break-words">{skill.name}</h4>
                  </div>
                </GlassCard>

                {/* Glassmorphism Production Context Tooltip */}
                {skill.context && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-3 rounded-xl bg-netflixGray/95 border border-netflixRed/50 shadow-2xl text-xs text-slate-200 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200 z-50 backdrop-blur-xl">
                    <div className="font-mono font-bold text-netflixRed mb-1 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      <span>Production Context</span>
                    </div>
                    <p className="leading-snug text-[11px] text-slate-100 font-medium">
                      "{skill.context}"
                    </p>
                    {/* Arrow */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-netflixRed/80" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
