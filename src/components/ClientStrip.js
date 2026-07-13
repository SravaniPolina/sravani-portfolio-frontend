import React from "react";

const organizations = [
  { name: "IDBI Bank", logo: "/idbi-logo.png" },
  { name: "Srinivasa Farms", logo: "/srinivasa-farms-logo.png" },
  { name: "Mahathi Infra Services", logo: "/mahathi-logo.png" },
  { name: "Nivara Stays", logo: "/nivara-stays-logo.png" },
];

export default function ClientStrip() {
  const track = [...organizations, ...organizations];

  return (
    <section className="py-10 overflow-hidden" style={{ background: "var(--green)", borderTop: "1px solid rgba(200,157,60,0.15)", borderBottom: "1px solid rgba(200,157,60,0.15)" }}>
      <p className="text-center uppercase tracking-[3px] text-xs font-semibold mb-8" style={{ color: "var(--gold)" }}>
        Experience Across
      </p>
      <div className="relative w-full">
        <div className="marquee-track flex items-center gap-14 whitespace-nowrap w-max">
          {track.map((org, i) => (
            <div
              key={`${org.name}-${i}`}
              className="flex items-center justify-center px-6 py-3 rounded-xl"
              style={{ background: "rgba(255,255,255,0.9)", border: "1px solid rgba(200,157,60,0.15)" }}
            >
              <img
                src={org.logo}
                alt={org.name}
                className="h-9 w-auto object-contain"
                style={{ maxWidth: "160px" }}
              />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .marquee-track {
          animation: marquee-scroll 26s linear infinite;
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
