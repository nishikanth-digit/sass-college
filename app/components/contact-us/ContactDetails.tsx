"use client";

import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactDetails = () => {
  const contactData = [
    {
      icon: <Phone size={20} />,
      label: "Call Us",
      values: ["+91 999 000 0000", "+91 888 000 0000"],
      href: "tel:+919990000000",
    },
    {
      icon: <Mail size={20} />,
      label: "Email Us",
      values: ["support@company.com", "info@company.com"],
      href: "mailto:support@company.com",
    },
    {
      icon: <MapPin size={20} />,
      label: "Our Office",
      values: ["#1-90/2/G/1/21, 4th Floor, Hitech City Rd, near Metro Pillar 1761, Madhapur, Hyderabad, 500081"],
      href: "https://maps.google.com",
    },
  ];

  return (
    <section className="w-full bg-theme-bg-light py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactData.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="group relative flex items-start gap-5 p-7 bg-white rounded-2xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-15px_rgba(233,30,99,0.15)] border border-theme/10 overflow-hidden transition-all duration-300 hover:-translate-y-2 animate-fadeUp"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Hover Circle Accent */}
              <div className="absolute -right-4 -bottom-4 w-12 h-12 bg-theme-2/5 rounded-full group-hover:scale-[6] group-hover:bg-theme-2/10 transition-all duration-700 ease-in-out z-0" />
              
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-theme-2/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon Container */}
              <div className="flex-shrink-0 relative z-10 p-3.5 bg-theme-bg-light rounded-xl text-theme-2 group-hover:bg-theme-2 group-hover:text-white group-hover:shadow-lg group-hover:shadow-theme-2/30 transition-all duration-300">
                {item.icon}
              </div>

              {/* Text Content */}
              <div className="flex flex-col relative z-10">
                <span className="text-[12px] font-extrabold uppercase tracking-[0.25em] text-body-text group-hover:text-theme-2 transition-colors">
                  {item.label}
                </span>
                
                <div className="mt-3 flex flex-col gap-1.5">
                  {item.values.map((val, idx) => (
                    <span 
                      key={idx} 
                      className="text-[15px] leading-snug font-bold text-theme group-hover:text-theme transition-colors"
                    >
                      {val}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-[2.5px] bg-theme-2 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;