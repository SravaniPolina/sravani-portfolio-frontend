import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-5 px-8 bg-transparent">
      {/* Left side: Name and Subheadline */}
      <div>
        <div className="font-bold text-xl text-slate-900">Sravani Polina</div>
        <div className="text-xs text-gray-500 mt-1">Business Strategic Leader | PMO Specialist</div>
      </div>
      {/* Center: Links */}
      <div className="flex gap-6 text-base text-slate-700">
        <a href="#about" className="hover:text-indigo-600">About</a>
        <a href="#expertise" className="hover:text-indigo-600">Expertise</a>
        <a href="#impact" className="hover:text-indigo-600">Impact</a>
        <a href="#leadership" className="hover:text-indigo-600">Leadership</a>
        <a href="#testimonials" className="hover:text-indigo-600">Testimonials</a>
      </div>
      {/* Right: Executive Consultation Button */}
      <a
        href="#contact"
        className="px-6 py-2 rounded bg-slate-900 text-white font-semibold shadow hover:bg-indigo-700 transition"
      >
        Executive Consultation
      </a>
    </nav>
  );
}
