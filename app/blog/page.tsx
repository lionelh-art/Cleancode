"use client";

import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";
import SeoHead from "@/components/SeoHead";

export default function BlogPage() {
  return (
    <>
      <SeoHead
        title="Blog | CleanCodeLab"
        description="Conseils, astuces et analyses pour optimiser votre site web et booster votre visibilité en ligne."
        slug="blog"
        keywords={["blog", "développement web", "SEO", "freelance", "code propre"]}
      />

      <main className="max-w-6xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold text-center text-zinc-900 mb-12">
          Le Blog
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.slug}
              className="border border-zinc-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition bg-white"
            >
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-zinc-800 mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-zinc-600 line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="text-blue-600 text-sm font-medium mt-4 inline-block">
                  Lire l’article →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}