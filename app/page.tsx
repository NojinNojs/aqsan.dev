import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div id="home">
        <Hero />
      </div>
      <div className="pt-16">
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="project">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
      <Footer />
    </main>
  );
}
