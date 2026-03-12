"use client";

import {
  Cpu,
  CircuitBoard,
  Zap,
  Building2,
  Cog,
  Server,
  ArrowUpRight,
} from "lucide-react";

export default function Departments() {
  const departments = [
    {
      title: "Computer Science & Engineering",
      icon: Cpu,
      description:
        "Focused on AI, Data Science, Cyber Security, Cloud Computing and emerging digital technologies.",
    },
    {
      title: "Information Technology",
      icon: Server,
      description:
        "Specializes in software systems, networking, enterprise applications and modern IT infrastructure.",
    },
    {
      title: "Electronics & Communication Engineering",
      icon: CircuitBoard,
      description:
        "Covers embedded systems, communication networks and VLSI design.",
    },
    {
      title: "Electrical & Electronics Engineering",
      icon: Zap,
      description:
        "Emphasizes power systems, renewable energy and industrial automation.",
    },
    {
      title: "Civil Engineering",
      icon: Building2,
      description:
        "Focused on structural design, smart infrastructure and sustainable construction.",
    },
    {
      title: "Mechanical Engineering",
      icon: Cog,
      description:
        "Includes robotics, manufacturing systems and thermal engineering.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-[var(--theme-bg-light)]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--theme-color)]">
            Our Academic Departments
          </h2>
          <p className="mt-6 text-[var(--body-text-color)] max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Delivering academic excellence across core engineering
            disciplines and future-ready technologies.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((dept, index) => {
            const Icon = dept.icon;

            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-10 shadow-md 
                           hover:shadow-2xl transition duration-300 
                           overflow-hidden border border-transparent 
                           hover:border-[var(--theme-color2)]"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-[var(--theme-color2)] group-hover:w-full transition-all duration-500"></div>

                {/* Watermark Icon */}
                <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 transition">
                  <Icon size={140} />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--theme-bg-light)] text-[var(--theme-color2)]">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-[var(--theme-color)]">
                    {dept.title}
                  </h3>

                  <p className="mt-4 text-sm text-[var(--body-text-color)] leading-relaxed">
                    {dept.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[var(--theme-color2)] cursor-pointer group-hover:gap-3 transition-all">
                    Explore Department
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}