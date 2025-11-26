import React, { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 200);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 bg-blue-600 text-white font-bold px-5 py-3 rounded-full shadow-lg hover:bg-blue-800 transition"
        aria-label="Back to Top"
      >
        ↑ Back to Top
      </button>
    )
  );
}
