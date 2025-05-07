export type Article = {
  title: string;
  content: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
  keywords?: string[];
};

export const blogPosts: Article[] = [
  {
    slug: "lancement-site-web",
    title: "Comment réussir le lancement de son site web ?",
    excerpt: "Les étapes clés pour un site web efficace et prêt à performer dès le lancement.",
    content: `Lancer un site web ne se fait pas au hasard. Entre le design, l’UX, le SEO, et la technique, il faut une vraie méthode.

1. Clarifiez vos objectifs.
2. Faites un wireframe.
3. Collaborez avec un pro (👋).
4. Testez. Puis testez encore.

Un site réussi, c’est un site pensé pour ses utilisateurs.`,
    date: "2024-04-12",
    image: "/assets/images/success.svg",
    keywords: ["site web", "lancement", "freelance", "conseils", "SEO"],
  },
  {
    slug: "pourquoi-un-freelance",
    title: "Pourquoi travailler avec un freelance plutôt qu’une agence ?",
    excerpt: "Plus humain, plus flexible, souvent plus impliqué : découvrez les avantages d’un freelance.",
    content: `Spoiler : ce n’est pas qu’une histoire de prix, même si… ça joue.

Travailler avec un freelance, c’est miser sur l’efficacité et la proximité. Pas de middle-man, pas de réunion “qui aurait pu être un email”.

Un freelance, c’est un seul interlocuteur, une relation humaine, plus de flexibilité, et souvent plus d’engagement personnel.

Et en bonus, on répond aux mails plus vite. 😉`,
    date: "2024-03-29",
    image: "/assets/images/freelance.svg",
    keywords: ["freelance", "agence", "relation client", "flexibilité", "proximité"],
  },
  {
    slug: "choisir-developpeur-freelance",
    title: "Comment choisir un développeur freelance ?",
    excerpt: "Les critères essentiels pour bien choisir son partenaire technique.",
    content: `Ce n’est pas Tinder, mais presque. Choisir un freelance, c’est choisir quelqu’un avec qui vous allez bosser de près. Alors autant bien matcher.

Quelques questions utiles :
- Ses projets sont-ils proches de ce que vous cherchez à faire ?
- Est-ce qu’il comprend vos enjeux business (et pas seulement le code) ?
- Propose-t-il une vraie méthodologie ? Des délais clairs ?
- Ses anciens clients sont-ils vivants, satisfaits, et prêts à témoigner ?

Un bon freelance, ce n’est pas juste un technicien. C’est un partenaire de projet.`,
    date: "2024-03-15",
    image: "/assets/images/choixFree.svg",
    keywords: ["développeur freelance", "partenaire tech", "choisir freelance", "web", "projets"],
  },
];