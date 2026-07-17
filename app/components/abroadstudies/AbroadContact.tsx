"use client";

import React, { useState } from "react";
import { 
  Building2, 
  Mail, 
  Phone, 
  UserCheck, 
  Calendar, 
  Users, 
  GraduationCap, 
  ArrowRight,
  Sparkles,
  Copy,
  CheckCircle2,
  Bell
} from "lucide-react";

export default function StudyAbroadCell() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2500);
  };

  return (
    <div className="min-h-screen bg-theme-bg-light flex items-center justify-center p-4 md:p-8 lg:p-12 font-sans antialiased">
      
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl shadow-theme/5 border border-slate-200/60 overflow-hidden animate-fade-in-up">
        
        {/* Unified Top Color Line using Theme-1 and Theme-2 */}
        <div className="h-1.5 w-full bg-gradient-to-r from-theme to-theme-2" />

        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Administrative Information */}
          <div className="lg:col-span-5 p-6 md:p-10 bg-slate-50/50 border-b lg:border-b-0 lg:border-r border-slate-200/60 flex flex-col justify-between gap-10">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-theme/5 text-theme text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-theme-2" /> 
                Global Education Cell
              </div>
              
              <h1 className="text-3xl font-extrabold tracking-tight text-theme">
                Study Abroad Cell
              </h1>
              
              <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                Empowering students to achieve global academic excellence. Reach out to schedule personal profiling and university guidance.
              </p>
            </div>

            {/* Clean Contact Vectors with light theme color elements */}
            <div className="space-y-3">
              
              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200/60 shadow-xs">
                <div className="p-3 rounded-xl bg-theme/5 text-theme/80 shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Office Location</span>
                  <span className="text-sm font-semibold text-theme">Room No: Admin Block – 302</span>
                </div>
              </div>

              {/* Email Copier */}
              <button 
                onClick={() => handleCopy("abroadstudies@yourcollege.edu.in", "email")}
                className="w-full flex items-center justify-between gap-4 p-4 rounded-xl bg-white border border-slate-200/60 shadow-xs hover:border-slate-300 text-left group relative transition-colors"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="p-3 rounded-xl bg-theme/5 text-theme/80 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Official Email</span>
                    <span className="text-sm font-semibold text-theme block truncate">abroadstudies@yourcollege.edu.in</span>
                  </div>
                </div>
                
                <div className="shrink-0 text-slate-400 group-hover:text-theme transition-colors pl-2">
                  {copiedText === "email" ? (
                    <CheckCircle2 className="w-4 h-4 text-theme" />
                  ) : (
                    <Copy className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block" />
                  )}
                </div>
              </button>

              {/* Phone Line */}
              <a 
                href="tel:+91XXXXXXXXXX"
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200/60 shadow-xs hover:border-slate-300 group transition-colors"
              >
                <div className="p-3 rounded-xl bg-theme/5 text-theme/80 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Helpline Number</span>
                  <span className="text-sm font-semibold text-theme">+91-XXXXXXXXXX</span>
                </div>
              </a>

            </div>

            {/* Coordinator Section */}
            <div className="p-4 rounded-xl bg-theme text-footer-text-color flex items-center gap-4 shadow-sm shadow-theme/10">
              <div className="p-2.5 rounded-lg bg-white/10 text-white/90 shrink-0">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-medium uppercase tracking-widest text-color-white block">Cell Coordinators</span>
                <span className="text-sm font-bold block mt-0.5">Prof. [Name] / Dr. [Name]</span>
              </div>
            </div>

          </div>

          {/* Right Column: Events */}
          <div className="lg:col-span-7 p-6 md:p-10 flex flex-col justify-between gap-8">
            
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h2 className="text-xl font-bold text-theme flex items-center gap-2">
                  <Bell className="w-5 h-5 text-theme-2" /> Upcoming Events
                </h2>
              </div>

              {/* Clean Uniform Event List */}
              <div className="space-y-3">
                
                {/* Event 1 */}
                <div className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-slate-100 bg-white hover:border-slate-200 transition-all duration-200">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-theme/5 text-theme/80 group-hover:bg-theme group-hover:text-white transition-all duration-200">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-theme">Study Abroad Fair</h3>
                      <p className="text-xs text-slate-500 mt-0.5">Global university panel and program matches.</p>
                    </div>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <span className="inline-block px-3 py-1.5 rounded-lg bg-slate-50 text-theme font-mono text-xs font-bold border border-slate-200">
                      [Date]
                    </span>
                  </div>
                </div>

                {/* Event 2 */}
                <div className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-slate-100 bg-white hover:border-slate-200 transition-all duration-200">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-theme/5 text-theme/80 group-hover:bg-theme group-hover:text-white transition-all duration-200">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-theme">UK & Canada University Delegates Visit</h3>
                      <p className="text-xs text-slate-500 mt-0.5">Direct profile evaluation and policy briefings.</p>
                    </div>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <span className="inline-block px-3 py-1.5 rounded-lg bg-slate-50 text-theme font-mono text-xs font-bold border border-slate-200">
                      [Date]
                    </span>
                  </div>
                </div>

                {/* Event 3 */}
                <div className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-slate-100 bg-white hover:border-slate-200 transition-all duration-200">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-theme/5 text-theme/80 group-hover:bg-theme group-hover:text-white transition-all duration-200">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-theme">IELTS & SOP Workshop</h3>
                      <p className="text-xs text-slate-500 mt-0.5">Cracking test structures and writing stellar essays.</p>
                    </div>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <span className="inline-block px-3 py-1.5 rounded-lg bg-theme/5 text-theme font-semibold text-xs border border-theme/10">
                      Every Month
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Strategic Call to Action featuring Pink Accent (`theme-2`) */}
            <button className="w-full py-4 px-6 bg-theme-2 hover:bg-theme-2/95 text-white font-bold text-sm rounded-xl tracking-wide transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer shadow-md shadow-theme-2/10">
              Register for Upcoming Sessions 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

          </div>

        </div>
      </div>

    </div>
  );
}