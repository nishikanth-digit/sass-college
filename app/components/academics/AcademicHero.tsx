"use client";

import React from 'react';

const AdmissionHero: React.FC = () => {
  return (
    <section className="relative h-[40vh] w-full overflow-hidden bg-[var(--color-theme)]">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-top bg-no-repeat"
        style={{ 
          backgroundImage: `url('/academics/academic.png')`, 
        }}
      >
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-theme)]/90 via-[var(--color-theme)]/40 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative h-full max-w-7xl mx-auto px-8 flex flex-col justify-center">
        <div className="max-w-xl border-l-2 border-[var(--color-theme-2)]/50 pl-6">
          
          {/* Small, Elegant Heading */}
          <h2 className="text-sm md:text-base font-bold text-[var(--color-theme-2)] uppercase tracking-[0.3em] mb-3">
            Calendar<span className="text-[var(--color-footer-text)]">Academic</span>
          </h2>
          
          {/* Styled Paragraph Box */}
          <div className="relative group">
            {/* Minimalist Border Box */}
            <div className="absolute -inset-y-2 -inset-x-3 border border-[var(--color-footer-text)]/10 rounded bg-[var(--color-footer-text)]/[0.02] backdrop-blur-[2px]"></div>
            
            <p className="relative text-base md:text-lg text-[var(--color-footer-text)]/80 leading-relaxed font-medium italic">
               Stay informed about the institution’s academic schedule including semester

              timelines, examination periods, holidays, and important academic events.

              The academic calendar helps students and faculty effectively organize

              learning activities and institutional engagements throughout the year.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AdmissionHero;