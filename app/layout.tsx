import "@/globals.css";
import type { Metadata } from "next";
import { Sora } from "next/font/google";

import Header from "@/components/Header";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "CleanCodeLab",
  description: "Développeur web freelance – sur-mesure & efficace.",
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