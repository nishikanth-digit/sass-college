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
    <div className="min-h-screen bg-[var(--theme-bg-light)] text-slate-700 py-24 px-6 font-sans">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="mb-16 space-y-4 max-w-3xl">
          <div>
            <span className="text-[var(--theme-color2)] text-[10px] font-black uppercase tracking-[0.2em] bg-[var(--theme-color2)]/10 px-3 py-1.5 rounded border border-[var(--theme-color2)]/20">
              The Placement Team
            </span>

            <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight tracking-tight text-[var(--theme-color)]">
              Architects of <br />
              <span className="text-[var(--color-theme)]/60 italic font-medium">
                Future Careers.
              </span>
            </h2>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {teamData.map((member, idx) => (
            <div
              key={idx}
              className="group relative h-[450px] overflow-hidden bg-white border-r border-b border-slate-200"
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1000ms]"
                style={{ backgroundImage: `url(${member.img})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--theme-color)] via-[var(--theme-color)]/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-[var(--theme-color2)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 mb-3 text-[10px] font-bold uppercase tracking-widest text-[var(--theme-color2)] border border-[var(--theme-color2)]/30 bg-[var(--theme-color2)]/10 rounded-full">
                    {member.tag}
                  </span>

                  <h3 className="text-2xl font-bold text-white mb-1">
                    {member.name}
                  </h3>

                  <p className="text-[var(--theme-color2)] text-sm font-medium tracking-wide">
                    {member.role}
                  </p>
                </div>

                {/* Hover content */}
                <div className="max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-700 overflow-hidden">
                  <p className="text-slate-200 text-xs leading-relaxed mt-4 border-l-2 border-[var(--theme-color2)] pl-4">
                    {member.desc}
                  </p>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-[var(--theme-color2)]/10 -mr-10 -mt-10 rotate-45 group-hover:bg-[var(--theme-color2)]/20 transition-colors" />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-end gap-6 border-t border-slate-300 pt-8">
          <p className="text-slate-500 text-sm max-w-md">
            Our team works 24/7 to ensure every student finds their place in the
            global tech ecosystem through rigorous training and mentorship.
          </p>
        </div>
      </div>
    </div>
  );
}