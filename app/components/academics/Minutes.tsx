"use client";

import React, { useState } from "react";
import { AlertTriangle } from "lucide-react";

// --- Types ---
interface Meeting {
  id: string;
  date: string;
  time: string;
  venue: string;
  presidedBy: string;
  members: string[];
  agenda: string[];
  discussions: string[];
  resolutions: string[];
}

// --- Data ---
const meetings: Meeting[] = [
  {
    id: "2017-06-09",
    date: "9th June, 2017",
    time: "04:00 PM",
    venue: "Conference Room",
    presidedBy: "Dr. B. Madhubala (Director)",
    members: [
      "Dr. M. Madhavi (Chairperson)",
      "Prof. P. PinakaPani (Coordinator)",
      "Dr. Ramesh B Nimmatoori (Secretary)",
      "Mr. Satish Kumar (HOD Management)",
      "Ms. P. Saritha (HOD Computer Applications)",
      "Mr. GM. Joshi (Industry Nominee)",
    ],
    agenda: [
      "Constitution of IQAC for NAAC Accreditation",
      "Quality improvement measures for academic excellence",
      "Preparation of Self Study Report (SSR)",
    ],
    discussions: [
      "Presentation on purpose and functions of IQAC",
      "Enriching curriculum with industry orientation",
      "Need for ICT enabled Learning Management systems",
      "Automating the Administrative office",
    ],
    resolutions: [
      "Unanimous acceptance of IQAC constitution",
      "Initiation of NAAC accreditation application",
      "Fortnightly review of NAAC preparations",
    ],
  },
  {
    id: "2017-07-26",
    date: "26th July, 2017",
    time: "03:00 PM",
    venue: "Conference Room",
    presidedBy: "Dr. M. Madhavi (Director)",
    members: [
      "Dr. M. Madhavi",
      "Prof. P. PinakaPani",
      "Dr. Ramesh B Nimmatoori",
      "Ms. Naga Padma",
      "Mr. P.Somaiah (Librarian)",
      "Ms. S. Sandhya (Alumnus)",
    ],
    agenda: [
      "Review of previous resolutions",
      "Progress of NAAC works",
      "Information for quantitative and qualitative parameters",
      "Library Automation discussions",
    ],
    discussions: [
      "Orientation on Learning Management System (Edmodo)",
      "Solar Photovoltaic cells installation status",
      "Deputing criteria-wise coordinators for SSR",
      "Maintenance of green campus and water harvesting",
    ],
    resolutions: [
      "Procurement of ERP software for office automation",
      "Establishment of additional smart classrooms",
      "Application for Net Meter for solar energy",
    ],
  },
];

export default function Minutes() {
  const [activeTab, setActiveTab] = useState(meetings[0].id);
  const activeMeeting =
    meetings.find((m) => m.id === activeTab) || meetings[0];

  return (
    <main className="min-h-screen bg-[var(--theme-bg-light)] text-slate-700 p-4 md:p-8 font-sans selection:bg-[var(--theme-color2)]/30 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 space-y-10">
        
        {/* Title */}
        <header className="relative flex flex-col md:flex-row justify-between items-end gap-6 border-b border-gray-200 pb-8 mb-8">
          <div className="space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-theme-2)]/10 border border-[var(--color-theme-2)]/30 text-[var(--color-theme-2)] text-[10px] font-black uppercase tracking-[0.2em]">
              <AlertTriangle size={12} className="animate-pulse" />
              IQAC
            </div>
 <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight tracking-tight text-[var(--theme-color)]">
             Minutes Of <span className="text-[var(--color-theme)]/60 italic font-medium">Meeting</span>
            </h1>

            <p className="text-lg text-slate-600 max-w-2xl">
              Internal Quality Assurance Cell records regarding NAAC accreditation,
              academic excellence, and institutional development.
            </p>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar */}
          <nav className="lg:w-1/4 flex lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0">
            {meetings.map((meeting) => (
              <button
                key={meeting.id}
                onClick={() => setActiveTab(meeting.id)}
                className={`flex-shrink-0 text-left px-5 py-4 rounded-xl border-2 transition ${
                  activeTab === meeting.id
                    ? "bg-white border-[var(--color-theme-2)] shadow-md lg:translate-x-2"
                    : "bg-white/60 border-transparent text-slate-500 hover:bg-[var(--color-theme-2)]/10 hover:text-[var(--color-theme-2)]"
                }`}
              >
                <span
                  className={`block font-bold ${
                    activeTab === meeting.id
                      ? "text-[var(--color-theme-2)]"
                      : ""
                  }`}
                >
                  {meeting.date}
                </span>
                <span className="text-xs uppercase opacity-70">
                  {meeting.venue}
                </span>
              </button>
            ))}
          </nav>

          {/* Content */}
          <section className="lg:w-3/4">
            <div className="bg-white rounded-3xl shadow-xl border border-[var(--color-theme-2)]/10 overflow-hidden">
              
              {/* Header */}
              <div className="bg-[var(--color-theme-2)] p-8 text-white">
                <h2 className="text-3xl font-bold">
                  {activeMeeting.date}
                </h2>
                <p className="mt-2 text-white/80">
                  {activeMeeting.time} • {activeMeeting.venue}
                </p>
                <p className="mt-2 text-sm text-white/70">
                  Presided by {activeMeeting.presidedBy}
                </p>
              </div>

              {/* Body */}
              <div className="p-8 space-y-8">
                
                {/* Members */}
                <div>
                  <h3 className="text-[var(--color-theme-2)] font-bold text-sm mb-3 uppercase">
                    Members Present
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {activeMeeting.members.map((m, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-lg border bg-[var(--color-theme-2)]/5 border-[var(--color-theme-2)]/20 text-slate-700"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  
                  {/* Agenda */}
                  <div>
                    <h4 className="font-bold mb-3 text-slate-900">
                      Agenda
                    </h4>
                    <ul className="space-y-2">
                      {activeMeeting.agenda.map((item, i) => (
                        <li
                          key={i}
                          className="pl-3 border-l-2 border-[var(--color-theme-2)]/30 text-sm text-slate-600"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Discussions */}
                  <div>
                    <h4 className="font-bold mb-3 text-slate-900">
                      Discussions
                    </h4>
                    <ul className="space-y-2">
                      {activeMeeting.discussions.map((item, i) => (
                        <li
                          key={i}
                          className="pl-3 border-l-2 border-[var(--color-theme-2)]/30 text-sm text-slate-600"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Resolutions */}
                <div className="bg-[var(--color-theme-2)]/5 p-6 rounded-xl border border-[var(--color-theme-2)]/20">
                  <h4 className="font-bold mb-4 text-[var(--color-theme-2)]">
                    Resolutions Passed
                  </h4>
                  <ol className="space-y-2">
                    {activeMeeting.resolutions.map((item, i) => (
                      <li key={i} className="text-sm text-slate-700">
                        {i + 1}. {item}
                      </li>
                    ))}
                  </ol>
                </div>

              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}