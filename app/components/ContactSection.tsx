"use client";

import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici tu pourras intégrer Formspree, Resend, ou autre API plus tard
    alert("Message envoyé. (Ou presque)");
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-zinc-900 mb-4">
          Une idée ? Un projet ?
        </h2>
        <p className="text-center text-zinc-600 mb-12">
          Discutons-en. Je réponds rapidement, avec des vraies phrases (pas générées par une IA).
        </p>

        <form onSubmit={handleSubmit} className="grid gap-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Ton nom"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-zinc-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Ton email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-zinc-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <textarea
            name="message"
            rows={5}
            placeholder="Ton message"
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-zinc-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-lg shadow transition w-fit"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}