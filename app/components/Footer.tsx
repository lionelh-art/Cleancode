"use client";

import Link from "next/link";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-zinc-100 text-zinc-700 py-12 border-t mt-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        {/* Bloc 1 : Description rapide */}
        <div>
          <h4 className="text-lg font-semibold mb-2">CleanCodeLab</h4>
          <p className="text-sm leading-relaxed">
            Développeur web freelance basé en France. Je conçois des sites performants,
            maintenables et pensés pour vos utilisateurs.
          </p>
          <div className="mt-4">
            <p className="text-xs text-zinc-500">
              SIREN : 943 482 075<br />
              Code APE : 62.01Z – Programmation informatique
            </p>
          </div>
        </div>

        {/* Bloc 2 : Navigation secondaire */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/">Accueil</Link>
            </li>
            <li>
              <Link href="/projects">Projets</Link>
            </li>
            <li>
              <Link href="/pricing">Tarifs</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Bloc 3 : Réseaux sociaux */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Suivez-moi</h4>
          <div className="flex space-x-4 text-zinc-600 text-xl">
            <a
              href="https://www.instagram.com/clean.code_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/lionelh-art"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/lionelhelou/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t pt-6 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} CleanCodeLab. Tous droits réservés.
      </div>
    </footer>
  );
}