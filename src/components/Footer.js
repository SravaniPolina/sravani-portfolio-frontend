import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10" style={{background: "var(--surface)"}}>

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-3 gap-12">

          {/* Left */}

          <div>

            <h2 className="text-3xl text-white font-serif mb-4">
              Sravani Polina
            <div>

            <p className="leading-8">
              Independent Strategy Advisor helping founders, investors and
              business leaders solve complex growth, finance and transformation
              challenges.
            </p>

          </div>

          {/* Middle */}

          <div>

            <h3 className="text-white text-xl mb-5">
              Quick Links
            </h3>

            <div className="space-y-3">

              <a href="#services" className="block hover:text-[var(--gold)]">
                Services
              </a>

              <a href="#projects" className="block hover:text-[var(--gold)]">
                Featured Engagements
              </a>

              <a href="#about" className="block hover:text-[var(--gold)]">
                About
              </a>

              <a href="#contact" className="block hover:text-[var(--gold)]">
                Contact
              </a>

            </div>

          </div>

          {/* Right */}

          <div>

            <h3 className="text-white text-xl mb-5">
              Connect
            </h3>

            <div className="space-y-3">

              <p>📧 sravani.polina@iiml.org</p>

              <p>📱 +91 91330 91112</p>

              <p>📍 Hyderabad, India</p>

              <a
                href="https://www.linkedin.com/in/sravani-polina"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[var(--gold)]"
              >
                LinkedIn →
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-sm">
            © 2026 Sravani Polina. All rights reserved.
          </p>

          <p className="text-sm mt-4 md:mt-0">
            Designed with Strategy. Built for Impact.
          </p>

        </div>

      </div>

    </footer>
  );
}
