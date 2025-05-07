import Head from "next/head";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog";

export const dynamic = "force-static";
export const dynamicParams = false;

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = params;

  const article = blogPosts.find((post) => post.slug === slug);

  if (!article) return notFound();

  return (
    <>
      <Head>
        <title>{article.title} | CleanCodeLab</title>
        <meta name="description" content={article.excerpt} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:image" content={article.image} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.cleancodelab.dev/blog/${article.slug}`} />
        <meta name="keywords" content={article.keywords?.join(", ")} />
      </Head>

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
    </>
  );
}