'use client';

import React from 'react';
import Image from 'next/image';

interface Partner {
  id: number;
  name: string;
  logoUrl: string;
}

const partners: Partner[] = [
  { id: 1, name: 'Google', logoUrl: '/logos/google.svg' },
  { id: 2, name: 'Microsoft', logoUrl: '/logos/microsoft.svg' },
  { id: 3, name: 'Amazon', logoUrl: '/logos/amazon.svg' },
  { id: 2, name: 'Meta', logoUrl: '/logos/meta.svg' },
  { id: 5, name: 'Netflix', logoUrl: '/logos/netflix.svg' },
  { id: 6, name: 'Apple', logoUrl: '/logos/apple.svg' },
  { id: 7, name: 'Stripe', logoUrl: '/logos/stripe.svg' },
  { id: 8, name: 'Airbnb', logoUrl: '/logos/airbnb.svg' },
];

export default function PartnerSlider() {
  // Duplicate array to achieve an uninterrupted, endless loop layout
  const doubledPartners = [...partners, ...partners];

  return (
    <section className="relative bg-theme py-16 sm:py-24 overflow-hidden select-none animate-fade-in-up">
      
      {/* Self-contained custom CSS injection for the infinite loop logic */}
      <style jsx global>{`
        @keyframes customInfiniteScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-custom-scroll {
          animation: customInfiniteScroll 35s linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-theme-2 mb-4 border border-white/10 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-theme-2 animate-pulse" />
            Our Corporate Network
          </span>
          <h2 className="text-3xl font-black tracking-tight text-footer-text sm:text-4xl">
            Top Placement Partners
          </h2>
          <p className="mt-3 text-sm sm:text-base text-footer-text/70 max-w-xl mx-auto font-medium">
            Accelerate your career trajectories with absolute industry giants. Hover to pause.
          </p>
        </div>

        {/* Slider Canvas Wrapper */}
        <div className="relative w-full overflow-hidden">
          
          {/* Edge Smooth Overlays blended with --theme-color */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-40 bg-gradient-to-r from-theme via-theme/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-40 bg-gradient-to-l from-theme via-theme/80 to-transparent z-10 pointer-events-none" />

          {/* Autoplay CSS Slider Track */}
          <div className="flex w-max gap-4 sm:gap-8 py-4 animate-custom-scroll hover:[animation-play-state:paused]">
            {doubledPartners.map((partner, index) => (
              <div 
                key={`${partner.id}-${index}`} 
                className="flex items-center justify-center w-[150px] sm:w-[200px] shrink-0"
              >
                {/* Premium Card: Defaults to light gray border, shifts to theme-2 pink on hover */}
                <div className="w-full h-16 sm:h-22 px-5 flex items-center justify-center bg-white/[0.02] border border-slate-700/60 rounded-xl shadow-xl transition-all duration-300 ease-out active:scale-95 sm:hover:scale-105 sm:hover:border-theme-2 sm:hover:bg-white/[0.05] group relative overflow-hidden">
                  
                  {/* Neon pink ambient background glow that wakes up on active/hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 bg-gradient-to-br from-theme-2/15 via-transparent to-transparent transition-opacity duration-300 pointer-events-none" />

                  <Image
                    src={partner.logoUrl}
                    alt={`${partner.name} logo`}
                    width={130}
                    height={50}
                    className="object-contain max-h-[55%] w-auto filter brightness-0 invert opacity-40 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-105 group-active:opacity-100 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
                    priority
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}