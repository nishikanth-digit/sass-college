"use client";

import React from 'react';
import { Trophy, MapPin, Users, Medal, Star } from 'lucide-react';

const EVENTS = [
  { title: "Inter-College Cricket", winner: "Dept of EEE", date: "Feb 2026", loc: "Main Ground", icon: <Trophy size={20} /> },
  { title: "Basketball League", winner: "Team Titans", date: "Jan 2026", loc: "Indoor Court", icon: <Users size={20} /> },
  { title: "Badminton Open", winner: "Rahul & Team", date: "Jan 2026", loc: "Sports Complex", icon: <Medal size={20} /> },
  { title: "Annual Marathon", winner: "Athletics Dept", date: "Dec 2025", loc: "Campus Road", icon: <Star size={20} /> },
  { title: "Table Tennis Cup", winner: "Mechanical Eng", date: "Dec 2025", loc: "Student Center", icon: <Trophy size={20} /> },
  { title: "Chess Tournament", winner: "Computer Science", date: "Nov 2025", loc: "Library Hall", icon: <Medal size={20} /> },
];

export default function SportsGrid() {
  return (
   <section className="min-h-screen bg-[var(--theme-bg-light)] text-slate-700 py-24 px-6 font-sans">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--theme-color2)]/10 blur-[120px] rounded-full" />
      <div className="max-w-7xl mx-auto px-4">
     
                 {/* Header */}
        <div className="mb-16 space-y-4 max-w-3xl">
          <div>
            <span className="text-[var(--theme-color2)] text-[10px] font-black uppercase tracking-[0.2em] bg-[var(--theme-color2)]/10 px-3 py-1.5 rounded border border-[var(--theme-color2)]/20">
             Campus Sports Meeting
            </span>

            <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight tracking-tight text-[var(--theme-color)]">
              Sports Records <span className="text-[var(--color-theme)]/60 italic font-medium">
                2025 - 2026
              </span>
               
            </h2>
          </div>
        </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENTS.map((event, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-3xl border border-[var(--color-theme-2)]/10 bg-white/[0.02] hover:bg-[var(--color-theme-2)]/5 hover:border-[var(--color-theme-2)]/30 transition-all duration-500 hover:-translate-y-2"
            >
       
              {/* Accent Line */}
              <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-theme-2)]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-start justify-between mb-6">
                
                <div className="p-3 rounded-2xl bg-[var(--color-theme-2)]/10 text-[var(--color-theme-2)] group-hover:bg-[var(--color-theme-2)]/20 transition-colors">
                  {event.icon}
                </div>

                <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest group-hover:text-[var(--color-theme-2)]">
                  {event.date}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--color-theme-2)] transition-colors">
                {event.title}
              </h3>

              <p className="text-sm text-theme/70 mb-6 flex items-center gap-2">
                <span className="text-theme font-semibold">Winner:</span> {event.winner}
              </p>

              <div className="flex items-center gap-2 text-xs text-theme/50 uppercase tracking-wider">
                <MapPin size={12} className="text-[var(--color-theme-2)]" />
                {event.loc}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}