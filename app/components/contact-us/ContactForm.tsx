"use client";

import React, { useState } from 'react';
import { Mail, Phone, User, MessageSquare, Send, CheckCircle2, MapPin, Sparkles } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const fullAddress = "#14, 2nd Floor, behind Capital Park, Arunodaya Colony, Silicon Valley, Madhapur, Hyderabad, Telangana 500081";
  const encodedAddress = encodeURIComponent(fullAddress);
  const previewMap = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  const handleFakeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 1500);
  };

  if (isSent) {
    return (
      <div className="flex items-center justify-center min-h-[500px] w-full max-w-7xl bg-white rounded-[2.5rem] shadow-2xl mx-auto p-12 text-center border border-theme/10 animate-in fade-in zoom-in duration-500">
        <div className="space-y-6">
          <div className="bg-theme-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10 text-theme-green" />
          </div>
          <h2 className="text-3xl font-black text-theme tracking-tight">Sent Successfully!</h2>
          <p className="text-body-text font-bold">We will contact you at your provided Contact Details.</p>
          <button 
            onClick={() => setIsSent(false)} 
            className="px-8 py-3 bg-theme text-white rounded-xl font-bold hover:bg-theme-2 transition-all"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="pb-16 bg-theme-bg-light">
      <div className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col md:flex-row border border-theme/10">
        
        {/* Map Section */}
        <div className="w-full md:w-1/2 bg-theme-bg-light relative group min-h-[500px]">
          <iframe
            title="Madhapur Office Location"
            src={previewMap}
            className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-90 group-hover:opacity-100"
            loading="lazy"
            allowFullScreen
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-theme/40 to-transparent pointer-events-none" />
          
          <div className="absolute bottom-8 left-8 right-8">
            <div className="bg-white/95 backdrop-blur-md p-5 rounded-[2rem] shadow-2xl border border-theme/10 transform group-hover:-translate-y-2 transition-transform duration-500">
              <div className="flex items-center gap-4">
                <div className="bg-theme-2 p-3 rounded-2xl">
                  <MapPin className="text-white w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-theme font-black text-[10px] uppercase tracking-widest mb-0.5">
                    Madhapur HQ
                  </h4>
                  <p className="text-body-text text-[11px] font-extrabold leading-tight">
                    {fullAddress}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-10 lg:p-14 bg-white flex flex-col justify-center">
          
          <div className="mb-10">
            <div className="relative inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-theme/10 bg-white shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)] group/shimmer cursor-default overflow-hidden">
              
              <div className="absolute inset-0 translate-x-[-100%] group-hover/shimmer:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-theme-2/20 to-transparent" />
              
              <Sparkles size={14} className="text-theme-2 animate-pulse" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-theme">
                Contact Form
              </span>
            </div>

            <h3 className="text-5xl font-black text-theme tracking-tighter mt-6 leading-none">
              Let's talk.
            </h3>
          </div>

          <form onSubmit={handleFakeSubmit} className="space-y-4">
            {[
              { id: 'name', icon: User, type: 'text', placeholder: 'Your Name' },
              { id: 'mobile', icon: Phone, type: 'tel', placeholder: 'Mobile Number' },
              { id: 'email', icon: Mail, type: 'email', placeholder: 'Email Address' }
            ].map((field) => (
              <div key={field.id} className="relative group">
                <div className={`flex items-center px-5 py-4 rounded-2xl border-2 transition-all duration-300 ${
                  focused === field.id 
                    ? 'border-theme ring-[10px] ring-theme-bg-light bg-white' 
                    : 'border-theme/10 bg-theme-bg-light hover:border-theme/20'
                }`}>
                  <field.icon 
                    size={18} 
                    className={`${focused === field.id ? 'text-theme-2' : 'text-body-text'} mr-3 transition-colors`} 
                  />
                  <input
                    type={field.type}
                    required
                    placeholder={field.placeholder}
                    onFocus={() => setFocused(field.id)}
                    onBlur={() => setFocused(null)}
                    className="w-full bg-transparent outline-none text-theme font-bold placeholder:text-body-text placeholder:font-bold text-xs"
                  />
                </div>
              </div>
            ))}

            <div className="relative group">
              <div className={`flex items-start px-5 py-4 rounded-2xl border-2 transition-all duration-300 ${
                focused === 'msg'
                  ? 'border-theme ring-[10px] ring-theme-bg-light bg-white'
                  : 'border-theme/10 bg-theme-bg-light hover:border-theme/20'
              }`}>
                <MessageSquare 
                  size={18} 
                  className={`${focused === 'msg' ? 'text-theme-2' : 'text-body-text'} mr-3 mt-1 transition-colors`} 
                />
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your project..."
                  onFocus={() => setFocused('msg')}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-transparent outline-none text-theme font-bold placeholder:text-body-text placeholder:font-bold text-xs resize-none"
                />
              </div>
            </div>

            <button
              disabled={isSubmitting}
              className="w-full relative overflow-hidden bg-theme text-white py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.4em] hover:bg-theme-2 active:scale-[0.96] transition-all duration-500 shadow-2xl mt-2 group/btn"
            >
              <div className="flex items-center justify-center gap-3 relative z-10">
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Submit
                    <Send size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </>
                )}
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}