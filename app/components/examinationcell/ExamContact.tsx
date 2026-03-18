"use client";

import React from "react";
import { Mail, Phone, User, ShieldCheck } from "lucide-react";

const contactData = [
  {
    name: "Dr. Prabhakara Rao Kapula",
    title: "Controller of Examinations",
    subtitle: "Professor, Dept. of ECE",
    phone: "+91 9949433569",
    email: "ce@digit.ac.in",
  },
  {
    name: "Dr. B. Venkata Swamy",
    title: "Additional Controller of Examinations",
    subtitle: "Assoc. Professor, BS&H",
    phone: "+91 9948700314",
    email: "venkataswamy.boya@digit.ac.in",
  },
  {
    name: "Mr. Akshay Kulakarni",
    title: "Additional Controller of Examinations",
    subtitle: "Asst. Professor, Dept. of Mech",
    phone: "+91 9972032265",
    email: "akshay.k@digit.ac.in",
  },
  {
    name: "Mr. V. Chaithanya Kumar",
    title: "Additional Controller of Examinations",
    subtitle: "Asst. Professor, Dept. of Civil",
    phone: "+91 9555541646",
    email: "chaithanya.v@digit.ac.in",
  },
];

export default function ExamContact() {
  return (
    <div className="min-h-screen bg-[var(--theme-bg-light)] text-slate-700 py-24 px-6 font-sans">
      
      {/* Background Blobs */}
       <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--theme-color2)]/10 blur-[120px] rounded-full" />
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-indigo-100/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4  flex flex-col lg:flex-row gap-16">
        
        {/* Left Content */}
        <div className="lg:w-2/5 space-y-8 animate-fadeInLeft">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-theme-2)]/10 text-[var(--color-theme-2)] text-[10px] font-black uppercase tracking-wider">
            <ShieldCheck size={14} />
            Academic Administration
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold mt-4 leading-tight tracking-tight text-[var(--color-theme)]">
              Examination <br />
              <span className="text-[var(--color-theme)]/60 italic font-medium">
                Branch Contacts
              </span>
            </h1>

            <p className="text-lg text-slate-600 max-w-md leading-relaxed">
              Official gateway for student evaluations, result processing, and academic certifications.
            </p>
          </div>
        </div>

        {/* Right Content - Cards */}
        <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactData.map((contact, idx) => (
            <div
              key={idx}
              className="group relative bg-white border border-theme-2/50 p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 animate-slideUp"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="relative z-10">
                
                {/* Icon */}
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 
                  group-hover:bg-theme-2 group-hover:text-white transition-all duration-300">
                  <User size={24} />
                </div>

                {/* Info */}
                <h3 className="text-xl text-theme-2 font-bold  mb-1 
                 transition-colors">
                  {contact.name}
                </h3>

                <p className="text-sm font-semibold text-theme mb-1">
                  {contact.title}
                </p>

                <p className="text-xs text-slate-400 font-medium mb-6 uppercase tracking-wide">
                  {contact.subtitle}
                </p>

                {/* Contact Links */}
                <div className="space-y-3 pt-4 border-t border-slate-50">
                  <a
                    href={`tel:${contact.phone}`}
                    className="flex items-center gap-3 text-slate-600 hover:text-blue-600 text-sm font-medium transition"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gray-300 flex items-center justify-center">
                      <Phone size={14} className="text-theme-2" />
                    </div>
                    {contact.phone}
                  </a>

                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-3 text-slate-600 hover:text-blue-600 text-sm font-medium transition"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gray-300  flex items-center justify-center">
                      <Mail size={14} className="text-theme-2" />
                    </div>
                    <span className="truncate max-w-[180px]">{contact.email}</span>
                  </a>
                </div>
              </div>

              {/* Decorative Background Icon */}
              <div className="absolute top-0 right-0 p-4 text-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ShieldCheck size={80} />
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
}