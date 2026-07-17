import React from "react";
import { 
  GraduationCap, 
  TrendingUp, 
  FlaskConical, 
  Globe, 
  Briefcase, 
  Award,
  Sparkles
} from "lucide-react";

interface BenefitItem {
  title: string;
  highlight: string;
  desc: string;
  icon: React.ReactNode;
}

const benefits: BenefitItem[] = [
  {
    title: "World-Class Education",
    highlight: "Global Recognition",
    desc: "Gain degrees from top-tier universities worldwide.",
    icon: <GraduationCap size={18} />,
  },
  {
    title: "Higher Salary",
    highlight: "2–3x Increase",
    desc: "Significant boost in earning potential after graduation.",
    icon: <TrendingUp size={18} />,
  },
  {
    title: "Hands-on Learning",
    highlight: "Research Focused",
    desc: "Access to advanced opportunities and practical labs.",
    icon: <FlaskConical size={18} />,
  },
  {
    title: "Global Networking",
    highlight: "International Exposure",
    desc: "Build connections with peers and industry leaders.",
    icon: <Globe size={18} />,
  },
  {
    title: "Work Permits",
    highlight: "1.5 to 3 Years",
    desc: "Post-study permits to gain international experience.",
    icon: <Briefcase size={18} />,
  },
  {
    title: "Scholarships",
    highlight: "Up to 50%",
    desc: "Financial support for meritorious students.",
    icon: <Award size={18} />,
  },
];

export default function WhyStudyAbroad() {
  return (
    /* Tightened section padding for a compact, app-like viewport */
    <section className="relative overflow-hidden bg-theme py-14 px-4 sm:px-8 font-sans text-slate-300">
      
      {/* Background ambient lighting overlay */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-theme-2/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Compact Header Module */}
        <div className="mb-10 animate-fade-in-up">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/[0.04] text-white/90 border border-white/[0.08] mb-3 tracking-wider uppercase backdrop-blur-md">
            <Sparkles size={10} className="text-theme-2 animate-pulse" /> Key Advantages
          </span>
          <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white mb-2 leading-tight">
            Why Choose to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-theme-2">Study Abroad?</span>
          </h2>
          <p className="text-slate-400 text-xs md:text-sm max-w-md leading-relaxed">
            Your gateway to global opportunities, cultural discovery, and accelerated career paths.
          </p>
        </div>

        {/* High-Density App List Layout with minimal spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-start relative pb-4 border-b border-white/[0.05] transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Micro-Interaction hairline accent border */}
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-theme-2 transition-all duration-300 group-hover:w-full" />

              {/* Ultra-compact Dashboard Icon Box */}
              <div className="p-2 bg-white/[0.03] rounded-lg border border-white/[0.06] text-white/80 mb-3 transition-all duration-200 group-hover:bg-theme-2 group-hover:text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                {item.icon}
              </div>

              {/* Typography Setup */}
              <h3 className="text-base font-bold text-white mb-1 tracking-tight transition-colors duration-200 group-hover:text-theme-2">
                {item.title}
              </h3>
              
              <p className="text-slate-400 text-xs leading-relaxed mb-3">
                {item.desc}
              </p>

              {/* Low-profile Pill Badge */}
              <span className="inline-block text-[11px] font-bold text-theme-2 bg-theme-2/10 px-2 py-0.5 rounded-md tracking-wide mt-auto">
                {item.highlight}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}