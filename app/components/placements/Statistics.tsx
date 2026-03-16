'use client';

import React from 'react';

const placementData = [
  { company: 'Amazon', role: 'SDE', selects: 1, salary: '46.38' },
  { company: 'Flipkart', role: 'SDE', selects: 1, salary: '32.57' },
  { company: 'Optum', role: 'Fulltime', selects: 29, salary: '18.56' },
  { company: 'Synopsys', role: 'PPO', selects: 2, salary: '18.00' },
  { company: 'TCS-Prime', role: 'Fulltime', selects: 1, salary: '9.60' },
];

export default function PlacementDashboard() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-theme via-slate-900 to-theme p-6 md:p-12 text-white">

      {/* Title */}
      <div className="max-w-5xl mx-auto mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Placement <span className="text-theme-2">Statistics</span>
        </h1>

        <p className="mt-4 text-slate-300 max-w-2xl text-lg">
          Analysis of recruitment engagement, compensation benchmarks, and
          industry partnerships for the 2024-25 academic cycle.
        </p>
      </div>

      {/* Table Container */}
      <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">

        {/* Header */}
        <div className="grid grid-cols-4 gap-4 px-8 py-6 bg-black/30 text-sm uppercase tracking-wider font-semibold text-slate-300">
          <div>Company</div>
          <div>Role</div>
          <div>Selects</div>
          <div className="text-right">Salary (LPA)</div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-white/10">
          {placementData.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-4 gap-4 px-8 py-5 items-center transition-all duration-300 hover:bg-white/5 group"
            >
              <div className="font-semibold text-white group-hover:text-theme-2 transition-colors">
                {item.company}
              </div>

              <div className="text-slate-300 text-sm">
                {item.role}
              </div>

              <div className="text-slate-300 text-sm">
                {item.selects}
              </div>

              <div className="text-right font-mono font-bold text-theme-2 text-lg">
                {item.salary}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-8 py-6 text-center text-sm text-slate-400 bg-black/30">
          Viewing top recruiters • Data refreshed March 2026
        </div>
      </div>

    </section>
  );
}