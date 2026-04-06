"use client";

import React from 'react';
import { Users } from 'lucide-react';

interface Faculty {
  id: number;
  name: string;
  designation: string;
  qualification: string;
  subject: string;
  imageUrl: string;
}

const facultyData: Faculty[] = [
  { id: 1, name: "Dr. Sarah Mitchell", designation: "Head of Department", qualification: "Ph.D. in AI", subject: "Machine Learning", imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" },
  { id: 2, name: "Prof. James Wilson", designation: "Senior Professor", qualification: "M.Tech, Ph.D.", subject: "Cloud Computing", imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" },
  { id: 3, name: "Dr. Elena Rodriguez", designation: "Associate Professor", qualification: "Ph.D. in CS", subject: "Data Structures", imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" },
  { id: 4, name: "Mr. David Chen", designation: "Assistant Professor", qualification: "M.Tech", subject: "Web Technologies", imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop" },
  { id: 5, name: "Dr. Priya Sharma", designation: "Professor", qualification: "Ph.D.", subject: "Cyber Security", imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop" },
  { id: 6, name: "Prof. Robert Taylor", designation: "Lab Instructor", qualification: "M.Tech", subject: "Network Admin", imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
];

export default function FacultyGrid() {
  return (
    <section className="bg-[var(--theme-bg-light)] py-24 px-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--theme-color2)]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--theme-color2)]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Header Section - Matches requested design */}
        <div className="mb-12 md:mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--theme-color2)]/10 border border-[var(--theme-color2)]/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--theme-color2)] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--theme-color2)]">
              Academic Excellence
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight tracking-tight text-[var(--theme-color)]">
            Meet Our Distinguished <br />
            <span className="text-[var(--color-theme)]/60 italic font-medium"> Faculty Members</span>
          </h2>
          
          <p className="mt-6 max-w-2xl text-gray-600 text-lg font-medium leading-relaxed">
            Our department is home to world-class educators and researchers dedicated 
            to shaping the next generation of technology leaders through innovation 
            and hands-on mentorship.
          </p>
        </div>

        {/* Grid remains the same as your request */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyData.map((faculty) => (
            <div 
              key={faculty.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={faculty.imageUrl} 
                  alt={faculty.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--theme-color)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content Container */}
              <div className="p-6 text-center">
                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-[var(--theme-color2)] uppercase bg-[var(--theme-color2)]/10 rounded-full mb-3">
                  {faculty.qualification}
                </span>
                
                <h3 className="text-xl font-bold text-slate-800 transition-colors group-hover:text-[var(--theme-color2)]">
                  {faculty.name}
                </h3>
                <p className="text-slate-500 font-medium mb-2">
                  {faculty.designation}
                </p>
                
                <div className="mt-4 pt-4 border-t border-slate-50">
                  <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Specialization</p>
                  <p className="font-semibold text-slate-700">
                    {faculty.subject}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}