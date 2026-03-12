"use client";

import {
  Building2,
  ArrowRight,
  BookOpen,
  Users,
  Award,
} from "lucide-react";
import Stats from "./Stats";

export default function About() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-4 bg-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--theme-color)]">
            About Our College
          </h2>

          <p className="mt-6 text-[var(--body-text-color)] leading-relaxed text-sm md:text-base">
            DIGIT College of Engineering delivers high-quality education
            with an industry-focused curriculum, experienced faculty,
            and innovation-driven learning. We are committed to nurturing
            future leaders who excel in technology, research, and entrepreneurship.
          </p>

          <p className="mt-4 text-[var(--body-text-color)] leading-relaxed text-sm md:text-base">
            With state-of-the-art infrastructure and strong industry
            partnerships, we ensure our students gain both theoretical
            knowledge and practical exposure to succeed in the global market.
          </p>

          {/* Features List */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              <BookOpen className="text-[var(--theme-color2)]" size={20} />
              <span className="text-[var(--body-text-color)]">
                Industry-Oriented Curriculum
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Users className="text-[var(--theme-color2)]" size={20} />
              <span className="text-[var(--body-text-color)]">
                Expert Faculty Members
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Award className="text-[var(--theme-color2)]" size={20} />
              <span className="text-[var(--body-text-color)]">
                Excellent Placement Record
              </span>
            </div>
          </div>

          <button className="mt-8 inline-flex items-center gap-2 bg-[var(--theme-color)] text-white px-6 py-3 rounded-full hover:opacity-90 transition">
            Read More <ArrowRight size={18} />
          </button>
        </div>

        {/* RIGHT VISUAL CARD */}
        <div className="bg-[var(--theme-bg-light)] p-10 rounded-3xl shadow-xl relative overflow-hidden">
          
          {/* Decorative Background Circle */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--theme-color2)] opacity-10 rounded-full"></div>

          <div className="flex flex-col items-center text-center">
            <Building2
              size={70}
              className="text-[var(--theme-color2)]"
            />

            <h3 className="mt-6 text-xl font-semibold text-[var(--theme-color)]">
              15+ Years of Excellence
            </h3>

            <p className="mt-4 text-sm text-[var(--body-text-color)] leading-relaxed">
              Empowering students with innovation, leadership, and
              professional excellence since our establishment.
            </p>

            <div className="mt-6 text-sm">
              <Stats />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}