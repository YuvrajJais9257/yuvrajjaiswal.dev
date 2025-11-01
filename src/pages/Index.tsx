
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
      {/* Disclaimer Banner */}
      <div className="bg-orange-50 border-l-4 border-orange-400 p-4 text-center">
        <div className="max-w-6xl mx-auto">
          <p className="text-orange-800 text-sm font-medium">
            ⚠️ DEMO PORTFOLIO: All screenshots are from UAT/demo environments for educational and portfolio purposes only. 
            No production data or proprietary code is displayed. Projects built as part of professional work at Erasmith Technologies.
          </p>
        </div>
      </div>
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
