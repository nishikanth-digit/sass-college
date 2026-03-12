// "use client";

// import { useState } from "react";
// import { Download, ExternalLink } from "lucide-react";

// const notifications = [
//   {
//     title: "B.Tech Semester Examination Timetable Released",
//     type: "Examination",
//     date: "02 Mar 2026",
//     link: "/pdfs/exam.pdf",
//   },
//   {
//     title: "MBA Admissions 2026 – Applications Open",
//     type: "Admissions",
//     date: "25 Feb 2026",
//     link: "/admissions",
//     external: true,
//   },
//   {
//     title: "Campus Drive – Infosys Recruitment",
//     type: "Placement",
//     date: "20 Feb 2026",
//     link: "/pdfs/infosys.pdf",
//   },
//   {
//     title: "Mid Exam Timetable Published",
//     type: "Timetable",
//     date: "15 Feb 2026",
//     link: "/pdfs/mid.pdf",
//   },
// ];

// export default function NotificationSectionNewTrend() {
//   const [paused, setPaused] = useState(false);

//   const featured = notifications[0];
//   const others = notifications.slice(1);

//   return (
//     <section className="py-28 px-6 md:px-20 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-start">

//         {/* LEFT – FEATURED ANNOUNCEMENT */}
//         <div className="relative">

//           <span className="uppercase tracking-widest text-sm text-[var(--theme-color2)] font-semibold">
//             Notification Center
//           </span>

//           <h2 className="text-4xl md:text-5xl font-bold text-[var(--theme-color)] mt-4">
//             Latest Announcements
//           </h2>

//           <p className="mt-6 text-[var(--body-text-color)] max-w-xl leading-relaxed">
//             Access official updates related to admissions, examinations,
//             placements, timetables and institutional events.
//           </p>

//           {/* Featured Box */}
//           <div className="mt-16 relative p-10 rounded-3xl bg-white shadow-xl border border-gray-200">

//             <div className="absolute top-0 left-0 h-full w-1 bg-[var(--theme-color2)] rounded-l-3xl" />

//             <p className="text-sm text-gray-400 mb-3">
//               {featured.date} • {featured.type}
//             </p>

//             <h3 className="text-2xl font-semibold text-[var(--theme-color)] leading-snug">
//               {featured.title}
//             </h3>

//             <a
//               href={featured.link}
//               target={featured.external ? "_blank" : "_self"}
//               download={!featured.external}
//               className="mt-8 inline-flex items-center gap-2 text-[var(--theme-color2)] font-medium hover:gap-3 transition-all"
//             >
//               View Details
//               {featured.external ? (
//                 <ExternalLink size={18} />
//               ) : (
//                 <Download size={18} />
//               )}
//             </a>
//           </div>
//         </div>

//         {/* RIGHT – VERTICAL MOTION STRIP */}
//         <div
//           className="relative h-[420px] overflow-hidden"
//           onMouseEnter={() => setPaused(true)}
//           onMouseLeave={() => setPaused(false)}
//         >

//           <div
//             className={`space-y-10 animate-scroll ${
//               paused ? "paused" : ""
//             }`}
//           >
//             {[...others, ...others].map((item, index) => (
//               <a
//                 key={index}
//                 href={item.link}
//                 target={item.external ? "_blank" : "_self"}
//                 download={!item.external}
//                 className="block group"
//               >
//                 <div className="border-b border-gray-200 pb-6">

//                   <p className="text-sm text-gray-400 mb-2">
//                     {item.date} • {item.type}
//                   </p>

//                   <h4 className="text-lg font-medium text-[var(--theme-color)] group-hover:text-[var(--theme-color2)] transition">
//                     {item.title}
//                   </h4>
//                 </div>
//               </a>
//             ))}
//           </div>

//           {/* Fade top and bottom */}
//           <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent" />
//           <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent" />
//         </div>
//       </div>

//       {/* Animation */}
//       <style jsx>{`
//         @keyframes scrollUp {
//           0% { transform: translateY(0); }
//           100% { transform: translateY(-50%); }
//         }

//         .animate-scroll {
//           animation: scrollUp 20s linear infinite;
//         }

//         .paused {
//           animation-play-state: paused;
//         }
//       `}</style>
//     </section>
//   );
// }


"use client";

import { useState } from "react";

const notifications = [
  {
    title: "B.Tech Semester Examination Timetable Released",
    date: "02 Mar 2026",
    category: "Examination",
    important: true,
    type: "pdf",
    link: "/pdfs/exam.pdf",   // must be inside /public/pdfs/
  },
  {
    title: "MBA Admissions 2026 – Applications Open",
    date: "25 Feb 2026",
    category: "Admissions",
    type: "external",
    link: "https://google.com",
  },
  {
    title: "Campus Drive – Infosys Recruitment",
    date: "20 Feb 2026",
    category: "Placement",
    type: "internal",
    link: "/placements",
  },
];

export default function NotificationsSection() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="py-24 px-6 md:px-20 bg-theme-bg-light">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">

        {/* LEFT SIDE */}
        <div>
          <p className="text-sm font-semibold tracking-widest text-theme-2 uppercase">
            Updates
          </p>

          <h2 className="mt-6 text-5xl font-bold text-theme leading-tight">
            Stay Updated <br /> With Campus Notices
          </h2>

          <p className="mt-6 text-body-text text-lg leading-relaxed">
            Get real-time updates on examinations, admissions, placements,
            and academic announcements. All official circulars are published
            here for easy access.
          </p>

          <div className="mt-10">
            <a
              href="#"
              className="inline-block text-theme-2 font-semibold border-b-2 border-theme-2 hover:opacity-70 transition"
            >
              Explore All Notices →
            </a>
          </div>
        </div>

        {/* RIGHT SIDE MARQUEE */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="h-[420px] overflow-hidden">
            <div
              className={`marquee-track ${paused ? "marquee-paused" : ""}`}
            >
              {[...notifications, ...notifications].map((item, index) => {
                const [day, month, year] = item.date.split(" ");

                return (
                  <a
                    key={index}
                    href={item.link}
                    target={item.type === "external" ? "_blank" : "_self"}
                    rel={item.type === "external" ? "noopener noreferrer" : ""}
                    download={item.type === "pdf" ? true : undefined}
                    className="group flex items-stretch border-b border-gray-200 hover:bg-white transition relative"
                  >
                    {/* Hover Accent */}
                    <div className="absolute left-0 top-0 h-full w-0 group-hover:w-1 bg-theme-2 transition-all duration-300" />

                    {/* DATE BLOCK */}
                    <div className="w-20 flex flex-col items-center justify-center bg-white py-3 border-r border-gray-100 shrink-0">
                      <span className="text-2xl font-bold text-theme">{day}</span>
                      <span className="text-xs uppercase text-body-text">{month}</span>
                      <span className="text-[10px] text-gray-400">{year}</span>
                    </div>

                    {/* CONTENT */}
                    <div className="flex-1 py-3 px-6">
                      <p
                        className={`text-lg font-semibold ${item.important ? "text-theme-2" : "text-theme"
                          }`}
                      >
                        {item.title}
                      </p>

                      <p className="mt-2 text-sm text-body-text">
                        {item.category}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}