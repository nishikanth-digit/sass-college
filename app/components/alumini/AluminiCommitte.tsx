"use client";

import React, { useState, MouseEvent } from 'react';

interface Member {
  id: number;
  name: string;
  role: string;
  batch: string;
  status: string;
}

const members: Member[] = [
  { id: 1, name: "Dr. Aris Thorne", role: "Chairperson", batch: "1998", status: "Active" },
  { id: 2, name: "Sarah Jenkins", role: "Secretary", batch: "2005", status: "Active" },
  { id: 3, name: "Marcus Vane", role: "Treasury", batch: "2012", status: "On Leave" },
  { id: 4, name: "Elena Frost", role: "Public Relations", batch: "2010", status: "Active" },
];

export default function AlumniCommitte() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Handles the high-end "Spotlight" hover effect
  const handleMouseMove = (e: MouseEvent<HTMLTableRowElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="min-h-screen bg-[#050505] p-8 flex items-center justify-center font-sans selection:bg-blue-500/30">
      <div className="w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl">
        
        {/* Table Header Section */}
        <div className="px-8 py-6 border-b border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent">
          <h2 className="text-xl font-medium text-white tracking-tight">Executive Committee</h2>
          <p className="text-sm text-gray-500">Managing the global alumni network and endowment funds.</p>
        </div>

        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="text-xs uppercase tracking-[0.2em] text-gray-500 bg-white/[0.01]">
              <th className="px-8 py-4 font-semibold">Member Details</th>
              <th className="px-8 py-4 font-semibold">Designation</th>
              <th className="px-8 py-4 font-semibold">Class</th>
              <th className="px-8 py-4 font-semibold text-right">Status</th>
            </tr>
          </thead>
          
          <tbody className="divide-y divide-white/5">
            {members.map((member) => (
              <tr
                key={member.id}
                onMouseMove={handleMouseMove}
                className="group relative transition-colors duration-500 hover:bg-white/[0.02]"
                style={{
                  // Custom CSS properties for the spotlight effect
                  cursor: 'pointer',
                } as React.CSSProperties}
              >
                {/* Spotlight Overlay: Pure CSS interaction */}
                <td className="relative px-8 py-6 transition-transform duration-300 group-hover:translate-x-1">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-200 group-hover:text-blue-400 transition-colors duration-300">
                      {member.name}
                    </span>
                    <span className="text-xs text-gray-600 group-hover:text-gray-400">ID: #00{member.id}</span>
                  </div>
                </td>

                <td className="px-8 py-6">
                  <span className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
                    {member.role}
                  </span>
                </td>

                <td className="px-8 py-6">
                  <span className="text-sm font-mono text-gray-500 group-hover:text-blue-300/70 transition-colors">
                    {member.batch}
                  </span>
                </td>

                <td className="px-8 py-6 text-right">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.03] px-3 py-1 group-hover:border-blue-500/30 transition-all duration-500">
                    <span className={`h-1.5 w-1.5 rounded-full ${member.status === 'Active' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-orange-500'}`} />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 group-hover:text-gray-200">
                      {member.status}
                    </span>
                  </div>
                </td>

                {/* Animated "Border Shine" on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                   <div 
                    className="absolute inset-px bg-gradient-to-r from-blue-500/10 via-transparent to-transparent"
                    style={{
                      maskImage: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, black 20%, transparent 80%)`,
                      WebkitMaskImage: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, black 20%, transparent 80%)`,
                    }}
                   />
                </div>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Footer Accent */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-50" />
      </div>
    </div>
  );
}