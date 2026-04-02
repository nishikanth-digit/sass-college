"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, GraduationCap } from 'lucide-react';

// --- Types ---
interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  color: string;
}

// --- Data ---
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Computer Science Graduate",
    content: "The depth of the curriculum and the quality of the mentors exceeded all my expectations. I felt truly prepared for my first role at a FAANG company.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    color: "from-theme-2 to-purple"
  },
  {
    id: 2,
    name: "David Chen",
    role: "UX Design Student",
    content: "I never thought I could transition from finance to design, but the step-by-step approach and the supportive community made it possible.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    color: "from-purple to-theme-2"
  },
  {
    id: 3,
    name: "Amina Okoro",
    role: "Data Science Lead",
    content: "The capstone project was the highlight. Working on real-world data gave me the confidence to lead my own team just months after graduating.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop",
    color: "from-teal to-blue"
  }
];

export default function Feedback() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const handleNext = useCallback(() => {
    setDirection('next');
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  const handlePrev = () => {
    setDirection('prev');
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(handleNext, 6000);
    return () => clearInterval(interval);
  }, [handleNext, isAutoPlay]);

  const current = testimonials[active];

  return (
    <section className="min-h-screen bg-slate-50 dark:bg-slate-950 py-20 px-4 flex items-center justify-center font-sans overflow-hidden">
      <style jsx global>{`
        @keyframes slideInRight {
          0% { transform: translateX(50px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInLeft {
          0% { transform: translateX(-50px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeInUp {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes scaleIn {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-slide-right { animation: slideInRight 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-slide-left { animation: slideInLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-up { opacity: 0; animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-scale { opacity: 0; animation: scaleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>

      <div 
        className="relative max-w-6xl w-full"
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
      >
        {/* --- NEW HEADER SECTION --- */}
        <div className="mb-16 max-w-2xl animate-fade-up">
          <span className="text-theme-2 font-bold tracking-widest uppercase text-sm mb-4 block">
            Success Stories
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-theme dark:text-white mb-6 leading-tight">
            Our Graduates <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-2 to-purple">
              Speak for Us
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Join thousands of professionals who have transformed their careers through 
            our specialized tracks and world-class mentorship.
          </p>
        </div>
        {/* --- END HEADER SECTION --- */}

        {/* Background Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-theme-2/10 blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-theme/10 blur-[120px] rounded-full -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: Visual Media */}
          <div className="lg:col-span-5 relative group">
            <div className={`absolute -inset-4 bg-gradient-to-br ${current.color} opacity-20 blur-2xl rounded-full transition-all duration-1000 animate-pulse`} />
            
            <div 
              key={`img-${active}`} 
              className="relative aspect-square rounded-[2.5rem] overflow-hidden border-8 border-white dark:border-slate-900 shadow-2xl animate-scale"
            >
              <img
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-theme/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Float Card */}
            <div 
              key={`badge-${active}`}
              className="absolute -bottom-6 -right-6 md:right-0 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 animate-fade-up [animation-delay:400ms]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-theme-2/10 rounded-lg text-theme-2">
                  <GraduationCap size={20} />
                </div>
                <span className="font-bold text-theme dark:text-slate-100">Verified Alumni</span>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={`${i < current.rating ? "fill-yellow text-yellow" : "text-slate-300"}`} 
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <div 
              key={`content-${active}`}
              className={`relative ${direction === 'next' ? 'animate-slide-right' : 'animate-slide-left'}`}
            >
              <Quote className="text-theme-2/10 w-20 h-20 absolute -top-10 -left-6" />
              
              <h3 className="text-2xl md:text-3xl font-bold text-theme dark:text-white leading-[1.15] mb-8">
                "{current.content}"
              </h3>

              <div>
                <p className="text-2xl font-bold text-theme dark:text-white">
                  {current.name}
                </p>
                <p className={`text-transparent bg-clip-text bg-gradient-to-r ${current.color} font-semibold uppercase tracking-widest text-sm mt-1`}>
                  {current.role}
                </p>
              </div>
            </div>

            {/* Navigation Bar */}
            <div className="flex items-center gap-8 pt-8 border-t border-slate-200 dark:border-slate-800">
              <div className="flex gap-4">
                <button 
                  onClick={handlePrev}
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 hover:border-theme-2/50 hover:shadow-lg transition-all duration-300 group text-theme"
                >
                  <ChevronLeft className="group-hover:-translate-x-1 transition-transform group-hover:text-theme-2" />
                </button>
                <button 
                  onClick={handleNext}
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 hover:border-theme-2/50 hover:shadow-lg transition-all duration-300 group text-theme"
                >
                  <ChevronRight className="group-hover:translate-x-1 transition-transform group-hover:text-theme-2" />
                </button>
              </div>

              <div className="flex flex-1 items-center gap-3">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > active ? 'next' : 'prev');
                      setActive(i);
                    }}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      i === active ? "w-12 bg-theme-2" : "w-3 bg-slate-300 dark:bg-slate-700 hover:bg-theme-2/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}