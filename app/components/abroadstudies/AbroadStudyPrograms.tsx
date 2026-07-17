import React from 'react';
import { 
  Globe, 
  Layers, 
  SunMoon, 
  GraduationCap, 
  Briefcase, 
  Compass
} from 'lucide-react';

interface ProgramCardProps {
  icon: React.ReactNode;
  title: string;
  duration: string;
  description: string;
  tag: string;
}

const programs: ProgramCardProps[] = [
  {
    icon: <Globe className="w-6 h-6 text-theme/80" />,
    title: "Semester Exchange Programs",
    duration: "1–2 Semesters",
    description: "Immerse yourself in a new culture while earning credits toward your degree at a premier global partner institution.",
    tag: "Popular"
  },
  {
    icon: <Layers className="w-6 h-6 text-theme/80" />,
    title: "Dual Degree / Twinning",
    duration: "2+2 or 3+1 Years",
    description: "Earn degrees from two world-class universities simultaneously, maximizing your global employability.",
    tag: "Dual Advantage"
  },
  {
    icon: <SunMoon className="w-6 h-6 text-theme/80" />,
    title: "Summer / Winter Schools",
    duration: "2–6 Weeks",
    description: "Intense, short-term experiential learning programs paired with seasonal cultural exploration.",
    tag: "Short Term"
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-theme/80" />,
    title: "Full Degree Programs",
    duration: "Complete Track",
    description: "Pursue your complete Bachelor’s, Master’s, or PhD journeys abroad with comprehensive global mentorship.",
    tag: "Full Immersion"
  },
  {
    icon: <Briefcase className="w-6 h-6 text-theme/80" />,
    title: "Internships & Research",
    duration: "Flexible",
    description: "Gain a competitive edge with international hands-on corporate internships or groundbreaking laboratory research.",
    tag: "Career Ready"
  }
];

export default function StudyAbroadSection() {
  return (
    <section className="relative overflow-hidden bg-theme-bg-light py-24 px-6 sm:px-12 lg:px-24 text-body-text">
      
      {/* Background Decor using Theme Pink Accent lightly */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-theme-2/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-theme/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-theme-2/10 text-theme-2 border border-theme-2/20 mb-4 tracking-wide uppercase">
              <Compass className="w-3.5 h-3.5" /> Global Horizons
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-theme mb-4">
              Our Study Abroad Programs
            </h2>
            <p className="text-body-text text-lg leading-relaxed">
              Expand your boundaries, accelerate your academic career, and build an international network with tailored pathways designed for the global citizen.
            </p>
          </div>

          {/* Quick Partnership Stats Badge */}
          <div className="flex items-center gap-4 bg-white border border-slate-200 p-4 rounded-2xl group hover:border-theme-2/30 shadow-sm transition-all duration-300">
            <div className="bg-theme text-white w-14 h-14 rounded-xl flex flex-col items-center justify-center font-bold shadow-sm">
              <span className="text-xl">50+</span>
            </div>
            <div>
              <p className="text-xs text-body-text uppercase tracking-wider font-semibold">Reputed Partners</p>
              <p className="text-sm font-bold text-theme group-hover:text-theme-2 transition-colors duration-300">Across 12 Countries</p>
            </div>
          </div>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="group relative bg-white border border-slate-200/60 rounded-3xl p-8 flex flex-col justify-between shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-slate-300 hover:shadow-[0_20px_40px_rgba(27,31,59,0.04)]"
            >
              {/* Subtle inner pink accent gradient hover border effect */}
              <div className="absolute inset-0 rounded-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none border border-transparent bg-gradient-to-br from-theme-2/10 via-transparent to-theme/10 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
              
              <div>
                {/* Card Top Action & Icon */}
                <div className="flex items-center justify-between mb-8">
                  {/* Uniform icon wrappers */}
                  <div className="p-3 bg-theme-bg-light rounded-2xl border border-slate-100 group-hover:scale-110 group-hover:bg-white group-hover:border-slate-200 transition-all duration-300">
                    {program.icon}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-theme-bg-light text-body-text border border-slate-200 tracking-wide group-hover:text-theme group-hover:border-slate-300 transition-colors">
                    {program.tag}
                  </span>
                </div>

                {/* Card Content */}
                <span className="text-xs font-bold text-theme-2 uppercase tracking-widest block mb-2">
                  {program.duration}
                </span>
                <h3 className="text-xl font-bold text-theme mb-3 group-hover:text-theme-2 transition-colors duration-300">
                  {program.title}
                </h3>
                <p className="text-body-text text-sm leading-relaxed">
                  {program.description}
                </p>
              </div>
            </div>
          ))}

          {/* Interactive Call to Action Card */}
          <div className="bg-theme rounded-3xl p-8 flex flex-col justify-between shadow-lg shadow-theme/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 transform translate-x-10 -translate-y-10 w-40 h-40 bg-theme-2/20 rounded-full blur-2xl pointer-events-none" />
            <div>
              <h3 className="text-2xl font-extrabold text-white mb-3 leading-snug">
                Ready to Start Your Global Journey?
              </h3>
              <p className="text-footer-text/80 text-sm leading-relaxed">
                Connect with our international academic advisors today to build a program specific to your career goals.
              </p>
            </div>
            <button className="mt-8 bg-theme-2 text-white font-bold px-6 py-3.5 rounded-2xl shadow-md transition-all duration-300 hover:bg-theme-2/90 hover:shadow-lg active:scale-95 text-center w-full cursor-pointer">
              Speak with an Advisor
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}