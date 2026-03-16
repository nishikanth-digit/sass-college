"use client";

import React, { useState, useMemo } from "react";
import {
  GraduationCap,
  Briefcase,
  Sprout,
  FileDown,
  Calendar as CalendarIcon,
  Award,
  Pill,
} from "lucide-react";

type BatchEntry = {
  batch: string;
  semester: string;
  updatedAt: string;
  type: "Regular" | "Supplementary" | "Revised";
  pdfPath: string;
};

type AcademicCategory = {
  id: string;
  title: string;
  icon: React.ReactNode;
  years: { [key: string]: BatchEntry[] };
};

const ACADEMIC_DATA: AcademicCategory[] = [
  {
    id: "btech",
    title: "B.Tech Programs",
    icon: <GraduationCap size={22} />,
    years: {
      "I Year": [
        {
          batch: "2025-29",
          semester: "Sem I & II",
          updatedAt: "Mar 01, 2026",
          type: "Regular",
          pdfPath: "/files/btech_y1.pdf",
        },
      ],
      "II Year": [
        {
          batch: "2024-28",
          semester: "Sem III & IV",
          updatedAt: "Feb 15, 2026",
          type: "Revised",
          pdfPath: "/files/btech_y2.pdf",
        },
      ],
      "III Year": [
        {
          batch: "2023-27",
          semester: "Sem V & VI",
          updatedAt: "Jan 10, 2026",
          type: "Regular",
          pdfPath: "/files/btech_y3.pdf",
        },
      ],
      "IV Year": [
        {
          batch: "2022-26",
          semester: "Project Work",
          updatedAt: "Dec 05, 2025",
          type: "Regular",
          pdfPath: "/files/btech_y4.pdf",
        },
      ],
    },
  },
  {
    id: "pharmacy",
    title: "Pharmacy",
    icon: <Pill size={22} />,
    years: {
      "I Year": [
        {
          batch: "2025-29",
          semester: "Basics of Pharma",
          updatedAt: "Feb 20, 2026",
          type: "Regular",
          pdfPath: "/files/pharma_y1.pdf",
        },
      ],
      "II Year": [
        {
          batch: "2024-28",
          semester: "Pharmacology I",
          updatedAt: "Jan 12, 2026",
          type: "Regular",
          pdfPath: "/files/pharma_y2.pdf",
        },
      ],
      "III Year": [
        {
          batch: "2023-27",
          semester: "Medicinal Chem",
          updatedAt: "Nov 30, 2025",
          type: "Regular",
          pdfPath: "/files/pharma_y3.pdf",
        },
      ],
      "IV Year": [
        {
          batch: "2022-26",
          semester: "Clinical Practice",
          updatedAt: "Oct 15, 2025",
          type: "Regular",
          pdfPath: "/files/pharma_y4.pdf",
        },
      ],
    },
  },
  {
    id: "degree",
    title: "Degree (B.Sc/B.Com)",
    icon: <Award size={22} />,
    years: {
      "I Year": [
        {
          batch: "2025-28",
          semester: "Core Sem I",
          updatedAt: "Mar 01, 2026",
          type: "Regular",
          pdfPath: "#",
        },
      ],
      "II Year": [
        {
          batch: "2024-27",
          semester: "Core Sem III",
          updatedAt: "Feb 10, 2026",
          type: "Regular",
          pdfPath: "#",
        },
      ],
      "III Year": [
        {
          batch: "2023-26",
          semester: "Specialization",
          updatedAt: "Jan 05, 2026",
          type: "Regular",
          pdfPath: "#",
        },
      ],
    },
  },
  {
    id: "agri",
    title: "Agricultural",
    icon: <Sprout size={22} />,
    years: {
      "I Year": [
        {
          batch: "2025-29",
          semester: "Soil Science",
          updatedAt: "Feb 20, 2026",
          type: "Regular",
          pdfPath: "#",
        },
      ],
      "II Year": [
        {
          batch: "2024-28",
          semester: "Entomology",
          updatedAt: "Jan 12, 2026",
          type: "Regular",
          pdfPath: "#",
        },
      ],
      "III Year": [
        {
          batch: "2023-27",
          semester: "Plant Pathology",
          updatedAt: "Nov 30, 2025",
          type: "Regular",
          pdfPath: "#",
        },
      ],
      "IV Year": [
        {
          batch: "2022-26",
          semester: "RAWE Program",
          updatedAt: "Oct 15, 2025",
          type: "Regular",
          pdfPath: "#",
        },
      ],
    },
  },
  {
    id: "pg",
    title: "Post Graduate (MBA/M.Sc)",
    icon: <Briefcase size={22} />,
    years: {
      "I Year": [
        {
          batch: "2025-27",
          semester: "Trimester I",
          updatedAt: "Mar 02, 2026",
          type: "Regular",
          pdfPath: "#",
        },
      ],
      "II Year": [
        {
          batch: "2024-26",
          semester: "Thesis / Intern",
          updatedAt: "Feb 14, 2026",
          type: "Regular",
          pdfPath: "#",
        },
      ],
    },
  },
];

