"use client";

import React from "react";
import { Users, MapPin } from "lucide-react";

const digitHostelData = [
  { id: 1, campus: "DIGIT Central Hub", name: "Girls Hostel – Kamala Nehru", occupancy: 450, facilities: "TV Hall, Dining Hall, Gymnasium, Computer Room, Reading Room" },
  { id: 2, campus: "DIGIT Central Hub", name: "Girls Hostel – Saraswathi", occupancy: 232, facilities: "TV Hall, Dining Hall, Gymnasium, Computer Room, Reading Room" },
  { id: 3, campus: "DIGIT Central Hub", name: "Girls Hostel – Gayathri", occupancy: 300, facilities: "TV Hall, Dining Hall, Gymnasium, Computer Room, Reading Room" },
  { id: 4, campus: "DIGIT Regional A", name: "Girls Hostel", occupancy: 550, facilities: "TV Hall, Dining Hall, Gymnasium, Computer Room, Reading Room" },
  { id: 5, campus: "DIGIT Regional B", name: "Girls Hostel", occupancy: 400, facilities: "TV Hall, Dining Hall, Gymnasium, Computer Room, Reading Room" },
  { id: 6, campus: "DIGIT Regional C", name: "Girls Hostel", occupancy: 270, facilities: "TV Hall, Dining Hall, Gymnasium, Computer Room, Reading Room" },
];

export default function Hostel() {
  return (
    <section className="bg-[var(--theme-bg-light)] py-24 px-6 relative overflow-hidden">
      
      {/* Glow BG */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--theme-color2)]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--theme-color2)]/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Title */}
        <div className="mb-10 md:mb-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--theme-color2)]/10 border border-[var(--theme-color2)]/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--theme-color2)] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--theme-color2)]">
              Residential Facilities
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight tracking-tight text-[var(--theme-color)]">
            Student Living: Hostel &{" "}
            <span className="text-[var(--color-theme)]/60 italic font-medium">
              Accommodation
            </span>
          </h2>
        </div>

        {/* Table */}
        <div className="rounded-3xl border border-[var(--color-theme-2)]/20 shadow-2xl overflow-hidden bg-[var(--color-theme)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              
              <thead>
                <tr className="bg-[var(--color-theme-2)] text-white">
                  <th className="p-6 font-bold uppercase tracking-wider text-sm">Location</th>
                  <th className="p-6 font-bold uppercase tracking-wider text-sm">Hostel Unit</th>
                  <th className="p-6 font-bold uppercase tracking-wider text-sm">Capacity</th>
                  <th className="p-6 font-bold uppercase tracking-wider text-sm">Amenities</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-[var(--color-theme-2)]/10">
                {digitHostelData.map((hostel) => (
                  <tr
                    key={hostel.id}
                    className="hover:bg-[var(--color-theme-2)]/5 transition-colors"
                  >
                    <td className="p-6 font-medium flex items-center gap-2 text-white">
                      <MapPin size={16} className="text-[var(--color-theme-2)]" />
                      {hostel.campus}
                    </td>

                    <td className="p-6 font-bold text-white">
                      {hostel.name}
                    </td>

                    <td className="p-6">
                      <span className="flex items-center gap-2 font-mono font-bold text-white bg-[var(--color-theme-2)] px-3 py-1 rounded-lg shadow">
                        <Users size={16} /> {hostel.occupancy}
                      </span>
                    </td>

                    <td className="p-6 text-sm text-white/70 max-w-sm">
                      {hostel.facilities}
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

      </div>
    </section>
  );
}