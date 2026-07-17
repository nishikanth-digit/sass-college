"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
  const [loginOpen, setLoginOpen] = useState(false);
  const loginRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        loginRef.current &&
        !loginRef.current.contains(event.target as Node)
      ) {
        setLoginOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div className="bg-theme text-white text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-4">

          {/* Notification ALWAYS visible */}
          <NotificationSlider />

          {/* Hide these below 992px (lg) */}
          <div className="hidden lg:flex gap-5 text-white/80 font-semibold items-center">
            <Link href="/research">R & D Cell</Link>
            <Link href="/feedback">Feedback</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/alumini">Alumni</Link>
            <Link href="/faculty">Faculty</Link>

            {/* LOGIN DROPDOWN */}
            <div className="relative" ref={loginRef}>
              <button
                onClick={() => setLoginOpen(!loginOpen)}
                className="flex items-center gap-2 bg-theme-2 text-white px-4 pt-1.5 pb-1 rounded-full font-semibold hover:opacity-90 transition"
              >
                Login
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${loginOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {loginOpen && (
                <div className="absolute right-0 top-[100%] pt-2 w-44 z-[100]">
                  <div className="bg-white border border-gray-200 rounded-lg shadow-xl py-2">
                    <Link href="#" className="block px-4 py-2 text-black hover:bg-gray-100">
                      Faculty Login
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-black hover:bg-gray-100">
                      Student Login
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-black hover:bg-gray-100">
                      Parent Login
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* ================= MAIN NAVBAR ================= */}
      <div className="bg-white sticky top-0 z-50 shadow">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* LOGO */}
          <div className="text-3xl font-bold cursor-pointer">
            <Link href="/">
              <img src="/logos/digit-college-logo.png" alt="DIGIT logo" width="180px" />
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-8 font-medium text-theme">
            <Dropdown
              title="About Us"
              items={[
                { label: "About College", href: "/about/about-college" },
                { label: "Management", href: "/about/college-management" },
              ]}
            />
            <Dropdown
              title="Academics"
              items={[
                { label: "Admissions", href: "/academics/admissions" },
                { label: "Rules & Regulations", href: "/academics/rules-regulations" },
                { label: "Academic Calendar", href: "/academics/academic-calendar" },
                { label: "Minutes Of Meeting", href: "/academics/minutes-of-meeting" },
                { label: "Code of Conduct", href: "/academics/code-of-conduct" },
                { label: "Anti Ragging", href: "/academics/anti-ragging" },
              ]}
            />
            
            {/* UPDATED MEGA MENU COMPONENT */}
            <MegaDepartments />

            <Link href="/placements" className="hover:text-theme transition">
              Placements
            </Link>
            <Link href="/examinationcell" className="hover:text-theme transition">
              Examination Cell
            </Link>
            
            <Dropdown
              title="Facilities"
              items={[
                { label: "Library", href: "/facilities/library" },
                { label: "Hostel", href: "/facilities/hostel" },
                { label: "Sports", href: "/facilities/sports" },
                { label: "Cafeteria", href: "/facilities/cafeteria" },
                { label: "Transport", href: "/facilities/transport" },
              ]}
            />
            <Link href="/contact" className="hover:text-theme transition">
              Contact
            </Link>
          </nav>

          {/* HAMBURGER / MOBILE RIGHT SIDE */}
          <div className="flex items-center gap-3 lg:hidden">

            {/* Mobile Login Button */}
            <div className="relative" ref={loginRef}>
              <button
                onClick={() => setLoginOpen(!loginOpen)}
                className="flex items-center gap-2 bg-theme-2 text-white px-4 pt-1.5 pb-1 rounded-full font-semibold hover:opacity-90 transition"
              >
                Login
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${loginOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {loginOpen && (
                <div className="absolute right-0 top-[100%] pt-2 w-44 z-[100]">
                  <div className="bg-white border border-gray-200 rounded-lg shadow-xl py-2">
                    <Link href="#" className="block px-4 py-2 text-black hover:bg-gray-100">
                      Faculty Login
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-black hover:bg-gray-100">
                      Student Login
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-black hover:bg-gray-100">
                      Parent Login
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="text-2xl"
            >
              ☰
            </button>

          </div>
        </div>
      </div>

      {/* ================= MOBILE OFFCANVAS ================= */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${mobileOpen ? "visible opacity-100" : "invisible opacity-0"
          }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileOpen(false)}
        ></div>

        {/* Side Menu */}
        <div
          className={`absolute left-0 top-0 h-full w-72 bg-white shadow-xl p-6 overflow-y-auto transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-theme">Menu</h2>
            <button onClick={() => setMobileOpen(false)}>✕</button>
          </div>

          <div className="flex flex-col gap-4 font-medium">
            <MobileDropdown
              title="About Us"
              items={[
                { label: "About College", href: "/about/about-college" },
                { label: "Management", href: "/about/college-management" },
              ]}
              activeMobileMenu={activeMobileMenu}
              setActiveMobileMenu={setActiveMobileMenu}
            />
            <MobileDropdown
              title="Academics"
              items={[
                { label: "Admissions", href: "/academics/admissions" },
                { label: "Rules & Regulations", href: "/academics/rules-regulations" },
                { label: "Academic Calendar", href: "/academics/academic-calendar" },
                { label: "Minutes Of Meeting", href: "/academics/minutes-of-meeting" },
                { label: "Code of Conduct", href: "/academics/code-of-conduct" },
                { label: "Anti Ragging", href: "/academics/anti-ragging" },
              ]}
              activeMobileMenu={activeMobileMenu}
              setActiveMobileMenu={setActiveMobileMenu}
            />
            
            <MobileDepartments 
              activeMobileMenu={activeMobileMenu}
              setActiveMobileMenu={setActiveMobileMenu} 
              setMobileOpen={setMobileOpen} 
            />

            <Link href="/placements" onClick={() => setMobileOpen(false)}>Placements</Link>
            <Link href="/examinationcell" onClick={() => setMobileOpen(false)}>Examination Cell</Link>
            
            {/* TOPBAR LINKS (Mobile Only) */}
            <Link href="/research" onClick={() => setMobileOpen(false)}>R & D Cell</Link>
            <Link href="/feedback" onClick={() => setMobileOpen(false)}>Feedback</Link>
            <Link href="/blog" onClick={() => setMobileOpen(false)}>Blog</Link>
            <Link href="/alumini" onClick={() => setMobileOpen(false)}>Alumni</Link>
            <Link href="/faculty" onClick={() => setMobileOpen(false)}>Faculty</Link>

            <MobileDropdown
              title="Facilities"
              items={[
                { label: "Library", href: "/facilities/library" },
                { label: "Hostel", href: "/facilities/hostel" },
                { label: "Sports", href: "/facilities/sports" },
                { label: "Cafeteria", href: "/facilities/cafeteria" },
                { label: "Transport", href: "/facilities/transport" },
              ]}
              activeMobileMenu={activeMobileMenu}
              setActiveMobileMenu={setActiveMobileMenu}
            />
            <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>

          </div>
        </div>
      </div>
    </>
  );
}

/* ================= DESKTOP DROPDOWN ================= */
function Dropdown({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div className="relative group py-2">
      <div className="flex items-center gap-1 cursor-pointer hover:text-theme transition">
        {title}
        <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
      </div>

      <div className="
        absolute left-0 top-full w-48 pt-3 -mt-1
        opacity-0 invisible group-hover:opacity-100 group-hover:visible 
        transition-all duration-200 z-[100]
      ">
        <div className="py-2 bg-white rounded-lg border border-gray-100 shadow-lg">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block px-4 py-2 hover:bg-gray-100 text-sm text-black"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================= MOBILE DROPDOWN ================= */
function MobileDropdown({
  title,
  items,
  activeMobileMenu,
  setActiveMobileMenu,
}: {
  title: string;
  items: { label: string; href: string }[];
  activeMobileMenu: string | null;
  setActiveMobileMenu: (value: string | null) => void;
}) {
  const open = activeMobileMenu === title;

  return (
    <div>
      <div
        onClick={() => setActiveMobileMenu(open ? null : title)}
        className="flex justify-between items-center cursor-pointer py-2"
      >
        {title}
        <ChevronRight
          className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-90" : ""
            }`}
        />
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-60 mt-2" : "max-h-0"
          }`}
      >
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="block pl-4 py-2 text-sm text-gray-600"
            onClick={() => setActiveMobileMenu(null)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ================= MOBILE DEPARTMENTS ================= */
function MobileDepartments({
  activeMobileMenu,
  setActiveMobileMenu,
  setMobileOpen,
}: {
  activeMobileMenu: string | null;
  setActiveMobileMenu: (value: string | null) => void;
  setMobileOpen: (value: boolean) => void;
}) {
  const title = "Departments";
  const open = activeMobileMenu === title;

  const handleMainLinkClick = () => {
    setActiveMobileMenu(null);
    setMobileOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center py-2">
        <Link 
          href="/departments" 
          onClick={handleMainLinkClick} 
          className="hover:text-theme flex-1 font-medium block"
        >
          {title}
        </Link>
        <button 
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setActiveMobileMenu(open ? null : title);
          }} 
          className="p-2 cursor-pointer flex items-center justify-center text-gray-700"
          aria-label="Toggle Departments Menu"
        >
          <ChevronRight
            className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-90" : ""}`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ${open ? "max-h-[600px] mt-3" : "max-h-0"}`}
      >
        {/* CSE */}
        <h3 className="font-semibold text-theme mt-2 mb-2 pl-2">
          Computer Science & Engineering
        </h3>

        <div className="flex flex-col gap-2 text-sm text-gray-600 pl-4 mb-4">
          <Link href="/departments/ComputerScience" onClick={handleMainLinkClick}>Computer Science & Engineering</Link>
          <Link href="/departments/artificialintelligence" onClick={handleMainLinkClick}>Artificial Intelligence & Machine Learning</Link>
          <Link href="/departments/datascience" onClick={handleMainLinkClick}>Data Science</Link>
          <Link href="/departments/cybersecurity" onClick={handleMainLinkClick}>Cyber Security</Link>
          <Link href="/departments/internet-of-things" onClick={handleMainLinkClick}>Internet of Things (IoT)</Link>
        </div>

        {/* CORE */}
        <h3 className="font-semibold text-theme mb-2 pl-2">
          Core Engineering
        </h3>

        <div className="flex flex-col gap-2 text-sm text-gray-600 pl-4">
          <Link href="/departments/informationtechnology" onClick={handleMainLinkClick}>Information Technology</Link>
          <Link href="/departments/electricalcommunication" onClick={handleMainLinkClick}>Electronics & Communication Engineering</Link>
          <Link href="/departments/electricelectronic" onClick={handleMainLinkClick}>Electrical & Electronics Engineering</Link>
          <Link href="/departments/civil" onClick={handleMainLinkClick}>Civil Engineering</Link>
          <Link href="/departments/mechanical" onClick={handleMainLinkClick}>Mechanical Engineering</Link>
        </div>
      </div>
    </div>
  );
}

/* ====================== Notification Slider ================== */
function NotificationSlider() {
  const notifications = [
    {
      text: "Admissions Open 2026 – Apply Now",
      link: "/brochure.pdf", 
      download: true,
    },
    {
      text: "NAAC A+ Accredited Institution – Click to know more",
      link: "/about", 
      download: false,
    },
    {
      text: "New Research Grants Announced",
      link: "/research",
      download: false,
    },
    {
      text: "Campus Placement Drive Starts March 5",
      link: "/placements",
      download: false,
    },
  ];

  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % notifications.length);
        setAnimate(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [notifications.length]);

  const current = notifications[index];
  const next = notifications[(index + 1) % notifications.length];

  return (
    <div className="h-6 overflow-hidden flex-1 min-w-0">
      <div
        className={`${animate
          ? "-translate-y-6 transition-transform duration-500 ease-in-out"
          : "translate-y-0"
          }`}
      >
        {/* CURRENT */}
        <div className="h-6 flex items-center truncate">
          <Link
            href={current.link}
            download={current.download}
            className="flex items-center gap-2 truncate"
          >
            🔔
            <span className="truncate">{current.text}</span>
          </Link>
        </div>

        {/* NEXT */}
        <div className="h-6 flex items-center truncate">
          <Link
            href={next.link}
            download={next.download}
            className="flex items-center gap-2 hover:underline truncate"
          >
            🔔
            <span className="truncate">{next.text}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ================= MEGA MENU - DEPARTMENTS ================= */
function MegaDepartments() {
  return (
    <div className="relative group py-2">
      <Link 
        href="/departments/departments" 
        className="flex items-center gap-1 cursor-pointer hover:text-theme transition"
      >
        Departments
        <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
      </Link>

      {/* FIXED: Stable hot-zone bridge to avoid flickering on cursor transition */}
      <div className="
        absolute left-1/2 -translate-x-1/2 top-full pt-3 -mt-1
        w-[95vw] max-w-[800px] 
        opacity-0 invisible
        group-hover:opacity-100 group-hover:visible 
        transition-all duration-200 z-[100]
      ">
        {/* Visual Content Box */}
        <div className="bg-white shadow-2xl rounded-2xl p-6 md:p-8 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* CSE COLUMN */}
            <div>
              <h3 className="text-theme font-bold mb-4 border-b pb-2">
                Computer Science & Engineering
              </h3>

              <div className="flex flex-col gap-2 text-sm text-black">
                <Link href="/departments/ComputerScience" className="hover:text-theme transition">
                  Computer Science & Engineering
                </Link>
                <Link href="/departments/artificialintelligence" className="hover:text-theme transition">
                  Artificial Intelligence & Machine Learning
                </Link>
                <Link href="/departments/datascience" className="hover:text-theme transition">
                  Data Science
                </Link>
                <Link href="/departments/cybersecurity" className="hover:text-theme transition">
                  Cyber Security
                </Link>
                <Link href="/departments/internet-of-things" className="hover:text-theme transition">
                  Internet of Things (IoT)
                </Link>
              </div>
            </div>

            {/* CORE ENGINEERING */}
            <div>
              <h3 className="text-theme font-bold mb-4 border-b pb-2">
                Core Engineering
              </h3>

              <div className="flex flex-col gap-2 text-sm text-black">
                <Link href="/departments/informationtechnology" className="hover:text-theme transition">
                  Information Technology
                </Link>
                <Link href="/departments/electricalcommunication" className="hover:text-theme transition">
                  Electronics & Communication Engineering
                </Link>
                <Link href="/departments/electricelectronic" className="hover:text-theme transition">
                  Electrical & Electronics Engineering
                </Link>
                <Link href="/departments/civil" className="hover:text-theme transition">
                  Civil Engineering
                </Link>
                <Link href="/departments/mechanical" className="hover:text-theme transition">
                  Mechanical Engineering
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}