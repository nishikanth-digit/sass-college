'use client';

import React from 'react';

const placementData = [
  { company: 'Amazon', role: 'SDE', selects: 1, salary: '46.38' },
  { company: 'Flipkart', role: 'SDE', selects: 1, salary: '32.57' },
  { company: 'Optum', role: 'Fulltime', selects: 29, salary: '18.56' },
  { company: 'Synopsys', role: 'PPO', selects: 2, salary: '18.00' },
  { company: 'TCS-Prime', role: 'Fulltime', selects: 1, salary: '9.60' },
];

export default function Statistics() {
  return (
    <section className="min-h-screen bg-white p-6 md:p-12 text-slate-700">

      {/* Title */}
      <div className="max-w-5xl mx-auto mb-14">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--theme-color)]">
          Placement Statistics
        </h1>

        <p className="mt-4 text-slate-500 max-w-2xl text-lg">
          Analysis of recruitment engagement, compensation benchmarks, and
          industry partnerships for the 2024-25 academic cycle.
        </p>
      </div>

      {/* Table Container */}
      <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl">

        {/* Header */}
        <div className="grid grid-cols-4 gap-4 px-8 py-6 bg-slate-100 text-sm uppercase tracking-wider font-semibold text-slate-500">
          <div>Company</div>
          <div>Role</div>
          <div>Selects</div>
          <div className="text-right">Salary (LPA)</div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-slate-200">
          {placementData.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-4 gap-4 px-8 py-5 items-center transition-all duration-300 hover:bg-slate-50 group"
            >
              <div className="font-semibold text-slate-800 group-hover:text-[var(--theme-color2)] transition-colors">
                {item.company}
              </div>

              <div className="text-slate-500 text-sm">
                {item.role}
              </div>

              <div className="text-slate-500 text-sm">
                {item.selects}
              </div>

              <div className="text-right font-mono font-bold text-[var(--theme-color2)] text-lg">
                {item.salary}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-8 py-6 text-center text-sm text-slate-400 bg-slate-50">
          Viewing top recruiters • Data refreshed March 2026
        </div>
      </div>

    </section>
  );
}