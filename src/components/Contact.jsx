import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { GlassCard } from './GlassCard';
import { Mail, Phone, Linkedin, Github, Cloud, Award, Send, Copy, Check, Terminal, Play, Film } from 'lucide-react';
import confetti from 'canvas-confetti';

const profileIconMap = {
  Linkedin,
  Github,
  Cloud,
  Award
};

export const Contact = () => {
  const { contact } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#E50914', '#B81D24', '#FFFFFF', '#FF3B30']
    });
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-netflixRed font-bold">
            <Film className="w-4 h-4" />
            <span>Section 10 // Account Console</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
            Contact & <span className="text-gradient-netflix">Profiles</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Open for full-time AI/ML Engineering roles, research opportunities, and enterprise platform inquiries.
          </p>
        </div>

        {/* 3D Glass Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Terminal Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <GlassCard tiltFactor={8} className="p-8 space-y-6 border-netflixRed/30 hover:border-netflixRed/60">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-netflixRed" />
                  <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                    Direct Contact Terminal
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-netflixRed animate-ping" />
                  <span className="w-3 h-3 rounded-full bg-white/40" />
                </div>
              </div>

              {/* Direct Mail & Phone Boxes */}
              <div className="space-y-4">
                
                {/* Email Box */}
                <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-netflixRed font-bold">
                      <Mail className="w-4 h-4" /> Email Address
                    </span>
                    <button
                      onClick={() => handleCopy(contact.email, 'email')}
                      className="p-1 rounded hover:bg-white/10 text-white transition-colors"
                      title="Copy Email"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <a
                    href={`mailto:${contact.email}`}
                    className="block text-sm sm:text-base font-mono font-bold text-white hover:text-netflixRed transition-colors break-all"
                  >
                    {contact.email}
                  </a>
                </div>

                {/* Phone Box */}
                <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                      <Phone className="w-4 h-4" /> Phone Number
                    </span>
                    <button
                      onClick={() => handleCopy(contact.phone, 'phone')}
                      className="p-1 rounded hover:bg-white/10 text-white transition-colors"
                      title="Copy Phone"
                    >
                      {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <a
                    href={`tel:${contact.phone}`}
                    className="block text-sm sm:text-base font-mono font-bold text-white hover:text-emerald-400 transition-colors"
                  >
                    {contact.phone}
                  </a>
                </div>

              </div>

              {/* Profiles Grid */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-bold">
                  Official Technical Profiles
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  {contact.profiles.map((prof, idx) => {
                    const Icon = profileIconMap[prof.icon] || Mail;
                    return (
                      <a
                        key={idx}
                        href={prof.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-white/10 hover:bg-netflixRed text-xs font-bold text-white flex items-center gap-2 transition-all transform hover:scale-105"
                      >
                        <Icon className="w-4 h-4 shrink-0" />
                        <span className="truncate">{prof.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

            </GlassCard>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <GlassCard tiltFactor={6} className="p-8 space-y-6 border-white/10 hover:border-netflixRed/50">
              
              <div className="space-y-1">
                <h3 className="text-xl font-display font-bold text-obsidian dark:text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Transmit an inquiry directly to Bhargavi's inbox.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-netflixRed/20 border border-netflixRed/40 text-center space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-netflixRed text-white flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Transmission Successful!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out, Bhargavi will respond shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold text-slate-300">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 text-sm text-white focus:outline-none focus:border-netflixRed"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold text-slate-300">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 text-sm text-white focus:outline-none focus:border-netflixRed"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-slate-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="AI Engineering Inquiry / Opportunity"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 text-sm text-white focus:outline-none focus:border-netflixRed"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-slate-300">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message..."
                      className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 text-sm text-white focus:outline-none focus:border-netflixRed resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-netflixRed hover:bg-netflixDarkRed text-white font-extrabold text-sm shadow-netflix-red flex items-center justify-center gap-2 transition-all transform hover:scale-105"
                  >
                    <span>Transmit Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </GlassCard>
          </div>

        </div>

      </div>
    </section>
  );
};
