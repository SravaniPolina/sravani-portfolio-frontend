import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/10" style={{ background: "var(--surface)" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-3 gap-12">

          <div>
            <div className="text-3xl text-white font-serif mb-4">
              SP Growth Advisors
            </div>
            <p className="leading-8">
              Strategy and finance advisory for founders, investors and
              leadership teams, led by Sravani Polina. Fractional CFO,
              capital advisory, M&A diligence and growth strategy.
            </p>
          </div>

          <div>
            <h3 className="text-white text-xl mb-5">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/services" className="block hover:text-[var(--gold)]">Services</Link>
              <Link to="/work" className="block hover:text-[var(--gold)]">Case Studies</Link>
              <Link to="/about" className="block hover:text-[var(--gold)]">About</Link>
              <Link to="/contact" className="block hover:text-[var(--gold)]">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="text-white text-xl mb-5">Connect</h3>
            <div className="space-y-3">
              <p>📧 sravani.polina@iiml.org</p>
              <p>📱 +91 91330 91112</p>
              <p>📍 Hyderabad, India</p>
              <a href="https://www.linkedin.com/in/sravani-polina" target="_blank" rel="noopener noreferrer" className="block hover:text-[var(--gold)]">LinkedIn →</a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2026 SP Growth Advisors. All rights reserved.</p>
          <p className="text-sm mt-4 md:mt-0">Designed with Strategy. Built for Impact.</p>
        </div>

      </div>
    </footer>
  );
}
