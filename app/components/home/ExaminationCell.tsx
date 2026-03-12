"use client";

import { CalendarDays, FileText, ClipboardCheck, ArrowUpRight } from "lucide-react";

export default function ExaminationCell() {
  return (
    <section className="relative py-16 px-6 md:px-20 bg-[var(--theme-bg-light)] overflow-hidden">

      {/* Decorative Blurs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[var(--theme-color2)]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--theme-color)]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-[var(--theme-color2)]">
            Academic Governance
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-extrabold text-[var(--theme-color)] leading-tight">
            Examination <br /> Control Center
          </h2>

          <p className="mt-8 max-w-2xl text-lg text-[var(--body-text-color)]">
            A centralized digital system managing examinations,
            evaluations and academic integrity with precision and transparency.
          </p>
        </div>

        {/* Modern Card Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          <TrendCard
            icon={CalendarDays}
            title="Exam Timetables"
            description="Semester schedules, practical exams and supplementary dates."
            link="/pdfs/exam-timetable.pdf"
          />

          <TrendCard
            icon={FileText}
            title="Results Portal"
            description="Instant access to semester and revaluation results."
            link="/pdfs/exam-results.pdf"
          />

          <TrendCard
            icon={ClipboardCheck}
            title="Hall Ticket Access"
            description="Secure download of examination hall tickets."
            link="/pdfs/hall-ticket.pdf"
          />

        </div>

        {/* Bottom Stats Strip */}
        <div className="mt-14 grid md:grid-cols-4 gap-6">

          <Stat number="100%" label="Transparency" />
          <Stat number="30+" label="Exams / Year" />
          <Stat number="10K+" label="Students Served" />
          <Stat number="24/7" label="Support System" />

        </div>

      </div>
    </section>
  );
}

/* --- Trend Card --- */

function TrendCard({
  icon: Icon,
  title,
  description,
  link,
}: {
  icon: any;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div className="group relative p-8 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500">

      {/* Gradient Border Hover */}
      <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[var(--theme-color2)] transition-all duration-500"></div>

      <div className="flex items-center justify-between mb-8">
        <div className="p-4 rounded-2xl bg-[var(--theme-color2)]/10 text-[var(--theme-color2)] group-hover:bg-[var(--theme-color2)] group-hover:text-white transition-all duration-500">
          <Icon size={28} />
        </div>

        <ArrowUpRight className="text-[var(--theme-color2)] opacity-0 group-hover:opacity-100 transition duration-500" />
      </div>

      <h3 className="text-xl font-semibold text-[var(--theme-color)]">
        {title}
      </h3>

      <p className="mt-4 text-[var(--body-text-color)] leading-relaxed">
        {description}
      </p>

      <a
        href={link}
        download
        className="absolute inset-0"
      ></a>
    </div>
  );
}

/* --- Stat --- */

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-white p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition duration-300">
      <h4 className="text-3xl font-extrabold text-[var(--theme-color2)]">
        {number}
      </h4>
      <p className="mt-2 text-sm text-[var(--body-text-color)]">
        {label}
      </p>
    </div>
  );
}