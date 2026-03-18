"use client";

import React from 'react';

const InformationTechnologyHero: React.FC = () => {
  return (
    <section className="relative h-[40vh] w-full overflow-hidden bg-[var(--color-theme)]">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-top  bg-no-repeat"
        style={{ 
          backgroundImage: `url('/departments/ithero.jpg')`, 
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
           Information <span className="text-[var(--color-footer-text)]">Technology</span>
          </h2>
          
          {/* Styled Paragraph Box */}
          <div className="relative group">
            {/* Minimalist Border Box */}
            <div className="absolute -inset-y-2 -inset-x-3 border border-[var(--color-footer-text)]/10 rounded bg-[var(--color-footer-text)]/[0.02] backdrop-blur-[2px]"></div>
            
            <p className="relative text-base md:text-lg text-[var(--color-footer-text)]/80 leading-relaxed font-medium italic">
           Information Technology (IT) is the use of computers, storage, networking, and other physical devices to create, process, store, secure, and exchange all forms of electronic data.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InformationTechnologyHero;