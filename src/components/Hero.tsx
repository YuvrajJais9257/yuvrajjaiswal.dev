import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <Avatar className="w-40 h-40 border-4 border-gradient-to-r from-blue-400 to-purple-400 shadow-2xl">
              <AvatarImage
                src="/lovable-uploads/07636e20-74a7-44ce-9e27-bc436ae2c254.png"
                alt="Yuvraj Jaiswal"
                className="object-cover"
              />
              <AvatarFallback className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                YJ
              </AvatarFallback>
            </Avatar>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Yuvraj Jaiswal
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Full Stack Developer with 1.3+ years of experience building scalable
            web applications and microservices using modern technologies like
            React, Flask, and Node.js.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm">
              React.js
            </span>
            <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm">
              Flask & FastAPI
            </span>
            <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm">
              Node.js
            </span>
            <span className="px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">
              Docker
            </span>
            <span className="px-4 py-2 bg-red-500/20 text-red-300 rounded-full text-sm">
              PostgreSQL
            </span>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/YuvrajJais9257"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/yuvraj-jaiswal-65ab5a217/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:yuvraj8257@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Mail size={28} />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3"
            >
              <a href="#projects">View My Work</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-slate-900 text-white border-white/20 hover:bg-white/10 px-8 py-3"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400" size={24} />
        </div>
      </div>
    </section>
  );
};
