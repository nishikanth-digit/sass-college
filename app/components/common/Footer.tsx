"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
  ChevronUp,
  ArrowRight,
  ExternalLink
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer 
      className="text-footer-text font-sans pt-8 pb-6 px-6 relative overflow-hidden bg-footer-bg"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-theme-2 blur-[150px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 px-4">
        
        {/* STEP 1: Logo & Content | Follow Us */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mb-4">
          <div className="space-y-3">
            <img 
              src="/logos/digit-college-footer.png" 
              alt="DIGIT" 
              className="h-18 w-auto object-contain" 
            />
            <p className="text-sm max-w-lg leading-relaxed text-footer-text/80">
              Empowering the next generation of engineers through innovation, 
              hands-on specialization, and industry-leading excellence.
            </p>
          </div>
          <div className="flex flex-col lg:items-end gap-2">
            <span className="text-[11px] font-bold tracking-widest opacity-70">
              FOLLOW US
            </span>
            <div className="flex gap-3">
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
              <SocialIcon icon={<Youtube size={18} />} />
              <SocialIcon icon={<MessageCircle size={18} />} />
            </div>
          </div>
        </div>

        <hr className="my-4 border-white/10" />

        {/* STEP 2: Complete Navigation */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-4">
          <FooterLinkColumn
            title="Institution"
            links={["About College", "Mission & Vision", "Management", "Faculty", "Alumni", "R & D Cell"]}
          />
          <FooterLinkColumn
            title="Academics"
            links={["Admissions", "Academic Calendar", "Rules & Regulations", "Code of Conduct", "Anti Ragging", "Examination Cell"]}
          />
          <FooterLinkColumn
            title="Resources"
            links={["Digital Library", "Student Portal", "Research Labs", "Smart Classrooms", "Innovation Hub", "E-Learning"]}
          />
          
          {/* Custom Column Rendered Directly to Support the Custom Link Markup */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-1 h-4 bg-theme-2 rounded-full"></span>
              Campus & Career
            </h4>
            <ul className="space-y-3">
              {["Hostel", "Sports", "Transport", "Placements", "Blog", "Feedback", "Contact"].map((link) => (
                <li key={link} className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-1.5 h-1.5 rounded-full bg-theme-2/40 transition-all duration-300 group-hover:w-3 group-hover:bg-theme-2" />
                  <Link href="#" className="text-footer-text/70 text-sm hover:text-white transition-colors font-medium">
                    {link}
                  </Link>
                </li>
              ))}
              {/* Your New Added Link */}
              <li className="flex items-center gap-3 group cursor-pointer">
                <div className="w-1.5 h-1.5 rounded-full bg-theme-2/40 transition-all duration-300 group-hover:w-3 group-hover:bg-theme-2" />
                <Link href="/abroad" className="text-sm hover:text-white text-footer-text/70 transition font-medium">
                  Abroadstudies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-4 border-white/10" />

        {/* STEP 3: Departments (The requested row) */}
        <div className="py-4 space-y-4 bg-[#24254a] px-4 rounded-lg">
          <div className="text-left">
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest flex items-center gap-2">
               <span className="w-1 h-4 bg-theme-2 rounded-full"></span>
               Departments
            </h4>
            
            <div className="flex flex-wrap items-center gap-y-2 mb-3">
               <span className="text-sm font-bold text-white/90 mr-4 min-w-[100px]">CSE Specializations:</span>
               <div className="flex flex-wrap items-center gap-x-3 text-sm">
                  {["Computer Science & Engineering", "Artificial Intelligence & Machine Learning (AI&ML)", "Internet Of Things (IOT)", "Data Science", "Cyber Security", "Cloud Computing"].map((link, index, array) => (
                    <div key={link} className="flex items-center gap-3 group">
                      <Link href="#" className="hover:text-white text-footer-text/70 transition-colors">{link}</Link>
                      {index !== array.length - 1 && <span className="w-[1px] h-3 bg-white/20"></span>}
                    </div>
                  ))}
               </div>
            </div>

            <div className="flex flex-wrap items-center gap-y-2">
               <span className="text-sm font-bold text-white/90 mr-4 min-w-[100px]">Core Engineering:</span>
               <div className="flex flex-wrap items-center gap-x-3 text-sm">
                  {["Information Technology", "Electrical & Electronics Engineering", "Electronics & Communication Engineering", "CIVIL", "Mechanical"].map((link, index, array) => (
                    <div key={link} className="flex items-center gap-3">
                      <Link href="#" className="hover:text-white text-footer-text/70 transition-colors">{link}</Link>
                      {index !== array.length - 1 && <span className="w-[1px] h-3 bg-white/20"></span>}
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>

        <hr className="my-4 border-white/10" />

        {/* STEP 4: CONTACT & ADDRESS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ContactCard
              icon={<Phone size={18} />}
              title="Call Anytime"
              value="+91 98765 43210"
            />
            <ContactCard
              icon={<Mail size={18} />}
              title="Support Desk"
              value="info@digitcollege.edu"
            />
          </div>

          <div className="relative group">
            <div className="relative flex gap-4 p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-500 hover:border-theme-2/50">
              <div className="w-12 h-12 rounded-2xl bg-theme-2 text-white flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                <MapPin size={22} />
              </div>
              <div className="flex flex-col justify-center">
                <h5 className="font-bold text-base mb-1 flex items-center gap-2">
                  DIGIT College
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h5>
                <p className="text-xs text-footer-text/70 mb-2 leading-snug">
                  Engineering Road, Innovation City
                </p>
                <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-theme-2">
                  Get Directions 
                  <ArrowRight size={12} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-4 mb-6 border-white/10" />

        {/* STEP 5: COPYRIGHT */}
        <div className="flex justify-center items-center py-2">
          <p className="text-[11px] font-medium tracking-wide opacity-80">
            © {year} DIGIT College of Engineering. All Rights Reserved.
          </p>
        </div>

        {/* Back to top button */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute bottom-6 right-8 w-10 h-10 bg-white rounded-full flex items-center justify-center text-footer-bg shadow-lg hover:bg-theme-2 hover:text-white transition-all transform hover:-translate-y-1 active:scale-90 z-50"
        >
          <ChevronUp size={20} />
        </button>

      </div>
    </footer>
  );
}


/* ================= Sub Components ================= */

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="w-9 h-9 rounded-xl bg-theme-2 flex items-center justify-center text-white cursor-pointer hover:scale-110 hover:-rotate-6 transition-all shadow-md active:scale-95">
      {icon}
    </div>
  );
}

function FooterLinkColumn({ title, links }: { title: string, links: string[] }) {
  return (
    <div>
      <h4 className="font-bold mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
        <span className="w-1 h-4 bg-theme-2 rounded-full"></span>
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link} className="flex items-center gap-3 group cursor-pointer">
            <div className="w-1.5 h-1.5 rounded-full bg-theme-2/40 transition-all duration-300 group-hover:w-3 group-hover:bg-theme-2" />
            <Link href="#" className="text-footer-text/70 text-sm hover:text-white transition-colors font-medium">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="group cursor-pointer">
      <h4 className="text-footer-text/40 font-bold mb-2 text-[10px] uppercase tracking-widest">
        {title}
      </h4>
      <div className="flex items-center gap-4 transition-transform duration-300 group-hover:translate-x-2">
        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-theme-2/50 group-hover:bg-theme-2/10 transition-all text-theme-2">
          {icon}
        </div>
        <p className="text-sm font-semibold">{value}</p>
      </div>
    </div>
  );
}