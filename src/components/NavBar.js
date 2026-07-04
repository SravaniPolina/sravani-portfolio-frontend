import React, { useState } from "react";
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };
  return (
    <header className="sticky top-0 z-50 bg-[#0D3B2E]/95 backdrop-blur border-b border-[#D4A63A]/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-auto min-h-[72px] py-3 lg:h-24 lg:py-0">
          <a href="#top" onClick={scrollToTop} className="flex items-center gap-3 lg:gap-5 cursor-pointer group">
            <div className="text-[#D4A63A] font-serif text-4xl lg:text-6xl leading-none">SP</div>
            <div>
              <div className="uppercase text-white tracking-[1px] lg:tracking-[2px] font-serif text-lg lg:text-3xl leading-tight lg:leading-none group-hover:text-[#D4A63A] transition">SRAVANI POLINA</div>
              <div className="hidden lg:block uppercase text-[#D4A63A] tracking-[3px] text-xs mt-2 font-medium">STRATEGY. FINANCE. PMO. TRANSFORMATION.</div>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#top" onClick={scrollToTop} className="text-[#D4A63A] uppercase tracking-wide text-sm font-medium relative">
              HOME
              <span className="absolute left-0 -bottom-4 h-[2px] w-full bg-[#D4A63A]" />
            </a>
            <a href="#about" className="text-white uppercase tracking-wide text-sm hover:text-[#D4A63A] transition">ABOUT</a>
            <a href="#services" className="text-white uppercase tracking-wide text-sm hover:text-[#D4A63A] transition">SERVICES</a>
            <a href="#impact" className="text-white uppercase tracking-wide text-sm hover:text-[#D4A63A] transition">IMPACT</a>
            <a href="#industries" className="text-white uppercase tracking-wide text-sm hover:text-[#D4A63A] transition">WORK</a>
            <a href="#testimonials" className="text-white uppercase tracking-wide text-sm hover:text-[#D4A63A] transition">TESTIMONIALS</a>
            <a href="#contact" className="text-white uppercase tracking-wide text-sm hover:text-[#D4A63A] transition">CONTACT</a>
          </nav>
          <a href="#consultation" className="hidden lg:flex items-center justify-center bg-[#D4A63A] text-[#111] font-semibold px-6 py-2.5 rounded-lg text-sm hover:scale-105 transition whitespace-nowrap ml-8">Let's Talk</a>
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white text-2xl flex-shrink-0">☰</button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-[#0D3B2E] border-t border-[#D4A63A]/20">
          <a href="#about" className="block px-8 py-4 text-white hover:text-[#D4A63A]" onClick={() => setIsOpen(false)}>About</a>
          <a href="#services" className="block px-8 py-4 text-white hover:text-[#D4A63A]" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#impact" className="block px-8 py-4 text-white hover:text-[#D4A63A]" onClick={() => setIsOpen(false)}>Impact</a>
          <a href="#industries" className="block px-8 py-4 text-white hover:text-[#D4A63A]" onClick={() => setIsOpen(false)}>Work</a>
          <a href="#testimonials" className="block px-8 py-4 text-white hover:text-[#D4A63A]" onClick={() => setIsOpen(false)}>Testimonials</a>
          <a href="#contact" className="block px-8 py-4 text-white hover:text-[#D4A63A]" onClick={() => setIsOpen(false)}>Contact</a>
          <a href="#consultation" className="block px-8 py-4 text-[#D4A63A] font-semibold" onClick={() => setIsOpen(false)}>Let's Talk →</a>
        </div>
      )}
    </header>
  );
}
