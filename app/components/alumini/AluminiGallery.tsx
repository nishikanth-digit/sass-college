
"use client";

import React from 'react';

// --- 1. Types ---
interface Alumnus {
  id: number;
  name: string;
  role: string;
  batch: string;
  imageUrl: string;
  color: 'blue' | 'purple' | 'emerald' | 'rose';
}

// --- 2. Mock Data ---
const alumniData: Alumnus[] = [
  { id: 1, name: "Alex Rivera", role: "Senior Dev at Google", batch: "2018", color: "blue", imageUrl: "https://i.pravatar.cc/150?u=1" },
  { id: 2, name: "Sarah Chen", role: "Product Designer", batch: "2020", color: "purple", imageUrl: "https://i.pravatar.cc/150?u=2" },
  { id: 3, name: "Marcus Thorne", role: "AI Researcher", batch: "2015", color: "emerald", imageUrl: "https://i.pravatar.cc/150?u=3" },
  { id: 4, name: "Elena Rodriguez", role: "Founder of TechBloom", batch: "2019", color: "rose", imageUrl: "https://i.pravatar.cc/150?u=4" },
];

// --- 3. Helper for Dynamic Tailwind Colors ---
// This ensures Tailwind picks up the classes even if they are dynamic
const colorMap = {
  blue: {
    glow: "bg-blue-500",
    border: "border-blue-400",
    text: "text-blue-400",
    badge: "bg-blue-500/10 border-blue-500/20"
  },
  purple: {
    glow: "bg-purple-500",
    border: "border-purple-400",
    text: "text-purple-400",
    badge: "bg-purple-500/10 border-purple-500/20"
  },
  emerald: {
    glow: "bg-emerald-500",
    border: "border-emerald-400",
    text: "text-emerald-400",
    badge: "bg-emerald-500/10 border-emerald-500/20"
  },
  rose: {
    glow: "bg-rose-500",
    border: "border-rose-400",
    text: "text-rose-400",
    badge: "bg-rose-500/10 border-rose-500/20"
  }
};

// --- 4. Sub-Component: AlumniCard ---
const AluminiGallery= ({ member }: { member: Alumnus }) => {
  const theme = colorMap[member.color];

  return (
    <div className="group relative rounded-2xl bg-slate-900 p-px transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl">
      {/* Background Glow Effect */}
      <div 
        className={`absolute -inset-0.5 rounded-2xl opacity-0 blur-xl transition duration-500 group-hover:opacity-40 ${theme.glow}`}
      ></div>

      {/* Main Card Body */}
      <div className="relative flex h-full flex-col items-center overflow-hidden rounded-2xl bg-slate-950 p-8 text-center">
        {/* Avatar Section */}
        <div className="relative mb-6 h-32 w-32">
          {/* Animated Orbit Ring */}
          <div className={`absolute inset-[-8px] rounded-full border-2 border-dashed ${theme.border} opacity-0 transition-all duration-700 group-hover:rotate-180 group-hover:opacity-50`}></div>
          
          <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-slate-800 transition-transform duration-500 group-hover:border-slate-700">
            <img
              src={member.imageUrl}
              alt={member.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        {/* Info Section */}
        <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-white/90">
          {member.name}
        </h3>
        <p className="mt-2 text-sm font-medium text-slate-400 uppercase tracking-wider">
          {member.role}
        </p>
        
        {/* Badge */}
        <div className={`mt-6 rounded-full px-4 py-1 text-xs font-bold ${theme.text} ${theme.badge} border`}>
          CLASS OF {member.batch}
        </div>

        {/* Decorative Bottom Bar */}
        <div className={`absolute bottom-0 h-1 w-0 transition-all duration-500 group-hover:w-full ${theme.glow}`}></div>
      </div>
    </div>
  );
};

// --- 5. Main Page Component ---
export default function AlumniGallery() {
  return (
    <div className="min-h-screen bg-[#020617] py-24 px-6 selection:bg-purple-500/30">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="relative mb-20 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-purple-600/10 blur-[120px] pointer-events-none"></div>
          
          <h2 className="text-sm font-bold tracking-[0.3em] text-purple-500 uppercase mb-4">
            Network Directory
          </h2>
          <h1 className="text-5xl font-black tracking-tight text-white md:text-7xl">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-rose-400">Legends.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 leading-relaxed">
            From Silicon Valley to independent startups, our alumni are shaping the future of technology and design.
          </p>
        </div>

        {/* Grid System */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {alumniData.map((member) => (
            <AluminiGallery key={member.id} member={member} />
          ))}
        </div>

        {/* Simple Footer/Call to action */}
        <div className="mt-24 text-center">
          <button className="rounded-full bg-white px-8 py-3 text-sm font-bold text-black transition-all hover:bg-slate-200 hover:scale-105 active:scale-95">
            Join the Alumni Network
          </button>
        </div>
      </div>
    </div>
  );
}