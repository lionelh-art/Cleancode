"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full min-h-screen bg-[#FAF7F2] flex items-center py-10 sm:py-16">
      <div className="w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">

        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 leading-snug md:leading-tight">
            Des sites web <br />
            <span className="text-blue-600 underline underline-offset-4 decoration-4">
              rapides, élégants et sur-mesure.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-zinc-700 max-w-xl mx-auto md:mx-0">
            Je suis développeur web freelance, spécialisé dans la création de
            sites performants et épurés pour les PME, startups et indépendants
            exigeants. Code propre, design soigné, résultats concrets.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-center md:justify-start">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="#contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-lg shadow transition"
              >
                Discutons de votre projet
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="#projects"
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
          className="w-full md:w-1/2 flex justify-center"
        >
          <Image
            src="/assets/images/developer-activity.svg"
            alt="Illustration développeur"
            width={500}
            height={400}
            className="max-w-[90%] sm:max-w-[70%] md:max-w-[100%] h-auto rounded-xl shadow-lg border"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}