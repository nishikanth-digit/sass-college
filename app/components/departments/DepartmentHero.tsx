"use client";

import React, { useState } from 'react';
import { ArrowRight, CheckCircle, GraduationCap, Users, BookOpen, Star } from 'lucide-react';

interface QuickStat {
  icon: React.ReactNode;
  label: string;
  value: string;
}

interface FormDataState {
  name: string;
  email: string;
  program: string;
}

export default function DepartmentHero() {
  const [formData, setFormData] = useState<FormDataState>({ name: '', email: '', program: '' });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setIsSubmitted(true);
    }
  };

  const stats: QuickStat[] = [
    { icon: <Users className="w-5 h-5 text-theme-2" />, label: "Global Alumni", value: "15K+" },
    { icon: <GraduationCap className="w-5 h-5 text-blue" />, label: "Placement Rate", value: "96.4%" },
    { icon: <BookOpen className="w-5 h-5 text-teal" />, label: "Accredited Tracks", value: "24+ Options" }
  ];

  return (
    <section className="relative min-h-screen bg-theme-bg-light flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Soft Decorative Ambient Background Glows using Theme Accent */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-theme-2/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LEFT COLUMN: Content & Experience Badges */}
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left animate-fade-in-up">
          {/* Mobile-optimized interactive pill with Pink Accent border/text */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-theme-2/20 text-theme-2 text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-theme-2 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase">Admissions Open • Academic Year 2026-27</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-theme leading-tight">
            Shape the Future of <br />
            <span className="bg-gradient-to-r from-theme to-theme-2 bg-clip-text text-transparent">
              Technology & Leadership
            </span>
          </h1>

          <p className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-body-text font-normal leading-relaxed">
            Empowering the next generation of innovators, researchers, and global executives through industry-aligned engineering disciplines, advanced allied sciences, and elite business administration programs.
          </p>

          {/* Quick Stats Grid with Clean Card Formatting */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-theme-2/30 active:scale-98 cursor-default"
              >
                <div className="p-3 rounded-xl bg-theme-bg-light text-theme group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold text-theme">{stat.value}</div>
                  <div className="text-xs text-body-text font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: High-End Fast Admission Form */}
        <div className="lg:col-span-5 w-full max-w-md mx-auto">
          <div className="relative group rounded-3xl p-6 sm:p-8 bg-white shadow-xl border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-theme-2/5">
            
            {/* Soft decorative accent ring hover modification */}
            <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-theme-2/20 transition-colors duration-500 pointer-events-none" />

            {!isSubmitted ? (
              <>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-theme">Begin Your Journey</h3>
                  <p className="text-sm text-body-text mt-1">Select your domain to instantly access specialized brochures and tracks.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-theme uppercase tracking-wider mb-1.5">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Alex Mercer" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-theme-bg-light text-theme placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-theme-2 focus:border-transparent transition-all duration-200 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-theme uppercase tracking-wider mb-1.5">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="alex@example.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-theme-bg-light text-theme placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-theme-2 focus:border-transparent transition-all duration-200 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-theme uppercase tracking-wider mb-1.5">Stream & Program</label>
                    <div className="relative">
                      <select 
                        value={formData.program}
                        onChange={(e) => setFormData({...formData, program: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-theme-bg-light text-theme focus:outline-none focus:ring-2 focus:ring-theme-2 focus:border-transparent transition-all duration-200 text-sm appearance-none"
                      >
                        <option value="">Select an Academic Domain</option>
                        <optgroup label="Engineering Streams">
                          <option value="eng_cse">B.Tech - Computer Science & Engineering</option>
                          <option value="eng_ece">B.Tech - Electronics & Communication</option>
                          <option value="eng_mech">B.Tech - Mechanical & Automation</option>
                          <option value="eng_civil">B.Tech - Infrastructure & Civil Engineering</option>
                        </optgroup>
                        <optgroup label="Allied Sciences">
                          <option value="sci_biotech">B.Sc / M.Sc - Biotechnology</option>
                          <option value="sci_ds">B.Sc - Data Science & Analytics</option>
                          <option value="sci_physics">M.Sc - Applied Physics & Nanotech</option>
                        </optgroup>
                        <optgroup label="Business Administration">
                          <option value="mba_finance">MBA - Finance & Investment Banking</option>
                          <option value="mba_analytics">MBA - Business Analytics & AI</option>
                          <option value="mba_mktg">MBA - Marketing & Digital Strategy</option>
                        </optgroup>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-body-text">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Submission Action utilizing Pink Accent Theme */}
                  <button 
                    type="submit" 
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-theme-2 to-pink-600 hover:from-pink-500 hover:to-theme-2 active:from-pink-700 active:to-pink-800 text-white font-semibold rounded-xl shadow-md shadow-theme-2/20 hover:shadow-lg hover:shadow-theme-2/30 transform transition-all duration-150 active:scale-95 focus:outline-none focus:ring-2 focus:ring-theme-2 focus:ring-offset-2 text-sm group"
                  >
                    Submit Request
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </form>

                <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-body-text">
                  <Star className="w-3.5 h-3.5 fill-current text-yellow" />
                  <span>Brochure generation completes in under 60 seconds.</span>
                </div>
              </>
            ) : (
              /* Success State */
              <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in-up">
                <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center text-theme-2 mb-4 border border-theme-2/20 scale-110 transition-transform duration-500">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-theme">Request Registered!</h3>
                <p className="text-sm text-body-text mt-2 max-w-xs">
                  Thank you, <strong>{formData.name}</strong>. A dedicated academic advisor for your chosen stream will reach out to <strong>{formData.email}</strong> shortly.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-sm font-semibold text-theme-2 hover:underline active:scale-95 transition-transform"
                >
                  Change program selection
                </button>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}