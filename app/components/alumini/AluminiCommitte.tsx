"use client";

import React, { useState, useEffect, MouseEvent } from 'react';
import { Search, ExternalLink, Calendar, Users, Award, Briefcase } from 'lucide-react';

const alumniActivities = [
  {
    id: 1,
    date: "Dec 15, 2025",
    category: "Reunion",
    title: "Annual Grand Alumni Meet 2025 - Silver Jubilee Celebration",
    type: "Registration",
    link: "#"
  },
  {
    id: 2,
    date: "Nov 05, 2025",
    category: "Mentorship",
    title: "Industry Expert Talk: Navigating Silicon Valley Careers",
    type: "Webinar",
    link: "#"
  },
  {
    id: 3,
    date: "Oct 28, 2025",
    category: "Achievement",
    title: "Alumni Spotlight: Dr. Sarah Chen wins Global Innovator Award",
    type: "Article",
    link: "#"
  },
  {
    id: 4,
    date: "Oct 12, 2025",
    category: "Giving",
    title: "Campus Infrastructure Fund: Legacy Hall Contribution Drive",
    type: "Donation",
    link: "#"
  }
];

export default function AlumniPortal() {
  const [searchTerm, setSearchTerm] = useState("");
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => setMounted(true), []);

  const handleMouseMove = (e: MouseEvent<HTMLTableRowElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const filteredData = alumniActivities.filter(n =>
    n.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    n.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!mounted) return <div className="min-h-screen bg-gray-100" />;

  return (
    <div className="min-h-screen bg-[#F8F9FA] p-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Main Card Container */}
        <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
          
          {/* Header Section */}
          <div className="px-8 py-10 border-b border-gray-100 bg-gradient-to-br from-white to-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Users className="text-pink-600" size={28} />
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
                  Alumni Association
                </h2>
              </div>
              <p className="text-sm text-gray-500 font-medium">
                Connecting our past, present, and future legacy.
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-500" size={18} />
              <input
                type="text"
                placeholder="Search alumni events or news..."
                className="w-full bg-white text-gray-900 border border-gray-200 rounded-xl py-2.5 pl-11 pr-4 text-sm focus:outline-none focus:ring-4 focus:ring-pink-500/10 focus:border-pink-500/50 transition-all"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Table Container */}
          <div className="w-full cursor-default overflow-hidden">
            <table className="w-full table-fixed border-collapse text-left">
              <thead>
                <tr className="text-xs uppercase tracking-[0.2em] text-gray-400 bg-gray-50/50">
                  <th className="w-1/6 px-8 py-5 font-bold">Timeline</th>
                  <th className="w-1/6 px-8 py-5 font-bold">Focus Area</th>
                  <th className="w-3/6 px-8 py-5 font-bold">Latest Updates</th>
                  <th className="w-1/6 px-8 py-5 font-bold text-right">Action</th>
                </tr>
              </thead>
              
              <tbody className="divide-y divide-gray-100">
                {filteredData.map((item) => (
                  <tr
                    key={item.id}
                    onMouseMove={handleMouseMove}
                    className="group relative transition-colors duration-300 hover:bg-pink-50/30 cursor-pointer"
                  >
                    {/* Date Column */}
                    <td className="relative overflow-hidden px-8 py-6">
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                        style={{
                          background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(219, 39, 119, 0.04), transparent 80%)`,
                        }}
                      />
                      <div className="flex items-center gap-2 relative z-10 text-sm text-gray-600 group-hover:text-pink-700 transition-colors">
                        <Calendar size={14} />
                        <span className="font-medium">{item.date}</span>
                      </div>
                    </td>

                    {/* Category Column */}
                    <td className="px-8 py-6 relative z-10">
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gray-100 text-gray-600 group-hover:bg-pink-100 group-hover:text-pink-600 transition-all">
                        {item.category}
                      </span>
                    </td>

                    {/* Content Column */}
                    <td className="px-8 py-6 relative z-10">
                      <div className="flex flex-col gap-1 transition-transform duration-300 group-hover:translate-x-1">
                        <span className="text-sm font-semibold text-gray-800 group-hover:text-pink-600 transition-colors">
                          {item.title}
                        </span>
                        <div className="flex items-center gap-2 text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                          {item.category === 'Mentorship' && <Briefcase size={10} />}
                          {item.category === 'Achievement' && <Award size={10} />}
                          Entry Type: {item.type}
                        </div>
                      </div>
                    </td>

                    {/* Link Column */}
                    <td className="px-8 py-6 text-right relative z-10">
                      <a 
                        href={item.link}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-pink-600 hover:bg-pink-600 hover:text-white px-4 py-2 rounded-full border border-pink-100 hover:border-pink-600 transition-all"
                      >
                        View <ExternalLink size={14} />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Empty State */}
            {filteredData.length === 0 && (
              <div className="py-24 text-center">
                <Users size={48} className="mx-auto text-gray-200 mb-4" />
                <p className="text-gray-400 text-sm font-medium">No alumni records match your search.</p>
              </div>
            )}
          </div>

          {/* Bottom Accent */}
          <div className="h-1.5 w-full bg-gradient-to-r from-pink-100 via-pink-500/20 to-pink-100" />
        </div>
      </div>
    </div>
  );
}