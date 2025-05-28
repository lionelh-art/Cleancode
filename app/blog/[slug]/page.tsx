import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog";
import type { Metadata } from "next";
import { PageProps } from "types/PageProps";

// ✅ Active le SSG
export const dynamic = "force-static";
export const dynamicParams = false;

// ✅ Génère les routes statiques à build-time
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// ✅ Génère les balises <head> dynamiquement
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const article = blogPosts.find((post) => post.slug === slug);

  if (!article) {
    return {
      title: "Article introuvable | CleanCodeLab",
    };
  }

  return {
    title: `${article.title} | CleanCodeLab`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      url: `https://www.cleancodelab.dev/blog/${article.slug}`,
      images: [article.image],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
    keywords: article.keywords,
  };
}
// ✅ Affichage de l’article
export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = blogPosts.find((post) => post.slug === slug);

  if (!article) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <article className="prose prose-lg prose-zinc dark:prose-invert">
        <h1 className="text-4xl font-bold text-zinc-900 mb-4">
          {article.title}
        </h1>

        <p className="text-zinc-500 mb-2">
          {new Date(article.date).toLocaleDateString("fr-FR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>

        <img
          src={article.image}
          alt={`Image pour l’article "${article.title}"`}
          className="w-full rounded-xl mb-6"
        />

        <div className="whitespace-pre-line leading-relaxed text-zinc-700">
          {article.content}
        </div>
      </article>
    </main>
  );
}
