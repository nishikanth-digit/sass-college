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

// --- Pink Theme Only Data Structure ---
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
    <section className="relative overflow-hidden bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--color-theme-2)]/20 font-sans">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] blur-[120px] rounded-full opacity-15"
          style={{ background: "var(--color-theme-2)" }}
        />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] blur-[120px] rounded-full opacity-15"
          style={{ background: "var(--color-theme-2)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-20">
        {/* Header */}
        <header className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border bg-[var(--color-theme-bg-light)] border-[var(--color-theme-2)]/20">
            <span className="relative flex h-2 w-2">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ backgroundColor: "var(--color-theme-2)" }}
              ></span>
              <span
                className="relative inline-flex rounded-full h-2 w-2"
                style={{ backgroundColor: "var(--color-theme-2)" }}
              ></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-theme-2)]">
              Admissions Open 2026-27
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6 text-[var(--color-theme)]">
            Architecting <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, var(--color-theme-2), var(--color-theme-2))",
              }}
            >
              Tomorrow&apos;s Leaders.
            </span>
          </h1>

          <p className="max-w-2xl text-[var(--color-body-text)] text-lg md:text-xl font-medium leading-relaxed">
            Select your path and download the official 2026 brochure. Join a
            community of innovators across engineering, management, and life
            sciences.
          </p>
        </header>

        {/* Navigation (Tabs) */}
        <div className="flex flex-wrap gap-4 mb-12">
          {ADMISSIONS_2026.map((program) => {
            const isActive = selectedTab.id === program.id;

            return (
              <button
                key={program.id}
                onClick={() => setSelectedTab(program)}
                className={`relative px-6 py-4 rounded-2xl font-bold transition-all duration-300 flex items-center gap-3 border ${
                  isActive
                    ? "bg-white border-[var(--color-theme-2)]/20 text-[var(--color-theme)] shadow-xl"
                    : "bg-transparent border-transparent text-[var(--color-body-text)] hover:text-[var(--color-theme)]"
                }`}
              >
                {isActive && (
                  <span
                    className="absolute inset-0 rounded-2xl opacity-10"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--color-theme-2), var(--color-theme-2))",
                    }}
                  />
                )}

                <div
                  className="relative z-10"
                  style={{
                    color: isActive
                      ? "var(--color-theme-2)"
                      : "var(--color-body-text)",
                  }}
                >
                  {program.icon}
                </div>

                <span className="relative z-10">{program.title}</span>
              </button>
            );
          })}
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Program Details */}
          <div className="lg:col-span-2 space-y-8">
            <div
              key={selectedTab.id}
              className="p-8 md:p-12 rounded-[2.5rem] bg-white border border-[var(--color-theme-2)]/10 shadow-2xl relative overflow-hidden group transition-all duration-300"
            >
              {/* Soft top pink line */}
              <div
                className="absolute top-0 left-0 w-full h-1"
                style={{
                  background:
                    "linear-gradient(90deg, var(--color-theme-2), var(--color-theme-2))",
                }}
              />

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--color-theme)]">
                  {selectedTab.title}
                </h2>

                <p className="text-[var(--color-body-text)] text-lg mb-8 max-w-xl">
                  {selectedTab.description}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
                  {Object.entries(selectedTab.stats).map(([label, value]) => (
                    <div key={label} className="space-y-1">
                      <div className="text-[10px] uppercase tracking-widest text-[var(--color-body-text)] font-bold">
                        {label}
                      </div>
                      <div className="text-2xl font-black text-[var(--color-theme)]">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {selectedTab.batches.map((batch) => (
                    <span
                      key={batch}
                      className="px-4 py-2 rounded-xl text-xs font-bold border"
                      style={{
                        backgroundColor: "var(--color-theme-bg-light)",
                        borderColor: "rgba(233, 30, 99, 0.12)",
                        color: "var(--color-theme)",
                      }}
                    >
                      {batch}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative background icon */}
              <div
                className="absolute top-1/2 right-[-5%] -translate-y-1/2 rotate-12 scale-[3] pointer-events-none"
                style={{ color: "var(--color-theme-2)", opacity: 0.05 }}
              >
                {selectedTab.icon}
              </div>
            </div>
          </div>

          {/* Right: Actions / Quick Links */}
          <div className="space-y-6">
            {/* Apply Card */}
            <div
              className="p-8 rounded-[2rem] shadow-2xl group cursor-pointer overflow-hidden relative text-white"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-theme-2), var(--color-theme-2))",
              }}
            >
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">Apply for 2026</h3>
                <p className="text-white/80 text-sm mb-6 font-medium">
                  Early bird applications close on April 15, 2026.
                </p>
                <button className="w-full bg-white text-[var(--color-theme-2)] font-black py-4 rounded-xl flex items-center justify-center gap-2 hover:gap-4 transition-all duration-300">
                  Start Application <ArrowUpRight size={18} />
                </button>
              </div>

              <div
                className="absolute -bottom-4 -right-4 p-12 rounded-full blur-2xl hover:scale-150 transition-transform duration-300"
                style={{ background: "rgba(255,255,255,0.12)" }}
              />
            </div>

            {/* Brochure Card */}
            <div className="p-8 rounded-[2rem] bg-white border border-[var(--color-theme-2)]/10 hover:border-[var(--color-theme-2)]/30 transition-all duration-300 shadow-lg group">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-[var(--color-theme-bg-light)] text-[var(--color-theme-2)]">
                  <FileDown size={24} />
                </div>
                <span className="text-[10px] font-black text-[var(--color-body-text)] tracking-[0.2em] uppercase">
                  PDF • 4.2 MB
                </span>
              </div>

              <h3 className="text-lg font-bold mb-4 text-[var(--color-theme)]">
                Brochure & Curriculum
              </h3>

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