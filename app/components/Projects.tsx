"use client";

import Image from "next/image";

const projects = [
  {
    title: "Parking Passy",
    description: "Un site vitrine clair, moderne et responsive pour un parking parisien.",
    image: "/assets/images/project-parking.jpg",
  },
  {
    title: "CleanCodeLab",
    description: "Un site vitrine pour moi-même. Sobre, structuré et pensé pour convertir.",
    image: "/assets/images/project-cleancodelab.jpg",
  },
  {
    title: "Noé Immo",
    description: "Un site vitrine pour une agence immobilière. Moderne, clair et orienté conversion.",
    image: "/assets/images/project-noeimmo.jpg",
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Quelques projets</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-zinc-50 border border-zinc-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <Image
                src={project.image}
                alt={`Image de ${project.title}`}
                width={700}
                height={400}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">{project.title}</h3>
                <p className="text-zinc-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
