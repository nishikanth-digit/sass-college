"use client";

import React from 'react';
import { 
  Cpu, 
  FlaskConical, 
  Briefcase, 
  GraduationCap, 
  ChevronRight 
} from 'lucide-react';

interface SchoolCategory {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  type: 'list' | 'tags';
  items: string[];
  accentColor: 'pink' | 'blue';
}

const schoolData: SchoolCategory[] = [
  {
    id: 'engineering',
    title: 'School of Engineering & Technology',
    icon: Cpu,
    type: 'list',
    items: [
      'Computer Science & Engineering (AI/ML, Data Science)',
      'Electronics & Communication Engineering',
      'Mechanical & Automation Engineering',
      'Infrastructure & Civil Engineering'
    ],
    accentColor: 'pink'
  },
  {
    id: 'allied-sciences',
    title: 'School of Allied Sciences',
    icon: FlaskConical,
    type: 'list',
    items: [
      'B.Sc / M.Sc - Biotechnology',
      'B.Sc - Data Science & Analytics',
      'M.Sc - Applied Physics & Nanotechnology',
      'Advanced Mathematics & Computing'
    ],
    accentColor: 'blue'
  },
  {
    id: 'business',
    title: 'School of Business & Management',
    icon: Briefcase,
    type: 'list',
    items: [
      'MBA - Finance & Investment Banking',
      'MBA - Business Analytics & AI',
      'MBA - Marketing & Digital Strategy',
      'BBA - Global Leadership & Commerce'
    ],
    accentColor: 'pink'
  },
  {
    id: 'professional',
    title: 'Professional Research & Disciplines',
    icon: GraduationCap,
    type: 'tags',
    items: ['Humanities', 'Law', 'Pharmacy', 'Agriculture', 'Design', 'Media Studies', 'Executive Education'],
    accentColor: 'blue'
  }
];

export default function DepartmentCategory() {
  return (
    // Section background locked to pure white
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-center font-sans antialiased">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header - Only color tokens swapped to the var style matching the template */}
        <div className="mb-12 relative pl-4 before:absolute before:left-0 before:top-1/4 before:h-1/2 before:w-1 before:bg-[var(--color-theme-2)] before:rounded-full">
          <span className="text-[var(--color-theme-2)] text-[10px] font-black uppercase tracking-[0.2em] bg-[var(--color-theme-2)]/10 px-3 py-1.5 rounded border border-[var(--color-theme-2)]/20 inline-block mb-3">
            Empowering Excellence
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--color-theme)]">
            Schools of <span className="text-[var(--color-theme)]/60 italic font-medium">Excellence</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-body-text max-w-2xl">
            Explore our world-class faculties designed to foster innovation, leadership, and specialized academic mastery across all core streams.
          </p>
        </div>

        {/* 2x2 Clean Grid Layout - Left exactly as original */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {schoolData.map((school) => {
            const Icon = school.icon;
            const isPink = school.accentColor === 'pink';
            
            return (
              <div
                key={school.id}
                className={`group relative bg-theme border border-theme-2/20 rounded-2xl p-6 sm:p-8 transition-all duration-300 ease-out hover:-translate-y-1 ${
                  isPink 
                    ? 'hover:border-theme-2/50 hover:shadow-[0_12px_40px_-12px_rgba(233,30,99,0.15)]' 
                    : 'hover:border-blue/50 hover:shadow-[0_12px_40px_-12px_rgba(30,136,229,0.15)]'
                } flex flex-col justify-between`}
              >
                {/* Subtle Gradient Glow Layer on Hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${
                  isPink ? 'from-theme-2/15' : 'from-blue/15'
                } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div>
                  {/* Category Title & Icon */}
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className={`p-2.5 rounded-xl bg-white border border-theme-2/20 text-theme transition-colors duration-300 group-hover:bg-theme-2 group-hover:text-white ${
                      isPink ? 'group-hover:border-theme-2/40' : 'group-hover:border-blue/40'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className={`text-lg font-bold text-white transition-colors duration-300 ${
                      isPink ? 'group-hover:text-white' : 'group-hover:text-blue'
                    }`}>
                      {school.title}
                    </h3>
                  </div>

                  {/* Rendering Content: List Items vs Tag Pills */}
                  <div className="relative z-10">
                    {school.type === 'list' ? (
                      <ul className="space-y-3">
                        {school.items.map((item, index) => (
                          <li 
                            key={index} 
                            className="flex items-start text-sm text-body-text transition-colors duration-200 pl-0.5"
                          >
                            <ChevronRight className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0 transform group-hover:translate-x-0.5 transition-transform duration-200 text-theme-2" />
                            <span className="leading-tight font-medium text-white">{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      /* Tag Badge Formats for Miscellaneous and Allied Streams */
                      <div className="flex flex-wrap gap-2 pt-1">
                        {school.items.map((tag, index) => (
                          <span
                            key={index}
                            className={`px-3 py-1 text-xs font-semibold rounded-full bg-white text-body-text border border-theme-2/20 transition-all duration-200 cursor-pointer shadow-sm ${
                              isPink 
                                ? 'hover:border-theme-2 hover:text-theme-2' 
                                : 'hover:border-blue hover:text-blue'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}