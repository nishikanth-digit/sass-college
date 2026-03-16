"use client";

import React from "react";
import {
  Scale,
  Gavel,
  FileWarning,
  Download,
  AlertOctagon,
  UserX,
  Ban,
  LandPlot,
  LifeBuoy,
  AlertTriangle,
  LucideIcon,
} from "lucide-react";

type PolicyDoc = {
  title: string;
  description: string;
  version: string;
  pdfPath: string;
};

type Consequence = {
  icon: LucideIcon;
  label: string;
  desc: string;
  color: string;
};

const CONSEQUENCES: Consequence[] = [
  {
    icon: UserX,
    label: "Expulsion",
    desc: "Immediate removal from records.",
    color: "text-[var(--theme-color2)]",
  },
  {
    icon: Ban,
    label: "Rustication",
    desc: "Suspension for 2+ years.",
    color: "text-[var(--theme-color2)]/80",
  },
  {
    icon: Scale,
    label: "Legal Action",
    desc: "FIR under Anti-Ragging Acts.",
    color: "text-[var(--theme-color2)]/70",
  },
  {
    icon: AlertOctagon,
    label: "Monetary Fine",
    desc: "Penalties up to ₹2.5 Lakhs.",
    color: "text-[var(--theme-color2)]/90",
  },
];

const POLICIES: PolicyDoc[] = [
  {
    title: "UGC Regulations 2026",
    description: "Standard procedures for compliance.",
    version: "V.4.2",
    pdfPath: "/docs/ugc-2026.pdf",
  },
  {
    title: "Campus Safety Bylaws",
    description: "Internal conduct rules for campus.",
    version: "2026-B",
    pdfPath: "/docs/safety-bylaws.pdf",
  },
  {
    title: "Affidavit Template",
    description: "Mandatory undertaking form.",
    version: "Release 1",
    pdfPath: "/docs/affidavit.pdf",
  },
];

export default function Ragging() {
  const handleDownload = (path: string, name: string) => {
    console.log(`Downloading: ${name} from ${path}`);
  };

  return (
    <div className="min-h-screen bg-[var(--theme-bg-light)] text-slate-700 p-4 md:p-8 font-sans selection:bg-[var(--theme-color2)]/30 overflow-x-hidden">
      <div className=" max-w-7xl mx-auto px-4 space-y-10">
        {/* HEADER */}
        <header className="relative flex flex-col md:flex-row justify-between items-end gap-6 border-b border-gray-200 pb-8">
          <div className="space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--theme-color2)]/10 border border-[var(--theme-color2)]/30 text-[var(--theme-color2)] text-[9px] font-black uppercase tracking-[0.2em]">
              <AlertTriangle size={12} className="animate-pulse" />
              Judicial Compliance Division
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight tracking-tight text-[var(--theme-color)]">
              ANTI <span className="text-[var(--color-theme)]/60 italic font-medium">RAGGING</span>
            </h1>

            <p className="max-w-md text-slate-500 text-sm font-medium leading-relaxed">
              Ragging is a{" "}
              <span className="text-slate-900 uppercase text-[10px] font-bold tracking-widest">
                criminal offense
              </span>
              . The institution operates under a strict zero-tolerance mandate.
            </p>
          </div>

          <div className="text-right space-y-1">
            <div className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-500">
              24/7 Helpline Access
            </div>
            <div className="text-2xl md:text-3xl font-black text-[var(--theme-color2)]">
              1800-180-5522
            </div>
          </div>

          <div className="absolute -left-10 -top-10 w-64 h-64 bg-[var(--theme-color2)]/10 blur-[100px] rounded-full -z-0" />
        </header>

        {/* PENALTIES */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CONSEQUENCES.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 p-6 rounded-[1.5rem] relative overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              <div
                className={`${item.color} mb-4 transition-transform duration-300 group-hover:-translate-y-1`}
              >
                <item.icon size={24} />
              </div>

              <h3 className="text-[var(--theme-color)] font-bold text-lg mb-2 tracking-tight group-hover:text-[var(--theme-color2)] transition-colors">
                {item.label}
              </h3>

              <p className="text-xs text-slate-500">{item.desc}</p>

              <item.icon
                size={80}
                className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 rotate-12 text-slate-400 transition-opacity duration-300"
              />
            </div>
          ))}
        </section>

        {/* DOCUMENTS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-1">
              <Gavel size={14} className="text-[var(--theme-color2)]" />
              Statutory Documentation
            </h2>

            <div className="space-y-2">
              {POLICIES.map((doc, i) => (
                <div
                  key={i}
                  className="group flex items-center justify-between p-5 rounded-[1.2rem] bg-white border border-gray-200 hover:border-[var(--theme-color2)]/40 hover:bg-[var(--theme-color2)]/[0.03] transition-all duration-300"
                >
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-200 text-slate-500 group-hover:text-[var(--theme-color2)] transition-colors">
                      <FileWarning size={18} />
                    </div>

                    <div>
                      <h4 className="text-[var(--theme-color)] font-bold text-base group-hover:translate-x-1 transition-transform">
                        {doc.title}
                      </h4>
                      <p className="text-slate-500 text-[11px]">
                        {doc.description}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDownload(doc.pdfPath, doc.title)}
                    className="p-3 rounded-xl bg-gray-100 text-slate-500 hover:bg-[var(--theme-color2)] hover:text-white transition-all duration-200 active:scale-95"
                  >
                    <Download size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* REPORT CARD */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-[var(--theme-color2)]/20 to-transparent p-[1px] rounded-[2rem]">
              <div className="bg-white rounded-[2rem] p-8 border border-gray-200 h-full">
                <div className="w-12 h-12 rounded-2xl bg-[var(--theme-color2)] flex items-center justify-center mb-6">
                  <LandPlot size={24} className="text-white" />
                </div>

                <h3 className="text-2xl font-black text-[var(--theme-color)] mb-4">
                  INSTITUTIONAL <br /> ENFORCEMENT
                </h3>

                <p className="text-slate-500 text-[13px] mb-6">
                  University Proctorial Board conducts{" "}
                  <span className="text-slate-700">midnight raids</span>.
                </p>

                <button className="w-full py-4 bg-[var(--theme-color)] text-white font-black uppercase text-xs tracking-widest rounded-xl hover:bg-[var(--theme-color2)] transition-all duration-300 flex items-center justify-center gap-2 group active:scale-[0.98]">
                  <LifeBuoy
                    size={16}
                    className="group-hover:rotate-45 transition-transform duration-500"
                  />
                  Emergency Incident Report
                </button>
              </div>
            </div>
          </div>
        </div>

        <footer className="pt-6 border-t border-gray-200 text-center">
          <p className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.4em]">
            Strictly Confidential • Govt Directives • 2026
          </p>
        </footer>
      </div>
    </div>
  );
}