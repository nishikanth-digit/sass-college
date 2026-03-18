"use client";

import React, { useState, useEffect } from "react";
import { Phone } from "lucide-react";

const CyberSecurity = () => {
  const [mounted, setMounted] = useState(false);

  const links = [
    { title: "Artificial Intelligence", count: "01" },
    { title: "Data Science", count: "02" },
    { title: "Internet of Things", count: "03" },
      
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[var(--theme-bg-light)] text-slate-700 py-24 px-6 font-sans">
      
      {/* GRID BACKGROUND */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

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
              Cyber Security
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight tracking-tight text-[var(--theme-color)]">
              Cybersecurity Analytics  {" "}
                <span className="text-[var(--color-theme)]/60 italic font-medium">
              Engineer
                </span>
              </h1>
            </header>

            {/* PARAGRAPH */}
            <p className="pl-7 text-black leading-relaxed font-sans">
    The Department of Cyber Security is committed to equipping students with the knowledge and skills necessary to protect digital assets and secure information systems in an increasingly connected world. With a strong foundation in core concepts such as cryptography, network security, ethical hacking, and digital forensics, the department emphasizes both theoretical understanding and hands-on practical experience.
            </p>

            {/* IMAGE */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <img
                src="/departments/cyber.jpg"
                alt="AI Visualization"
                className="w-full h-[300px] object-cover bg-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-5 left-5 z-20">
               
              </div>
            </div>

            {/* SECOND PARAGRAPH */}
            <p className="text-black leading-relaxed font-sans">
The department also encourages research, innovation, and participation in national and international hackathons, fostering a culture of continuous learning and ethical responsibility. Graduates from our program are well-prepared for careers in cybersecurity roles such as security analysts, penetration testers, incident responders, and security architects, as well as for advanced studies and research in the field.
            </p>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24">
              
              <div className="bg-[#070707] border border-slate-800 rounded-2xl p-6 space-y-10 shadow-lg">
                
                {/* NAV */}
                <div>
                  <h3 className="text-xl font-extrabold text-theme uppercase tracking-widest mb-6">
                    Computer Science and Engineering
                  </h3>

                  <nav className="space-y-3">
                    {links.map((link) => (
                      <a
                        key={link.count}
                        href="#"
                        className="group flex items-center justify-between px-3 py-3 rounded-lg hover:bg-slate-900 transition"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-[30px] font-sans text-theme group-hover:text-[var(--color-theme-2)]">
                            [{link.count}]
                          </span>
                          <span className="text-sm font-bold text-theme group-hover:text-theme-2">
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

export default CyberSecurity;