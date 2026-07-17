'use client';

import React from 'react';

// ==========================================
// TYPES & INTERFACES
// ==========================================
interface Testimonial {
  id: number;
  name: string;
  role: string;
  department: string;
  rating: number;
  quote: string;
}

// ==========================================
// MOCK DATA (6 College Department Cards)
// ==========================================
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Aris Thorne",
    role: "HOD, Computer Science",
    department: "Department of CS",
    rating: 5,
    quote: "Our department has seen unprecedented growth in research funding and student corporate placements this academic year."
  },
  {
    id: 2,
    name: "Prof. Elena Rostova",
    role: "Senior Lecturer",
    department: "Department of Mechanical Eng.",
    rating: 5,
    quote: "The brand new robotics lab offers students hands-on experience that bridges the gap between theory and industry requirements."
  },
  {
    id: 3,
    name: "Marcus Vance",
    role: "Alumni (Class of '24)",
    department: "Department of BioTech",
    rating: 4,
    quote: "The interdisciplinary curriculum allowed me to seamlessly transition into my current role at a top global biomedical firm."
  },
  {
    id: 4,
    name: "Sarah Jenkins",
    role: "Student Council Head",
    department: "Department of Business",
    rating: 5,
    quote: "From case studies to global networking events, the Business department grooms you to be an industry leader from Day 1."
  },
  {
    id: 5,
    name: "Dr. Julian Vance",
    role: "Dean of Research",
    department: "Department of Physics",
    rating: 5,
    quote: "Our collaborative projects with international labs are paving the way for groundbreaking quantum computing discoveries."
  },
  {
    id: 6,
    name: "Aliah Patel",
    role: "Research Scholar",
    department: "Department of Chemistry",
    rating: 4,
    quote: "The state-of-the-art spectrometry equipment and supportive faculty make pursuing research here incredibly rewarding."
  }
];

export default function TestimonialCarousel() {
  // Duplicate array to achieve an endless seamless loop
  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="w-full bg-slate-50 py-16 overflow-hidden">
      
      {/* INJECTED CSS FOR INFINITE SLOW SCROLL */}
      <style jsx global>{`
        @keyframes slowScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 12px)); }
        }
        .animate-slow-scroll {
          animation: slowScroll 35s linear infinite;
        }
        .pause-on-hover:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 mb-12 text-center">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight sm:text-4xl">
          What Our Departments Say
        </h2>
        <p className="text-slate-500 mt-3 text-lg">
          Hear from our dedicated faculty, exceptional students, and elite alumni
        </p>
      </div>

      {/* Outer Viewport Container (Locks view to exactly 3 cards ~ 960px + gaps) */}
      <div className="relative w-full max-w-[960px] mx-auto overflow-hidden px-2">
        
        {/* Infinite Scroll Track */}
        <div className="flex gap-6 animate-slow-scroll pause-on-hover w-max py-4">
          {doubledTestimonials.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex flex-col justify-between p-6 bg-white border border-slate-100 rounded-2xl shadow-sm relative transition-all duration-300 hover:shadow-lg hover:border-indigo-100"
              style={{ width: '300px', height: '300px', minWidth: '300px' }}
            >
              {/* Top Card Content */}
              <div>
                <div className="flex justify-between items-start mb-3">
                  {/* Quotes Icon */}
                  <span className="text-6xl font-serif text-indigo-500/20 leading-none select-none -mt-2">
                    “
                  </span>
                  
                  {/* Rating Stars */}
                  <div className="flex gap-0.5 text-amber-400 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < item.rating ? 'fill-current' : 'text-slate-200'}`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-slate-600 text-sm leading-relaxed italic line-clamp-5">
                  "{item.quote}"
                </p>
              </div>

              {/* Bottom Profile Details */}
              <div className="border-t border-slate-100 pt-4 mt-auto">
                <h4 className="font-semibold text-slate-800 text-sm truncate">
                  {item.name}
                </h4>
                <p className="text-xs text-indigo-600 font-medium truncate mt-0.5">
                  {item.role}
                </p>
                <p className="text-[11px] text-slate-400 font-normal truncate mt-0.5">
                  {item.department}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Left & Right Subtle Gradients for a smoother fading view edge */}
        <div className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}