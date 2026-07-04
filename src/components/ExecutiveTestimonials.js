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
    quote: "Sravani demonstrated a strong grasp of banking and financial services, particularly client relationship management and credit assessment. She built trust with clients while managing internal processes effectively. She was diligent, proactive, and a quick learner with genuine intellectual curiosity.",
    name: "Sharada Sundaram",
    role: "GM, IDBI Bank (Retired)"
  }
];

export default function ExecutiveTestimonials() {
  return (
    <section id="testimonials" className="py-16" style={{background: "var(--beige)"}}>
      <div className="max-w-7xl mx-auto px-6">
        <p className="section-label" style={{color: "var(--gold)"}}>Testimonials</p>
        <h2 className="font-serif text-5xl mt-4 mb-16" style={{color: "var(--green)"}}>
          Trusted by founders and business leaders.
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-3xl p-10 flex flex-col" style={{background: "var(--green)", border: "1px solid rgba(200,157,60,0.2)"}}>
              <div className="font-serif text-5xl mb-6" style={{color: "var(--gold)"}}>
                "
              </div>
              <p className="mb-10 leading-8" style={{color: "rgba(255,255,255,0.85)"}}>
                {item.quote}
              </p>
              <div className="mt-auto pt-6" style={{borderTop: "1px solid rgba(200,157,60,0.2)"}}>
                <h3 className="font-serif text-xl text-white">{item.name}</h3>
                <p className="text-sm mt-1" style={{color: "var(--gold)"}}>{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
