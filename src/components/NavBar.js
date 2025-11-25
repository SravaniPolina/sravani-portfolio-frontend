import React, { useState } from "react";

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full py-5 px-4 bg-white border-b flex items-center justify-between">
      <div className="font-bold text-xl text-slate-900">Sravani Polina</div>
      {/* Desktop nav */}
      <div className="hidden md:flex gap-7 text-base text-slate-700">
        <a href="#about" className="hover:text-indigo-600">About</a>
        <a href="#competencies" className="hover:text-indigo-600">Expertise</a>
        <a href="#impact" className="hover:text-indigo-600">Impact</a>
        <a href="#leadership" className="hover:text-indigo-600">Leadership</a>
        <a href="#testimonials" className="hover:text-indigo-600">Testimonials</a>
      </div>
      {/* Hamburger Icon */}
      <button
        className="md:hidden block"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Open Menu"
      >
        <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16"></path>
        </svg>
      </button>
      {/* Mobile menu dropdown */}
      {mobileOpen && (
        <div className="absolute top-[56px] left-0 w-full bg-white shadow-lg flex flex-col z-50 md:hidden">
          <a href="#about" className="py-3 px-6 border-b text-slate-700 hover:bg-indigo-50">About</a>
          <a href="#competencies" className="py-3 px-6 border-b text-slate-700 hover:bg-indigo-50">Expertise</a>
          <a href="#impact" className="py-3 px-6 border-b text-slate-700 hover:bg-indigo-50">Impact</a>
          <a href="#leadership" className="py-3 px-6 border-b text-slate-700 hover:bg-indigo-50">Leadership</a>
          <a href="#testimonials" className="py-3 px-6 border-b text-slate-700 hover:bg-indigo-50">Testimonials</a>
          <a href="#contact" className="py-3 px-6 bg-slate-900 text-white font-semibold">Executive Consultation</a>
        </div>
      )}
    </nav>
  );
}
