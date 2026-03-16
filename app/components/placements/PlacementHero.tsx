import React from 'react';
import Image from 'next/image';

const PlacementHero: React.FC = () => {
  return (
    <section className="relative h-[40vh] min-h-[400px] w-full bg-slate-900 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/placement/placementhero.png"
          alt="Campus Recruitment Event"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/20 z-[5]" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-900/30 to-transparent z-[6]" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center">
        <div className="max-w-3xl space-y-4">

          {/* Badge - Reduced size and font weight */}
          <div className="inline-block px-3 py-1 rounded-full border border-theme-2/50 bg-theme-2/20 backdrop-blur-sm">
            <span className="text-theme-2 text-[10px] md:text-xs font-medium tracking-widest uppercase">
              Class of 2026 Recruitment
            </span>
          </div>

          {/* Title - Reduced size and font weight */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-md">
            Where <span className="text-theme-2">Talent</span> Meets Opportunity
          </h1>

          {/* Paragraph - Reduced size */}
          <p className="text-slate-200 text-base md:text-lg leading-relaxed max-w-xl drop-shadow-sm font-light">
            Connecting world-class recruiters with the industry leaders of tomorrow 
            through our dedicated and highly efficient placement cell.
          </p>

          {/* Decorative line */}
          <div className="w-16 h-1 bg-theme-2 rounded-full"></div>

        </div>
      </div>
    </section>
  );
};

export default PlacementHero;