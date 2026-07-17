"use client";

import { useEffect, useRef, useState } from "react";
import {
  TrendingUp,
  Users,
  Building2,
  Award,
  CheckCircle2,
  ArrowRight,
  BarChart3,
} from "lucide-react";

export default function Statistics() {
  const [activeYear, setActiveYear] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const academicYears = [
    {
      year: "2023 - 2024",
      stats: [
        { label: "Placed", value: "640+", icon: Users },
        { label: "Companies", value: "92", icon: Building2 },
        { label: "Highest", value: "₹42 LPA", icon: Award },
        { label: "Average", value: "₹12.5 LPA", icon: TrendingUp },
      ],
      recruiters: ["Google", "Amazon", "Microsoft", "Oracle", "Meta", "Adobe"],
    },
    {
      year: "2022 - 2023",
      stats: [
        { label: "Placed", value: "510", icon: Users },
        { label: "Companies", value: "73", icon: Building2 },
        { label: "Highest", value: "₹31 LPA", icon: Award },
        { label: "Average", value: "₹9.2 LPA", icon: TrendingUp },
      ],
      recruiters: ["Adobe", "TCS", "Wipro", "Accenture", "IBM"],
    },
    {
      year: "2021 - 2022",
      stats: [
        { label: "Placed", value: "420", icon: Users },
        { label: "Companies", value: "58", icon: Building2 },
        { label: "Highest", value: "₹24 LPA", icon: Award },
        { label: "Average", value: "₹7.8 LPA", icon: TrendingUp },
      ],
      recruiters: ["Google", "Microsoft", "Amazon", "Infosys", "Cognizant"],
    },
  ];

  const companyLogos: Record<string, string> = {
    Google:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    Amazon:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    Microsoft:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    Oracle:
      "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    Meta:
      "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
   Adobe: "https://cdn.simpleicons.org/adobe/FF0000",
    IBM: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    Infosys:
      "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
    Cognizant:
      "https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg",
    Accenture:
      "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
    Wipro:
      "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg",
   TCS: "https://cdn.simpleicons.org/tata",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            if (!isNaN(index)) setActiveYear(index);
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-slate-500 font-bold uppercase tracking-[0.15em] text-xs mb-2">
              <span className="w-6 h-[2px] bg-theme-2"></span>
              Institutional Analytics
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-theme tracking-tight">
              Placement{" "}
              <span className="text-theme-2 font-medium">Statistics</span>
            </h1>
          </div>

          <div className="hidden md:block text-right">
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
              Last Updated
            </p>
            <p className="font-bold text-slate-700">May 2024</p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-9 space-y-20">
            {academicYears.map((item, index) => (
              <section
                key={item.year}
                data-index={index}
                ref={(el: HTMLDivElement | null) => {
                  sectionRefs.current[index] = el;
                }}
                className={`transition-all duration-500 ${
                  activeYear === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-70"
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-2xl font-bold text-theme tracking-tight">
                    {item.year}
                  </h2>
                  <div className="h-[1px] flex-1 bg-slate-200"></div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {item.stats.map((stat, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-xl bg-theme text-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="p-2 rounded-lg bg-white/10 text-white">
                          <stat.icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                        </div>
                      </div>

                      <p className="text-[11px] uppercase font-semibold tracking-wider mb-1 text-white/70">
                        {stat.label}
                      </p>

                      <p className="text-2xl font-bold tracking-tight">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Recruiters */}
                <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <Building2 className="w-4 h-4 text-theme" />
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Top Recruiters
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {item.recruiters.map((company) => (
                      <div
                        key={company}
                        className="flex items-center gap-3 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100 hover:border-theme/20 hover:shadow-sm transition-all"
                      >
                        <img
                          src={companyLogos[company]}
                          alt={company}
                          className="h-5 w-auto object-contain"
                        />

                        <span className="text-sm font-medium text-slate-700">
                          {company}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Right Side */}
          <aside className="lg:col-span-3">
            <div className="sticky top-12 space-y-6">
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider ml-1 mb-2">
                  Select Year
                </p>

                <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-sm space-y-1">
                  {academicYears.map((year, index) => (
                    <button
                      key={year.year}
                      onClick={() => scrollToSection(index)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 group ${
                        activeYear === index
                          ? "bg-theme-2 text-white font-semibold shadow-md shadow-theme-2/20"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <span className="text-sm">{year.year}</span>

                      {activeYear === index ? (
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      ) : (
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all translate-x-[-4px] group-hover:translate-x-0" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm text-slate-700 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-theme-2"></div>

                <div className="flex items-center gap-2 text-slate-400 mb-3">
                  <BarChart3 className="w-4 h-4 text-theme-2" />
                  <span className="text-[11px] font-bold uppercase tracking-wider">
                    Cohort Insights
                  </span>
                </div>

                <h4 className="text-base font-bold text-slate-900 mb-1">
                  Growth Overview
                </h4>

                <p className="text-xs text-slate-500 leading-relaxed">
                  Demonstrating steady progression in average compensation
                  packages and total corporate talent acquisitions year-over-year.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}