"use client";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        {/* Formulaire */}
        <div className="bg-zinc-50 p-8 rounded-xl shadow-md w-full">
          <h2 className="text-2xl font-semibold mb-6 text-zinc-900">Envoyer un message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-700">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition"
            >
              Envoyer
            </button>
          </form>
        </div>

        {/* Infos de contact */}
        <div>
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">Me contacter</h2>
          <p className="text-zinc-600 leading-relaxed mb-8">
            Un projet en tête ? Parlons-en. Je suis disponible pour discuter de vos besoins et voir comment je peux vous aider.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-blue-600 text-xl" />
              <span className="text-zinc-700">60 RUE FRANCOIS IER 75008 PARIS</span>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-blue-600 text-xl" />
              <a href="tel:+33673128789" className="text-zinc-700 hover:underline">
                +33 6 73 12 87 89
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-600 text-xl" />
              <a href="mailto:contact@cleancodelab.dev" className="text-zinc-700 hover:underline">
                contact@cleancodelab.dev
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-16 px-6 max-w-6xl mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9727657485416!2d2.3012551156745695!3d48.86893847928882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdf1c346ed3%3A0x6d04e40e5f31a0b!2s60%20Rue%20Fran%C3%A7ois%201er%2C%2075008%20Paris!5e0!3m2!1sen!2sfr!4v1713541305734!5m2!1sen!2sfr"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full rounded-xl shadow-lg"
        ></iframe>
      </div>
    </section>
  );
}