import React, { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full bg-white shadow sticky top-0 z-50">
      <div className="flex items-center justify-between py-5 px-4 sm:px-8">
        <div>
          <div className="font-bold text-xl text-slate-900">Sravani Polina</div>
          <div className="text-xs text-gray-500 mt-1 hidden sm:block">Independent Strategy &amp; Finance Advisor</div>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden text-slate-900 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        <div className="hidden sm:flex gap-6 text-base text-slate-700">
          <a href="#about" className="hover:text-indigo-600">About</a>
          <a href="#services" className="hover:text-indigo-600">Services</a>
          <a href="#impact" className="hover:text-indigo-600">Work</a>
          <a href="#testimonials" className="hover:text-indigo-600">Testimonials</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
        </div>
        <a href="https://topmate.io/sravani_polina" target="_blank" rel="noopener noreferrer" className="hidden sm:block px-4 py-2 rounded bg-indigo-800 text-white font-bold hover:bg-indigo-900 transition">Book a Call</a>
      </div>
      {isOpen && (
        <div className="sm:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-3">
          <a href="#about" className="block text-slate-700 hover:text-indigo-600" onClick={() => setIsOpen(false)}>About</a>
          <a href="#services" className="block text-slate-700 hover:text-indigo-600" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#impact" className="block text-slate-700 hover:text-indigo-600" onClick={() => setIsOpen(false)}>Work</a>
          <a href="#testimonials" className="block text-slate-700 hover:text-indigo-600" onClick={() => setIsOpen(false)}>Testimonials</a>
          <a href="#contact" className="block text-slate-700 hover:text-indigo-600" onClick={() => setIsOpen(false)}>Contact</a>
          <a href="https://topmate.io/sravani_polina" target="_blank" rel="noopener noreferrer" className="block w-full text-center px-4 py-2 rounded bg-indigo-800 text-white font-bold hover:bg-indigo-900 transition" onClick={() => setIsOpen(false)}>Book a Call</a>
        </div>
      )}
    </nav>
  );
}
