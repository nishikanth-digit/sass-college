'use client';

import React from 'react';
import Image from 'next/image';

// 1. TypeScript Interfaces
interface Course {
  id: string;
  title: string;
  specialization: 'AI & ML' | 'Data Science' | 'Cyber Security' | 'IoT' | 'Core CSE';
  status: 'OPEN' | 'LIMITED' | 'FULL';
  availableSeats: number;
  totalSeats: number;
}

interface CompanyLogo {
  name: string;
}

// 2. Updated Mock Data with Specializations (IoT Added)
const courseData: Course[] = [
  { id: 'CSE-AI-301', title: 'Artificial Intelligence & Machine Learning', specialization: 'AI & ML', status: 'OPEN', availableSeats: 35, totalSeats: 90 },
  { id: 'CSE-DS-302', title: 'Data Science', specialization: 'Data Science', status: 'LIMITED', availableSeats: 5, totalSeats: 80 },
  { id: 'CSE-CS-422', title: 'Cyber Security', specialization: 'Cyber Security', status: 'OPEN', availableSeats: 14, totalSeats: 60 },
  { id: 'CSE-IoT-303', title: 'Internet of Things', specialization: 'IoT', status: 'OPEN', availableSeats: 20, totalSeats: 50 },
];

const corporatePartners: CompanyLogo[] = [
  { name: 'Google' },
  { name: 'Microsoft' },
  { name: 'Amazon' },
  { name: 'Meta' },
  { name: 'Apple' },
  { name: 'NVIDIA' },
];

