'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Check, Users, Award, Building2 
} from 'lucide-react';

const About = () => {

  const stats = [
    { label: "Years Excellence", value: 15, suffix: "+", icon: <Building2 size={18} /> },
    { label: "Students Enrolled", value: 5000, suffix: "+", icon: <Users size={18} /> },
    { label: "Success Rate", value: 98, suffix: "%", icon: <Award size={18} /> }
  ];

  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const intervalTime = 20;
    const steps = duration / intervalTime;

    const intervals = stats.map((stat, index) => {
      const increment = stat.value / steps;

      return setInterval(() => {
        setCounts(prev => {
          const updated = [...prev];
          if (updated[index] < stat.value) {
            updated[index] = Math.min(
              updated[index] + increment,
              stat.value
            );
          }
          return updated;
        });
      }, intervalTime);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section
      id="about"
      className="py-16 bg-[var(--theme-bg-light)] text-[var(--color-theme)] relative overflow-hidden"
    >

      {/* Soft Accent Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[var(--color-theme-2)]/10 rounded-full blur-[120px] -z-10" />

      <div className="mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* Left Content */}
          <div className="space-y-6">

            <div>
              <span className="text-[var(--color-theme-2)] text-[10px] font-black uppercase tracking-[0.2em] bg-[var(--color-theme-2)]/10 px-3 py-1.5 rounded border border-[var(--color-theme-2)]/20">
                Empowering Excellence
              </span>

              <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-tight tracking-tight text-[var(--color-theme)]">
                Shaping the Next <br /> 
                <span className="text-[var(--color-theme)]/60 italic font-medium">
                  Generation of Leaders.
                </span>
              </h2>
            </div>

            <p className="text-[var(--color-theme)]/70 text-sm md:text-base leading-relaxed max-w-lg">
              Founded on the principles of innovation and academic rigor, our institution serves as a 
              catalyst for transformative learning. We inspire students to 
              challenge the status quo and build the future.
            </p>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { title: "World-Class Faculty" },
                { title: "Research Excellence" },
                { title: "Global Partnerships" },
                { title: "Modern Campus" }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[var(--color-theme)]/10 hover:border-[var(--color-theme-2)]/40 transition-colors duration-300 group shadow-sm"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded bg-[var(--color-theme-2)] flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-[var(--color-theme)]/80">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full flex justify-center lg:justify-end transition-all duration-700 hover:scale-[1.02]">
            <div className="relative w-full max-w-lg aspect-[16/10] rounded-[2rem] overflow-hidden border border-[var(--color-theme)]/10 shadow-xl group bg-white">
              <Image 
                src="/about/about.jpg" 
                alt="About"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent opacity-40" />
            </div>
          </div>
        </div>

        {/* Counter Section */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[var(--color-theme)]/10">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="group flex flex-col items-center sm:items-start p-6 rounded-2xl bg-white border border-[var(--color-theme)]/10 hover:shadow-md transition-all duration-300"
            >
              <div className="p-3 rounded-lg bg-[var(--color-theme-2)]/10 text-[var(--color-theme-2)] mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>

              <div className="text-3xl font-bold tracking-tight text-[var(--color-theme)] mb-1">
                {Math.floor(counts[idx])}
                <span className="text-[var(--color-theme-2)] pl-1">
                  {stat.suffix}
                </span>
              </div>

              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-theme)]/60">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;