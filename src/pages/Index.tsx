
import React from "react";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { CurrentlyExploring } from "@/components/CurrentlyExploring";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Stats />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <CurrentlyExploring />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
