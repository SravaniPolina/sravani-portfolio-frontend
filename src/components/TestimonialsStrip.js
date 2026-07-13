import React from "react";

const testimonials = [
  {
    quote: "Sravani's expertise in financial strategy, cash flow management and forecasting has been instrumental in strengthening our financial operations. She consistently goes beyond scope and creates measurable business value.",
    name: "Sirisha Rudraraju",
    role: "Co-Founder, Nivara Stays"
  },
  {
    quote: "She combines strategic thinking with analytical depth and execution excellence. A rare professional who understands both business and people.",
    name: "Mahesh K Gupta",
    role: "COO, Srinivasa Farms"
  },
  {
    quote: "Sravani anticipates challenges before they arise and consistently brings structured, practical solutions. She is highly dependable and outcome-focused.",
    name: "Amreen Begum",
    role: "Mahathi Infra Services"
  },
  {
    quote: "Sravani demonstrated a strong grasp of banking and financial services, particularly client relationship management and credit assessment. She built trust with clients while managing internal processes effectively.",
    name: "Sharada Sundaram",
    role: "GM, IDBI Bank (Retired)"
  }
];

export default function TestimonialsStrip() {
  const track = [...testimonials, ...testimonials];

  return (
    <section className="py-16 overflow-hidden" style={{ background: "var(--beige)" }}>
      <p className="text-center uppercase tracking-[3px] text-xs font-semibold mb-2" style={{ color: "var(--gold)" }}>
        Testimonials
      </p>
      <h2 className="font-serif text-3xl lg:text-4xl text-center mb-10" style={{ color: "var(--green)" }}>
        Trusted by founders and business leaders.
      </h2>

      <div className="relative w-full">
        <div className="testimonial-track flex items-stretch gap-6 w-max">
          {track.map((item, i) => (
            <div
              key={`${item.name}-${i}`}
              className="flex flex-col rounded-3xl p-8 w-[380px] flex-shrink-0 whitespace-normal"
              style={{ background: "var(--green)", border: "1px solid rgba(200,157,60,0.2)" }}
            >
              <div className="font-serif text-4xl leading-none mb-2" style={{ color: "var(--gold)" }}>
                "
              </div>
              <p className="mb-8 leading-7 text-sm flex-1" style={{ color: "rgba(255,255,255,0.85)" }}>
                {item.quote}
              </p>
              <div className="pt-4" style={{ borderTop: "1px solid rgba(200,157,60,0.2)" }}>
                <h3 className="font-serif text-lg text-white">{item.name}</h3>
                <p className="text-xs mt-1" style={{ color: "var(--gold)" }}>{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonial-track {
          animation: testimonial-scroll 45s linear infinite;
        }
        .testimonial-track:hover {
          animation-play-state: paused;
        }
        @keyframes testimonial-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .testimonial-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
