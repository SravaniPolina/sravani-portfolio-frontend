import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 200);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function goToTop() {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  }

  return (
    visible && (
      <button
        onClick={goToTop}
        className="fixed bottom-8 right-8 z-50 bg-blue-600 text-white font-bold px-5 py-3 rounded-full shadow-lg hover:bg-blue-800 transition"
        aria-label="Back to Top"
      >
        ↑ Back to Top
      </button>
    )
  );
}
