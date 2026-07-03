import React, { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0A1628]/95 backdrop-blur border-b border-[#D4A63A]/15">
      <div className="max-w-7xl mx-auto px-8">

        <div className="flex items-center justify-between h-24">

          {/* Logo */}

          <a
            href="/"
            className="flex items-center gap-5"
          >
            <div className="text-[#D4A63A] font-serif text-6xl leading-none">
              SP
            </div>

            <div>

              <div
                className="uppercase text-white tracking-[2px] font-serif text-3xl leading-none"
              >
                SRAVANI POLINA
              </div>

              <div
                className="uppercase text-[#D4A63A] tracking-[3px] text-xs mt-2 font-medium"
              >
                STRATEGY. FINANCE. PMO. TRANSFORMATION.
              </div>

            </div>

          </a>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-14">

            <a
              href="/"
              className="text-[#D4A63A] uppercase tracking-wide text-sm font-medium relative"
            >
              HOME

              <span className="absolute left-0 -bottom-4 h-[2px] w-full bg-[#D4A63A]" />

            </a>

            <a
              href="#about"
              className="text-white uppercase tracking-wide text-sm hover:text-[#D4A63A] transition"
            >
              ABOUT
            </a>

            <a
              href="#services"
              className="text-white uppercase tracking-wide text-sm hover:text-[#D4A63A] transition"
            >
              SERVICES
            </a>

            <a
              href="#projects"
              className="text-white uppercase tracking-wide text-sm hover:text-[#D4A63A] transition"
            >
              WORK
            </a>

            <a
              href="#testimonials"
              className="text-white uppercase tracking-wide text-sm hover:text-[#D4A63A] transition"
            >
              TESTIMONIALS
            </a>

            <a
              href="#contact"
              className="text-white uppercase tracking-wide text-sm hover:text-[#D4A63A] transition"
            >
              CONTACT
            </a>

          </nav>

          {/* CTA */}

          <a
            href="https://topmate.io/sravani_polina"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center justify-center bg-[#D4A63A] text-[#111] font-semibold px-8 py-4 rounded-full hover:scale-105 transition"
          >
            Let's Talk
          </a>

          {/* Mobile */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white"
          >
            ☰
          </button>

        </div>

      </div>

      {isOpen && (
        <div className="lg:hidden bg-[##0A1628] border-t border-[#D4A63A]/20">

          <a href="#about" className="block px-8 py-4 text-white">About</a>

          <a href="#services" className="block px-8 py-4 text-white">Services</a>

          <a href="#projects" className="block px-8 py-4 text-white">Work</a>

          <a href="#testimonials" className="block px-8 py-4 text-white">Testimonials</a>

          <a href="#contact" className="block px-8 py-4 text-white">Contact</a>

        </div>
      )}

    </header>
  );
}
