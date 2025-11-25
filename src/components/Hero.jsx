import React from "react";

export default function Hero() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-white text-center">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-indigo-800">Sravani Polina</h1>
        <p className="text-lg text-slate-700 max-w-xl mx-auto mb-8">
          Strategic Operations Professional — Building great teams and innovative solutions in Renewable Energy & beyond.
        </p>
        <a
          href="#contact"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full text-base font-semibold shadow"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
