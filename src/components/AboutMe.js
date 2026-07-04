import React from "react";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative py-28 bg-cover bg-center"
      style={{ backgroundImage: `url('/AboutMe.png')` }}
    >
      {/* Overlay for text readability over the illustration */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(245,242,235,0.94) 0%, rgba(245,242,235,0.88) 40%, rgba(245,242,235,0.94) 100%)"
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <p className="section-label">About</p>
        <h2 className="font-serif text-5xl mt-4 mb-10 leading-tight" style={{ color: "var(--green)" }}>
          Helping businesses navigate
          complexity with clarity.
        </h2>
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="mb-6 text-lg leading-8 text-justify" style={{ color: "#3A3A3A" }}>
              I partner with founders, investors and leadership teams to solve
              complex business challenges across strategy, finance, business
              transformation and AI-enabled execution.
            </p>
            <p className="mb-6 text-lg leading-8 text-justify" style={{ color: "#3A3A3A" }}>
              My experience spans Banking, Agribusiness, Infrastructure,
              Hospitality, Startups and Consulting, allowing me to connect
              commercial strategy with practical execution.
            </p>
            <p className="text-lg leading-8 text-justify" style={{ color: "#3A3A3A" }}>
              Every engagement is outcome-focused: whether that means raising
              capital, improving operational performance, supporting M&A,
              designing governance structures or helping organisations scale
              sustainably.
            </p>
          </div>

          <div
            className="p-10 rounded-3xl backdrop-blur-md"
            style={{ background: "rgba(13,59,46,0.9)", border: "1px solid rgba(200,157,60,0.25)" }}
          >
            <h3 className="font-serif text-2xl text-white mb-6">Areas of Expertise</h3>
            <div className="grid grid-cols-2 gap-4">
              {["Business Strategy", "Business Transformation", "Capital Advisory", "Due Diligence", "Fractional CFO", "AI Adoption", "Operational Excellence", "Governance & PMO"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>
                  <span style={{ color: "var(--gold)", fontSize: "10px" }}>◆</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
