"use client";

import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "When should I start preparing?",
    answer: "Ideally 9–12 months before the intended intake. This gives you ample time to prepare documents, clear language proficiency tests, and secure visas without last-minute stress."
  },
  {
    id: 2,
    question: "Will my credits be transferred?",
    answer: "Yes, absolutely. We have formal MoUs and structured credit transfer agreements with our partner universities globally to ensure your academic progress is seamlessly recognized."
  },
  {
    id: 3,
    question: "Is it expensive?",
    answer: "Costs vary significantly by country. Many European nations offer highly affordable or tuition-free public education. Additionally, a wide range of scholarships and part-time work options are available to help dramatically reduce the overall financial burden."
  },
  {
    id: 4,
    question: "Does the college provide support after I go abroad?",
    answer: "Yes, you are never alone. Our extensive global alumni network and dedicated faculty mentors remain actively in touch with you throughout your entire program to support your transition and career growth."
  }
];

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 font-sans antialiased">
      
      {/* Modern Centered Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme/5 text-theme text-xs font-semibold uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5 text-theme-2" /> 
          Information Hub
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-theme sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="text-sm sm:text-base text-slate-500 max-w-lg mx-auto">
          Everything you need to know about your journey to studying abroad.
        </p>
      </div>

      {/* Accordion Wrapper using unified border-slate styles */}
      <div className="space-y-3 max-w-3xl mx-auto">
        {faqData.map((faq) => {
          const isOpen = openId === faq.id;
          
          return (
            <div 
              key={faq.id}
              className={`rounded-xl border transition-all duration-300 overflow-hidden bg-white ${
                isOpen 
                  ? 'border-slate-300 shadow-md shadow-theme/5' 
                  : 'border-slate-200/60 shadow-xs hover:border-slate-300'
              }`}
            >
              {/* Trigger Button */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex justify-between items-center text-left p-5 group focus:outline-none cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className={`text-base font-bold transition-colors duration-200 pr-4 ${
                  isOpen ? 'text-theme-2' : 'text-theme group-hover:text-theme-2'
                }`}>
                  {faq.question}
                </span>
                
                {/* Custom Elegant Plus/Minus Line Intersect */}
                <span className="shrink-0 flex items-center justify-center w-6 h-6 relative">
                  {/* Horizontal Bar */}
                  <span className={`absolute h-0.5 w-3.5 bg-current transition-colors duration-300 ${
                    isOpen ? 'text-theme-2' : 'text-slate-400 group-hover:text-theme'
                  }`} />
                  {/* Vertical Bar */}
                  <span className={`absolute h-3.5 w-0.5 bg-current transition-all duration-300 transform ${
                    isOpen ? 'rotate-90 scale-y-0 text-theme-2' : 'rotate-0 scale-y-100 text-slate-400 group-hover:text-theme'
                  }`} />
                </span>
              </button>

              {/* Collapsible Content Area */}
              <div 
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-5 pb-5 pt-1 border-t border-slate-50">
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}