export default function Academic() {
  const [activeCat, setActiveCat] = useState(ACADEMIC_DATA[0]);
  const [activeYear, setActiveYear] = useState(
    Object.keys(ACADEMIC_DATA[0].years)[0]
  );

  const changeCategory = (cat: AcademicCategory) => {
    setActiveCat(cat);
    setActiveYear(Object.keys(cat.years)[0]);
  };

  const currentData = useMemo(
    () => activeCat.years[activeYear] || [],
    [activeCat, activeYear]
  );

  const handleDownload = (pdfPath: string, fileName: string) => {
    if (pdfPath === "#") return;
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = `${fileName}_Calendar.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[var(--theme-bg-light)] text-slate-700 p-4 md:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* SIDEBAR */}
        <nav className="lg:col-span-3 space-y-4">
          <div className="flex items-center gap-3 px-4 py-6">
            <div className="w-10 h-10 rounded-xl bg-[var(--theme-color2)] flex items-center justify-center shadow-md">
              <CalendarIcon className="text-white" size={20} />
            </div>

            <h2 className="text-xl font-black text-[var(--theme-color)] tracking-tight">
              Academic <span className="text-[var(--color-theme)]/60 italic font-medium">CALENDAR</span>
            </h2>
          </div>

          <div className="space-y-2">
            {ACADEMIC_DATA.map((cat) => (
              <button
                key={cat.id}
                onClick={() => changeCategory(cat)}
                className={`w-full flex items-center gap-4 p-4 rounded-2xl border transition-all ${
                  activeCat.id === cat.id
                    ? "bg-white border-gray-300 shadow-sm"
                    : "border-transparent hover:bg-white"
                }`}
              >
                <div
                  className={`p-2 rounded-xl ${
                    activeCat.id === cat.id
                      ? "bg-[var(--theme-color2)] text-white scale-110"
                      : "bg-gray-200"
                  }`}
                >
                  {cat.icon}
                </div>

                <span
                  className={`font-bold text-sm ${
                    activeCat.id === cat.id
                      ? "text-[var(--theme-color)]"
                      : "text-slate-500"
                  }`}
                >
                  {cat.title}
                </span>
              </button>
            ))}
          </div>
        </nav>

        {/* MAIN */}
        <main className="lg:col-span-9 bg-white border border-gray-200 rounded-[2.5rem] p-6 md:p-10 relative overflow-hidden">

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-[var(--theme-color)]">
                {activeCat.title}
              </h1>

              <div className="flex items-center gap-2 mt-2">
                <span className="w-8 h-[2px] bg-[var(--theme-color2)] rounded-full" />
                <p className="text-slate-500">Academic Year 2026-27 Schedules</p>
              </div>
            </div>

            {/* Year Tabs */}
            <div className="flex p-1.5 bg-gray-100 rounded-2xl border border-gray-200">
              {Object.keys(activeCat.years).map((year) => (
                <button
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest ${
                    activeYear === year
                      ? "bg-[var(--theme-color2)] text-white"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* TABLE */}
          <div className="rounded-3xl border border-gray-200 bg-white overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-8 py-5 text-[10px] uppercase tracking-[0.3em] text-slate-500">
                    Batch Ref
                  </th>
                  <th className="px-8 py-5 text-[10px] uppercase tracking-[0.3em] text-slate-500">
                    Course Context
                  </th>
                  <th className="px-8 py-5 text-[10px] uppercase tracking-[0.3em] text-slate-500">
                    Update Log
                  </th>
                  <th className="px-8 py-5 text-center text-[10px] uppercase tracking-[0.3em] text-slate-500">
                    Brochure
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {currentData.map((item, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition">
                    <td className="px-8 py-6">
                      <span className="text-[var(--theme-color)] font-black text-xl">
                        {item.batch}
                      </span>
                    </td>

                    <td className="px-8 py-6">
                      <div className="text-slate-800 font-bold">
                        {item.semester}
                      </div>
                      <div className="mt-1.5 inline-flex px-2 py-0.5 rounded-md text-[9px] font-black bg-gray-100 text-slate-500 border border-gray-200">
                        {item.type}
                      </div>
                    </td>

                    <td className="px-8 py-6 text-slate-500 font-mono text-xs">
                      {item.updatedAt}
                    </td>

                    <td className="px-8 py-6 text-center">
                      <button
                        onClick={() =>
                          handleDownload(
                            item.pdfPath,
                            `${activeCat.id}_${activeYear}`
                          )
                        }
                        className="p-3.5 rounded-2xl bg-gray-100 text-slate-600 hover:bg-[var(--theme-color2)] hover:text-white hover:scale-110 transition"
                      >
                        <FileDown size={22} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </main>
      </div>
    </div>
  );
}