export default function ComputerScienceDashboard() {
  
  // Semantic status badges mapped to design-system variables
  const getStatusBadge = (status: Course['status']) => {
    switch (status) {
      case 'OPEN':
        return (
          <span className="inline-block px-3 py-1 text-[11px] font-bold tracking-wider text-green-700 bg-green-50 rounded-full border border-green-200">
            OPEN
          </span>
        );
      case 'LIMITED':
        return (
          <span className="inline-block px-3 py-1 text-[11px] font-bold tracking-wider text-yellow-700 bg-yellow-50 rounded-full border border-yellow-200">
            LIMITED
          </span>
        );
      case 'FULL':
        return (
          <span className="inline-block px-3 py-1 text-[11px] font-bold tracking-wider text-theme-2 bg-rose-50 rounded-full border border-rose-200">
            FULL
          </span>
        );
    }
  };

  // Specialization tag coloring helper
  const getSpecTagColor = (spec: Course['specialization']) => {
    switch (spec) {
      case 'AI & ML': return 'bg-blue-50 text-blue-700 border-blue-100';
      case 'Data Science': return 'bg-purple-50 text-purple-700 border-purple-100';
      case 'Cyber Security': return 'bg-orange-50 text-orange-700 border-orange-100';
      case 'IoT': return 'bg-teal-50 text-teal-700 border-teal-100';
      default: return 'bg-gray-50 text-gray-700 border-gray-100';
    }
  };

  return (
    <section className="bg-theme-bg-light/40 py-12 px-4 md:px-8 max-w-7xl mx-auto font-sans antialiased text-body-text animate-fade-in-up">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT SIDEBAR CONTAINER */}
        <aside className="lg:col-span-3 space-y-6">
          {/* CSE Specializations Quick Menu */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-xs">
            <h3 className="text-xs font-bold tracking-wider text-theme uppercase mb-4">
              CSE Specializations
            </h3>
            <ul className="space-y-3 text-sm font-medium text-theme">
              <li className="flex items-center gap-3 hover:text-theme-2 cursor-pointer transition-colors duration-200">
                <span className="text-blue">🤖</span> AI & ML
              </li>
              <li className="flex items-center gap-3 hover:text-theme-2 cursor-pointer transition-colors duration-200">
                <span className="text-purple">📊</span> Data Science
              </li>
              <li className="flex items-center gap-3 hover:text-theme-2 cursor-pointer transition-colors duration-200">
                <span className="text-orange">🛡️</span> Cyber Security
              </li>
              <li className="flex items-center gap-3 hover:text-theme-2 cursor-pointer transition-colors duration-200">
                <span className="text-teal">🌐</span> Internet of Things (IoT)
              </li>
            </ul>
          </div>

          {/* Highlight Notice Card using Pink Accent */}
          <div className="bg-gradient-to-br from-white to-rose-50/30 p-6 rounded-xl border-l-4 border-theme-2 shadow-xs relative overflow-hidden">
            <h3 className="text-base font-bold text-theme mb-1">Notice</h3>
            <p className="text-sm text-body-text">Specialization Elective Registration for Fall 2024</p>
            <span className="absolute -right-2 -bottom-2 text-theme-2/10 font-bold text-5xl pointer-events-none select-none">!</span>
          </div>
        </aside>

        {/* RIGHT MAIN CONTENT SECTION */}
        <main className="lg:col-span-9 bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-xs space-y-10">
          
          {/* TOP SECTION: Mission Text & Image Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            {/* Text Content Column */}
            <div className="md:col-span-7 flex flex-col justify-center">
              {/* Heading with Pink Accent Line */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[3px] bg-theme-2 shrink-0 rounded-full" />
                <h2 className="text-2xl md:text-3xl font-bold text-theme tracking-tight">
                  Specialized Technical Education
                </h2>
              </div>

              {/* Mission Paragraphs */}
              <div className="space-y-4 text-sm md:text-base leading-relaxed">
                <p className="font-semibold text-theme">
                  Our curriculum delivers high-impact, industry-aligned expertise across modern computational frontiers including Intelligence systems, Big Data, Network Defense, and Edge computing ecosystems.
                </p>
                <p className="text-body-text">
                  By isolating advanced trajectories into core specialization tracks, we guarantee that our engineers build functional theoretical baselines combined with actual workspace deployment skills.
                </p>
              </div>
            </div>

            {/* Collaborative Workspace Image Column */}
            <div className="md:col-span-5 flex items-center justify-center">
              <div className="relative w-full h-[240px] md:h-full min-h-[240px] rounded-xl overflow-hidden shadow-xs bg-theme-bg-light">
                <Image
                  src="/path-to-your-workspace-image.jpg"
                  alt="Advanced Computing Lab"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* MIDDLE SECTION: Core Course Availability Table */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-theme tracking-tight">
                Our Specializations in CSE 
             </h3>
              
              {/* Live Update Indicator */}
              <div className="flex items-center gap-1.5 px-3 py-1 bg-theme-bg-light rounded-full text-[11px] font-semibold text-theme shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green"></span>
                </span>
                Live Update
              </div>
            </div>

            {/* Responsive Table Container */}
            <div className="overflow-x-auto rounded-xl border border-gray-100 bg-white shadow-xs">
              <table className="w-full border-collapse text-left min-w-[700px]">
                <thead>
                  <tr className="bg-theme text-white text-xs font-bold tracking-wider uppercase">
                    <th className="py-3.5 px-6 w-[15%] text-center">Course ID</th>
                    <th className="py-3.5 px-6 w-[35%]">Course Title</th>
                    <th className="py-3.5 px-6 w-[18%] text-center">Track</th>
                    <th className="py-3.5 px-6 w-[15%] text-center">Status</th>
                    <th className="py-3.5 px-6 w-[17%] text-center">Available Seats</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                  {courseData.map((course) => (
                    <tr 
                      key={course.id} 
                      className="group bg-white hover:bg-theme-bg-light/40 transition-colors duration-150 ease-in-out cursor-pointer"
                    >
                      <td className="py-4 px-6 text-center font-mono text-sm font-semibold text-theme">
                        {course.id}
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-theme group-hover:text-theme-2 transition-colors duration-150">
                        {course.title}
                      </td>
                      <td className="py-4 px-6 text-center align-middle">
                        <span className={`inline-block px-2.5 py-0.5 text-[10px] font-bold tracking-wide rounded-md border ${getSpecTagColor(course.specialization)}`}>
                          {course.specialization}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center align-middle">
                        {getStatusBadge(course.status)}
                      </td>
                      <td className="py-4 px-6 text-center font-mono text-sm font-semibold text-theme">
                        {course.availableSeats} <span className="text-gray-300 mx-1">/</span> {course.totalSeats}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* BOTTOM SECTION: Placement & Career Outcomes */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-theme tracking-tight">
              Specialization Placement & Career Outcomes
            </h3>

            {/* Performance Layout Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Primary Highlights Card Anchored by Deep Navy with Pink highlights */}
              <div className="md:col-span-2 bg-theme text-white rounded-xl p-8 flex flex-col justify-between min-h-[220px] shadow-xs relative overflow-hidden">
                <div className="z-10">
                  <h4 className="text-lg font-bold text-theme-2 mb-2">
                    Class of 2023 Performance
                  </h4>
                  <p className="text-sm text-footer-text-color/80 max-w-lg font-light leading-relaxed">
                    Graduates from our explicit AI, Data Science, Security, and IoT cohorts continue to command top technical packages across the tech landscape.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10 mt-6 z-10">
                  <div>
                    <div className="text-3xl md:text-4xl font-black tracking-tight text-white">95%</div>
                    <div className="text-[10px] uppercase tracking-widest text-footer-text-color/60 mt-0.5 font-bold">
                      Placement Rate
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-black tracking-tight text-theme-2">$150k</div>
                    <div className="text-[10px] uppercase tracking-widest text-footer-text-color/60 mt-0.5 font-bold">
                      Highest Package
                    </div>
                  </div>
                </div>
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/[0.02] rounded-full pointer-events-none" />
              </div>

              {/* Individual Metrics Column */}
              <div className="flex flex-col gap-4 justify-between">
                <div className="bg-theme-bg-light/60 rounded-xl p-5 flex flex-col justify-center h-full border border-gray-100 shadow-xs">
                  <span className="text-[10px] font-bold text-body-text uppercase tracking-wider mb-1 block">
                    Average CTC
                  </span>
                  <span className="text-2xl font-black text-theme">
                    $105,000
                  </span>
                </div>

                <div className="bg-theme-bg-light/60 rounded-xl p-5 flex flex-col justify-center h-full border border-gray-100 shadow-xs">
                  <span className="text-[10px] font-bold text-body-text uppercase tracking-wider mb-1 block">
                    Fortune 500 Partners
                  </span>
                  <span className="text-2xl font-black text-theme-2">
                    85+
                  </span>
                </div>
              </div>

            </div>

            {/* Nested Corporate Logo Frame */}
            <div className="bg-theme-bg-light/30 border border-gray-100 rounded-xl p-6">
              <h4 className="text-center text-[10px] uppercase tracking-[0.25em] font-bold text-body-text/60 mb-4">
                Our Graduates Are At
              </h4>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 items-center justify-items-center">
                {corporatePartners.map((partner, index) => (
                  <div 
                    key={index} 
                    className="bg-white border border-gray-100 rounded-lg py-2.5 w-full text-center text-xs font-bold text-theme hover:text-theme-2 transition-colors duration-200 shadow-xs select-none"
                  >
                    {partner.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </main>
      </div>
    </section>
  );
}