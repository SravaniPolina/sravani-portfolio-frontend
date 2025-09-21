// src/components/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-2xl font-semibold">Get in touch</h2>
        <p className="mt-3 text-gray-600">Interested in working together? Email me at <strong>sravani@sravanipolina.in</strong>.</p>
        <div className="mt-6">
          <a href="mailto:sravani@sravanipolina.in" className="rounded-md bg-indigo-600 text-white px-5 py-3">
            Email me
          </a>
        </div>
      </div>
    </section>
  );
}
