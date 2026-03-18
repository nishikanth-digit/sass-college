"use client";

import React from "react";

/**
 * Data mapped directly from institutional valuation protocols.
 */
interface ValuationStep {
  phase: string;
  title: string;
  subtitle: string;
  description: string;
}

const VALUATION_DATA: ValuationStep[] = [
  {
    phase: "Step 01",
    title: "Digital Script Ingestion",
    subtitle: "Barcode Verification & Scanning",
    description:
      "Post-examination, all answer scripts are collected, bundled, and sanitized. Each booklet is scanned via high-speed OMR/ICR scanners to ensure anonymity by masking the student's personal details with unique encrypted barcodes.",
  },
  {
    phase: "Step 02",
    title: "On-Screen Marking (OSM)",
    subtitle: "Remote & Secure Evaluation",
    description:
      "Digitized scripts are uploaded to a secure cloud server. Subject Matter Experts (SMEs) evaluate the scripts on-screen. The system prevents skipping pages and ensures every question is awarded marks before final submission.",
  },
  {
    phase: "Step 03",
    title: "Chief Examiner Audit",
    subtitle: "Moderation & Quality Check",
    description:
      "To maintain 100% accuracy, 10% of the evaluated scripts are randomly pulled for a 'Secondary Review' by the Chief Examiner. This ensures consistency in grading and adherence to the marking scheme provided by Digit College.",
  },
];

export default function ExamValuation() {
  return (
    <section className="bg-theme py-20 px-6 md:px-16 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[var(--theme-color2)]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[var(--theme-color2)]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20 space-y-4">
          
          <div className="inline-block px-4 py-1 bg-[var(--theme-color2)]/10 border border-[var(--theme-color2)]/30 rounded-full text-[var(--theme-color2)] text-xs font-semibold uppercase tracking-widest">
            Exam Valuation Steps
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Valuation{" "}
            <span className="text-white italic">
              Procedure
            </span>
          </h1>

          <p className="max-w-2xl text-gray-400 text-lg leading-relaxed">
            A transparent, tech-driven evaluation system designed to ensure
            unbiased results and academic excellence for every student.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {VALUATION_DATA.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white/[0.03] backdrop-blur-sm p-10 rounded-[3rem] border border-theme-2/30
              transition-all duration-700 ease-[cubic-bezier(0.15,0,0.05,1)]
              hover:shadow-[0_0_40px_rgba(233,30,99,0.15)]
              hover:-translate-y-4 hover:border-[var(--theme-color2)]/40"
            >
              
              {/* Step Indicator (fixed) */}
              <div className="absolute -left-4 top-12 w-1.5 h-16 bg-white/10 
              transition-all duration-500 rounded-full
              group-hover:opacity-0 group-hover:-translate-x-2" />

              <div className="relative space-y-6">
                
                {/* Top */}
                <div className="flex justify-between items-start">
                  <span className="text-sm font-black text-theme-2 tracking-widest uppercase">
                    {item.phase}
                  </span>

                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <svg
                      className="w-6 h-6 text-[var(--theme-color2)]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    {item.subtitle}
                  </p>
                </div>

                <p className="text-gray-400 text-[15px] leading-relaxed pb-4">
                  {item.description}
                </p>

                {/* Bottom Hover */}
                <div className="flex items-center space-x-2 text-[var(--theme-color2)] opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 group-hover:translate-x-0">
                  <span className="text-xs font-bold uppercase tracking-tighter">
             
                  </span>
                  <div className="h-[1px] w-8 bg-[var(--theme-color2)]" />
                </div>
              </div>

              {/* Glow */}
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-[var(--theme-color2)]/0 to-[var(--theme-color2)]/0 group-hover:from-[var(--theme-color2)]/10 group-hover:to-transparent transition-colors duration-700 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}