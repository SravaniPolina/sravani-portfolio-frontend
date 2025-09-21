// src/components/Hero.jsx
import React from "react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center" id="home">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi — I’m <span className="text-indigo-600">Sravani Polina</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            Strategy & Execution leader — I turn strategy into measurable outcomes for growth, operations and digital transformation.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="inline-block rounded-md bg-indigo-600 text-white px-5 py-3 hover:bg-indigo-500"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="inline-block rounded-md border border-gray-300 px-5 py-3 hover:bg-gray-50"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
