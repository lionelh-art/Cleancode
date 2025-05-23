import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "@/lib/projects";

export const dynamicParams = false;

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({ params }: Props) {
  const { slug } = params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <main className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold text-zinc-900 mb-8">{project.title}</h1>
      <Image
        src={project.image}
        alt={`Image de ${project.title}`}
        width={1200}
        height={600}
        className="rounded-xl w-full h-auto object-cover mb-8"
      />
      <p className="text-zinc-700 text-lg leading-relaxed">
        {project.description}
      </p>
    </main>
  );
}