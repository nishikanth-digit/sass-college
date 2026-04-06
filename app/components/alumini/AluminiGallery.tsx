"use client";

import React from 'react';

// --- 1. Types ---
interface Alumnus {
  id: number;
  name: string;
  role: string;
  batch: string;
  imageUrl: string;
  color: 'theme-2' | 'purple' | 'blue';
}

// --- 2. Mock Data ---
const alumniData: Alumnus[] = [
  { id: 1, name: "Alex Rivera", role: "Senior Dev at Google", batch: "2018", color: "blue", imageUrl: "https://i.pravatar.cc/150?u=1" },
  { id: 2, name: "Sarah Chen", role: "Product Designer", batch: "2020", color: "purple", imageUrl: "https://i.pravatar.cc/150?u=2" },
  { id: 3, name: "Marcus Thorne", role: "AI Researcher", batch: "2015", color: "theme-2", imageUrl: "https://i.pravatar.cc/150?u=3" }, 
  { id: 4, name: "Elena Rodriguez", role: "Founder of TechBloom", batch: "2019", color: "theme-2", imageUrl: "https://i.pravatar.cc/150?u=4" },
];

const colorMap = {
  blue: {
    glow: "bg-blue",
    border: "border-blue/50",
    text: "text-blue",
    badge: "bg-blue/10 border-blue/20"
  },
  purple: {
    glow: "bg-purple",
    border: "border-purple/50",
    text: "text-purple",
    badge: "bg-purple/10 border-purple/20"
  },
  "theme-2": {
    glow: "bg-theme-2",
    border: "border-theme-2/50",
    text: "text-theme-2",
    badge: "bg-theme-2/10 border-theme-2/20"
  }
};

const AlumniCard = ({ member }: { member: Alumnus }) => {
  const theme = colorMap[member.color];

  return (
    <div className="group relative rounded-2xl bg-white p-px transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl">
      <div className={`absolute -inset-0.5 rounded-2xl opacity-0 blur-xl transition duration-500 group-hover:opacity-40 ${theme.glow}`}></div>

      <div className="relative flex h-full flex-col items-center overflow-hidden rounded-2xl bg-theme p-8 text-center border border-white/5">
        <div className="relative mb-6 h-32 w-32">
          <div className={`absolute inset-[-8px] rounded-full border-2 border-dashed ${theme.border} opacity-0 transition-all duration-700 group-hover:rotate-180 group-hover:opacity-50`}></div>
          
          <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white/10 transition-transform duration-500 group-hover:border-white/20">
            <img
              src={member.imageUrl}
              alt={member.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        <h3 className="text-xl font-bold text-white transition-colors duration-300">
          {member.name}
        </h3>
        <p className="mt-2 text-sm font-medium text-slate-400 uppercase tracking-wider">
          {member.role}
        </p>
        
        <div className={`mt-6 rounded-full px-4 py-1 text-xs font-bold ${theme.text} ${theme.badge} border`}>
          CLASS OF {member.batch}
        </div>

        <div className={`absolute bottom-0 h-1 w-0 transition-all duration-500 group-hover:w-full ${theme.glow}`}></div>
      </div>
    </div>
  );
};

export default function AlumniGallery() {
  return (
    <section className="bg-theme py-20 px-6 md:px-16 overflow-hidden min-h-screen relative">
      
      {/* Background Glow (Styled like the Valuation Procedure) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[var(--theme-color2)]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[var(--theme-color2)]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header (Strictly following the Valuation Procedure design) */}
        <div className="flex flex-col items-center text-center mb-20 space-y-4">
          
          <div className="inline-block px-4 py-1 bg-[var(--theme-color2)]/10 border border-[var(--theme-color2)]/30 rounded-full text-[var(--theme-color2)] text-xs font-semibold uppercase tracking-widest">
            Network Directory
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Meet Our{" "}
            <span className="text-white italic">
              Legends
            </span>
          </h1>

          <p className="max-w-2xl text-gray-400 text-lg leading-relaxed">
            From Silicon Valley to independent startups, our alumni are shaping the 
            future of technology and design through innovation and leadership.
          </p>
        </div>

        {/* Grid System */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {alumniData.map((member) => (
            <AlumniCard key={member.id} member={member} />
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-24 text-center">
          <button className="rounded-full bg-theme-2 px-8 py-3 text-sm font-bold text-white transition-all hover:brightness-110 hover:scale-105 active:scale-95 shadow-lg shadow-theme-2/20">
            Join the Alumni Network
          </button>
        </div>
      </div>
    </section>
  );
}