import React, { useEffect, useState } from "react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Insights", href: "#insights" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-[#061B1B]/75 border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6 lg:px-10">

          {/* Logo */}

          <a
            href="/"
            className="text-white text-xl lg:text-2xl font-semibold tracking-wide hover:text-[var(--gold)] transition"
          >
            Sravani Polina
          </a>

          {/* Desktop Menu */}

          <div className="hidden lg:flex items-center gap-10">

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/75 hover:text-white transition duration-300 text-sm tracking-wide"
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
            className="lg:hidden text-white text-3xl"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            ☰
          </button>

        </div>
      </nav>

      {/* Mobile Menu */}

      {mobileMenu && (
        <div className="fixed top-20 left-0 w-full bg-[#061B1B] border-t border-white/10 z-40 lg:hidden">

          <div className="flex flex-col px-6 py-8 gap-6">

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/90 text-lg"
                onClick={() => setMobileMenu(false)}
              >
                {item.label}
              </a>
            ))}

            <a
              href="https://topmate.io/sravani_polina"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn text-center"
              onClick={() => setMobileMenu(false)}
            >
              Let's Talk
            </a>

          </div>

        </div>
      )}
    </>
  );
}
