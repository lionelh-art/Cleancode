"use client";

import Link from "next/link";

const offers = [
  {
    title: "Site Vitrine",
    price: "À partir de 500€",
    description:
      "Un site simple, responsive et bien structuré pour présenter ton activité de façon pro.",
  },
  {
    title: "Site sur-mesure",
    price: "À partir de 1300€",
    description:
      "Un site adapté à tes besoins spécifiques. Du sur-mesure propre avec des fonctionnalités avancées.",
  },
  {
    title: "E-commerce",
    price: "À partir de 2000€",
    description:
      "Boutique en ligne moderne, sécurisée, avec gestion produits + paiement. Pensée pour convertir.",
  },
  {
    title: "Application Web/Mobile",
    price: "Sur devis",
    description:
      "Projet spécifique ou besoin technique particulier ? On discute ensemble.",
  },
  {
    title: "Maintenance & suivi",
    price: "À partir de 29€/mois",
    description:
      "Suivi, corrections, mises à jour. Je garde ton site vivant et fonctionnel.",
  },
  {
    title: "Audit & SEO",
    price: "À partir de 150€",
    description:
      "Analyse technique et recommandations concrètes pour améliorer ta visibilité.",
  },
];

export default function PricingSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <h2 className="text-4xl font-bold text-center mb-12">Mes tarifs</h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-transform transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-zinc-900 mb-1">{offer.title}</h3>
              <p className="text-blue-600 font-semibold mb-3">{offer.price}</p>
              <p className="text-zinc-600 text-sm mb-6">{offer.description}</p>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow transition"
              >
                Demander un devis
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}