import "@/globals.css";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import Header from "@/components/Header";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: {
    default: "CleanCodeLab",
    template: "%s | CleanCodeLab",
  },
  description:
    "Développeur web freelance spécialisé dans la création de sites rapides, modernes et optimisés SEO.",
  icons: {
    icon: "/favicon.ico", // classique
    shortcut: "/favicon-96x96.png", // icône raccourci (optionnel mais why not)
    apple: "/apple-touch-icon.png", // pour iOS
    other: [
      {
        rel: "icon",
        url: "/web-app-manifest-192x192.png",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/web-app-manifest-512x512.png",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={sora.variable}>
      <body className="bg-[var(--background)] text-[var(--foreground)] font-sans antialiased">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}