"use client";

import React from "react";

const teamData = [
  {
    name: "Dr. Aris Thorne",
    role: "Director of Placements",
    tag: "150+ Corporate Partners",
    desc: "A veteran in corporate relations, Dr. Thorne bridges the gap between academia and Fortune 500 companies.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Sarah Valerius",
    role: "Lead Technical Coach",
    tag: "FAANG Specialist",
    desc: "Oversees technical bootcamp tracks, specializing in System Design and Competitive Programming preparation.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Jameson Kross",
    role: "Global Outreach Head",
    tag: "Intl. Placements",
    desc: "Focuses on securing international opportunities in tech hubs like Singapore, Berlin, and San Francisco.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
  },
];

export default function PlacementTeam() {
  return (
    <div className="min-h-screen bg-theme text-slate-200 py-24 px-6 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16 space-y-4 max-w-3xl"> {/* Added max-w here for title width control */}
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-theme-2"></div>
            <span className="text-theme-2 uppercase tracking-[0.3em] text-xs font-bold">
              The Placement Team
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-light text-white tracking-tighter leading-tight">
            Architects of <br />
            <span className="font-serif italic text-theme-2">
              Future Careers.
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {teamData.map((member, idx) => (
            <div
              key={idx}
              className="group relative h-[450px] overflow-hidden bg-slate-900 border-r border-b border-slate-800" 
              /* Adjusted height from 600px to 450px */
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1000ms]"
                style={{ backgroundImage: `url(${member.img})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-theme via-theme/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-theme-2/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 mb-3 text-[10px] font-bold uppercase tracking-widest text-theme-2 border border-theme-2/30 bg-theme-2/10 rounded-full">
                    {member.tag}
                  </span>

                  <h3 className="text-2xl font-bold text-white mb-1">
                    {member.name}
                  </h3>

                  <p className="text-theme-2 text-sm font-medium tracking-wide">
                    {member.role}
                  </p>
                </div>

                {/* Hover content */}
                <div className="max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-700 overflow-hidden">
                  <p className="text-slate-300 text-xs leading-relaxed mt-4 border-l-2 border-theme-2 pl-4">
                    {member.desc}
                  </p>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-theme-2/10 -mr-10 -mt-10 rotate-45 group-hover:bg-theme-2/20 transition-colors" />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-end gap-6 border-t border-slate-800 pt-8">
          <p className="text-slate-400 text-sm max-w-md">
            Our team works 24/7 to ensure every student finds their place in the
            global tech ecosystem through rigorous training and mentorship.
          </p>
        </div>
      </div>
    </div>
  );
}