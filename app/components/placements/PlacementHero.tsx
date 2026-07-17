// // app/components/PlacementHeroSection.tsx

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight, Sparkles } from "lucide-react";

// export default function PlacementHero() {
//   return (
//     <section className="relative overflow-hidden bg-black py-24 lg:py-32">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <Image
//           src=""
//           alt="Students Placement Drive"
//           fill
//           priority
//           className="object-cover object-center opacity-30"
//         />
//       </div>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-indigo-950/90" />

//       {/* Glow Effects */}
//       <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl" />
//       <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />

//       <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
//         <div className="grid items-center gap-16 lg:grid-cols-2">
//           {/* Left Content */}
//           <div className="animate-fadeInUp">
//             {/* Badge */}
//             <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2 backdrop-blur-xl">
//               <Sparkles className="h-4 w-4 text-pink-400" />
//               <span className="text-sm font-medium tracking-wide text-white">
//                 2026 Active Placement Drives
//               </span>
//             </div>

//             {/* Heading */}
//             <h1 className="max-w-3xl text-5xl font-black leading-tight text-white md:text-6xl xl:text-7xl">
//               Unlock Your{" "}
//               <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
//                 Dream Placement
//               </span>{" "}
//               Journey
//             </h1>

//             {/* Description */}
//             <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
//               Connect with top recruiters, attend exclusive hiring drives, and
//               secure opportunities from leading tech companies. Your future
//               begins with the right placement platform.
//             </p>

//             {/* Buttons */}
//             <div className="mt-10 flex flex-wrap gap-5">
//               <Link href="/register">
//                 <button className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-8 py-4 text-lg font-semibold text-white shadow-[0_10px_40px_rgba(168,85,247,0.4)] transition-all duration-300 hover:scale-105">
//                   <span className="relative z-10 flex items-center gap-2">
//                     Register Now
//                     <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
//                   </span>

//                   <div className="absolute inset-0 bg-white/10 opacity-0 transition duration-300 group-hover:opacity-100" />
//                 </button>
//               </Link>

//               <Link href="/placements">
//                 <button className="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-lg font-medium text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20">
//                   View Active Drives
//                 </button>
//               </Link>
//             </div>

//             {/* Stats */}
//             <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
//               {[
//                 { value: "250+", label: "Top Recruiters" },
//                 { value: "12K+", label: "Students Placed" },
//                 { value: "98%", label: "Placement Success" },
//               ].map((item, index) => (
//                 <div
//                   key={index}
//                   className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/10"
//                 >
//                   <h3 className="text-3xl font-bold text-white">
//                     {item.value}
//                   </h3>
//                   <p className="mt-2 text-sm text-gray-400">{item.label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Side */}
//           <div className="relative hidden lg:block">
//             <div className="relative mx-auto h-[580px] w-[460px]">
//               {/* Glass Card */}
//               <div className="absolute inset-0 rounded-[40px] border border-white/10 bg-white/10 backdrop-blur-2xl shadow-[0_0_80px_rgba(255,255,255,0.08)]" />

//               {/* Student Group Image */}
//               <div className="absolute left-6 right-6 top-6 bottom-24 overflow-hidden rounded-[32px]">
//                 <Image
//                   src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
//                   alt="Students Group"
//                   fill
//                   className="object-cover transition-transform duration-700 hover:scale-110"
//                 />
//               </div>

//               {/* Floating Card */}
//               <div className="absolute -bottom-6 left-1/2 w-[85%] -translate-x-1/2 rounded-3xl border border-white/10 bg-black/70 p-6 backdrop-blur-xl">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-sm uppercase tracking-[3px] text-pink-400">
//                       Upcoming Drive
//                     </p>

//                     <h3 className="mt-2 text-2xl font-bold text-white">
//                       Campus Hiring 2026
//                     </h3>
//                   </div>

//                   <div className="rounded-2xl bg-gradient-to-r from-pink-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
//                     Live
//                   </div>
//                 </div>

//                 <div className="mt-5 flex items-center justify-between text-sm text-gray-300">
//                   <span>Amazon • Infosys • TCS</span>
//                   <span>15+ Roles</span>
//                 </div>
//               </div>

//               {/* Decorative Floating Borders */}
//               <div className="absolute -right-6 top-10 h-28 w-28 rounded-full border border-pink-500/30" />
//               <div className="absolute -left-6 bottom-16 h-20 w-20 rounded-full border border-cyan-400/30" />

//               {/* Blur Lights */}
//               <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-pink-500/30 blur-3xl" />
//               <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-indigo-500/30 blur-3xl" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Custom Animation */}
//       <style jsx>{`
//         .animate-fadeInUp {
//           animation: fadeInUp 1s ease forwards;
//         }

//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(40px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0px);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }