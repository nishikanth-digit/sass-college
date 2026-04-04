import React from 'react';
import { User } from 'lucide-react';

const ChairmanMessage = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden">
      
      {/* LEFT SIDE */}
      <div className="flex-1 space-y-8 z-10 w-full">
        <div className="space-y-3">
          
          <h3 className="text-[var(--color-theme-2)] font-bold tracking-[0.2em] uppercase text-xs sm:text-sm">
            Leadership
          </h3>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-theme)] leading-[1.1]">
            College Chairman
          </h2>
        </div>

        {/* Message */}
        <p className="text-lg text-[var(--color-body-text)] leading-relaxed border-l-4 border-[var(--color-theme-2)] pl-6 italic max-w-xl">
          "Empowering the next generation of innovators through excellence in education 
          and a commitment to holistic development. We don't just build careers; 
          we build the future leaders of our global society."
        </p>

        {/* Chairman Box */}
        <div className="group flex items-center gap-5 p-5 rounded-2xl bg-white shadow-lg border border-gray-100 
                        hover:shadow-xl hover:border-[var(--color-theme-2)]/30 transition-all duration-300 cursor-pointer min-w-[280px] w-fit">

          {/* Icon */}
          <div className="flex-shrink-0 p-4 bg-[var(--color-theme-2)]/10 rounded-xl 
                          group-hover:bg-[var(--color-theme-2)] 
                          group-hover:rotate-12 transition-all duration-500">

            <User className="w-7 h-7 text-[var(--color-theme-2)] group-hover:text-white transition-colors duration-300" />

          </div>

          {/* Text */}
          <div className="flex flex-col justify-center pr-4">
            <h4 className="font-black text-xl text-[var(--color-theme)] whitespace-nowrap">
              Dr. Harrison Reed
            </h4>

            <p className="text-sm font-medium text-[var(--color-body-text)] uppercase tracking-wider mt-0.5">
              Founding Chairman
            </p>
          </div>

        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="flex-1 relative group w-full">

        {/* Decorative Glow */}
       
        <div className="relative overflow-hidden rounded-3xl shadow-sm transition-transform duration-700 hover:scale-[1.01] hover:-rotate-1">
          
          <img
            src="/college-management/chairman.png"
            alt="College Chairman"
            className="   "
          />

          {/* Glass Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-theme)]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Floating Badge */}
        <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-2xl border border-gray-100 hidden lg:flex flex-col items-center justify-center min-w-[120px]
                        animate-bounce hover:animate-none transition-all duration-300">

          <span className="text-[var(--color-theme-2)] font-black text-3xl">25+</span>

          <p className="text-[10px] text-[var(--color-body-text)] uppercase font-bold tracking-widest">
            Years of Impact
          </p>

        </div>

      </div>

    </section>
  );
};

export default ChairmanMessage;