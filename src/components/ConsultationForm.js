import React, { useState } from "react";

export default function ConsultationForm() {
  // Optional: Form field states (add logic if you want to process or validate)
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    title: "",
    type: "",
    objectives: ""
  });

  // Optional: Simple change handler
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Optional: Prevent page reload on submit
  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('https://api.sravanipolina.in/api/enquiries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    if (response.ok) {
      alert("Your request has been submitted!");
      setForm({
        name: "",
        email: "",
        company: "",
        title: "",
        type: "",
        objectives: ""
      }); // Reset form
    } else {
      alert("Sorry, there was a problem. Please try again.");
    }
  } catch (err) {
    alert("There was an error sending your request.");
  }
};

  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-4">Request Executive Consultation</h2>
      <p className="mb-8 text-slate-700">
        Please provide details about your strategic needs and organizational objectives.
      </p>
      <form className="bg-white rounded-xl shadow p-8" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="border rounded-lg px-4 py-3 mb-2 focus:outline-none focus:ring w-full"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Executive Email"
            className="border rounded-lg px-4 py-3 mb-2 focus:outline-none focus:ring w-full"
            required
          />
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Company/Organization"
            className="border rounded-lg px-4 py-3 mb-2 focus:outline-none focus:ring w-full"
          />
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Your Title/Position"
            className="border rounded-lg px-4 py-3 mb-2 focus:outline-none focus:ring w-full"
          />
        </div>
        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="border rounded-lg px-4 py-3 mb-4 w-full focus:outline-none focus:ring"
          required
        >
          <option value="">Type of Consultation</option>
          <option value="C-Suite Advisory">C-Suite Advisory</option>
          <option value="Interim Leadership">Interim Leadership</option>
          <option value="Transformation Consulting">Transformation Consulting</option>
          <option value="Board Advisory">Board Advisory</option>
        </select>
        <textarea
          name="objectives"
          value={form.objectives}
          onChange={handleChange}
          rows={4}
          placeholder="Describe your strategic objectives, organizational challenges, and expected outcomes..."
          className="border rounded-lg px-4 py-3 mb-4 w-full focus:outline-none focus:ring"
          required
        />
        <button
          type="submit"
          className="w-full bg-slate-800 text-white font-bold py-3 px-8 rounded-xl hover:bg-slate-900 transition"
        >
          Submit Executive Consultation Request &rarr;
        </button>
        <p className="text-xs text-slate-600 text-center mt-4">
          All communications are confidential and protected by executive privilege.
        </p>
      </form>
    </section>
  );
}
