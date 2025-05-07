"use client";

import Image from "next/image";

export default function About() {
  return (
    <section className="bg-[#f9fafb] py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Photo du développeur */}
        <div className="flex justify-center">
        <Image
          src="/assets/images/lionelh.webp"
          alt="Photo du développeur"
          width={300}
          height={300}
          className="rounded-full shadow-lg w-[300px] h-[300px] object-cover"
        />
        </div>

        {/* Texte + illustration */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-zinc-900">À propos de moi</h2>
          <p className="text-zinc-600 leading-relaxed">
            Je suis un développeur web freelance basé à Paris. Mon objectif ? Concevoir des sites web et des applications propres, rapides
            et pensés pour vos utilisateurs. Je privilégie une communication claire, un design sobre, et surtout un code
            bien structuré.
          </p>
          <p className="text-zinc-600 leading-relaxed">
            J’aime travailler avec des indépendants, des PME ou des porteurs de projet qui veulent un site qui les
            représente vraiment. Pas juste un template. Si tu veux bosser avec quelqu’un de fiable, humain et un peu trop
            passionné par les détails... tu es au bon endroit.
          </p>

          {/* Illustration */}
          <div className="mt-6">
            <Image
              src="/assets/images/programming.svg"
              alt="Illustration développeur"
              width={400}
              height={300}
              className="mx-auto md:mx-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
