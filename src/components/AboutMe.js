import React from "react";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative py-24 bg-cover bg-center"
      style={{ backgroundImage: `url('/AboutMe.png')` }}
    >
      {/* Dark overlay, matches Services treatment */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(13,59,46,0.92) 0%, rgba(13,59,46,0.85) 40%, rgba(10,22,16,0.93) 100%)"
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <p className="uppercase tracking-[4px] text-[#D4A63A] text-sm font-semibold">About</p>
        <h2 className="font-serif text-4xl lg:text-5xl text-white mt-4 mb-10 leading-tight">
          Helping businesses navigate
          complexity with clarity.
        </h2>
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="mb-6 text-lg leading-8 text-justify" style={{ color: "rgba(255,255,255,0.8)" }}>
              I partner with founders, investors and leadership teams to solve
              complex business challenges across strategy, finance, business
              transformation and AI-enabled execution.
            </p>
            <p className="mb-6 text-lg leading-8 text-justify" style={{ color: "rgba(255,255,255,0.8)" }}>
              My experience spans Banking, Agribusiness, Infrastructure,
              Hospitality, Startups and Consulting, allowing me to connect
              commercial strategy with practical execution.
            </p>
            <p className="text-lg leading-8 text-justify" style={{ color: "rgba(255,255,255,0.8)" }}>
              Every engagement is outcome-focused: whether that means raising
              capital, improving operational performance, supporting M&A,
              designing governance structures or helping organisations scale
              sustainably.
            </p>
          </div>

          <div
            className="p-10 rounded-2xl backdrop-blur-md"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(212,166,58,0.35)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.25)"
            }}
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
