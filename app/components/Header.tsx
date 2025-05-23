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
  { name: "Projets", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
        <Link href="/" scroll={false} className="flex items-center gap-3">
          <Image
            src="/assets/images/logo.webp"
            alt="Logo CleanCodeLab"
            width={36}
            height={36}
            priority
          />
          <span className="text-xl font-bold text-zinc-900">CleanCodeLab</span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden lg:flex items-center gap-6 text-sm font-medium"
          aria-label="Menu principal"
        >
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

        {/* CTA desktop */}
        <div className="hidden lg:flex">
          {isHome ? (
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-semibold shadow transition whitespace-nowrap"
            >
              Demande de devis
            </a>
          ) : (
            <Link
              href="/#contact"
              scroll={false}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-semibold shadow transition whitespace-nowrap"
            >
              Demande de devis
            </Link>
          )}
        </div>

        {/* Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-zinc-900 focus:outline-none"
            aria-label="Ouvrir le menu mobile"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav
          className="lg:hidden bg-white px-6 py-4 space-y-4 shadow-md"
          aria-label="Menu mobile"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              scroll={false}
              className="block text-zinc-700 font-medium hover:text-blue-600 transition"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/#contact"
            scroll={false}
            onClick={() => setIsOpen(false)}
            className="block text-center bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Demande de devis
          </Link>
        </nav>
      )}
    </header>
  );
}