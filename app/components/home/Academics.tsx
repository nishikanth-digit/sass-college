// "use client";

// import {
//   GraduationCap,
//   BookOpen,
//   Microscope,
//   ArrowRight,
// } from "lucide-react";

// export default function Academics() {
//   const programs = [
//     {
//       title: "Undergraduate Programs",
//       description:
//         "Comprehensive B.Tech programs designed to build strong foundations in engineering and technology.",
//       icon: GraduationCap,
//     },
//     {
//       title: "Postgraduate Programs",
//       description:
//         "Advanced M.Tech programs focused on specialization, innovation, and research excellence.",
//       icon: BookOpen,
//     },
//     {
//       title: "Research & Innovation",
//       description:
//         "State-of-the-art labs and research centers promoting innovation and real-world problem solving.",
//       icon: Microscope,
//     },
//   ];

//   return (
//     <section className="py-20 px-6 md:px-20 bg-[var(--theme-bg-light)]">
//       {/* Section Header */}
//       <div className="text-center max-w-3xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-[var(--theme-color)]">
//           Academics
//         </h2>
//         <p className="mt-4 text-[var(--body-text-color)] leading-relaxed text-sm md:text-base">
//           Our academic programs are structured to provide students with
//           industry-relevant knowledge, practical exposure, and strong
//           research foundations.
//         </p>
//       </div>

//       {/* Program Cards */}
//       <div className="mt-14 grid gap-8 md:grid-cols-3">
//         {programs.map((program, index) => {
//           const Icon = program.icon;

//           return (
//             <div
//               key={index}
//               className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl 
//                          transition duration-300 hover:-translate-y-2"
//             >
//               <Icon
//                 size={40}
//                 className="text-[var(--theme-color2)]"
//               />

//               <h3 className="mt-6 text-xl font-semibold text-[var(--theme-color)]">
//                 {program.title}
//               </h3>

//               <p className="mt-4 text-sm text-[var(--body-text-color)] leading-relaxed">
//                 {program.description}
//               </p>

//               <button className="mt-6 inline-flex items-center gap-2 text-[var(--theme-color2)] font-semibold hover:gap-3 transition-all">
//                 Learn More <ArrowRight size={18} />
//               </button>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }


"use client";

import { useState } from "react";
import { Bell, Scale, Calendar, FileText, Shield, Ban, Download } from "lucide-react";

export default function Academics() {
  const [active, setActive] = useState(0);

  const sections = [
    {
      label: "Admissions",
      icon: Bell,
      title: "Admissions & Notifications",
      description:
        "Stay updated with latest admission announcements, eligibility criteria and important deadlines.",
      points: [
        "Admission Notifications",
        "Eligibility Criteria",
        "Application Procedure",
        "Important Dates",
      ],
    },
    {
      label: "Rules",
      icon: Scale,
      title: "Rules & Regulations",
      description:
        "Institutional policies and academic rules governing student conduct and academic standards.",
      points: [
        "Attendance Policy",
        "Examination Rules",
        "Disciplinary Regulations",
        "Academic Integrity Guidelines",
      ],
      pdf: "/pdfs/rules-regulations.pdf",
    },
    {
      label: "Calendar",
      icon: Calendar,
      title: "Academic Calendar",
      description:
        "Detailed semester schedules including classes, exams and institutional events.",
      points: [
        "Semester Schedule",
        "Examination Timetable",
        "Holiday List",
        "Academic Events",
      ],
      pdf: "/pdfs/academic-calendar.pdf",
    },
    {
      label: "Meetings",
      icon: FileText,
      title: "Minutes of Meeting",
      description:
        "Official documentation of academic council and committee discussions.",
      points: [
        "Academic Council Meetings",
        "Board of Studies Records",
        "Departmental Meetings",
        "Policy Review Notes",
      ],
      pdf: "/pdfs/minutes-of-meeting.pdf",
    },
    {
      label: "Conduct",
      icon: Shield,
      title: "Code of Conduct",
      description:
        "Guidelines outlining ethical behavior and responsibilities of students and staff.",
      points: [
        "Student Responsibilities",
        "Faculty Responsibilities",
        "Ethical Standards",
        "Disciplinary Actions",
      ],
      pdf: "/pdfs/code-of-conduct.pdf",
    },
    {
      label: "Anti Ragging",
      icon: Ban,
      title: "Anti Ragging Policy",
      description:
        "Strict anti-ragging measures ensuring a safe, respectful and inclusive campus environment.",
      points: [
        "Anti-Ragging Committee",
        "Reporting Mechanism",
        "Punitive Actions",
        "Student Safety Measures",
      ],
      pdf: "/pdfs/anti-ragging-policy.pdf",
    },
  ];

  const ActiveIcon = sections[active].icon;

  return (
    <section className="py-20  bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-20">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-bold text-[var(--theme-color)]">
            Academics
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-[var(--body-text-color)]">
            Access important academic information, institutional policies and
            official documentation.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
                ${
                  active === index
                    ? "bg-[var(--theme-color2)] text-white shadow-md"
                    : "bg-white text-[var(--theme-color)] border border-gray-200 hover:border-[var(--theme-color2)]"
                }`}
            >
              {section.label}
            </button>
          ))}
        </div>

        {/* Active Content */}
        <div className="bg-white rounded-3xl p-10 md:p-16 shadow-lg transition-all duration-500">

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">

            {/* Left Content */}
            <div className="max-w-xl">

              <div className="flex items-center gap-4">
                <div className="text-[var(--theme-color2)]">
                  <ActiveIcon size={40} />
                </div>

                <h3 className="text-2xl md:text-3xl font-semibold text-[var(--theme-color)]">
                  {sections[active].title}
                </h3>
              </div>

              <p className="mt-6 text-[var(--body-text-color)] leading-relaxed">
                {sections[active].description}
              </p>

              {/* ✅ Latest Admission Notification (Only for Admissions tab) */}
              {active === 0 && (
                <div className="mt-8 p-6 rounded-xl border border-[var(--theme-color2)]/30 bg-[var(--theme-color2)]/5">
                  <h4 className="font-semibold text-[var(--theme-color)]">
                    Latest Admission Notification 2026–27
                  </h4>
                  <p className="mt-2 text-sm text-[var(--body-text-color)]">
                    Applications are open for UG & PG programs. Last date to apply: 30th June 2026.
                  </p>

                  <a
                    href="/pdfs/admission-notification.pdf"
                    download
                    className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg 
                               bg-[var(--theme-color2)] text-white text-sm
                               hover:opacity-90 transition"
                  >
                    <Download size={16} />
                    Download Notification
                  </a>
                </div>
              )}

              {/* ✅ Download Button for Other Tabs */}
              {sections[active].pdf && (
                <a
                  href={sections[active].pdf}
                  download
                  className="inline-flex items-center gap-2 mt-8 px-5 py-3 rounded-lg 
                             border border-[var(--theme-color2)] 
                             text-[var(--theme-color2)] 
                             hover:bg-[var(--theme-color2)] 
                             hover:text-white transition"
                >
                  <Download size={18} />
                  Download PDF
                </a>
              )}

            </div>

            {/* Right Points */}
            <div className="space-y-4">
              {sections[active].points.map((point, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 transition-all duration-300 hover:translate-x-2"
                >
                  <div className="h-2 w-2 rounded-full bg-[var(--theme-color2)]"></div>
                  <span className="text-[var(--body-text-color)]">
                    {point}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}