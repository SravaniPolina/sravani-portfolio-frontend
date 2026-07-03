import React, { useEffect, useState } from "react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Impact", href: "#impact" },
    { label: "Case Studies", href: "#projects" },
    { label: "AI", href: "#ai" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#061B1B]/85 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

          {/* Logo */}

          <a
            href="/"
            className="text-white leading-tight"
          >
            <div className="font-semibold tracking-[4px] text-lg">
              SRAVANI POLINA
            </div>

            <div className="text-xs text-[var(--gold)] tracking-[2px] uppercase mt-1">
              Strategy • Transformation • AI
            </div>
          </a>

          {/* Desktop */}

          <div className="hidden lg:flex items-center gap-10">

            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm tracking-wide text-white/80 hover:text-[var(--gold)] transition"
              >
                {item.label}
              </a>
            ))}

            <a
              href="https://topmate.io/sravani_polina"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn"
            >
              Let's Talk
            </a>

          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white text-3xl"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}

      {mobileOpen && (
        <div className="fixed top-20 left-0 w-full bg-[#061B1B] border-t border-white/10 z-40 lg:hidden">

          <div className="flex flex-col p-6 gap-6">

            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/90"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <a
              href="https://topmate.io/sravani_polina"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn text-center"
            >
              Let's Talk
            </a>

          </div>
        </div>
      )}
    </>
  );
}
