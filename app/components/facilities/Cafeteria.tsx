import React from 'react';

const MOMENTS = [
  { id: 1, title: "Serving Line", desc: "Energy of our peak hours.", img: "/facilities/survingline.jpg" },
  { id: 2, title: "Communal Dining", desc: "Where students connect.", img: "/facilities/communaldining.jpg" },
  { id: 3, title: "Service Excellence", desc: "Efficient, clean standards.", img: "/facilities/serviceexcellence.jpg" },
  { id: 4, title: "Friendly Staff", desc: "Quality nutrition service.", img: "/facilities/friendlystaff.jpg" },
];

export default function Cafeteria() {
  return (
    <section className="bg-[var(--theme-bg-light)] py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--theme-color2)]/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
       <div className="mb-10 md:mb-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--theme-color2)]/10 border border-[var(--theme-color2)]/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--theme-color2)] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--theme-color2)]">
             Campus Moments
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight tracking-tight text-[var(--theme-color)]">
           Campus Cafeteria{" "}
            <span className="text-[var(--color-theme)]/60 italic font-medium">Endless Memories</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOMENTS.map((item) => (
            <div 
              key={item.id}
              className="bg-white/[0.03] backdrop-blur-md border border-[var(--color-theme-2)] rounded-3xl p-5 hover:bg-[var(--color-theme-2)]/10 hover:border-[var(--color-theme-2)]/30 transition-all duration-300 hover:-translate-y-2 group"
            >
              
              {/* Image */}
              <div className="aspect-square w-full rounded-2xl overflow-hidden mb-4 bg-white/5">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" 
                />
              </div>
              
              <div>
                <h3 className="text-base font-bold text-theme mb-1.5 group-hover:text-[var(--color-theme-2)] transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-theme/60 text-xs leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}