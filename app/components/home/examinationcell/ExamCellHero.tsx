"use client";

import React from "react";
import Image from "next/image";

const ExamCellHero: React.FC = () => {
  return (
    <section className="relative h-[30vh] min-h-[400px] w-full bg-theme overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/examcell/examhero.jpg"
          alt="Examination Hall and Procedures"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-[5]" />

        {/* Gradient Overlay using Theme */}
        <div className="absolute inset-0 bg-gradient-to-r from-theme/90 via-theme/50 to-transparent z-[6]" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center">
        <div className="max-w-3xl space-y-5">

          {/* Badge */}
          <div className="inline-block px-3 py-1 rounded-full border border-theme-2/50 bg-theme-2/20 backdrop-blur-sm">
            <span className="text-theme-2 text-[10px] md:text-xs font-semibold tracking-widest uppercase">
              Academic Integrity & Excellence
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-md">
            DIGIT <span className="text-theme-2">Examination Cell</span>
          </h1>

          {/* Paragraph */}
          <p className="text-slate-200 text-base md:text-lg leading-relaxed max-w-xl font-light">
            Ensuring transparent, efficient, and seamless academic evaluation processes
            to uphold the highest standards of engineering education at DIGIT.
          </p>

          {/* Decorative line */}
          <div className="w-16 h-1 bg-theme-2 rounded-full"></div>

        </div>
      </div>
    </section>
  );
};

export default ExamCellHero;