"use client";

import Image from "next/image";
import Link from "next/link";

type Project = {
  slug: string;
  title: string;
  image: string;
};

export default function ProjectPreview({ projects }: { projects: Project[] }) {
  return (
    <section className="py-20 bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-zinc-900">
          Mes projets récents
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group"
            >
              <div className="overflow-hidden rounded-xl shadow hover:shadow-md transition bg-white">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-60 group-hover:scale-105 transition"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-zinc-800">
                    {project.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}