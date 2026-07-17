'use client';

import React from 'react';
import { ArrowRight, Play, Compass, Search, Sparkles } from 'lucide-react';

export default function AbroadHero() {
  const countries = ['UK', 'USA', 'Canada', 'Germany'];

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-white font-sans antialiased">
      
      {/* Background Ambience Layout Tokens */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft Pink Accent Glow Top-Right */}
        <div className="absolute -top-32 -right-32 w-[550px] h-[550px] bg-[var(--theme-color2)]/4 rounded-full blur-[130px]" />
        {/* Soft Corporate Navy Glow Bottom-Left */}
        <div className="absolute -bottom-32 -left-32 w-[550px] h-[550px] bg-[var(--theme-color)]/3 rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block: Clean Typography Framework */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Live Indicator Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[var(--theme-color2)]/20 bg-[var(--theme-color2)]/5 text-xs font-bold uppercase tracking-wider text-[var(--theme-color2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--theme-color2)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--theme-color2)]"></span>
              </span>
              Admissions Open 2026
            </div>

            {/* Display Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-[var(--theme-color)]">
              Shape Your <br />
              <span className="text-[var(--theme-color2)] font-black">Global</span> Destiny.
            </h1>

            {/* Content Body text */}
            <p className="text-sm sm:text-base text-[var(--body-text-color)] max-w-xl leading-relaxed opacity-90">
              We provide a seamless bridge to the world's most prestigious universities. 
              From Ivy Leagues to Global Research Hubs, your journey is curated by senior consultants.
            </p>

            {/* Main Conversion Group */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button className="group flex items-center justify-center gap-3 bg-[var(--theme-color)] hover:bg-[var(--theme-color)]/95 text-white px-8 py-4 rounded-xl font-bold text-sm transition-all shadow-md shadow-[var(--theme-color)]/10 active:scale-[0.98] cursor-pointer">
                Start Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button className="group flex items-center justify-center gap-3 border border-slate-200/80 bg-white hover:border-[var(--theme-color2)]/40 hover:shadow-lg hover:shadow-theme/5 px-8 py-4 rounded-xl font-bold text-sm transition-all text-[var(--theme-color)] active:scale-[0.98] cursor-pointer">
                <div className="w-5 h-5 rounded-full bg-[var(--theme-color2)] text-white flex items-center justify-center shadow-xs">
                  <Play className="w-2 h-2 fill-current translate-x-[0.5px]" />
                </div>
                Student Stories
              </button>
            </div>

            {/* Social Proof Row */}
            <div className="pt-6 border-t border-slate-100 flex items-center gap-4 sm:gap-6">
              <div className="flex -space-x-2.5">
                {[
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80',
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80',
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80'
                ].map((url, idx) => (
                  <img 
                    key={idx} 
                    src={url} 
                    alt="Active Student" 
                    className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-xs" 
                  />
                ))}
                <div className="w-9 h-9 rounded-full border-2 border-white bg-[var(--theme-color2)] flex items-center justify-center text-[10px] font-bold text-white shadow-xs">
                  5k+
                </div>
              </div>
              <p className="text-xs font-semibold text-slate-500 leading-normal">
                Join <span className="text-[var(--theme-color)] font-bold">5,000+ students</span> already <br className="hidden sm:inline"/> studying in top tier worldwide universities.
              </p>
            </div>
          </div>

          {/* Right Block: The Premium "Course Finder" Bento Box */}
          <div className="lg:col-span-5 w-full">
            <div className="relative">
              {/* Box Glow Shadow Ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[var(--theme-color2)]/10 to-transparent rounded-[24px] blur-xl opacity-60 pointer-events-none" />
              
              <div className="relative bg-white border border-slate-200/60 rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-xl hover:shadow-theme/5 transition-all duration-300">
                
                {/* Module Block Card Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                  <div>
                    <h3 className="text-lg font-bold text-[var(--theme-color)] tracking-tight">Course Finder</h3>
                    <p className="text-xs text-slate-400 mt-0.5">Search over 12,000+ programs</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[var(--theme-bg-light)] flex items-center justify-center text-[var(--theme-color2)]">
                    <Search size={18} />
                  </div>
                </div>

                {/* Destination Quick Selector Grid */}
                <div className="space-y-6">
                  <div className="space-y-2.5">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      <Sparkles className="w-3 h-3 text-[var(--theme-color2)]" />
                      Select Destination
                    </span>
                    <div className="grid grid-cols-2 gap-2.5">
                      {countries.map((country) => (
                        <button 
                          key={country} 
                          className="py-3 px-4 rounded-xl border border-slate-200/60 bg-[var(--theme-bg-light)] text-sm font-bold text-[var(--theme-color)] hover:border-[var(--theme-color2)] hover:bg-white hover:text-[var(--theme-color2)] hover:shadow-xs transition-all duration-200 cursor-pointer"
                        >
                          {country}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submission Trigger */}
                  <button className="w-full py-4 bg-[var(--theme-color2)] hover:bg-[var(--theme-color2)]/95 text-white rounded-xl text-sm font-bold transition-all shadow-md shadow-[var(--theme-color2)]/10 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]">
                    <Compass size={16} />
                    Explore Programs
                  </button>
                </div>

                {/* Static Partner Trust Counters */}
                <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-3 gap-2">
                  <div className="text-center">
                    <p className="text-base font-extrabold text-[var(--theme-color)]">98%</p>
                    <p className="text-[9px] uppercase font-bold text-slate-400 tracking-wider mt-0.5">Visa Success</p>
                  </div>
                  <div className="text-center border-x border-slate-100 px-1">
                    <p className="text-base font-extrabold text-[var(--theme-color)]">QS 100</p>
                    <p className="text-[9px] uppercase font-bold text-slate-400 tracking-wider mt-0.5">Univ Partners</p>
                  </div>
                  <div className="text-center">
                    <p className="text-base font-extrabold text-[var(--theme-color)]">24h</p>
                    <p className="text-[9px] uppercase font-bold text-slate-400 tracking-wider mt-0.5">Response Time</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}