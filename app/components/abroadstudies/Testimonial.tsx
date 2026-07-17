"use client";

import React from 'react';
import { Quote } from 'lucide-react';

// 1. Define the TypeScript interface for our testimonials
interface TestimonialItem {
  id: number;
  quote: string;
  name: string;
  degree: string;
  program: string;
  university: string;
  year: string;
  initials: string; // Used for a clean avatar placeholder
}

// 2. Populate the data based on your student voices
const testimonials: TestimonialItem[] = [
  {
    id: 1,
    quote: "Studying in the UK through my college’s exchange program was the best decision of my life. I not only gained technical knowledge but also confidence and global friends.",
    name: "Priya Sharma",
    degree: "B.Tech CSE",
    program: "Semester Exchange",
    university: "University of Manchester",
    year: "2025",
    initials: "PS"
  },
  {
    id: 2,
    quote: "The guidance from the Abroad Studies cell made my Canada dream possible. From SOP to visa, they supported me at every step.",
    name: "Rahul Reddy",
    degree: "MBA",
    program: "Full Degree",
    university: "University of Toronto",
    year: "2024",
    initials: "RR"
  }
];

export default function StudentTestimonials() {
  return (
    <section className="bg-theme-bg-light py-16 px-4 sm:px-6 lg:px-8 font-sans antialiased">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme/5 text-theme text-xs font-semibold uppercase tracking-wider">
            <Quote className="w-3.5 h-3.5 text-theme-2" /> 
            Success Stories
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-theme sm:text-4xl">
            Student Voices
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-500">
            Hear from our students who transformed their futures through global education.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((student) => (
            <div 
              key={student.id} 
              className="flex flex-col justify-between bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/60 shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden animate-fade-in-up"
            >
              {/* Clean Uniform Theme-Based Decorative Quote Background */}
              <span className="absolute top-2 right-4 text-7xl text-slate-100 font-serif select-none pointer-events-none">
                “
              </span>

              {/* Quote Text */}
              <div className="relative z-10">
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed italic">
                  “{student.quote}”
                </p>
              </div>

              {/* Student Author Profile */}
              <div className="mt-6 flex items-center gap-4 border-t border-slate-100 pt-5">
                {/* Visual Avatar with uniform light theme color background */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-theme/5 text-theme font-bold text-sm tracking-wider border border-theme/10">
                  {student.initials}
                </div>
                
                {/* Author Details */}
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-theme truncate">
                    {student.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 font-medium">
                    {student.degree} 
                    <span className="mx-1.5 text-slate-200">•</span> 
                    <span className="text-theme-2 font-semibold">{student.program}</span>
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5 font-medium truncate">
                    {student.university} ({student.year})
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