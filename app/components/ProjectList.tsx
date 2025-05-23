"use client";

import Image from "next/image";

type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project.slug}
          className="bg-white border border-zinc-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
        >
          <Image
            src={project.image}
            alt={`Image de ${project.title}`}
            width={500}
            height={300}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-zinc-900 mb-1">
              {project.title}
            </h3>
            <p className="text-sm text-zinc-600">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}