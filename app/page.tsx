import Hero from "@/components/portfolio/Hero";
import { lazy, Suspense } from "react";

// Dynamic imports for better code splitting
const About = lazy(() => import("@/components/portfolio/About"));
const Skills = lazy(() => import("@/components/portfolio/Skills"));
const Projects = lazy(() => import("@/components/portfolio/Projects"));
const Contact = lazy(() => import("@/components/portfolio/Contact"));
const Footer = lazy(() => import("@/components/portfolio/Footer"));

// Loading component for better UX
const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black dark:border-white"></div>
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div id="home">
        <Hero />
      </div>
      <div className="pt-16">
        <section id="about">
          <Suspense fallback={<SectionLoader />}>
            <About />
          </Suspense>
        </section>
        <section id="skills">
          <Suspense fallback={<SectionLoader />}>
            <Skills />
          </Suspense>
        </section>
        <section id="project">
          <Suspense fallback={<SectionLoader />}>
            <Projects />
          </Suspense>
        </section>
        <section id="contact">
          <Suspense fallback={<SectionLoader />}>
            <Contact />
          </Suspense>
        </section>
      </div>
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </main>
  );
}
