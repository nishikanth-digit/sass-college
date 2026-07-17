'use client';

import React from 'react';
import Image from 'next/image';

// 1. TypeScript Interfaces
interface Course {
  id: string;
  title: string;
  status: 'OPEN' | 'LIMITED' | 'FULL';
  availableSeats: number;
  totalSeats: number;
}

interface CompanyLogo {
  name: string;
}

// 2. Mock Data (Updated for Data Science context)
const courseData: Course[] = [
  { id: 'DS-501', title: 'Advanced Statistical Inference & Modeling', status: 'OPEN', availableSeats: 18, totalSeats: 85 },
  { id: 'DS-520', title: 'Big Data Engineering & Distributed Systems', status: 'LIMITED', availableSeats: 3, totalSeats: 60 },
  { id: 'DS-610', title: 'MLOps & Production Data Pipelines', status: 'FULL', availableSeats: 0, totalSeats: 45 },
  { id: 'DS-505', title: 'Time Series Forecasting & Predictive Analytics', status: 'OPEN', availableSeats: 22, totalSeats: 90 },
];

const corporatePartners: CompanyLogo[] = [
  { name: 'Snowflake' },
  { name: 'Databricks' },
  { name: 'Palantir' },    
  { name: 'Google Cloud' },
  { name: 'AWS' },
  { name: 'Scale AI' },
];

export default function DataScience() {
  
  // Semantic status badges mapped to design-system variables where possible
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

  return (
    <section className="bg-theme-bg-light/40 py-12 px-4 md:px-8 max-w-7xl mx-auto font-sans antialiased text-body-text animate-fade-in-up">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT SIDEBAR CONTAINER */}
        <aside className="lg:col-span-3 space-y-6">
          {/* Other Specializations Menu */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-xs">
            <h3 className="text-xs font-bold tracking-wider text-theme uppercase mb-4">
              DS Specializations
            </h3>
            <ul className="space-y-3 text-sm font-medium text-theme">
              <li className="flex items-center gap-3 hover:text-theme-2 cursor-pointer transition-colors duration-200">
                <span className="text-blue">📈</span> Quantitative Finance
              </li>
              <li className="flex items-center gap-3 hover:text-theme-2 cursor-pointer transition-colors duration-200">
                <span className="text-purple">🧬</span> Genomic Data Science
              </li>
              <li className="flex items-center gap-3 hover:text-theme-2 cursor-pointer transition-colors duration-200">
                <span className="text-teal">🌐</span> Spatial & GIS Analytics
              </li>
              <li className="flex items-center gap-3 hover:text-theme-2 cursor-pointer transition-colors duration-200">
                <span className="text-yellow">🕵️‍♂️</span> Fraud & Risk Intelligence
              </li>
            </ul>
          </div>

          {/* Highlight Notice Card using Pink Accent */}
          <div className="bg-gradient-to-br from-white to-rose-50/30 p-6 rounded-xl border-l-4 border-theme-2 shadow-xs relative overflow-hidden">
            <h3 className="text-base font-bold text-theme mb-1">Notice</h3>
            <p className="text-sm text-body-text">Spark Cluster Quota Reset</p>
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
                  Data Science Vision
                </h2>
              </div>

              {/* Mission Paragraphs */}
              <div className="space-y-4 text-sm md:text-base leading-relaxed">
                <p className="font-semibold text-theme">
                  Our mission is to cultivate elite data practitioners capable of transforming massive, unstructured datasets into predictive models and actionable operational intelligence.
                </p>
                <p className="text-body-text">
                  We blend foundational statistical mechanics with cutting-edge engineering paradigms. From real-time stream processing to predictive macro-analytics, our graduates establish the data infrastructure powering tomorrow's market leaders.
                </p>
              </div>
            </div>

            {/* Collaborative Workspace Image Column */}
            <div className="md:col-span-5 flex items-center justify-center">
              <div className="relative w-full h-[240px] md:h-full min-h-[240px] rounded-xl overflow-hidden shadow-xs bg-theme-bg-light">
                <Image
                  src="/path-to-your-ds-lab-image.jpg"
                  alt="Data Analytics Laboratory"
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
                Data Science Availability
              </h3>
              
              {/* Live Update Indicator */}
              <div className="flex items-center gap-1.5 px-3 py-1 bg-theme-bg-light rounded-full text-[11px] font-semibold text-theme shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green"></span>
                </span>
                Live Tracking
              </div>
            </div>

            {/* Responsive Table Container */}
            <div className="overflow-x-auto rounded-xl border border-gray-100 bg-white shadow-xs">
              <table className="w-full border-collapse text-left min-w-[600px]">
                <thead>
                  <tr className="bg-theme text-white text-xs font-bold tracking-wider uppercase">
                    <th className="py-3.5 px-6 w-[18%] text-center">Course ID</th>
                    <th className="py-3.5 px-6 w-[45%]">Course Title</th>
                    <th className="py-3.5 px-6 w-[17%] text-center">Status</th>
                    <th className="py-3.5 px-6 w-[20%] text-center">Available Seats</th>
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
              Analytics Placements & Data Horizons
            </h3>

            {/* Performance Layout Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Primary Highlights Card Anchored by Deep Navy with Pink highlights */}
              <div className="md:col-span-2 bg-theme text-white rounded-xl p-8 flex flex-col justify-between min-h-[220px] shadow-xs relative overflow-hidden">
                <div className="z-10">
                  <h4 className="text-lg font-bold text-theme-2 mb-2">
                    Research Cohort Performance
                  </h4>
                  <p className="text-sm text-footer-text-color/80 max-w-lg font-light leading-relaxed">
                    Our data scientists continue to architect core infrastructure, engineer production telemetry, and lead quantitative strategy groups globally.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10 mt-6 z-10">
                  <div>
                    <div className="text-3xl md:text-4xl font-black tracking-tight text-white">96%</div>
                    <div className="text-[10px] uppercase tracking-widest text-footer-text-color/60 mt-0.5 font-bold">
                      Industry Hire Rate
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-black tracking-tight text-theme-2">$168k</div>
                    <div className="text-[10px] uppercase tracking-widest text-footer-text-color/60 mt-0.5 font-bold">
                      Median Base Package
                    </div>
                  </div>
                </div>
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/[0.02] rounded-full pointer-events-none" />
              </div>

              {/* Individual Metrics Column */}
              <div className="flex flex-col gap-4 justify-between">
                <div className="bg-theme-bg-light/60 rounded-xl p-5 flex flex-col justify-center h-full border border-gray-100 shadow-xs">
                  <span className="text-[10px] font-bold text-body-text uppercase tracking-wider mb-1 block">
                    Kaggle Grandmasters / Patents
                  </span>
                  <span className="text-2xl font-black text-theme">
                    14 Achieved
                  </span>
                </div>

                <div className="bg-theme-bg-light/60 rounded-xl p-5 flex flex-col justify-center h-full border border-gray-100 shadow-xs">
                  <span className="text-[10px] font-bold text-body-text uppercase tracking-wider mb-1 block">
                    Enterprise Data Partners
                  </span>
                  <span className="text-2xl font-black text-theme-2">
                    40+ Infrastructure Labs
                  </span>
                </div>
              </div>

            </div>

            {/* Nested Corporate Logo Frame */}
            <div className="bg-theme-bg-light/30 border border-gray-100 rounded-xl p-6">
              <h4 className="text-center text-[10px] uppercase tracking-[0.25em] font-bold text-body-text/60 mb-4">
                Our Graduates Innovate At
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