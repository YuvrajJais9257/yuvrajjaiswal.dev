import React from "react";
import { Github, LinkedinIcon, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center px-4 pt-20 pb-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Top Badge */}
        <div className="mb-8">
          <span className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-medium">
            🚀 Open to Opportunities
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Hi, I'm Yuvraj Jaiswal
        </h1>

        {/* Subheadline */}
        <h2 className="text-2xl md:text-3xl text-gray-700 mb-8 font-semibold">
          Full Stack Developer | React.js + FastAPI | AI Integration Specialist
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
          Building production-grade enterprise applications with AI integration. 1.8 years of experience 
          serving 1000+ users and deploying 100+ applications. Specialized in React.js, FastAPI, and 
          performance optimization.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            onClick={() => scrollToSection('#projects')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg"
          >
            <a href="/Yuvraj_Jaiswal_7838379576.pdf" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </Button>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/YuvrajJais9257"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={28} />
          </a>
          <a
            href="https://linkedin.com/in/yuvraj-jaiswal-65ab5a217"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={28} />
          </a>
          <a
            href="mailto:yuvraj8257@gmail.com"
            className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={28} />
          </a>
          <a
            href="tel:+917838379576"
            className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
            aria-label="Phone"
          >
            <Phone size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};
