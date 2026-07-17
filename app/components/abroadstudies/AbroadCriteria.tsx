"use client";

import React from 'react';
import { 
  CheckCircle, 
  GraduationCap, 
  BookOpen, 
  Languages, 
  Globe2 
} from 'lucide-react';

interface Criterion {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function EligibilityCriteria() {
  const criteria: Criterion[] = [
    {
      id: 'threshold',
      title: 'Academic Threshold',
      description: 'Minimum CGPA of 7.0 / 10 or 70% aggregate marks.',
      icon: GraduationCap,
    },
    {
      id: 'standing',
      title: 'Academic Standing',
      description: 'Clean academic record with absolutely no active backlogs.',
      icon: BookOpen,
    },
    {
      id: 'proficiency',
      title: 'Language Proficiency',
      description: 'Strong, fluent English communication skills (written & verbal).',
      icon: Languages,
    },
    {
      id: 'mindset',
      title: 'Global Mindset',
      description: 'Demonstrable, genuine passion for international education.',
      icon: Globe2,
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-6 antialiased font-sans bg-theme-bg-light">
      
      {/* Main Structural Container - matches image layout and rounding */}
      <div className="relative w-full max-w-2xl bg-theme-bg-light border border-theme/10 rounded-2xl p-6 md:p-8">
        
        {/* Decorative Pink Accent Circle - matches image top left corner dot */}
        <div className="absolute top-4 left-4 w-1 h-1 bg-theme-2 rounded-full" />

        {/* Header Block */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-theme/10 pb-6 mb-6">
          <div>
            {/* Requirements Badge - matches pink color from global.css */}
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-theme-2 bg-theme-2/10 px-3 py-1 rounded-full">
              # Requirements
            </span>
            {/* Dark Title - matches corporate navy from global.css */}
            <h2 className="text-3xl font-extrabold tracking-tight text-theme mt-3">
              Eligibility Criteria
            </h2>
            {/* Gray Subtext - matches gray from global.css */}
            <p className="text-sm text-slate-500 mt-1 max-w-sm">
              Verify your prerequisites for the international program.
            </p>
          </div>
          
          {/* Status Badge using Pink Accent (theme-2) - matching image right block */}
          <div className="flex items-center gap-3 bg-theme-bg-light border border-slate-200/60 px-4 py-2.5 rounded-2xl self-start sm:self-auto">
            {/* Circular Progress Path matching Pink color from global.css */}
            <div className="relative w-10 h-10 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-slate-200"
                  strokeWidth="3"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-theme-2"
                  strokeDasharray="100, 100" // Always 100% full like image
                  strokeWidth="3"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <span className="absolute text-xs font-bold text-theme">
                4/4
              </span>
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Your Status</p>
              <p className="text-sm font-bold text-theme">Fully Eligible</p>
            </div>
          </div>
        </div>

        {/* Checklist Wrapper */}
        <div className="space-y-3">
          {criteria.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="w-full flex items-start gap-4 p-4 rounded-xl border border-slate-200/60 bg-white shadow-xs"
              >
                {/* Unified Icon Frame - matches pink color from global.css */}
                <div className="p-3 rounded-xl bg-theme-2 text-white shrink-0">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Text Block Content */}
                <div className="flex-1 min-w-0 pt-0.5 space-y-0.5">
                  <div className="flex items-center justify-between gap-2">
                    {/* Pink Heading - matches pink color from global.css */}
                    <h3 className="font-bold text-sm sm:text-base tracking-tight text-theme-2">
                      {item.title}
                    </h3>
                    
                    {/* Persistent Checked Circle Icon - matches pink color from global.css */}
                    <CheckCircle className="w-5 h-5 text-theme-2 shrink-0" />
                  </div>
                  {/* Gray Description - matches gray color from global.css */}
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xl">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer UX Feedback Banner matching the image schema */}
        <div className="relative z-10 mt-6 p-4 rounded-xl border border-theme-2/20 bg-theme-2/5 flex items-center gap-3 shadow-xs">
          <CheckCircle className="w-5 h-5 text-theme-2 shrink-0" />
          {/* Bold text mixing navy and gray for clean hierarchy like image */}
          <p className="text-xs sm:text-sm font-bold text-theme">
            Excellent! You meet all requirements and are fully ready to apply.
          </p>
        </div>

      </div>
    </div>
  );
}