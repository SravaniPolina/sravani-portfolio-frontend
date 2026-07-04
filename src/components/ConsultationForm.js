import React, { useState } from "react";

export default function ConsultationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    title: "",
    type: "",
    objectives: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: form.name,
      email: form.email,
      company: form.company,
      title: form.title,
      inquiry_type: form.type,
      message: form.objectives
    };

    try {
      const response = await fetch('https://api.sravanipolina.in/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      if (response.ok && result.success) {
        alert("Your request has been submitted!");
        setForm({ name: "", email: "", company: "", title: "", type: "", objectives: "" });
      } else {
        alert(result.message || "There was an error. Please try again.");
      }
    } catch (err) {
      alert("There was an error sending your request.");
    }
  };

  const inputStyle = {
    background: "white",
    border: "1px solid rgba(13,59,46,0.2)",
    color: "#3A3A3A"
  };

  return (
    <section id="consultation" className="py-16" style={{ background: "var(--beige)" }}>
      <div className="max-w-4xl mx-auto px-6">
        <p className="section-label" style={{ color: "var(--gold)" }}>Get in Touch</p>
        <h2 className="font-serif text-4xl lg:text-5xl mt-4 mb-4" style={{ color: "var(--green)" }}>
          Request an executive consultation.
        </h2>
        <p className="mb-10 text-lg" style={{ color: "#3A3A3A" }}>
          Share your strategic needs and organisational objectives, I'll respond directly.
        </p>

        <form
          className="rounded-3xl p-10"
          style={{ background: "white", border: "1px solid rgba(200,157,60,0.25)" }}
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text" name="name" value={form.name} onChange={handleChange}
              placeholder="Your Name"
              className="rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2"
              style={inputStyle} required
            />
            <input
              type="email" name="email" value={form.email} onChange={handleChange}
              placeholder="Email"
              className="rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2"
              style={inputStyle} required
            />
            <input
              type="text" name="company" value={form.company} onChange={handleChange}
              placeholder="Company/Organisation"
              className="rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2"
              style={inputStyle}
            />
            <input
              type="text" name="title" value={form.title} onChange={handleChange}
              placeholder="Your Title/Position"
              className="rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2"
              style={inputStyle}
            />
          </div>

          <select
            name="type" value={form.type} onChange={handleChange}
            className="rounded-lg px-4 py-3 mb-4 w-full focus:outline-none focus:ring-2"
            style={inputStyle} required
          >
            <option value="">Type of Consultation</option>
            <option value="advisory">Fractional CFO / Advisory</option>
            <option value="interim">Interim Leadership</option>
            <option value="transformation">Transformation Consulting</option>
            <option value="board">Board Advisory</option>
            <option value="consulting">Other (Consulting/Custom)</option>
          </select>

          <textarea
            name="objectives" value={form.objectives} onChange={handleChange}
            rows={4}
            placeholder="Describe your strategic objectives, organisational challenges, and expected outcomes..."
            className="rounded-lg px-4 py-3 mb-6 w-full focus:outline-none focus:ring-2"
            style={inputStyle} required
          />

          <button
            type="submit"
            className="w-full font-semibold py-3 px-8 rounded-xl transition hover:-translate-y-0.5"
            style={{ background: "var(--green)", color: "white", border: "1px solid rgba(212,166,58,0.4)" }}
          >
            Submit Consultation Request &rarr;
          </button>

          <p className="text-xs text-center mt-4" style={{ color: "var(--text-muted)" }}>
            All communications are confidential.
          </p>
        </form>
      </div>
    </section>
  );
}
