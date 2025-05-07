import Link from "next/link";

export default function ContactSuccessPage() {
  return (
    <main className="max-w-3xl mx-auto py-32 px-6 text-center">
      <h1 className="text-4xl font-bold text-zinc-900 mb-6">
        Merci pour votre message !
      </h1>
      <p className="text-zinc-600 mb-10">
        Je reviendrai vers vous rapidement.  
        En attendant, vous pouvez consulter mes projets ou en apprendre plus sur mon travail.
      </p>

      <div className="flex justify-center gap-4">
        <Link
          href="/#projects"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
        >
          Voir mes projets
        </Link>
        <Link
          href="/"
          className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg shadow transition"
        >
          Retour à l'accueil
        </Link>
      </div>
    </main>
  );
}