"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

const links = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Projets", href: "/#projects" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 backdrop-blur transition-all duration-300",
        scrolled ? "bg-white/90 shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" scroll={false} className="flex items-center space-x-3">
          <Image
            src="/assets/images/logo.webp"
            alt="CleanCodeLab logo"
            width={40}
            height={40}
            priority
          />
          <span className="text-2xl font-bold text-zinc-900">CleanCodeLab</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-base font-medium">
          {links.map((link) =>
            isHome ? (
              <a
                key={link.href}
                href={link.href}
                className="relative text-zinc-600 hover:text-zinc-900 transition-colors after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-full"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                scroll={false}
                className="relative text-zinc-600 hover:text-zinc-900 transition-colors after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-full"
              >
                {link.name}
              </Link>
            )
          )}
        </nav>

        {/* CTA button */}
        {isHome ? (
          <a
            href="#contact"
            className="hidden md:inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold shadow transition"
          >
            Demande de devis
          </a>
        ) : (
          <Link
            href="/#contact"
            scroll={false}
            className="hidden md:inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold shadow transition"
          >
            Demande de devis
          </Link>
        )}
      </div>
    </header>
  );
}