import React from "react";
import { Zap, Target, BarChart3 } from "lucide-react";

const placementTeam = [
  {
    name: "Dr. Aris Thorne",
    role: "Placement Director",
    desc: "Bridges the gap between academia and Fortune 500 companies with elite corporate partnerships.",
    icon: Target,
    accent: "var(--theme-color2)", // Pink
  },
  {
    name: "Sarah Valerius",
    role: "Technical Lead",
    desc: "Leads advanced bootcamp tracks in System Design, DSA, and Competitive Programming.",
    icon: Zap,
    accent: "var(--theme-blue)",
  },
  {
    name: "Jameson Kross",
    role: "Global Outreach",
    desc: "Creates international career opportunities across Singapore, Berlin, and San Francisco.",
    icon: BarChart3,
    accent: "var(--theme-teal)",
  },
];

export default function Places() {
  return (
    <section className="bg-[var(--theme-bg-light)] py-20 px-6">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Simplified Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-[2px] w-8 bg-[var(--theme-color2)]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--theme-color2)]">
              Our Experts
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-[var(--theme-color)] tracking-tight">
            Meet Our Placement <span className="text-[var(--theme-color2)]">Specialists</span>
          </h2>
          <p className="mt-4 text-[var(--body-text-color)] text-lg max-w-xl">
            Industry mentors helping students land premium opportunities globally.
          </p>
        </div>

        {/* Simplified Cards Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {placementTeam.map((member, i) => {
            const Icon = member.icon;

            return (
              <div
                key={i}
                className="group bg-white border border-gray-200 p-8 transition-all duration-300 hover:border-[var(--theme-color2)]/30 hover:shadow-sm"
              >
                {/* Subtle Icon Box */}
                <div 
                  className="mb-6 flex items-center justify-center w-12 h-12 rounded-lg bg-gray-50 text-gray-700 transition-colors duration-300 group-hover:bg-[var(--theme-color2)] group-hover:text-white"
                >
                  <Icon size={24} strokeWidth={1.5} />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[var(--theme-color)]">
                    {member.name}
                  </h3>
                  
                  <p className="text-xs font-bold uppercase tracking-wider text-[var(--theme-color2)]">
                    {member.role}
                  </p>

                  <p className="pt-2 text-[var(--body-text-color)] text-sm leading-relaxed">
                    {member.desc}
                  </p>
                </div>

                {/* Simple accent line instead of full width hover */}
                <div className="mt-6 h-0.5 w-8 bg-gray-200 transition-all duration-300 group-hover:w-16 group-hover:bg-[var(--theme-color2)]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}