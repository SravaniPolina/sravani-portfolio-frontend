import React from "react";

const testimonials = [
  {
    quote:
      "Sravani's expertise in financial strategy, cash flow management and forecasting has been instrumental in strengthening our financial operations. She consistently goes beyond scope and creates measurable business value.",
    name: "Sirisha Rudraraju",
    role: "Co-Founder, Nivara Stays",
  },
  {
    quote:
      "She combines strategic thinking with analytical depth and execution excellence. A rare professional who understands both business and people.",
    name: "Mahesh K Gupta",
    role: "COO, Srinivasa Farms",
  },
  {
    quote:
      "Sravani anticipates challenges before they arise and consistently brings structured, practical solutions. She is highly dependable and outcome-focused.",
    name: "Amreen Begum",
    role: "Mahathi Infra Services",
  },
];

export default function ExecutiveTestimonials() {
  return (
    <section id="testimonials" className="py-28 bg-[#0A0A0A]">

      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[3px] text-[var(--gold)] text-sm font-semibold">
          TESTIMONIALS
        </p>

        <h2 className="text-5xl text-white mt-4 mb-16">
          Trusted by founders and business leaders.
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((item) => (

            <div
              key={item.name}
              className="glass rounded-3xl p-10"
            >

              <div className="text-5xl gold-text mb-6">
                “
              </div>

              <p className="mb-10 leading-8">
                {item.quote}
              </p>

              <div className="border-t border-white/10 pt-6">

                <h3 className="text-white text-xl">
                  {item.name}
                </h3>

                <p className="text-sm">
                  {item.role}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
