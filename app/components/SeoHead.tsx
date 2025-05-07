// components/SeoHead.tsx
import Head from "next/head";

type SeoHeadProps = {
  title: string;
  description: string;
  slug: string;
  keywords?: string[];
  image?: string;
};

export default function SeoHead({
  title,
  description,
  slug,
  keywords = [],
  image,
}: SeoHeadProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com";

  return (
    <Head>
      <title>{title} | CleanCodeLab</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={`${baseUrl}/blog/${slug}`} />
      {image && <meta property="og:image" content={image} />}
    </Head>
  );
}