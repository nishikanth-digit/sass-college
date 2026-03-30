"use client";

import React, { useState, useEffect } from "react";
import { Phone } from "lucide-react";

const Civil= () => {
  const [mounted, setMounted] = useState(false);

  const links = [
    { title: "Information Technology", count: "01" },
    { title: "Electronics & Communication Engineering", count: "02" },
    { title: "Electrical & Electronics Engineering", count: "03" },
        { title: "Mechanical Engineering", count: "04" },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[var(--theme-bg-light)] text-slate-700 py-24 px-6 font-sans">
      
      {/* GRID BACKGROUND REMOVED FROM HERE */}

      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12  ">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-8 flex flex-col gap-10 max-w-3xl">
            
            {/* TITLE BLOCK */}
            <header className="space-y-6">
              <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-[var(--color-theme-2)]/30 bg-[var(--color-theme-2)]/10 text-[var(--color-theme-2)] text-xs font-black uppercase tracking-[0.2em]o">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-theme-2)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-theme-2)]"></span>
                </span>
               Civil
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight tracking-tight text-[var(--theme-color)]">
               Civil Engineering 
              </h1>
            </header>

            {/* PARAGRAPH */}
            <p className="pl-3 text-black leading-relaxed">
                The Department of Civil Engineering at DIGIT College of Engineering is dedicated to shaping the visionary builders of tomorrow’s infrastructure. Blending traditional engineering principles with cutting-edge digital integration, the program goes beyond simple construction; it focuses on sustainable urban development, smart structural design, and advanced geotechnics. Students gain hands-on experience in state-of-the-art laboratories and master industry-standard software like AutoCAD, Revit, and STAAD.Pro, ensuring they are "industry-ready" from day one. By fostering a culture of innovation and environmental stewardship, Digit College empowers its graduates to design resilient systems that solve the complex challenges of modern civilization.
            </p>

            {/* IMAGE */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <img
                src="/departments/Civil.jpg"
                alt="AI Visualization"
                className="w-full h-[300px] object-cover bg-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-5 left-5 z-20">
                
              </div>
            </div>

            {/* SECOND PARAGRAPH */}
            <p className="text-black leading-relaxed">
                the Civil Engineering branch is redefined through the lens of Industry 4.0. Recognizing that the modern engineer must be as proficient with data as they are with concrete, our curriculum emphasizes Building Information Modeling (BIM), computational fluid dynamics, and the use of drones for topographical surveying. We bridge the gap between theoretical mechanics and real-world application, challenging students to design infrastructure that is not only structurally sound but also "smart" and data-driven.
            </p>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24">
              
              <div className="bg-[#070707] border border-slate-800 rounded-2xl p-6 space-y-10 shadow-lg">
                
                {/* NAV */}
                <div>
                  <h3 className="text-xl font-extrabold text-white uppercase tracking-widest mb-6">
                    Core Engineering
                  </h3>

                  <nav className="space-y-3">
                    {links.map((link) => (
                      <a
                        key={link.count}
                        href="#"
                        className="group flex items-center justify-between px-3 py-3 rounded-lg hover:bg-slate-900 transition"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-[30px] font-sans text-white group-hover:text-[var(--color-theme-2)]">
                            [{link.count}]
                          </span>
                          <span className="text-sm font-bold text-white group-hover:text-theme-2">
                            {link.title}
                          </span>
                        </div>
                        <span className="opacity-0 group-hover:opacity-100 text-[var(--color-theme-2)]">
                          →
                        </span>
                      </a>
                    ))}
                  </nav>
                  
                </div>

                {/* CONTACT */}
                <div className="p-5 rounded-xl bg-theme border border-white space-y-6">
                  <div className="pt-2">
                    <h5 className="text-sm font-extrabold text-white uppercase tracking-widest mb-3">
                      Contact Node
                    </h5>

                    <a
                      href="tel:+919876543210"
                      className="flex items-center justify-between bg-theme border border-white rounded-lg px-3 py-3 hover:bg-slate-900 transition"
                    >
                      <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-[var(--color-theme-2)]" />
                        <span className="text-sm font-bold text-white  font-sans">
                         +919990000000
                        </span>
                      </div>

                      
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Civil;