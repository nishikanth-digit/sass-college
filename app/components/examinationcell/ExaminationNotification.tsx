"use client";

import React, { useState, useEffect } from 'react';
import { Search, Download, Calendar, Inbox, List } from 'lucide-react';

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

  useEffect(() => setMounted(true), []);

  const filteredData = notifications.filter(n =>
    n.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    n.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!mounted) return <div className="min-h-screen bg-white" />;

  return (
    <div className="min-h-screen bg-white text-theme">

      {/* Hero */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-5xl font-black mb-4 text-theme animate-fade-in-up">
            Exam Notifications
          </h1>

          <p className="text-lg text-body-text font-normal">
            Official Autonomous Examination Portal
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 space-y-10 pb-20">

        {/* Header + Search */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          
          <div className="flex items-center gap-3">
            <List className="text-theme-2" size={28} strokeWidth={3} />
            <h3 className="text-2xl font-black text-theme uppercase tracking-tight">
              Live Notifications
            </h3>
          </div>

          <div className="relative w-full md:w-[420px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-theme-2/70" size={20} />
            
            <input
              type="text"
              placeholder="Search notifications..."
              className="w-full bg-white text-theme border-2 border-theme-2 
              py-3 pl-12 pr-4 text-base font-normal
              placeholder:text-theme/40
              focus:outline-none focus:ring-2 focus:ring-theme-2 transition"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Table */}
        <div className="border-2 border-theme rounded-lg bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">

              <thead>
                <tr className="border-b border-theme/10 bg-theme/5">
                  <th className="px-6 py-4 text-sm font-semibold text-theme/70 text-left uppercase">
                    Date
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-theme/70 text-left uppercase">
                    Department
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-theme/70 text-left uppercase">
                    Description
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-theme/70 text-right uppercase">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-theme/10">
                {filteredData.map((item) => (
                  <tr key={item.id} className="hover:bg-theme-2/5 transition">

                    {/* Date */}
                    <td className="px-6 py-6">
                      <div className="flex items-center gap-2 text-theme font-normal">
                        <Calendar size={18} className="text-theme-2" />
                        {item.date}
                      </div>
                    </td>

                    {/* Category */}
                    <td className="px-6 py-6">
                      <span className="text-xs font-semibold px-3 py-1 bg-theme-2/10 text-theme-2 uppercase">
                        {item.category}
                      </span>
                    </td>

                    {/* Title */}
                    <td className="px-6 py-6">
                      <p className="text-base font-semibold text-theme leading-snug">
                        {item.title}
                      </p>

                      <span className="text-xs font-medium text-theme/60 uppercase">
                        {item.type}
                      </span>
                    </td>

                    {/* Action */}
                    <td className="px-6 py-6 text-right">
                      <a
                        href={item.link}
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold
                        bg-theme-2 text-white hover:bg-theme transition"
                      >
                        <Download size={16} />
                        Download
                      </a>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>

            {/* Empty State */}
            {filteredData.length === 0 && (
              <div className="py-24 text-center">
                <Inbox size={60} className="mx-auto text-theme/20" />
                <p className="text-xl mt-4 text-theme font-semibold">
                  No notifications found
                </p>
              </div>
            )}
          </div>
        </div>

      </main>
    </div>
  );
}