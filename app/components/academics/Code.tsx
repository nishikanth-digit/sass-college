"use client";

import React from "react";
import {
  ShieldCheck,
  Users,
  Scale,
  Clock,
  Zap,
  EyeOff,
  HandMetal,
  FileWarning,
} from "lucide-react";

interface ConductItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  tag: string;
}

const CONDUCT_RULES: ConductItem[] = [
  {
    title: "Academic Integrity",
    description:
      "Uphold the highest standards of honesty. Plagiarism, cheating, or data falsification will result in immediate disciplinary action.",
    icon: <ShieldCheck className="text-[var(--theme-color2)]" size={24} />,
    tag: "Core Value",
  },
  {
    title: "Inclusion & Respect",
    description:
      "Maintain a zero-tolerance policy towards harassment, discrimination, or bullying. Every voice deserves a safe space.",
    icon: <Users className="text-[var(--theme-color2)]" size={24} />,
    tag: "Community",
  },
  {
    title: "Professional Decorum",
    description:
      "Students are expected to adhere to the prescribed dress code and maintain professional etiquette during campus hours.",
    icon: <Scale className="text-[var(--theme-color2)]" size={24} />,
    tag: "Standard",
  },
  {
    title: "Punctuality & Presence",
    description:
      "Minimum 75% attendance is mandatory. Consistent tardiness affects both internal grading and laboratory access.",
    icon: <Clock className="text-[var(--theme-color2)]" size={24} />,
    tag: "Attendance",
  },
  {
    title: "Digital Ethics",
    description:
      "Responsible use of campus Wi-Fi and computing resources. Cybersecurity breaches are handled with legal protocols.",
    icon: <Zap className="text-[var(--theme-color2)]" size={24} />,
    tag: "IT Policy",
  },
  {
    title: "Substance Policy",
    description:
      "The campus is a strictly tobacco, alcohol, and drug-free zone. Possession leads to immediate suspension.",
    icon: <EyeOff className="text-[var(--theme-color2)]/70" size={24} />,
    tag: "Safety",
  },
];

export default function Code() {
  return (
    <section className="bg-[var(--theme-bg-light)] py-24 px-6 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--theme-color2)]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--theme-color2)]/10 blur-[120px] rounded-full" />

      <div className=" max-w-7xl mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="mb-16 md:mb-24 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--theme-color2)]/10 border border-[var(--theme-color2)]/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--theme-color2)] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--theme-color2)]">
              Institutional Standards
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight tracking-tight text-[var(--theme-color)]">
            CODE OF{" "}
            <span className="text-[var(--color-theme)]/60 italic font-medium">CONDUCT</span>
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed">
            Our campus thrives on mutual respect and professional excellence.
            All students are expected to harmonize their behavior with the
            following pillars of our community.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONDUCT_RULES.map((rule) => (
            <div
              key={rule.title}
              className="bg-white border border-gray-200 p-8 md:p-10 rounded-2xl hover:shadow-xl transition-all duration-300 group relative cursor-default"
            >
              <div className="relative z-10">
                <div className="mb-6 p-3 rounded-xl bg-gray-100 w-fit group-hover:scale-110 group-hover:bg-gray-200 transition-all duration-500">
                  {rule.icon}
                </div>

                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2 block">
                  {rule.tag}
                </span>

                <h3 className="text-xl font-bold text-[var(--theme-color)] mb-4 group-hover:text-[var(--theme-color2)] transition-colors duration-300">
                  {rule.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  {rule.description}
                </p>
              </div>

              {/* Decorative Icon */}
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <HandMetal className="text-gray-200" size={40} />
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-[2rem] bg-white border border-gray-200 shadow-sm">

          <div className="flex items-center gap-4">
            <div className="p-3 bg-[var(--theme-color2)]/20 rounded-xl text-[var(--theme-color2)]">
              <FileWarning size={24} />
            </div>

            <div>
              <h4 className="text-[var(--theme-color)] font-bold">
                Non-Compliance Notice
              </h4>
              <p className="text-slate-600 text-sm">
                Violations are reviewed by the Academic Board and may lead to
                permanent expulsion.
              </p>
            </div>
          </div>

          <button className="px-8 py-3 bg-[var(--theme-color)] text-white font-black text-xs uppercase tracking-widest rounded-xl hover:bg-[var(--theme-color2)] transition-all duration-300 shadow-md active:scale-95">
            Download Handbook PDF
          </button>

        </div>
      </div>
    </section>
  );
}