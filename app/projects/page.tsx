import ProjectList from "@/components/ProjectList";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <main className="bg-white py-20 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-zinc-900 mb-12">
        Mes projets
      </h1>

      <ProjectList projects={projects} />
    </main>
  );
}