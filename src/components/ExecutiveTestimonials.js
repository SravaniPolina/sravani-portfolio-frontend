import React, { useState } from "react";

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 19h-3v-9h3v9zm-1.5-10.27c-0.97 0-1.75-0.79-1.75-1.76s0.78-1.76 1.75-1.76c0.97 0 1.75 0.79 1.75 1.76s-0.78 1.76-1.75 1.76zm13.25 10.27h-3v-4.5c0-1.07-0.02-2.45-1.5-2.45-1.5 0-1.73 1.17-1.73 2.37v4.58h-3v-9h2.88v1.23h0.04c0.4-0.76 1.39-1.56 2.86-1.56 3.06 0 3.63 2.02 3.63 4.64v4.69z"/></svg>
);

const testimonials = [
  {
    quote: "Sravani's expertise in financial strategy, cash flow management, and forecasting has been instrumental in strengthening our financial operations. She also developed investor-ready financial models and presentations for our fundraising efforts. Most notably, she goes well beyond scope, personally helping us reach out to financial institutions and HNIs to drive our business growth.",
    name: "Sirisha Rudraraju",
    role: "Co-Founder, Nivara Stays",
    initials: "SR",
    linkedin: "https://www.linkedin.com/in/sirishars/"
  },
  {
    quote: "Sravani is a professional with sharp intellect, who works with data and generates deep insights into how a business is performing and what tactical and strategic actions are required. The people around her view her as extremely friendly, humane, and understanding. She is flexible, adaptable, and a quick learner of subjects unfamiliar to her.",
    name: "Mahesh K Gupta",
    role: "COO, Srinivasa Farms Private Limited",
    initials: "MG",
    linkedin: "https://www.linkedin.com/in/mahesh-kumar-g-796b856/"
  },
  {
    quote: "I had the privilege of working closely with Sravani during her tenure as Chief of Staff at Mahathi. She possesses a rare blend of strategic thinking, organisational excellence, and people management skills. What stands out most is her proactive approach. She anticipates challenges and brings well-thought-out solutions.",
    name: "Amreen Begum",
    role: "Colleague, Mahathi Infra Services Pvt Ltd",
    initials: "AB",
    linkedin: "https://www.linkedin.com/in/amreenkhanadmnexec/"
  },
  {
    quote: "Sravani demonstrated a strong grasp of banking and financial services, particularly client relationship management and credit assessment. She built trust with clients while managing internal processes effectively, a balance that's not easy to strike in BFSI. She was diligent, proactive, and a quick learner with genuine intellectual curiosity, always asking the right questions to understand business context.",
    name: "Sharada Sundaram",
    role: "GM, IDBI Bank (Retired)",
    initials: "SS",
    linkedin: null
  }
];

function Avatar({ initials }) {
  return (
    <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-800 font-bold flex items-center justify-center text-sm flex-shrink-0">
      {initials}
    </div>
  );
}

function Card({ t }) {
  return (
    <div style={{ width: "340px" }} className="flex-shrink-0 bg-slate-50 rounded-2xl shadow p-6 border flex flex-col">
      <p className="italic text-sm text-slate-700 leading-relaxed mb-5 flex-1">"{t.quote}"</p>
      <div className="flex items-center gap-3 pt-4 border-t">
        <Avatar initials={t.initials} />
        <div className="flex-1 min-w-0">
          {t.linkedin ? (
            <a href={t.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 font-bold text-slate-900 hover:text-indigo-700 text-sm">
              {t.name}
              <LinkedInIcon />
            </a>
          ) : (
            <div className="font-bold text-slate-900 text-sm">{t.name}</div>
          )}
          <div className="text-xs text-slate-600">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function ExecutiveTestimonials() {
  const [paused, setPaused] = useState(false);
  const doubled = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <style>{`
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
      <div className="max-w-6xl mx-auto px-4 sm:px-8 mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-3">What people say</h2>
        <p className="text-center text-slate-600">Direct feedback from clients and colleagues.</p>
      </div>
      <div
        className="overflow-hidden w-full"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="flex gap-6 px-4"
          style={{
            width: "max-content",
            animation: "scroll-left 40s linear infinite",
            animationPlayState: paused ? "paused" : "running"
          }}
        >
          {doubled.map((t, i) => (<Card key={i} t={t} />))}
        </div>
      </div>
      <p className="text-center text-sm text-slate-500 mt-10 italic">More client references available on request.</p>
    </section>
  );
}
