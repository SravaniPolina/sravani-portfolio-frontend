import React from "react";

const metrics = [
  {
    count: "2",
    title: "Executive Testimonials",
    color: "bg-green-50",
    icon: (
      <span className="bg-green-100 rounded-xl p-4">
        {/* Ribbon/Medal Icon */}
        <svg width="32" height="32" fill="none" stroke="#22c55e" strokeWidth="2">
          <circle cx="16" cy="12" r="8" />
          <path d="M16 20v6M12 20l-2 6M20 20l2 6" />
        </svg>
      </span>
    ),
  },
  {
    count: "2",
    title: "Organizations",
    color: "bg-blue-50",
    icon: (
      <span className="bg-blue-100 rounded-xl p-4">
        {/* Building Icon */}
        <svg width="32" height="32" fill="none" stroke="#2563eb" strokeWidth="2">
          <rect x="8" y="8" width="16" height="16" rx="3" />
          <path d="M12 12h2v2h-2zM18 12h2v2h-2zM12 18h2v2h-2zM18 18h2v2h-2z" />
        </svg>
      </span>
    ),
  },
  {
    count: "5.0",
    title: "Professional Rating",
    color: "bg-yellow-50",
    icon: (
      <span className="bg-yellow-100 rounded-xl p-4">
        {/* Star Icon */}
        <svg width="32" height="32" fill="none" stroke="#f59e42" strokeWidth="2">
          <polygon points="16,4 20,14 31,14 22,20 25,30 16,24 7,30 10,20 1,14 12,14" />
        </svg>
      </span>
    ),
  },
  {
    count: "100%",
    title: "Would Recommend",
    color: "bg-purple-50",
    icon: (
      <span className="bg-purple-100 rounded-xl p-4">
        {/* Quote Icon */}
        <svg width="32" height="32" fill="none" stroke="#a78bfa" strokeWidth="2">
          <rect x="10" y="10" width="12" height="12" rx="3" />
          <path d="M12 18h8M12 14h8" />
        </svg>
      </span>
    ),
  },
];

const testimonials = [
  {
    stars: 5,
    type: "Direct Supervisor",
    quote: `Sravani comes across as a professional with sharp intellectual, who works with data and generates deep insights into how a business is performing and what are the tactical and strategic actions required. The people around her view her as an extremely friendly, humane and understanding lady, who becomes a part of the team in no time. She is flexible, adaptable and quick learner of even subjects unfamiliar to her. All the best to her in her roles in strategy formulation area.`,
    name: "Mahesh K Gupta",
    role: "COO",
    company: "Srinivasa Farms Private Limited",
  },
  {
    stars: 5,
    type: "Professional Colleague",
    quote: `I had the privilege of working closely with Ms. Sravani during her tenure as Chief of Staff at Mahathi, and I can confidently say she is an exceptional professional. Ms. Sravani possesses a rare blend of strategic thinking, organizational excellence, and people management skills. She played a pivotal role in streamlining processes, aligning cross-functional teams, and ensuring that leadership priorities were executed seamlessly. Her ability to handle complex situations with clarity and professionalism has always been impressive. What stands out most about Ms. Sravani is her proactive approach and commitment to delivering excellence. She not only anticipates challenges but also brings well-thought-out solutions, ensuring that projects move forward smoothly. Her strong interpersonal skills, combined with her dedication, make her a natural leader and a trusted partner to the management team. I highly recommend Ms. Sravani for any leadership or strategic role. Any organization would be fortunate to have her driving its initiatives forward.`,
    name: "Amreen Begum",
    role: "Colleague",
    company: "Mahathi Infra Services Pvt Ltd",
  },
];

export default function ExecutiveTestimonials() {
  return (
    <section id="testimonials" className="py-16 px-4 sm:px-8 bg-white">
      {/* Heading & Description */}
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h2 className="text-5xl font-bold mb-4">Executive Testimonials</h2>
        <p className="text-xl text-slate-600">
          Authentic testimonials from senior executives and colleagues who have directly experienced my strategic leadership and business transformation capabilities.
        </p>
      </div>
      {/* Stats Row */}
      <div className="max-w-6xl mx-auto mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 rounded-2xl border bg-gradient-to-r from-green-50 via-yellow-50 via-purple-50 to-blue-50 p-6">
        {metrics.map((stat, i) => (
          <div key={i} className={`flex flex-col items-center px-4 py-6 rounded-xl ${stat.color}`}>
            {stat.icon}
            <span className="text-3xl font-bold text-slate-900 mt-2 mb-2">{stat.count}</span>
            <span className="text-lg text-slate-700 text-center">{stat.title}</span>
          </div>
        ))}
      </div>
      {/* Testimonials Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow p-8 flex flex-col gap-2 border">
            {/* Stars and Type */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex gap-1">
                {[...Array(t.stars)].map((_, i) => (
                  <svg key={i} width="20" height="20" fill="#f59e42">
                    <polygon points="10,2 13,8 20,8 14.5,12.5 16,19 10,15.5 4,19 5.5,12.5 0,8 7,8" />
                  </svg>
                ))}
              </div>
              <span className="inline-block bg-gray-100 text-slate-700 px-3 py-1 rounded-lg">{t.type}</span>
            </div>
            {/* Quote Icon */}
            <span className="bg-slate-800 text-white rounded-xl p-3 inline-block w-fit mb-4">
              <svg width="28" height="28" fill="none" stroke="#fff" strokeWidth="2">
                <rect x="10" y="10" width="12" height="12" rx="3" />
                <path d="M12 18h8M12 14h8" />
              </svg>
            </span>
            {/* Quote */}
            <p className="italic text-lg text-slate-700">"{t.quote}"</p>
            {/* Attribution */}
            <div className="mt-6">
              <div className="text-xl font-bold text-slate-900">{t.name}</div>
              <div className="text-base text-slate-600">{t.role}</div>
              <div className="text-base text-slate-600">{t.company}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
