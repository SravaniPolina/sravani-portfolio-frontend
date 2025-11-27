import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow sticky top-0 z-50">
      <div className="flex items-center justify-between py-5 px-4 sm:px-8">
        
        {/* Left: Logo/Name */}
        <div>
          <div className="font-bold text-xl text-slate-900">Sravani Polina</div>
          <div className="text-xs text-gray-500 mt-1 hidden sm:block">
            Business Strategic Leader | PMO Specialist
          </div>
        </div>

        {/* Hamburger Icon (Mobile Only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-slate-900 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation (Hidden on Mobile) */}
        <div className="hidden sm:flex gap-6 text-base text-slate-700">
          <a href="#about" className="hover:text-indigo-600">About</a>
          <a href="#corecompetencies" className="hover:text-indigo-600">Expertise</a>
          <a href="#portfoliostats" className="hover:text-indigo-600">Impact</a>
          <a href="#leadership" className="hover:text-indigo-600">Leadership</a>
          <a href="#testimonials" className="hover:text-indigo-600">Testimonials</a>
        </div>

        {/* Desktop Button (Hidden on Mobile) */}
        <Link
          to="/consultation"
          className="hidden sm:block px-4 py-2 rounded bg-blue-600 text-white font-bold hover:bg-blue-700 transition"
        >
          Executive Consultation
        </Link>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="sm:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-3">
          <a href="#about" className="block text-slate-700 hover:text-indigo-600" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a href="#corecompetencies" className="block text-slate-700 hover:text-indigo-600" onClick={() => setIsOpen(false)}>
            Expertise
          </a>
          <a href="#portfoliostats" className="block text-slate-700 hover:text-indigo-600" onClick={() => setIsOpen(false)}>
            Impact
          </a>
          <a href="#leadership" className="block text-slate-700 hover:text-indigo-600" onClick={() => setIsOpen(false)}>
            Leadership
          </a>
          <a href="#testimonials" className="block text-slate-700 hover:text-indigo-600" onClick={() => setIsOpen(false)}>
            Testimonials
          </a>
          <Link
            to="/consultation"
            className="block w-full text-center px-4 py-2 rounded bg-blue-600 text-white font-bold hover:bg-blue-700 transition"
            onClick={() => setIsOpen(false)}
          >
            Executive Consultation
          </Link>
        </div>
      )}
    </nav>
  );
}
