"use client";

import SeoHead from "@/components/SeoHead";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import { projects } from "@/lib/projects"; 
import ProjectPreview from "@/components/ProjectPreview";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <SeoHead
        title="Développeur Web Freelance | CleanCodeLab"
        description="Développeur web freelance basé à Paris, je conçois des sites performants, élégants et optimisés SEO pour les indépendants et les PME."
        slug=""
        keywords={[
          "freelance web paris",
          "développeur react",
          "site vitrine",
          "seo",
          "tailwind next.js",
        ]}
      />

      <Hero />

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="projects">
        <ProjectPreview projects={projects} />
      </section>

      <section id="blog">
        <Blog />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}