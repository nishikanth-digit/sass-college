"use client";

import React, { useState } from "react";
import {
  Briefcase,
  Sprout,
  FileDown,
  ChevronRight,
  Pill,
  ArrowUpRight,
  Zap,
} from "lucide-react";

type AdmissionProgram = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  stats: {
    seats: string;
    duration: string;
    packages: string;
  };
  batches: string[];
};

const ADMISSIONS_2026: AdmissionProgram[] = [
  {
    id: "btech",
    title: "B.Tech Engineering",
    description:
      "Future-ready specializations in AI, Robotics, and Sustainable Tech.",
    icon: <Zap size={24} />,
    stats: { seats: "1200+", duration: "4 Years", packages: "45 LPA" },
    batches: ["CSE", "ECE", "Mechanical", "AI & DS"],
  },
  {
    id: "mba",
    title: "Global MBA",
    description:
      "Executive leadership and strategic management for the digital age.",
    icon: <Briefcase size={24} />,
    stats: { seats: "240", duration: "2 Years", packages: "28 LPA" },
    batches: ["Marketing", "Finance", "HR", "Business Analytics"],
  },
  {
    id: "agri",
    title: "Agricultural Sciences",
    description:
      "Advancing food security through precision farming and biotechnology.",
    icon: <Sprout size={24} />,
    stats: { seats: "180", duration: "4 Years", packages: "12 LPA" },
    batches: ["B.Sc Agri (Hons)", "M.Sc Agronomy"],
  },
  {
    id: "pharmacy",
    title: "Pharmacy (B.Pharm)",
    description: "Pharmaceutical research and clinical excellence.",
    icon: <Pill size={24} />,
    stats: { seats: "100", duration: "4 Years", packages: "15 LPA" },
    batches: ["B.Pharmacy", "M.Pharmacy"],
  },
];

export default function Admission() {
  const [selectedTab, setSelectedTab] = useState<AdmissionProgram>(
    ADMISSIONS_2026[0]
  );

  return (
    <section className="relative overflow-hidden bg-[var(--theme-bg-light)] text-[var(--color-theme)] selection:bg-[var(--color-theme-2)]/20 font-sans py-16">
      {/* Soft Accent Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[var(--color-theme-2)]/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[var(--color-theme-2)]/10 rounded-full blur-[120px] -z-10" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <header className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 border bg-[var(--color-theme-2)]/10 border-[var(--color-theme-2)]/20">
            <span className="relative flex h-2 w-2">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ backgroundColor: "var(--color-theme-2)" }}
              />
              <span
                className="relative inline-flex rounded-full h-2 w-2"
                style={{ backgroundColor: "var(--color-theme-2)" }}
              />
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--color-theme-2)]">
              Admissions Open 2026-27
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-[var(--color-theme)]">
            Architecting the Next <br />
            <span className="text-[var(--color-theme)]/60 italic font-medium">
              Generation of Leaders.
            </span>
          </h2>

          <p className="max-w-2xl text-[var(--color-theme)]/70 text-sm md:text-base leading-relaxed mt-5">
            Select your path and download the official 2026 brochure. Join a
            community of innovators across engineering, management, and life
            sciences.
          </p>
        </header>

        {/* Navigation (Tabs) */}
        <div className="flex flex-wrap gap-3 mb-10">
          {ADMISSIONS_2026.map((program) => {
            const isActive = selectedTab.id === program.id;

            return (
              <button
                key={program.id}
                onClick={() => setSelectedTab(program)}
                className={`relative px-5 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 border shadow-sm ${
                  isActive
                    ? "bg-white border-[var(--color-theme-2)]/30 text-[var(--color-theme)]"
                    : "bg-white border-[var(--color-theme)]/10 text-[var(--color-theme)]/70 hover:border-[var(--color-theme-2)]/40 hover:text-[var(--color-theme)]"
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-2xl bg-[var(--color-theme-2)]/5" />
                )}

                <div
                  className="relative z-10"
                  style={{
                    color: isActive
                      ? "var(--color-theme-2)"
                      : "var(--color-theme)",
                  }}
                >
                  {program.icon}
                </div>

                <span className="relative z-10 text-sm md:text-base">
                  {program.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Program Details */}
          <div className="lg:col-span-2">
            <div className="relative p-8 md:p-10 rounded-[2rem] bg-white border border-[var(--color-theme)]/10 shadow-xl overflow-hidden transition-all duration-300">
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-theme-2)]" />

              <div className="relative z-10">
                <h3 className="text-2xl md:text-4xl font-bold mb-4 text-[var(--color-theme)]">
                  {selectedTab.title}
                </h3>

                <p className="text-[var(--color-theme)]/70 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
                  {selectedTab.description}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                  {Object.entries(selectedTab.stats).map(([label, value]) => (
                    <div key={label} className="space-y-1">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-theme)]/60 font-bold">
                        {label}
                      </div>
                      <div className="text-2xl md:text-3xl font-bold text-[var(--color-theme)]">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {selectedTab.batches.map((batch) => (
                    <span
                      key={batch}
                      className="px-4 py-2 rounded-xl text-xs font-semibold border"
                      style={{
                        backgroundColor: "white",
                        borderColor: "rgba(27,31,59,0.08)",
                        color: "rgba(27,31,59,0.8)",
                      }}
                    >
                      {batch}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative Background Icon */}
              <div
                className="absolute top-1/2 right-[-5%] -translate-y-1/2 rotate-12 scale-[3] pointer-events-none"
                style={{ color: "var(--color-theme-2)", opacity: 0.05 }}
              >
                {selectedTab.icon}
              </div>
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="space-y-6">
            {/* Apply Card */}
            <div className="p-8 rounded-[2rem] bg-white border border-[var(--color-theme)]/10 shadow-xl relative overflow-hidden group">
              <div className="absolute inset-x-0 top-0 h-1 bg-[var(--color-theme-2)]" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 bg-[var(--color-theme-2)]/10 border border-[var(--color-theme-2)]/20">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--color-theme-2)]">
                    Apply Now
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2 text-[var(--color-theme)]">
                  Apply for 2026
                </h3>

                <p className="text-[var(--color-theme)]/70 text-sm mb-6 leading-relaxed">
                  Early bird applications close on April 15, 2026.
                </p>

                <button className="w-full bg-[var(--color-theme-2)] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:gap-4 transition-all duration-300">
                  Start Application <ArrowUpRight size={18} />
                </button>
              </div>
            </div>

            {/* Brochure Card */}
            <div className="p-8 rounded-[2rem] bg-white border border-[var(--color-theme)]/10 hover:border-[var(--color-theme-2)]/40 transition-all duration-300 shadow-lg group">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-[var(--color-theme-2)]/10 text-[var(--color-theme-2)]">
                  <FileDown size={24} />
                </div>

                <span className="text-[10px] font-black text-[var(--color-theme)]/60 tracking-[0.2em] uppercase">
                  PDF • 4.2 MB
                </span>
              </div>

              <h3 className="text-lg font-bold mb-3 text-[var(--color-theme)]">
                Brochure & Curriculum
              </h3>

              <p className="text-[var(--color-theme)]/70 text-sm mb-5">
                Download the latest syllabus, curriculum, and admission details.
              </p>

              <button className="text-[var(--color-theme-2)] font-bold flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                Download Syllabus <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}