import React, { useState, useEffect } from 'react';
import { ArrowUp, Film } from 'lucide-react';

export const Footer = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 py-12 bg-netflixVoid text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Info */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-netflixRed text-white font-extrabold flex items-center justify-center text-sm shadow-netflix-red">
            B
          </div>
          <div>
            <p className="text-base font-display font-bold text-white">
              Bhargavi Bathini
            </p>
            <p className="text-xs font-mono text-slate-400">
              AI & Machine Learning Enthusiast Portfolio
            </p>
          </div>
        </div>

        {/* Center Live Clock */}
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-black border border-white/10 text-xs font-mono text-slate-300">
          <span className="w-2 h-2 rounded-full bg-netflixRed animate-ping" />
          <span>LOCAL SYSTEM TIME: {time} IST</span>
        </div>

        {/* Right Scroll to Top Button */}
        <div className="flex items-center gap-4">
          <p className="text-xs font-mono text-slate-500">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2.5 rounded-full bg-white/10 hover:bg-netflixRed text-white transition-all transform hover:-translate-y-1"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
