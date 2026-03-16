"use client";

import React from "react";
import {
  TrendingUp,
  AlertTriangle,
  ArrowUpRight,
  FileText,
  LucideIcon,
  Award,
  Scale,
  Zap,
  Clock,
} from "lucide-react";

interface RegulationItem {
  title: string;
  id: string;
  summary: string;
  rules: string[];
  Icon: LucideIcon;
  gradient: string;
  pdfUrl: string;
}

const JNTUH_EXPANDED_DATA: RegulationItem[] = [
  {
    title: "Attendance Framework",
    id: "REG-01",
    summary:
      "Mandatory compliance for semester examination eligibility and condonation.",
    rules: [
      "75% Aggregate attendance required",
      "65% Minimum for medical condonation",
      "Detention applied below 65%",
    ],
    Icon: Clock,
    gradient: "from-[var(--theme-color2)]/10 to-transparent",
    pdfUrl: "#",
  },
  {
    title: "Promotion Strategy",
    id: "REG-02",
    summary:
      "Credit-based progression metrics for B.Tech R22 vertical movement.",
    rules: [
      "1st to 2nd Year: 20/40 Credits",
      "2nd to 3rd Year: 48/80 Credits",
      "3rd to 4th Year: 76/120 Credits",
    ],
    Icon: TrendingUp,
    gradient: "from-[var(--theme-color2)]/10 to-transparent",
    pdfUrl: "#",
  },
  {
    title: "Grading System",
    id: "REG-03",
    summary:
      "The 10-point Letter Grade system used for SGPA and CGPA calculation.",
    rules: [
      "O (Outstanding): 90-100% [10 pts]",
      "A+ (Excellent): 80-89% [9 pts]",
      "F (Fail): < 40% [0 pts]",
    ],
    Icon: Award,
    gradient: "from-[var(--theme-color2)]/10 to-transparent",
    pdfUrl: "#",
  },
  {
    title: "Examination Ethics",
    id: "REG-04",
    summary:
      "Strict protocols against academic malpractice and impersonation.",
    rules: [
      "Impersonation: Police Handover",
      "Copying: All subject cancellation",
      "Gadgets: Expulsion from Hall",
    ],
    Icon: AlertTriangle,
    gradient: "from-[var(--theme-color2)]/10 to-transparent",
    pdfUrl: "#",
  },
  {
    title: "Grace Marks Policy",
    id: "REG-05",
    summary:
      "Provision for marginal marks required to pass or change class.",
    rules: [
      "Max 0.25% of total marks allowed",
      "Applicable for theory subjects only",
      "Helps in securing degree/class",
    ],
    Icon: Scale,
    gradient: "from-[var(--theme-color2)]/10 to-transparent",
    pdfUrl: "#",
  },
  {
    title: "Project & Industry",
    id: "REG-06",
    summary:
      "Guidelines for Industrial Projects, Internships, and Viva-Voce.",
    rules: [
      "Mandatory 4-week Summer Internship",
      "Internal & External Project Eval",
      "Industry project viva in 8th Sem",
    ],
    Icon: Zap,
    gradient: "from-[var(--theme-color2)]/10 to-transparent",
    pdfUrl: "#",
  },
];

export default function Rules() {
  return (
    <section className="relative bg-[var(--theme-bg-light)] py-24 px-4 overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--theme-color2)]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--theme-color2)]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className=" max-w-7xl mx-auto px-4 relative z-10">

        {/* Title */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className=" space-y-4">
            <span className="text-[var(--theme-color2)] text-[10px] font-black uppercase tracking-[0.2em] bg-[var(--theme-color2)]/10 px-3 py-1.5 rounded border border-[var(--theme-color2)]/20">
              Statutory Records
            </span>

            <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight tracking-tight text-[var(--theme-color)]">
              Regulatory  
              <span className="text-[var(--color-theme)]/60 italic font-medium"> Index</span>
            </h2>
          </div>

          <p className="text-slate-600 text-sm font-medium max-w-xs leading-relaxed italic border-l border-gray-300 pl-6 h-fit">
            Official DIGIT R22 Academic Guidelines & Compliance Protocols.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {JNTUH_EXPANDED_DATA.map((item, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col h-full min-h-[460px] bg-white border border-gray-200 rounded-[2.5rem] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gray-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-tr-[2.5rem]" />

              {/* Icon */}
              <div className="flex justify-between items-center mb-8">
                <div className="p-4 bg-gray-100 border border-gray-200 rounded-2xl group-hover:bg-[var(--theme-color2)] group-hover:border-[var(--theme-color2)] transition-all duration-500 group-hover:rotate-[10deg]">
                  <item.Icon
                    className="text-[var(--theme-color2)] group-hover:text-white transition-colors duration-500"
                    size={24}
                  />
                </div>

                <div className="px-3 py-1 bg-gray-100 rounded-full border border-gray-200">
                  <span className="font-mono text-[9px] font-bold text-slate-500 tracking-[0.2em]">
                    {item.id}
                  </span>
                </div>
              </div>

              {/* Title */}
              <div className="mb-6 space-y-3">
                <h3 className="text-xl md:text-2xl font-medium text-[var(--theme-color)] tracking-tight group-hover:text-[var(--theme-color2)] transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed min-h-[40px]">
                  {item.summary}
                </p>
              </div>

              {/* Rules */}
              <div className="flex-grow space-y-4 mb-8">
                {item.rules.map((rule, rIdx) => (
                  <div key={rIdx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[var(--theme-color2)] transition-all duration-300" />
                    <p className="text-sm text-slate-600">
                      {rule}
                    </p>
                  </div>
                ))}
              </div>

              {/* Button */}
              <a
                href={item.pdfUrl}
                className="inline-flex items-center justify-between w-full p-4 mt-auto rounded-xl bg-gray-100 border border-gray-200 hover:bg-[var(--theme-color2)] hover:text-white transition-all duration-300 group/btn"
              >
                <div className="flex items-center gap-3">
                  <FileText
                    size={16}
                    className="text-[var(--theme-color2)] group-hover/btn:text-white"
                  />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    Download PDF
                  </span>
                </div>

                <ArrowUpRight
                  size={14}
                  className="opacity-40 group-hover/btn:opacity-100"
                />
              </a>

              {/* Hover Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem] pointer-events-none -z-10`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}