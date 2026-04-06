"use client";

import React from "react";
import {
  Users,
  FileText,
  Lightbulb,
  Award,
  Download,
  ArrowUpRight,
  BookOpen,
  ShieldCheck,
  Globe,
  Zap,
  Microscope,
  Fingerprint,
} from "lucide-react";

const committee = [
  { name: "Dr. Elena Vance", role: "Director of Research", dept: "Quantum Computing", img: "EV" },
  { name: "Dr. Marcus Thorne", role: "Dean (R&D)", dept: "Nanotechnology", img: "MT" },
  { name: "Prof. Sarah Jenkins", role: "Ethical Lead", dept: "Bio-Ethics", img: "SJ" },
];

const resources = [
  { title: "Research Policy 2026", size: "2.4 MB", type: "PDF" },
  { title: "Grant Proposal Template", size: "1.1 MB", type: "DOCX" },
  { title: "IPR & Patenting Guidelines", size: "3.2 MB", type: "PDF" },
];

export default function ResearchPage() {
  return (
    /* Background set to your theme-bg-light variable */
    <div className="min-h-screen bg-[var(--theme-bg-light)] py-24 px-6 relative overflow-hidden font-sans">
      
      {/* Background Glows (Same as Exam Section) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--theme-color2)]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--theme-color2)]/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Header Section (Replaced with Exam Design) */}
      <div className="max-w-7xl mx-auto px-4 relative z-10 mb-10 md:mb-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--theme-color2)]/10 border border-[var(--theme-color2)]/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--theme-color2)] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--theme-color2)]">
              Advancing Human Knowledge
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight tracking-tight text-[var(--theme-color)]">
            Research{" "}
            <span className="text-[var(--color-theme)]/60 italic font-medium"> & Development</span>
          </h2>
          <p className="mt-6 max-w-xl text-gray-600 text-lg font-medium leading-relaxed">
             Bridging the gap between theoretical exploration and real-world 
             impact through interdisciplinary excellence.
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-6 pb-24 relative z-10">
        
        {/* Bento Grid: Stats */}
        <div className="col-span-12 lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Patents", value: "42", icon: Lightbulb },
            { label: "Papers", value: "1.2k", icon: BookOpen },
            { label: "Funding", value: "$4.5M", icon: Award },
            { label: "Partners", value: "18", icon: Globe },
          ].map((stat, i) => (
            <div key={i} className="bg-white border border-black/5 p-6 rounded-3xl shadow-sm hover:shadow-md hover:border-theme-2/30 transition-all group">
              <stat.icon className="text-[var(--color-theme-2)] mb-4 group-hover:scale-110 transition-transform" size={24} />
              <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-slate-400 text-xs uppercase tracking-widest mt-1 font-bold">{stat.label}</div>
            </div>
          ))}
          
          {/* Main Content Area */}
          <div className="col-span-12 bg-white border border-black/5 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-sm">
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Advisory Committee</h2>
                  <p className="text-gray-600">The strategic minds behind our innovation pipeline.</p>
                </div>
                <Users className="text-[var(--color-theme-2)]/20" size={40} />
              </div>

              <div className="grid gap-4">
                {committee.map((member, i) => (
                  <div key={i} className="group flex items-center p-4 rounded-2xl hover:bg-[var(--theme-bg-light)] transition-all border border-transparent hover:border-[var(--color-theme-2)]/10">
                    <div className="w-14 h-14 rounded-full bg-[var(--color-theme-2)] flex items-center justify-center font-bold text-white shadow-lg shadow-[var(--color-theme-2)]/20">
                      {member.img}
                    </div>
                    <div className="ml-6 flex-1">
                      <h4 className="text-lg font-bold text-gray-900">{member.name}</h4>
                      <p className="text-sm text-slate-500 font-medium">{member.role} • <span className="text-[var(--color-theme-2)]">{member.dept}</span></p>
                    </div>
                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--color-theme-2)]" />
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[var(--color-theme-2)]/5 blur-[80px] rounded-full" />
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          
          {/* Resources Card */}
          <div className="bg-white border border-black/5 rounded-[2.5rem] p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-[var(--color-theme-2)]/10 rounded-lg">
                <FileText className="text-[var(--color-theme-2)]" size={20} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Resources</h3>
            </div>
            
            <div className="space-y-4">
              {resources.map((doc, i) => (
                <div key={i} className="group flex items-center justify-between p-4 bg-[var(--theme-bg-light)] rounded-2xl border border-transparent hover:border-[var(--color-theme-2)]/30 transition-all cursor-pointer">
                  <div className="overflow-hidden">
                    <p className="text-sm font-bold text-gray-900 truncate pr-2">{doc.title}</p>
                    <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-tighter font-bold">{doc.type} • {doc.size}</p>
                  </div>
                  <Download size={18} className="text-slate-400 group-hover:text-[var(--color-theme-2)] transition-colors shrink-0" />
                </div>
              ))}
            </div>

            <button className="w-full mt-8 py-4 bg-[var(--color-theme-2)] hover:opacity-90 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2 group shadow-xl shadow-[var(--color-theme-2)]/20">
              Portal Access
              <Fingerprint size={18} className="group-hover:animate-pulse" />
            </button>
          </div>

          {/* Ethics Banner */}
          <div className="relative group overflow-hidden rounded-[2.5rem] p-8 bg-gray-900 shadow-2xl shadow-black/20">
            <div className="relative z-10">
              <ShieldCheck className="mb-4 text-[var(--color-theme-2)]" size={32} />
              <h4 className="text-xl font-bold mb-2 text-white">Ethics Clearance</h4>
              <p className="text-sm mb-6 text-gray-400">
                Required for all projects involving human metrics.
              </p>
              <button className="text-sm font-black uppercase tracking-widest bg-[var(--color-theme-2)] text-white px-5 py-2.5 rounded-xl transition-transform active:scale-95">
                Apply Now
              </button>
            </div>
            <Microscope className="absolute -bottom-4 -right-4 text-white/5 w-32 h-32 -rotate-12" />
          </div>

        </div>
      </main>
    </div>
  );
}