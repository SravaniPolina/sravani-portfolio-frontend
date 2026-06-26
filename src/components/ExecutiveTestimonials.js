import React from "react";

const testimonials = [
  {
    quote: "Sravani's expertise in financial strategy, cash flow management, and forecasting has been instrumental in strengthening our financial operations. She also developed investor-ready financial models and presentations for our fundraising efforts. Most notably, she goes well beyond scope, personally helping us reach out to financial institutions and HNIs to drive our business growth.",
    name: "Co-Founder",
    role: "Hospitality client, Hyderabad",
    company: "June 2026"
  },
  {
    quote: "Sravani is a professional with sharp intellect, who works with data and generates deep insights into how a business is performing and what tactical and strategic actions are required. The people around her view her as extremely friendly, humane, and understanding. She becomes part of the team in no time. She is flexible, adaptable, and a quick learner of subjects unfamiliar to her.",
    name: "Mahesh K Gupta",
    role: "COO",
    company: "Srinivasa Farms Private Limited"
  },
  {
    quote: "I had the privilege of working closely with Sravani during her tenure as Chief of Staff at Mahathi. She possesses a rare blend of strategic thinking, organisational excellence, and people management skills. She played a pivotal role in streamlining processes, aligning cross-functional teams, and ensuring that leadership priorities were executed seamlessly. What stands out most is her proactive approach. She anticipates challenges and brings well-thought-out solutions.",
    name: "Amreen Begum",
    role: "Colleague",
    company: "Mahathi Infra Services Pvt Ltd"
  }
];

export default function ExecutiveTestimonials() {
  return (
    <section id="testimonials" className="py-16 px-4 sm:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">What people say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow p-7 border flex flex-col">
              <p className="italic text-base text-slate-700 leading-relaxed mb-6">"{t.quote}"</p>
              <div className="mt-auto">
                <div className="text-base font-bold text-slate-900">{t.name}</div>
                <div className="text-sm text-slate-600">{t.role}</div>
                <div className="text-sm text-slate-500">{t.company}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-slate-500 mt-8 italic">More client references available on request.</p>
      </div>
    </section>
  );
}
