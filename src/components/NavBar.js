import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `uppercase tracking-wide text-sm transition ${
      isActive ? "text-[#D4A63A]" : "text-white hover:text-[#D4A63A]"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-[#0D3B2E]/95 backdrop-blur border-b border-[#D4A63A]/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-auto min-h-[72px] py-3 lg:h-24 lg:py-0">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 lg:gap-5 cursor-pointer group"
          >
            <img
              src="/sp-logo-mark.png"
              alt="SP Growth Advisors logo"
              className="h-12 w-12 lg:h-16 lg:w-16 object-contain flex-shrink-0"
            />
            <div>
              <div className="uppercase text-white tracking-[1px] lg:tracking-[2px] font-serif text-lg lg:text-3xl leading-tight lg:leading-none group-hover:text-[#D4A63A] transition">
                SP GROWTH ADVISORS
              </div>
              <div className="hidden lg:block uppercase text-[#D4A63A] tracking-[3px] text-xs mt-2 font-medium">
                STRATEGY. FINANCE. PMO. TRANSFORMATION.
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === "/"} className={linkClass}>
                {link.label.toUpperCase()}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden lg:flex items-center justify-center bg-[#D4A63A] text-[#111] font-semibold px-6 py-2.5 rounded-lg text-sm hover:scale-105 transition whitespace-nowrap ml-8"
          >
            Let's Talk
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white text-2xl flex-shrink-0">
            ☰
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-[#0D3B2E] border-t border-[#D4A63A]/20">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block px-8 py-4 text-white hover:text-[#D4A63A]"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block px-8 py-4 text-[#D4A63A] font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Let's Talk →
          </Link>
        </div>
      )}
    </header>
  );
}
