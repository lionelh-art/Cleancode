"use client";

import Image from "next/image";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaWordpress, FaGitAlt } from "react-icons/fa";

export default function Skills() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
        <div className="w-full">
          <Image
            src="/assets/images/skills.svg"
            alt="Illustration informatique"
            width={500}
            height={500}
            className="rounded-xl shadow-md"
          />
        </div>

        <div className="w-full">
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">
            Mes compétences techniques
          </h2>
          <p className="text-zinc-600 leading-relaxed mb-8">
            Une base solide pour créer des sites modernes, rapides et maintenables. Je continue à apprendre chaque jour.
          </p>

          <ul className="space-y-5">
            <li>
              <div className="flex items-center gap-2 mb-1">
                <FaHtml5 className="text-orange-500 text-xl" />
                <span>HTML / CSS</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-500 rounded-full w-[90%]" />
              </div>
            </li>

            <li>
              <div className="flex items-center gap-2 mb-1">
                <FaJsSquare className="text-yellow-400 text-xl" />
                <span>JavaScript / TypeScript</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-500 rounded-full w-[75%]" />
              </div>
            </li>

            <li>
              <div className="flex items-center gap-2 mb-1">
                <FaReact className="text-cyan-500 text-xl" />
                <span>React / Next.js</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-500 rounded-full w-[70%]" />
              </div>
            </li>

            <li>
              <div className="flex items-center gap-2 mb-1">
                <FaCss3Alt className="text-blue-600 text-xl" />
                <span>Tailwind CSS</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-500 rounded-full w-[85%]" />
              </div>
            </li>

            <li>
              <div className="flex items-center gap-2 mb-1">
                <FaNodeJs className="text-green-600 text-xl" />
                <span>Node.js (bases)</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-500 rounded-full w-[60%]" />
              </div>
            </li>

            <li>
              <div className="flex items-center gap-2 mb-1">
                <FaWordpress className="text-blue-700 text-xl" />
                <span>WordPress</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-500 rounded-full w-[70%]" />
              </div>
            </li>

            <li>
              <div className="flex items-center gap-2 mb-1">
                <FaGitAlt className="text-red-500 text-xl" />
                <span>Git / GitHub</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-500 rounded-full w-[80%]" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
