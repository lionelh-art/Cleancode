"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full min-h-screen bg-[#eef5f0] flex items-center">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-16">

        {/* Texte animé */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-800 leading-tight">
            Développeur Web Freelance <br />
            <span className="text-blue-600 underline underline-offset-4 decoration-4">
              sur-mesure & efficace.
            </span>
          </h1>

          <p className="mt-6 text-lg text-zinc-600 max-w-xl mx-auto md:mx-0">
            J’aide les PME et les indépendants à créer des sites web performants,
            clairs et alignés avec leurs objectifs business. Design épuré, code
            propre, résultats concrets.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-start justify-center">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-lg shadow transition"
              >
                Contactez-moi
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="/projects"
                className="inline-block text-blue-600 hover:text-blue-700 text-sm font-semibold px-6 py-3 rounded-lg border border-blue-600 hover:border-blue-700 transition"
              >
                Voir mes projets
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <Image
            src="/assets/images/developer-activity.svg"
            alt="Mockup site"
            width={600}
            height={400}
            className="rounded-xl shadow-lg border"
            priority
          />
        </motion.div>

      </div>
    </section>
  );
}
