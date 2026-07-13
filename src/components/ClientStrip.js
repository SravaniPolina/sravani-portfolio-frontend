import React from "react";

const organizations = [
  "IDBI Bank",
  "Srinivasa Farms",
  "Mahathi Infra Services",
  "Nivara Stays",
];

export default function ClientsStrip() {
  const track = [...organizations, ...organizations];

  return (
    <section className="py-10 overflow-hidden" style={{ background: "var(--green)", borderTop: "1px solid rgba(200,157,60,0.15)", borderBottom: "1px solid rgba(200,157,60,0.15)" }}>
      <p className="text-center uppercase tracking-[3px] text-xs font-semibold mb-6" style={{ color: "var(--gold)" }}>
        Experience Across
      </p>
      <div className="relative w-full">
        <div className="marquee-track flex items-center gap-16 whitespace-nowrap w-max">
          {track.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-serif text-xl lg:text-2xl"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        .marquee-track {
          animation: marquee-scroll 28s linear infinite;
        }
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
