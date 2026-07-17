"use client";

import React from 'react';
import { GraduationCap, Landmark, Award, ShieldCheck, Sparkles } from 'lucide-react';

// Define TypeScript interfaces for our data
interface ScholarshipItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  tags: string[];
  featured?: boolean;
}

export default function AbroadScholarship() {
  const fundingOpportunities: ScholarshipItem[] = [
    {
      title: "University Merit Scholarships",
      description: "Institutional waivers and institutional stipends automatically considered upon your academic application submission.",
      icon: GraduationCap,
      tags: ["Partial to Full", "Automatic Review"],
      featured: true // Takes more visual weight in the grid
    },
    {
      title: "Prestigious Government Fellowships",
      description: "Fully-funded global programs covering complete tuition, living stipends, airfare, and health insurance.",
      icon: Award,
      tags: ["Fulbright", "Chevening", "DAAD", "100% Funded"],
      featured: false
    },
    {
      title: "Private Foundations & Corporate Grants",
      description: "Niche-specific funding from global enterprises and philanthropic trusts tailored to research interests and demographics.",
      icon: ShieldCheck,
      tags: ["Niche Criteria", "Corporate Ties"],
      featured: false
    },
    {
      title: "Low-Interest Educational Loans",
      description: "Exclusive fast-tracked loan approvals through our strategic partnerships with premier global banking institutions.",
      icon: Landmark,
      tags: ["Preferred Rates", "No Collateral Options"],
      featured: false
    }
  ];

  return (
    <section className="bg-white px-6 py-16 sm:py-24 lg:px-8 font-sans antialiased">
      <div className="mx-auto max-w-6xl">
        
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center mb-16 space-y-3">
          <span className="inline-flex items-center rounded-full bg-theme/5 px-3 py-1 text-xs font-semibold text-theme uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 mr-1.5 text-theme-2" />
            Financial Architecture
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-theme sm:text-4xl">
            Scholarships & Funding
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
            Navigating the financial ecosystem of global education. We strategically guide you through elite global pools to secure your academic runway.
          </p>
        </div>

        {/* Dynamic Bento-Style Grid with light gray boxes */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {fundingOpportunities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-theme-bg-light p-6 sm:p-8 border border-slate-200/60 transition-all duration-300 hover:scale-[1.005] hover:border-slate-300 hover:shadow-lg hover:shadow-theme/5 animate-fade-in-up ${
                  item.featured ? 'md:col-span-2' : 'col-span-1'
                }`}
              >
                <div>
                  {/* Top Row: Persistent Pink Accent Background for Icons */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-theme-2 text-white shadow-xs border border-transparent">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Content: Persistent Pink Accent for Box Headings */}
                  <h3 className="mt-6 text-lg font-bold text-theme-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {item.description}
                  </p>
                </div>

                {/* Footer Tags */}
                <div className="flex flex-wrap gap-1.5 mt-6">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center rounded-lg bg-white px-2.5 py-1 text-xs font-medium text-slate-500 border border-slate-200/60 shadow-xxs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust/CTA Footer Banner */}
        <div className="mt-12 rounded-2xl bg-theme-bg-light p-6 sm:p-8 border border-slate-200/60 transition-all duration-300 hover:shadow-lg hover:shadow-theme/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-theme">Unsure which funding stream matches your profile?</h4>
            <p className="text-xs sm:text-sm text-slate-500">Let our financial aid experts map out a personalized scholarship strategy.</p>
          </div>
          <button className="whitespace-nowrap rounded-xl bg-theme-2 hover:bg-theme-2/95 text-white px-5 py-3 text-sm font-bold shadow-md shadow-theme-2/10 transition-all duration-200 cursor-pointer">
            Evaluate Eligibility
          </button>
        </div>
        
      </div>
    </section>
  );
}