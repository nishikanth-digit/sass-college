"use client";

import React from "react";

const COL_1 = [
  { id: 1, name: "Norm Software", src: "/home/placements/companynewlogos/normsoftware.png" },
  { id: 2, name: "Arcot", src: "/home/placements/company-logos/arcot.webp" },
  { id: 3, name: "Accenture", src: "/home/placements/company-logos/bookdemo-accenture-logo.png" },
  { id: 4, name: "TCS", src: "/home/placements/company-logos/tcs_logo.png" },
];

const COL_2 = [
  { id: 5, name: "DXC", src: "/home/placements/company-logos/dxc_logo.png" },
  { id: 6, name: "Solix", src: "/home/placements/company-logos/solix-logo.svg" },
  { id: 7, name: "Infosys", src: "/home/placements/company-logos/infosys.png" },
  { id: 8, name: "Cognizant", src: "/home/placements/company-logos/cognizant-logo.svg" },
];

export default function Recruiters_Partners() {
  const displayCol1 = [...COL_1, ...COL_1, ...COL_1];
  const displayCol2 = [...COL_2, ...COL_2, ...COL_2];

  return (
    <section className="bg-[#05070a] py-20 px-6 md:px-16 overflow-hidden">
      <style jsx>{`
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-33.33%); }
        }

        @keyframes scroll-down {
          0% { transform: translateY(-33.33%); }
          100% { transform: translateY(0); }
        }

        .animate-up {
          animation: scroll-up 22s linear infinite;
        }

        .animate-down {
          animation: scroll-down 22s linear infinite;
        }

        .slider-container:hover .animate-up,
        .slider-container:hover .animate-down {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-3 space-y-6">

          <div className="inline-block px-4 py-1 bg-[var(--theme-color2)]/10 border border-[var(--theme-color2)]/30 rounded-full text-[var(--theme-color2)] text-xs font-semibold uppercase tracking-widest">
            Campus Placement 2024
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Connecting Talent with <br />
          
              Industry Leaders
         
          </h2>

          <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
            Our placement cell bridges the gap between academic excellence
            and corporate requirements. Partnering with top-tier organizations
            to ensure our students build successful careers.
          </p>

          <div className="flex gap-8 pt-4">

            <div>
              <div className="text-4xl font-bold text-white">450+</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">
                Companies Visited
              </div>
            </div>

            <div className="w-px h-12 bg-white/10" />

            <div>
              <div className="text-4xl font-bold text-white">98%</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">
                Placement Rate
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT LOGO SLIDERS */}
        <div className="lg:col-span-2 flex justify-center lg:justify-end gap-6">

          <div className="slider-container relative h-[420px] w-[280px] flex gap-4 overflow-hidden">

            {/* gradient fade */}
            <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#05070a] to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#05070a] to-transparent z-20 pointer-events-none" />

            {/* COLUMN 1 */}
            <div className="w-1/2 h-full overflow-hidden">
              <div className="animate-up flex flex-col gap-4">

                {displayCol1.map((item, idx) => (
                  <div
                    key={idx}
                    className="h-[100px] bg-white/[0.03] border border-white/5 flex items-center justify-center p-4 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:border-[var(--theme-color2)]/40 hover:shadow-[0_0_20px_rgba(233,30,99,0.25)]"
                  >
                    <img
                      src={item.src}
                      alt={item.name}
                      className="max-h-8 opacity-70 hover:opacity-100 transition duration-300"
                    />
                  </div>
                ))}

              </div>
            </div>

            {/* COLUMN 2 */}
            <div className="w-1/2 h-full overflow-hidden">
              <div className="animate-down flex flex-col gap-4">

                {displayCol2.map((item, idx) => (
                  <div
                    key={idx}
                    className="h-[100px] bg-white/[0.03] border border-white/5 flex items-center justify-center p-4 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:border-[var(--theme-color2)]/40 hover:shadow-[0_0_20px_rgba(233,30,99,0.25)]"
                  >
                    <img
                      src={item.src}
                      alt={item.name}
                      className="max-h-8 opacity-70 hover:opacity-100 transition duration-300"
                    />
                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}