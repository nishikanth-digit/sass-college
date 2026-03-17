"use client";

import React from 'react';

const libraryData = [
  {
    title: "Book Lending Services",
    description: "Access our vast collection of physical and digital resources with a seamless, user-friendly checkout process.",
    img: "/facilities/lending.jpg"
  },
  {
    title: "Organized Archive & Racks",
    description: "Browse through systematically categorized aisles, ensuring you find the exact materials you need.",
    img: "/facilities/racks.jpg"
  },
  {
    title: "Dedicated Study Spaces",
    description: "Immerse yourself in a quiet, ergonomic environment designed to foster deep focus and academic excellence.",
    img: "/facilities/studyspaces.jpg"
  }
];

export default function Library() {
  return (
    <section className="bg-[var(--theme-bg-light)] py-24 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--theme-color2)]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--theme-color2)]/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mb-10 md:mb-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--theme-color2)]/10 border border-[var(--theme-color2)]/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--theme-color2)] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--theme-color2)]">
              Center for Excellence
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight tracking-tight text-[var(--theme-color)]">
            Knowledge Hub: Library &{" "}
            <span className="text-[var(--color-theme)]/60 italic font-medium"> Academic Support</span>
          </h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {libraryData.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 ease-in-out border border-gray-100"
            >
              {/* Image Container - Height reduced to h-40 */}
              <div className="h-40 w-full overflow-hidden bg-gray-200">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" 
                />
              </div>
              
              {/* Content Container */}
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 text-[var(--theme-color)] group-hover:text-[var(--theme-color2)] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[var(--body-text-color)] leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}