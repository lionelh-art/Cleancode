"use client";

import Image from "next/image";
import {
  FaLaptopCode,
  FaShoppingCart,
  FaCogs,
  FaPaintBrush,
  FaRocket,
  FaWrench,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode size={28} className="text-blue-600" />,
    title: "Création de site vitrine",
    description:
      "Site rapide, responsive et optimisé pour le référencement naturel.",
  },
  {
    icon: <FaShoppingCart size={28} className="text-blue-600" />,
    title: "Site e-commerce",
    description:
      "Vendez vos produits en ligne avec une boutique sur-mesure et simple à gérer.",
  },
  {
    icon: <FaCogs size={28} className="text-blue-600" />,
    title: "Développement sur-mesure",
    description:
      "Fonctionnalités personnalisées pour répondre aux besoins spécifiques de votre activité.",
  },
  {
    icon: <FaPaintBrush size={28} className="text-blue-600" />,
    title: "Refonte & UI/UX",
    description:
      "Amélioration de l'interface utilisateur et de l'expérience pour vos visiteurs.",
  },
  {
    icon: <FaRocket size={28} className="text-blue-600" />,
    title: "Optimisation de performance",
    description:
      "Audit complet et mise en place des meilleures pratiques de performance web.",
  },
  {
    icon: <FaWrench size={28} className="text-blue-600" />,
    title: "Maintenance & support",
    description:
      "Suivi technique, mises à jour et corrections pour un site toujours au top.",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <div>
          <h2 className="text-3xl font-bold text-zinc-900 mb-4 text-center md:text-left">
            Mes services
          </h2>
          <p className="text-center md:text-left text-zinc-600 mb-8">
            Des prestations pensées pour les PME et indépendants.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border rounded-xl p-5 shadow-sm transition duration-300 hover:shadow-md hover:scale-[1.03]"
              >
                <div className="mb-3">{service.icon}</div>
                <h3 className="font-semibold text-zinc-900 text-base mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Illustration */}
        <div className="hidden md:block">
          <Image
            src="/assets/images/services.svg"
            alt="Illustration des services"
            width={500}
            height={400}
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}