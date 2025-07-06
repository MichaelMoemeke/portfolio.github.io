import { About } from "./components/About";
import { AnimatedSection } from "./components/AnimatedSection";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import { useState } from "react";

function App() {
  const [heroDone, setHeroDone] = useState(false);

  return (
    <div>
      {heroDone && (
        <header
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 10,
            background: "var(--oracle-bg)",
            padding: "1rem",
            animation: "fade-in-down 0.8s",
          }}
        >
          <Header />
        </header>
      )}

      <div
        id="home"
        style={{
          height: "100vh",
          display: "grid",
          placeItems: "center",
          padding: "1rem",
        }}
      >
        <main
          style={{
            animation: "fade-in 1s",
          }}
        >
          <Hero onComplete={() => setHeroDone(true)} />
        </main>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "1rem",
        }}
      >
        <AnimatedSection id="about">
          <About />
        </AnimatedSection>
        <AnimatedSection id="projects">
          <Projects />
        </AnimatedSection>
        <AnimatedSection id="skills">
          <Skills />
        </AnimatedSection>
        <AnimatedSection id="experience">
          <Experience />
        </AnimatedSection>
        <AnimatedSection id="contact">
          <Contact />
        </AnimatedSection>
      </div>

      <Footer />
    </div>
  );
}

export default App;
