import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-10 pb-4">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
        {/* Left column: Profile */}
        <div>
          <div className="text-lg font-bold mb-1">Sravani Polina</div>
          <div className="text-base font-medium mb-1">Strategic Business Leader | Transformation Architect | Results Driver</div>
          <p className="text-sm mb-4">
            C-Suite advisory expertise with 11+ years of experience delivering measurable business transformation and operational excellence across multiple industries.
          </p>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/sravanipolina/" target="_blank" rel="noopener noreferrer" className="bg-slate-800 hover:bg-indigo-600 p-2 rounded">
              <i className="fa-brands fa-linkedin text-xl"></i>
            </a>
            <a href="mailto:sravani.polina@iiml.org" className="bg-slate-800 hover:bg-indigo-600 p-2 rounded">
              <i className="fa-solid fa-envelope text-xl"></i>
            </a>
            <a href="tel:+919133091112" className="bg-slate-800 hover:bg-indigo-600 p-2 rounded">
              <i className="fa-solid fa-phone text-xl"></i>
            </a>
          </div>
        </div>
        {/* Middle column: Quick Links */}
        <div>
          <div className="font-semibold mb-2">Quick Links</div>
          <div className="flex flex-col gap-1 text-sm">
            <a href="#about" className="hover:text-indigo-400">Executive Profile</a>
            <a href="#expertise" className="hover:text-indigo-400">Core Expertise</a>
            <a href="#impact" className="hover:text-indigo-400">Strategic Impact</a>
            <a href="#leadership" className="hover:text-indigo-400">Leadership Philosophy</a>
            <a href="#testimonials" className="hover:text-indigo-400">Executive Testimonials</a>
            <a href="#consultation" className="hover:text-indigo-400">Executive Consultation</a>
          </div>
        </div>
        {/* Right column: Contact Info */}
        <div>
          <div className="font-semibold mb-2">Contact Info</div>
          <div className="text-sm mb-1">sravani.polina@iiml.org</div>
          <div className="text-sm mb-1">+91 9133091112</div>
          <div className="text-sm mb-1">Hyderabad, India</div>
        </div>
      </div>
      {/* Copyright and Badge */}
      <div className="container mx-auto px-6 flex justify-between items-center pt-8 border-t border-slate-800 mt-8 text-xs text-gray-400">
        <span>© 2025 Sravani Polina. All rights reserved.</span>
        <span className="flex items-center">
          <span className="mr-1">Made with</span>
          <span className="bg-slate-800 px-2 py-1 rounded">Emergent</span>
        </span>
      </div>
    </footer>
  );
}
