"use client";

import React from "react";
import {
  Users,
  FileText,
  Lightbulb,
  Award,
  Download,
  ArrowRight,
  BookOpen,
  ShieldCheck,
  Globe,
  Zap,
} from "lucide-react";

const committee = [
  { name: "Dr. Elena Vance", role: "Director of Research", dept: "Quantum Computing", img: "EV" },
  { name: "Dr. Marcus Thorne", role: "Dean (R&D)", dept: "Nanotechnology", img: "MT" },
  { name: "Prof. Sarah Jenkins", role: "Ethical Lead", dept: "Bio-Ethics", img: "SJ" },
];

const resources = [
  { title: "Institutional Research Policy 2026", size: "2.4 MB", type: "PDF" },
  { title: "Grant Proposal Template", size: "1.1 MB", type: "DOCX" },
  { title: "IPR & Patenting Guidelines", size: "3.2 MB", type: "PDF" },
  { title: "Annual Research Report", size: "5.8 MB", type: "PDF" },
];

export default function Research() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] text-slate-900 pb-24 selection:bg-pink-100">
      
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-pink-600/10 to-transparent" />

        <div className="relative z-10 text-center px-4 animate-in fade-in zoom-in duration-700">
          <span className="text-[var(--color-theme-2)] font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
            Discovery • Innovation • Impact
          </span>
          <h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-10">
            Research & <span className="text-[var(--color-theme-2)]">Development</span>
          </h1>
          <div className="h-1 w-20 bg-[var(--color-theme-2)] mx-auto rounded-full" />
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 -mt-24 relative z-20">
        
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {[
            { label: "Active Patents", value: "42", icon: Lightbulb },
            { label: "Research Papers", value: "1.2k", icon: BookOpen },
            { label: "Funding (USD)", value: "$4.5M", icon: Award },
            { label: "Collaborations", value: "18", icon: Globe },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/40 flex flex-col items-center border border-slate-50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="p-4 bg-slate-50 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 text-[var(--color-theme-2)]">
                <stat.icon size={28} />
              </div>
              <span className="text-3xl font-bold tracking-tight text-slate-800">{stat.value}</span>
              <span className="text-slate-500 font-medium text-sm mt-1">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Committee */}
          <div className="lg:col-span-2">
            <div className="mb-10">
              <h2 className="text-3xl font-medium tracking-tight flex items-center gap-3">
                <ShieldCheck className="text-[var(--color-theme-2)]" />
                Advisory Committee
              </h2>
              <p className="text-slate-500 mt-2 font-light">
                The leadership driving our institutional research strategy.
              </p>
            </div>

            <div className="space-y-6">
              {committee.map((member, i) => (
                <div
                  key={i}
                  className="group flex items-center p-7 bg-white rounded-2xl border border-slate-100 hover:border-pink-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-semibold text-lg group-hover:bg-[var(--color-theme-2)] group-hover:text-white transition-all">
                    {member.img}
                  </div>

                  <div className="ml-8 flex-1">
                    <h4 className="text-xl font-medium text-slate-800">{member.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[var(--color-theme-2)] font-medium text-xs uppercase tracking-wider">
                        {member.role}
                      </span>
                      <span className="w-1 h-1 bg-slate-300 rounded-full" />
                      <span className="text-slate-400 text-xs">{member.dept}</span>
                    </div>
                  </div>

                  <ArrowRight
                    className="text-slate-300 group-hover:text-[var(--color-theme-2)] group-hover:translate-x-2 transition-all"
                    size={20}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <div className="mb-10">
              <h3 className="text-2xl font-medium tracking-tight flex items-center gap-3">
                <FileText className="text-[var(--color-theme-2)]" />
                Resources
              </h3>
              <p className="text-slate-500 mt-2 font-light">
                Download policies and proposal forms.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
              {resources.map((doc, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-slate-700 font-medium group-hover:text-[var(--color-theme-2)] transition-colors">
                      {doc.title}
                    </span>
                    <Download
                      className="text-slate-300 group-hover:text-[var(--color-theme-2)] transition-colors"
                      size={18}
                    />
                  </div>

                  <div className="flex gap-2">
                    <span className="text-[10px] bg-[var(--color-theme-2)]/10 text-[var(--color-theme-2)] px-2 py-0.5 rounded font-bold">
                      {doc.type}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      {doc.size}
                    </span>
                  </div>

                  {i !== resources.length - 1 && (
                    <div className="h-px bg-slate-50 mt-6" />
                  )}
                </div>
              ))}

              <button className="w-full mt-6 bg-slate-900 text-white py-4 rounded-xl font-medium hover:bg-[var(--color-theme-2)] shadow-lg shadow-slate-200 transition-all active:scale-[0.98]">
                Portal Login
              </button>
            </div>

            {/* Quick Card */}
            <div className="mt-8 p-6 bg-gradient-to-br from-[var(--color-theme-2)] to-pink-700 rounded-2xl text-white shadow-xl">
              <Zap className="mb-4 text-pink-200" />
              <h4 className="font-medium text-lg mb-2">Ethics Clearance</h4>
              <p className="text-pink-100 text-xs leading-relaxed mb-4">
                All research involving human subjects must obtain clearance from the Institutional Ethics Committee.
              </p>
              <button className="text-xs font-bold underline decoration-pink-300 underline-offset-4 hover:text-white transition-colors">
                View Guidelines →
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}