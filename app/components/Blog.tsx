"use client";

import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export default function BlogSection() {
  const articleEntries = blogPosts.slice(0, 3); // prend les 3 premiers articles

  return (
    <section className="py-20 bg-[#f9fafb]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-zinc-900 mb-12">
          Articles récents
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {articleEntries.map((article) => (
            <div
              key={article.slug}
              className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-zinc-800 mb-2">
                {article.title}
              </h3>
              <p className="text-zinc-600 text-sm mb-4">
                {article.content.slice(0, 100)}...
              </p>
              <Link
                href={`/blog/${article.slug}`}
                className="text-blue-600 font-medium text-sm hover:underline"
              >
                Lire cet article
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}