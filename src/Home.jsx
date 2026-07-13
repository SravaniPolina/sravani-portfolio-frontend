import React from "react";
import { Link } from "react-router-dom";
import Hero from "./components/Hero";
import ClientStrip from "./components/ClientStrip";
import Credentials from "./components/Credentials";
import StatStrip from "./components/StatStrip";
import ExecutiveTestimonials from "./components/ExecutiveTestimonials";

function HomeCTA() {
  return (
    <section className="py-16" style={{ background: "var(--beige)" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div
          className="rounded-[36px] p-14 text-center"
          style={{ background: "white", border: "1px solid rgba(13,59,46,0.15)" }}
        >
          <p className="uppercase tracking-[3px] text-sm font-semibold" style={{ color: "var(--gold)" }}>
            Let's connect
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl mt-4 mb-6" style={{ color: "var(--green)" }}>
            Let's build something meaningful.
          </h2>
          <p className="max-w-2xl mx-auto text-lg mb-10" style={{ color: "#3A3A3A" }}>
            Whether you're scaling a business, raising capital or transforming
            operations, SP Growth Advisors can help.
          </p>
          <Link to="/contact" className="primary-btn" style={{ borderColor: "var(--green)", color: "var(--green)" }}>
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <StatStrip />
      <Credentials />
      <ExecutiveTestimonials />
      <HomeCTA />
    </>
  );
}
