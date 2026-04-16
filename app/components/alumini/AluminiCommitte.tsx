"use client";

import React, { useState, useEffect, MouseEvent } from 'react';
import { Search, Download, Calendar, Inbox } from 'lucide-react';

const notifications = [
  {
    id: 1,
    date: "Oct 24, 2025",
    category: "B.Tech",
    title: "Semester End Examination Results - Regular/Supplementary",
    type: "PDF",
    link: "#"
  },
  {
    id: 2,
    date: "Oct 20, 2025",
    category: "MBA",
    title: "Time Table for Mid-Term Examinations November 2025",
    type: "DOCX",
    link: "#"
  },
  {
    id: 3,
    date: "Oct 15, 2025",
    category: "General",
    title: "Fee Payment Deadline Extension for Autonomous Students",
    type: "PDF",
    link: "#"
  },
  {
    id: 4,
    date: "Oct 10, 2025",
    category: "Pharmacy",
    title: "Practical Examination Schedule - Year III",
    type: "PDF",
    link: "#"
  }
];

export default function ExaminationNotification() {
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

  const filteredData = notifications.filter(n =>
    n.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    n.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Background is set to a neutral gray as requested
  if (!mounted) return <div className="min-h-screen bg-gray-100" />;

  return (
    <div className="min-h-screen bg-[#F4F4F4] p-8 font-sans selection:bg-theme-2/20">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Container - Light theme background */}
        <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
          
          {/* Header Section */}
          <div className="px-8 py-10 border-b border-gray-100 bg-gradient-to-b from-gray-50 to-white flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
                Exam Notifications
              </h2>
              <p className="mt-2 text-sm text-gray-500 font-medium">
                Official autonomous examination portal and document repository.
              </p>
            </div>

            {/* Search Bar - Adjusted for light theme */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-theme-2" size={18} />
              <input
                type="text"
                placeholder="Search records..."
                className="w-full bg-gray-50 text-gray-900 border border-gray-200 rounded-xl py-2.5 pl-11 pr-4 text-sm focus:outline-none focus:border-theme-2/50 focus:ring-4 focus:ring-theme-2/5 transition-all"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Table Container */}
          <div className="w-full cursor-default overflow-hidden">
            <table className="w-full table-fixed border-collapse text-left">
              <thead>
                <tr className="text-xs uppercase tracking-[0.2em] text-gray-400 bg-gray-50/50">
                  <th className="w-1/6 px-8 py-5 font-bold">Release Date</th>
                  <th className="w-1/6 px-8 py-5 font-bold">Category</th>
                  <th className="w-3/6 px-8 py-5 font-bold">Announcement Details</th>
                  <th className="w-1/6 px-8 py-5 font-bold text-right">Resource</th>
                </tr>
              </thead>
              
              <tbody className="divide-y divide-gray-100">
                {filteredData.map((item) => (
                  <tr
                    key={item.id}
                    onMouseMove={handleMouseMove}
                    className="group relative transition-colors duration-300 hover:bg-gray-50/80 cursor-pointer"
                  >
                    {/* Date with Pink Spotlight */}
                    <td className="relative overflow-hidden px-8 py-6">
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                        style={{
                          background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(233, 30, 99, 0.05), transparent 80%)`,
                        }}
                      />
                      <div className="flex items-center gap-2 relative z-10 text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                        <Calendar size={14} className="text-theme-2" />
                        <span className="font-medium">{item.date}</span>
                      </div>
                    </td>

                    {/* Department Tag */}
                    <td className="px-8 py-6 relative z-10">
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-md border border-gray-200 bg-white text-gray-500 group-hover:text-theme-2 group-hover:border-theme-2/30 transition-all shadow-sm">
                        {item.category}
                      </span>
                    </td>

                    {/* Description */}
                    <td className="px-8 py-6 relative z-10">
                      <div className="flex flex-col gap-1 transition-transform duration-300 group-hover:translate-x-1">
                        <span className="text-sm font-semibold text-gray-800 group-hover:text-theme-2 transition-colors line-clamp-1">
                          {item.title}
                        </span>
                        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                          Format: {item.type}
                        </span>
                      </div>
                    </td>

                    {/* Action */}
                    <td className="px-8 py-6 text-right relative z-10">
                      <a 
                        href={item.link}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-theme-2 hover:bg-theme-2 hover:text-white px-3 py-2 rounded-lg transition-all"
                      >
                        <Download size={14} />
                        Get File
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Empty State */}
            {filteredData.length === 0 && (
              <div className="py-24 text-center">
                <Inbox size={48} className="mx-auto text-gray-200 mb-4" />
                <p className="text-gray-400 text-sm font-medium">No matching announcements found.</p>
              </div>
            )}
          </div>

          {/* Footer Accent - Pink Gradient */}
          <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-theme-2/30 to-transparent" />
        </div>
      </div>
    </div>
  );
}                                

