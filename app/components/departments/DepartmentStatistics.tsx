"use client";

import React from 'react';

interface StatItem {
  value: string;
  label: string;
}

const statsData: StatItem[] = [
  { value: '96.4%', label: 'Elite Placement' },
  { value: '45+', label: 'Industry Partners' },
  { value: '120+', label: 'Patents & Research' },
  { value: '24+', label: 'Specialized Tracks' },
];

export default function Departmentstatistics() {
  return (
    <div className="w-full bg-theme-bg-light py-8 px-4">
      {/* Centered grid with a smaller maximum width for a cleaner, unified presentation */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-stretch p-6">
        {statsData.map((stat, index) => (
          <div
            key={index}
            /* - Maintained your 2x2 grid setup on mobile, switching to 4 columns on large screens
              - Kept your clean borders, crisp padding, and modern hover interactions
              - Configured custom shadow to map smoothly with the deep navy brand color alpha channels
            */
            className="flex flex-col items-center justify-center bg-white border border-gray-100 rounded-xl py-5 px-3 shadow-[0_2px_6px_rgba(27,31,59,0.03)] transition-all duration-300 hover:border-theme-2/40 hover:shadow-lg hover:-translate-y-0.5"
          >
            {/* Stat Number/Value: Rendered in Main Theme Deep Navy or Pink Accent dynamically for balance */}
            <span className={`${index === 0 ? 'text-theme-2' : 'text-theme'} text-2xl sm:text-3xl font-bold tracking-tight mb-1`}>
              {stat.value}
            </span>
            
            {/* Stat Label: Optimized font sizing and spacing matching your original design structure */}
            <span className="text-body-text text-xs sm:text-[13px] font-semibold tracking-wide text-center uppercase opacity-90">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}