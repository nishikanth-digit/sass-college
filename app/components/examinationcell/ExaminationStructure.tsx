"use client";

import React from 'react';
import { ShieldCheck, Users, FileText, Settings } from 'lucide-react';

interface SectionProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  items: string[];
}

const ExamSection = ({ title, subtitle, icon, items }: SectionProps) => (
  <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div className="p-6">
      <div className="flex items-center gap-4 mb-4">
        
        {/* Icon */}
        <div className="p-3 bg-[var(--color-theme-2)]/10 text-[var(--color-theme-2)] rounded-lg">
          {icon}
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 leading-tight">{title}</h3>
          <p className="text-sm font-medium text-[var(--color-theme-2)] uppercase tracking-wide">
            {subtitle}
          </p>
        </div>
      </div>

      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3 text-gray-600 text-sm md:text-base">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--color-theme-2)] flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function ExaminationStructure() {
  const data = [
    {
      title: "Composition of Examination Branch",
      subtitle: "Administrative Hierarchy",
      icon: <Users size={24} />,
      items: [
        "Chief Controller of Examinations: Led by the Principal.",
        "Controller of Examinations (CoE): Senior faculty nominated by the Principal.",
        "Additional Controllers (ACE): Four senior faculty members (ACE-1 to ACE-4).",
        "Support Staff: Includes Office Assistants, Programmers, and Data Entry Operators."
      ]
    },
    {
      title: "Core Responsibilities",
      subtitle: "Operations & Management",
      icon: <Settings size={24} />,
      items: [
        "Coordination of Semester End Examinations (SEE) and valuation.",
        "Maintenance of absolute secrecy regarding confidential materials.",
        "Issuance of Hall Tickets, Mark Sheets, and Provisional Certificates.",
        "Budgeting and stock maintenance for the entire examination section."
      ]
    },
    {
      title: "Confidential Functions",
      subtitle: "Integrity & Standards",
      icon: <ShieldCheck size={24} />,
      items: [
        "Identification and appointment of external paper setters.",
        "Secure printing and distribution of Question Papers.",
        "Selection of the Panel of Examiners in coordination with HODs.",
        "Management of double-valuation processes for transparency."
      ]
    },
    {
      title: "ACE Portfolio Distribution",
      subtitle: "Functional Roles",
      icon: <FileText size={24} />,
      items: [
        "ACE-1: Focuses on Confidential work and Paper Setting.",
        "ACE-2: Manages Examination Conduct and Invigilation.",
        "ACE-3: Oversees Valuation and Evaluator Allotment.",
        "ACE-4: Manages Results Database and Marks Processing."
      ]
    }
  ];

  return (
    <div className="bg-[var(--theme-bg-light)] py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--theme-color2)]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--theme-color2)]/10 blur-[120px] rounded-full" />
         {/* Header */}
        <div className="mb-10 md:mb-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--theme-color2)]/10 border border-[var(--theme-color2)]/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--theme-color2)] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--theme-color2)]">
            Institutional Governance
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight tracking-tight text-[var(--theme-color)]">
              Examination Structure {" "}
            <span className="text-[var(--color-theme)]/60 italic font-medium"> & Functions</span>
          </h2>
        </div>
       
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((section, index) => (
            <ExamSection key={index} {...section} />
          ))}
        </div>

      
      </div>
    </div>
  );
}