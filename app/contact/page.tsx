"use client";

import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import Image from "next/image";
import SeoHead from "@/components/SeoHead";

export default function ContactPage() {
  return (
    <>
      <SeoHead
        title="Contact | CleanCodeLab"
        description="Discutons de votre projet web ! Contactez CleanCodeLab pour un site performant, sur-mesure et adapté à vos besoins."
        slug="contact"
        keywords={[
          "contact développeur web",
          "freelance paris",
          "création site internet",
          "site performant",
        ]}
      />

      <main className="max-w-6xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold text-center text-zinc-900 mb-12">
          Contactez-moi
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Formulaire */}
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium text-zinc-700">
                Nom
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-zinc-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-medium text-zinc-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-zinc-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-medium text-zinc-700">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full border border-zinc-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition shadow"
            >
              Envoyer
            </button>
          </form>

          {/* Infos de contact */}
          <div className="space-y-8 text-zinc-700 text-base">

            {/* Illustration */}
            <Image
              src="/assets/images/contact.svg"
              alt="Illustration contact"
              width={400}
              height={400}
              className="w-full h-auto mb-8"
            />

            {/* Coordonnées */}
            <div className="space-y-5">
              <div className="flex items-center space-x-3">
                <FiMail className="text-blue-600" size={20} />
                <a
                  href="mailto:contact@cleancodelab.dev"
                  className="hover:text-blue-600 transition-colors"
                >
                  contact@cleancodelab.dev
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <FiPhone className="text-blue-600" size={20} />
                <a
                  href="tel:+33673128789"
                  className="hover:text-blue-600 transition-colors"
                >
                  +33 6 73 12 87 89
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <FiMapPin className="text-blue-600" size={20} />
                <span>
                  60 Rue François Ier, 75008 Paris
                </span>
              </div>
            </div>

          </div>

        </div>
      </main>
    </>
  );
}