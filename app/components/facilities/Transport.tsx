'use client';

import React from 'react';

const Transport   = () => {
  return (
    <section className="bg-[var(--theme-bg-light)] py-24 px-6 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--theme-color2)]/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
       
         {/* Header */}
        <div className="mb-10 md:mb-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--theme-color2)]/10 border border-[var(--theme-color2)]/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--theme-color2)] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--theme-color2)]">
           Network & Logistics
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight tracking-tight text-[var(--theme-color)]">
         Insititutional Support {" "}
            <span className="text-[var(--color-theme)]/60 italic font-medium">Information</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Card 1 */}
          <div className="group relative bg-theme backdrop-blur-xl border border-theme-2 p-10 rounded-[2rem] transition-all duration-700 hover:border-[var(--color-theme-2)]/50 hover:bg-white/[0.04]">
            
            <h3 className="text-lg font-bold text-[var(--color-theme-2)] uppercase tracking-widest mb-8">
              Contact Authority
            </h3>

            <div className="space-y-8">
              {[
                { name: 'A. Vijay Kumar', role: 'Transport Coordinator', phone: '+91 9121177698' },
                { name: 'Mr. K. Thirmal Reddy', role: 'Transport Associate', phone: '+91 7780550400' }
              ].map((contact, i) => (
                <div 
                  key={i} 
                  className="flex flex-col gap-1 border-l-2 border-theme pl-6 group-hover:border-[var(--color-theme-2)] transition-colors duration-500"
                >
                  <span className="text-xl font-medium text-white">{contact.name}</span>
                  <span className="text-sm text-slate-500 uppercase tracking-wide">{contact.role}</span>
                  <span className="text-[var(--color-theme-2)] font-semibold mt-2">{contact.phone}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-theme backdrop-blur-xl border border-theme-2 p-10 rounded-[2rem] transition-all duration-700 hover:border-[var(--color-theme-2)]/50 hover:bg-white/[0.04]">
            
            <h3 className="text-lg font-bold text-[var(--color-theme-2)] uppercase tracking-widest mb-8">
              Route Logistics
            </h3>

            <p className="text-slate-300 leading-relaxed mb-8">
              Our campus transit system serves major routes across the Hyderabad and Sangareddy regions, ensuring synchronized arrivals for all faculty and students.
            </p>

            <div className="p-6 bg-white/[0.03] rounded-2xl border border-white/5">
              <p className="text-white font-semibold mb-2">Public Transit Connection</p>
              <p className="text-slate-400 text-sm">
                Board at Jubilee Bus Station (JBS) for Narsapur, Medak, or Bodhan lines.
              </p>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .group:hover { transform: scale(1.01); }
      `}</style>
    </section>
  );
};

export default Transport;