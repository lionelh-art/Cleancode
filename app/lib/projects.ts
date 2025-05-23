export type Project = {
    slug: string;
    title: string;
    image: string;
    description: string;
  };
  
  export const projects: Project[] = [
    {
      slug: "Noé immobilier",
      title: "Noé immobilier",
      image: "/assets/images/nono.webp",
      description: "Un site vitrine pour Noé immobilier. Sobre, structuré et pensé pour convertir.",
    },
    {
      slug: "CleanCodeLab",
      title: "CleanCodeLab",
      image: "/assets/images/lio.webp",
      description: "Un portfolio moderne et personnel pour présenter mes projets de manière professionnelle.",
    },
  ];